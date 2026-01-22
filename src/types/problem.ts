// Unified problem type that works for all platforms
export interface UnifiedProblem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
  subTopic: string;
  companies: string[];
  companyYears?: Record<string, number[]>; // Maps company name to years they asked this question
  acceptance: number;
  frequency: number;
  isPremium: boolean;
  url: string;
  timeComplexity: string;
  spaceComplexity: string;
  approach: string;
  platform: 'all' | 'leetcode' | 'hackerrank' | 'gfg' | 'codechef' | 'codeforces';
  // Platform-specific IDs
  leetcodeId?: number;
  hackerrankId?: string;
  gfgId?: string;
  codechefId?: string;
  codeforcesId?: string;
  rating?: number; // For Codeforces
  created_at?: string; // For date-based filtering
}
