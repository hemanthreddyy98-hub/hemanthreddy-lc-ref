// Unified problem type that works for both LeetCode and HackerRank
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
  platform: 'leetcode' | 'hackerrank';
  // Platform-specific IDs
  leetcodeId?: number;
  hackerrankId?: string;
}
