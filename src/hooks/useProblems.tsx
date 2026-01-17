import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { UnifiedProblem } from '@/types/problem';
import { problems as leetcodeProblems } from '@/data/leetcodeProblems';
import { hackerrankProblems } from '@/data/hackerrankProblems';
import { gfgProblems } from '@/data/gfgProblems';
import { codechefProblems } from '@/data/codechefProblems';
import { codeforcesProblems } from '@/data/codeforcesProblems';

type Platform = 'leetcode' | 'hackerrank' | 'gfg' | 'codechef' | 'codeforces';

// Static fallback data
const staticPlatformData: Record<Platform, UnifiedProblem[]> = {
  leetcode: leetcodeProblems.map(p => ({ ...p } as UnifiedProblem)),
  hackerrank: hackerrankProblems.map(p => ({ ...p } as UnifiedProblem)),
  gfg: gfgProblems.map(p => ({ ...p } as UnifiedProblem)),
  codechef: codechefProblems.map(p => ({ ...p } as UnifiedProblem)),
  codeforces: codeforcesProblems.map(p => ({ ...p } as UnifiedProblem)),
};

interface DbProblem {
  id: number;
  title: string;
  difficulty: string;
  topic: string;
  sub_topic: string;
  companies: string[];
  company_years: unknown;
  acceptance: number;
  frequency: number;
  is_premium: boolean;
  url: string;
  time_complexity: string;
  space_complexity: string;
  approach: string | null;
  platform: string;
  platform_id: string | null;
  rating: number | null;
}

const parseCompanyYears = (data: unknown): Record<string, number[]> | undefined => {
  if (!data || typeof data !== 'object') return undefined;
  return data as Record<string, number[]>;
};

const mapDbProblemToUnified = (p: DbProblem): UnifiedProblem => ({
  id: p.id,
  title: p.title,
  difficulty: p.difficulty as 'Easy' | 'Medium' | 'Hard',
  topic: p.topic,
  subTopic: p.sub_topic,
  companies: p.companies || [],
  companyYears: parseCompanyYears(p.company_years),
  acceptance: p.acceptance,
  frequency: p.frequency,
  isPremium: p.is_premium,
  url: p.url,
  timeComplexity: p.time_complexity,
  spaceComplexity: p.space_complexity,
  approach: p.approach || '',
  platform: p.platform as Platform,
  leetcodeId: p.platform === 'leetcode' ? parseInt(p.platform_id || '0') : undefined,
  hackerrankId: p.platform === 'hackerrank' ? p.platform_id || undefined : undefined,
  gfgId: p.platform === 'gfg' ? p.platform_id || undefined : undefined,
  codechefId: p.platform === 'codechef' ? p.platform_id || undefined : undefined,
  codeforcesId: p.platform === 'codeforces' ? p.platform_id || undefined : undefined,
  rating: p.rating || undefined,
});

export const useProblems = (platform: Platform) => {
  const [dbProblems, setDbProblems] = useState<UnifiedProblem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        setIsLoading(true);
        const { data, error: fetchError } = await supabase
          .from('problems')
          .select('*')
          .order('id', { ascending: true });

        if (fetchError) throw fetchError;

        if (data && data.length > 0) {
          setDbProblems(data.map(mapDbProblemToUnified));
        }
      } catch (err) {
        console.error('Error fetching problems:', err);
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProblems();

    // Set up real-time subscription
    const channel = supabase
      .channel('problems-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'problems'
        },
        () => {
          // Refetch on any change
          fetchProblems();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Combine database problems with static fallback
  const problems = useMemo(() => {
    const platformDbProblems = dbProblems.filter(p => p.platform === platform);
    const staticProblems = staticPlatformData[platform];
    
    // If we have DB problems for this platform, use them; otherwise fall back to static
    if (platformDbProblems.length > 0) {
      // Merge: DB problems take priority, then add static problems that don't exist in DB
      const dbIds = new Set(platformDbProblems.map(p => p.id));
      const uniqueStaticProblems = staticProblems.filter(p => !dbIds.has(p.id));
      return [...platformDbProblems, ...uniqueStaticProblems];
    }
    
    return staticProblems;
  }, [dbProblems, platform]);

  // Calculate platform counts
  const platformCounts = useMemo(() => {
    const dbCounts = {
      leetcode: dbProblems.filter(p => p.platform === 'leetcode').length,
      hackerrank: dbProblems.filter(p => p.platform === 'hackerrank').length,
      gfg: dbProblems.filter(p => p.platform === 'gfg').length,
      codechef: dbProblems.filter(p => p.platform === 'codechef').length,
      codeforces: dbProblems.filter(p => p.platform === 'codeforces').length,
    };

    // Use DB counts if available, otherwise static counts
    return {
      leetcode: dbCounts.leetcode > 0 ? dbCounts.leetcode : staticPlatformData.leetcode.length,
      hackerrank: dbCounts.hackerrank > 0 ? dbCounts.hackerrank : staticPlatformData.hackerrank.length,
      gfg: dbCounts.gfg > 0 ? dbCounts.gfg : staticPlatformData.gfg.length,
      codechef: dbCounts.codechef > 0 ? dbCounts.codechef : staticPlatformData.codechef.length,
      codeforces: dbCounts.codeforces > 0 ? dbCounts.codeforces : staticPlatformData.codeforces.length,
    };
  }, [dbProblems]);

  return {
    problems,
    platformCounts,
    isLoading,
    error,
  };
};
