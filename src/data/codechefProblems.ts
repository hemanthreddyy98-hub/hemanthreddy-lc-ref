export interface CodeChefProblem {
  id: number;
  codechefId: string;
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
  platform: 'codechef';
}

export interface Topic {
  name: string;
  icon: string;
  count: number;
  subTopics: string[];
}

export const codechefTopics: Topic[] = [
  { name: 'Arrays', icon: '📊', count: 185, subTopics: ['Basic', 'Prefix Sum', 'Sliding Window', 'Two Pointers', 'Queries', 'Manipulation'] },
  { name: 'Strings', icon: '📝', count: 142, subTopics: ['Basic', 'Pattern Matching', 'Palindrome', 'Hashing', 'Suffix Array', 'Z-Function'] },
  { name: 'Mathematics', icon: '➗', count: 215, subTopics: ['Number Theory', 'Modular Arithmetic', 'Combinatorics', 'Probability', 'Geometry', 'GCD/LCM'] },
  { name: 'Dynamic Programming', icon: '🧮', count: 198, subTopics: ['Basic DP', 'Knapsack', 'LCS/LIS', 'Tree DP', 'Digit DP', 'Bitmask DP', 'Probability DP'] },
  { name: 'Graphs', icon: '🕸️', count: 165, subTopics: ['BFS/DFS', 'Shortest Path', 'MST', 'Trees', 'DAG', 'Flow Networks', 'Bipartite'] },
  { name: 'Greedy', icon: '💰', count: 125, subTopics: ['Sorting', 'Scheduling', 'Interval', 'Selection', 'Exchange Argument'] },
  { name: 'Binary Search', icon: '🎯', count: 95, subTopics: ['Standard', 'Binary Search on Answer', 'Ternary Search', 'Parametric Search'] },
  { name: 'Data Structures', icon: '🏗️', count: 145, subTopics: ['Segment Tree', 'Fenwick Tree', 'Sparse Table', 'Disjoint Set', 'Trie', 'LCA'] },
  { name: 'Divide and Conquer', icon: '✂️', count: 68, subTopics: ['Merge Sort', 'Quick Sort', 'Count Inversions', 'Closest Pair', 'FFT'] },
  { name: 'Game Theory', icon: '🎲', count: 55, subTopics: ['Nim Game', 'Sprague-Grundy', 'Minimax', 'Combinatorial Games'] },
  { name: 'Bit Manipulation', icon: '💻', count: 75, subTopics: ['Basic Operations', 'XOR Properties', 'Bitmask', 'Subset Sum', 'Counting Bits'] },
  { name: 'Recursion', icon: '🔄', count: 85, subTopics: ['Basic', 'Backtracking', 'Generate Subsets', 'Permutations', 'Combinations'] },
  { name: 'Implementation', icon: '⚙️', count: 165, subTopics: ['Simulation', 'Brute Force', 'Ad-hoc', 'Constructive', 'Interactive'] },
  { name: 'Number Theory', icon: '🔢', count: 125, subTopics: ['Prime Numbers', 'Sieve', 'Prime Factorization', 'Euler Totient', 'Modular Inverse'] },
];

const companies = ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Uber', 'Netflix', 'Adobe', 'Goldman Sachs', 'Bloomberg'];

const getApproach = (topic: string): string => {
  const approachPatterns: { [key: string]: string[] } = {
    'Arrays': ['Use two pointers technique', 'Apply prefix sum', 'Sliding window approach', 'Sort and binary search'],
    'Strings': ['Hashing for comparison', 'Z-function for matching', 'KMP algorithm', 'Suffix array approach'],
    'Mathematics': ['Use modular arithmetic', 'Apply Euler\'s theorem', 'Combinatorial formula', 'Number theory insight'],
    'Dynamic Programming': ['Define states carefully', 'Find transition', 'Optimize space', 'Consider all subproblems'],
    'Graphs': ['BFS for shortest unweighted', 'DFS for connectivity', 'Dijkstra for weighted', 'Union-Find for MST'],
    'Greedy': ['Sort by optimal criteria', 'Exchange argument proof', 'Interval scheduling', 'Make local optimal choice'],
    'Binary Search': ['Binary search on answer', 'Check function monotonicity', 'Parametric binary search'],
    'Data Structures': ['Segment tree for range queries', 'Fenwick for point updates', 'DSU for connectivity'],
    'Game Theory': ['Calculate Grundy numbers', 'Nim game analysis', 'Minimax with pruning'],
    'Bit Manipulation': ['XOR properties', 'Bitmask enumeration', 'Bit manipulation tricks'],
    'default': ['Analyze constraints', 'Consider edge cases', 'Optimize iteratively'],
  };
  const patterns = approachPatterns[topic] || approachPatterns['default'];
  return patterns[Math.floor(Math.random() * patterns.length)];
};

const getComplexity = (topic: string): { time: string; space: string } => {
  const patterns: { [key: string]: { time: string; space: string }[] } = {
    'Arrays': [{ time: 'O(n)', space: 'O(1)' }, { time: 'O(n log n)', space: 'O(1)' }],
    'Dynamic Programming': [{ time: 'O(n²)', space: 'O(n)' }, { time: 'O(n×m)', space: 'O(n×m)' }],
    'Graphs': [{ time: 'O(V+E)', space: 'O(V)' }, { time: 'O(E log V)', space: 'O(V+E)' }],
    'Data Structures': [{ time: 'O(n log n)', space: 'O(n)' }, { time: 'O(log n)', space: 'O(n)' }],
  };
  const topicPatterns = patterns[topic] || [{ time: 'O(n)', space: 'O(1)' }];
  return topicPatterns[Math.floor(Math.random() * topicPatterns.length)];
};

const generateCodeChefProblems = (): CodeChefProblem[] => {
  const problems: CodeChefProblem[] = [];
  let id = 1;

  // Real CodeChef problems
  const realProblems = [
    // Easy
    { codechefId: 'FLOW001', title: 'Add Two Numbers', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Basic', time: 'O(1)', space: 'O(1)', acceptance: 95.2 },
    { codechefId: 'FLOW002', title: 'ID and Ship', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Basic', time: 'O(1)', space: 'O(1)', acceptance: 92.5 },
    { codechefId: 'FLOW003', title: 'Sum of Digits', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Number Theory', time: 'O(log n)', space: 'O(1)', acceptance: 88.4 },
    { codechefId: 'FLOW004', title: 'First and Last Digit', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Basic', time: 'O(log n)', space: 'O(1)', acceptance: 85.6 },
    { codechefId: 'FLOW005', title: 'Smallest Numbers of Notes', difficulty: 'Easy' as const, topic: 'Greedy', subTopic: 'Selection', time: 'O(1)', space: 'O(1)', acceptance: 78.2 },
    { codechefId: 'FLOW006', title: 'Reversed Number', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Basic', time: 'O(log n)', space: 'O(1)', acceptance: 82.5 },
    { codechefId: 'FLOW007', title: 'Reverse The Number', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Basic', time: 'O(log n)', space: 'O(1)', acceptance: 80.8 },
    { codechefId: 'INTEST', title: 'Enormous Input Test', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', time: 'O(n)', space: 'O(1)', acceptance: 75.4 },
    { codechefId: 'FCTRL', title: 'Factorial', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Number Theory', time: 'O(log n)', space: 'O(1)', acceptance: 72.6 },
    { codechefId: 'FCTRL2', title: 'Small Factorials', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Number Theory', time: 'O(n²)', space: 'O(n)', acceptance: 68.5 },
    
    // Medium
    { codechefId: 'LAPIN', title: 'Lapindromes', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Hashing', time: 'O(n)', space: 'O(1)', acceptance: 58.4 },
    { codechefId: 'MAXDIFF', title: 'Maximum Weight Difference', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Sorting', time: 'O(n log n)', space: 'O(1)', acceptance: 55.2 },
    { codechefId: 'TRISQ', title: 'Triangles', difficulty: 'Medium' as const, topic: 'Mathematics', subTopic: 'Geometry', time: 'O(1)', space: 'O(1)', acceptance: 52.8 },
    { codechefId: 'SUBARRAY', title: 'Chef and Subarrays', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Prefix Sum', time: 'O(n²)', space: 'O(1)', acceptance: 48.6 },
    { codechefId: 'CHRL4', title: 'Chef and Way', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Basic DP', time: 'O(n)', space: 'O(n)', acceptance: 45.2 },
    { codechefId: 'LECANDY', title: 'Little Elephant and Candies', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Selection', time: 'O(n)', space: 'O(1)', acceptance: 62.5 },
    { codechefId: 'TSORT', title: 'Turbo Sort', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Manipulation', time: 'O(n log n)', space: 'O(n)', acceptance: 55.8 },
    { codechefId: 'ANAGRAM', title: 'Anagram', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Hashing', time: 'O(n)', space: 'O(1)', acceptance: 52.4 },
    { codechefId: 'PRIMES2', title: 'Primes Two', difficulty: 'Medium' as const, topic: 'Number Theory', subTopic: 'Sieve', time: 'O(n log log n)', space: 'O(n)', acceptance: 48.6 },
    { codechefId: 'NUMGAME', title: 'A Lot of Games', difficulty: 'Medium' as const, topic: 'Game Theory', subTopic: 'Nim Game', time: 'O(n)', space: 'O(n)', acceptance: 42.5 },
    { codechefId: 'GOODPREF', title: 'Good Prefixes', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Prefix Sum', time: 'O(n)', space: 'O(n)', acceptance: 55.2 },
    { codechefId: 'SEACO', title: 'Sereja and Commands', difficulty: 'Medium' as const, topic: 'Data Structures', subTopic: 'Segment Tree', time: 'O(n log n)', space: 'O(n)', acceptance: 38.5 },
    
    // Hard
    { codechefId: 'CHEFPOLY', title: 'Chef and Polygons', difficulty: 'Hard' as const, topic: 'Mathematics', subTopic: 'Geometry', time: 'O(n log n)', space: 'O(n)', acceptance: 28.6 },
    { codechefId: 'CAPTCITI', title: 'Capturing Capitals', difficulty: 'Hard' as const, topic: 'Graphs', subTopic: 'Flow Networks', time: 'O(V²E)', space: 'O(V²)', acceptance: 25.4 },
    { codechefId: 'MSTICK', title: 'Matchsticks', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'Bitmask DP', time: 'O(n×2^n)', space: 'O(2^n)', acceptance: 32.5 },
    { codechefId: 'SEGTREE', title: 'Segment Tree', difficulty: 'Hard' as const, topic: 'Data Structures', subTopic: 'Segment Tree', time: 'O(n log n)', space: 'O(n)', acceptance: 35.8 },
    { codechefId: 'GRAPHCNT', title: 'Graph Count', difficulty: 'Hard' as const, topic: 'Graphs', subTopic: 'Trees', time: 'O(n)', space: 'O(n)', acceptance: 28.4 },
    { codechefId: 'XORIT', title: 'XOR It', difficulty: 'Hard' as const, topic: 'Bit Manipulation', subTopic: 'XOR Properties', time: 'O(n)', space: 'O(1)', acceptance: 22.6 },
    { codechefId: 'KNPSK', title: 'Knapsack Problem', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack', time: 'O(n×W)', space: 'O(W)', acceptance: 35.4 },
    { codechefId: 'TREEPATH', title: 'Tree Path', difficulty: 'Hard' as const, topic: 'Graphs', subTopic: 'Trees', time: 'O(n log n)', space: 'O(n)', acceptance: 32.8 },
    { codechefId: 'QTREE', title: 'Query on a Tree', difficulty: 'Hard' as const, topic: 'Data Structures', subTopic: 'LCA', time: 'O(n log n)', space: 'O(n)', acceptance: 28.5 },
    { codechefId: 'DQUERY', title: 'D-query', difficulty: 'Hard' as const, topic: 'Data Structures', subTopic: 'Segment Tree', time: 'O(n√n)', space: 'O(n)', acceptance: 35.2 },
  ];

  // Add real problems
  for (const prob of realProblems) {
    problems.push({
      id: id++,
      codechefId: prob.codechefId,
      title: prob.title,
      difficulty: prob.difficulty,
      topic: prob.topic,
      subTopic: prob.subTopic,
      companies: companies.slice(0, Math.floor(Math.random() * 4) + 1),
      acceptance: prob.acceptance,
      frequency: Math.floor(Math.random() * 100) + 1,
      isPremium: false,
      url: `https://www.codechef.com/problems/${prob.codechefId}`,
      timeComplexity: prob.time,
      spaceComplexity: prob.space || 'O(1)',
      approach: getApproach(prob.topic),
      platform: 'codechef',
    });
  }

  // Generate more problems
  for (const topic of codechefTopics) {
    const targetCount = topic.count - problems.filter(p => p.topic === topic.name).length;
    for (let i = 0; i < Math.min(targetCount, 40); i++) {
      const subTopic = topic.subTopics[Math.floor(Math.random() * topic.subTopics.length)];
      const difficulty = ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)] as 'Easy' | 'Medium' | 'Hard';
      const complexity = getComplexity(topic.name);
      const code = `${topic.name.substring(0, 3).toUpperCase()}${String(i + 100).padStart(3, '0')}`;
      
      problems.push({
        id: id++,
        codechefId: code,
        title: `${topic.name} - ${subTopic} Challenge ${i + 1}`,
        difficulty,
        topic: topic.name,
        subTopic,
        companies: companies.slice(0, Math.floor(Math.random() * 4) + 1),
        acceptance: Math.floor(Math.random() * 50) + 25,
        frequency: Math.floor(Math.random() * 100) + 1,
        isPremium: false,
        url: `https://www.codechef.com/problems/${code}`,
        timeComplexity: complexity.time,
        spaceComplexity: complexity.space,
        approach: getApproach(topic.name),
        platform: 'codechef',
      });
    }
  }

  return problems;
};

export const codechefProblems = generateCodeChefProblems();

export const getCodeChefTopicCounts = (): { [key: string]: number } => {
  const counts: { [key: string]: number } = {};
  for (const problem of codechefProblems) {
    counts[problem.topic] = (counts[problem.topic] || 0) + 1;
  }
  return counts;
};
