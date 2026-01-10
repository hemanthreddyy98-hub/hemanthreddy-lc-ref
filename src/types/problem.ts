// Unified problem type that works for all platforms
export interface UnifiedProblem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
  subTopic: string;
  companies: string[];
  acceptance: number;
  frequency: number;
  isPremium: boolean;
  url: string;
  timeComplexity: string;
  spaceComplexity: string;
  approach: string;
  platform: 'leetcode' | 'hackerrank' | 'gfg' | 'codechef' | 'codeforces';
  // Platform-specific IDs
  leetcodeId?: number;
  hackerrankId?: string;
  gfgId?: string;
  codechefId?: string;
  codeforcesId?: string;
  rating?: number; // For Codeforces
}
