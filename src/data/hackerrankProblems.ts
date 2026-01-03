export interface HackerRankProblem {
  id: number;
  hackerrankId: string;
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
  platform: 'hackerrank';
}

export interface Topic {
  name: string;
  icon: string;
  count: number;
  subTopics: string[];
}

export const hackerrankTopics: Topic[] = [
  { name: 'Arrays', icon: '📊', count: 45, subTopics: ['1D Array', '2D Array', 'Manipulation', 'Queries'] },
  { name: 'Strings', icon: '📝', count: 48, subTopics: ['Pattern Matching', 'Manipulation', 'Parsing', 'Anagram'] },
  { name: 'Sorting', icon: '🔢', count: 32, subTopics: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Counting Sort', 'Comparator'] },
  { name: 'Search', icon: '🔍', count: 28, subTopics: ['Binary Search', 'Linear Search', 'Ternary Search'] },
  { name: 'Graph Theory', icon: '🕸️', count: 42, subTopics: ['BFS', 'DFS', 'Shortest Path', 'MST', 'Connectivity'] },
  { name: 'Dynamic Programming', icon: '🧮', count: 55, subTopics: ['Memoization', 'Tabulation', 'Knapsack', 'LCS', 'LIS'] },
  { name: 'Greedy', icon: '💰', count: 35, subTopics: ['Interval', 'Activity Selection', 'Huffman'] },
  { name: 'Recursion', icon: '🔄', count: 22, subTopics: ['Basic', 'Backtracking', 'Divide and Conquer'] },
  { name: 'Linked Lists', icon: '🔗', count: 18, subTopics: ['Singly Linked', 'Doubly Linked', 'Circular'] },
  { name: 'Stacks', icon: '📚', count: 24, subTopics: ['Basic Stack', 'Balanced Brackets', 'Maximum Element'] },
  { name: 'Queues', icon: '📋', count: 16, subTopics: ['Simple Queue', 'Circular Queue', 'Priority Queue'] },
  { name: 'Trees', icon: '🌳', count: 38, subTopics: ['Binary Tree', 'BST', 'Huffman', 'Balanced Trees'] },
  { name: 'Heaps', icon: '🏔️', count: 20, subTopics: ['Min Heap', 'Max Heap', 'Priority Queue'] },
  { name: 'Bit Manipulation', icon: '💻', count: 26, subTopics: ['XOR', 'AND/OR', 'Bit Shifting', 'Counting Bits'] },
  { name: 'Mathematics', icon: '➗', count: 65, subTopics: ['Number Theory', 'Combinatorics', 'Algebra', 'Geometry'] },
  { name: 'Implementation', icon: '⚙️', count: 78, subTopics: ['Simulation', 'Ad-hoc', 'Brute Force'] },
  { name: 'Data Structures', icon: '🏗️', count: 45, subTopics: ['Trie', 'Segment Tree', 'Disjoint Set', 'Fenwick Tree'] },
  { name: 'Algorithms', icon: '🎯', count: 52, subTopics: ['Constructive', 'Game Theory', 'Probability'] },
];

const companies = ['Google', 'Amazon', 'Meta', 'Microsoft', 'Apple', 'Netflix', 'Adobe', 'Uber', 'LinkedIn', 'Twitter', 'Salesforce', 'Oracle', 'IBM', 'Goldman Sachs', 'Bloomberg'];

const getComplexity = (topic: string): { time: string; space: string } => {
  const patterns: { [key: string]: { time: string; space: string }[] } = {
    'Arrays': [
      { time: 'O(n)', space: 'O(1)' },
      { time: 'O(n)', space: 'O(n)' },
      { time: 'O(n²)', space: 'O(1)' },
      { time: 'O(n log n)', space: 'O(1)' },
    ],
    'Strings': [
      { time: 'O(n)', space: 'O(1)' },
      { time: 'O(n)', space: 'O(n)' },
      { time: 'O(n×m)', space: 'O(n)' },
    ],
    'Dynamic Programming': [
      { time: 'O(n²)', space: 'O(n²)' },
      { time: 'O(n×m)', space: 'O(n×m)' },
      { time: 'O(n)', space: 'O(n)' },
      { time: 'O(n×W)', space: 'O(W)' },
    ],
    'Graph Theory': [
      { time: 'O(V+E)', space: 'O(V)' },
      { time: 'O(V²)', space: 'O(V²)' },
      { time: 'O(E log V)', space: 'O(V+E)' },
    ],
    'Sorting': [
      { time: 'O(n log n)', space: 'O(1)' },
      { time: 'O(n²)', space: 'O(1)' },
      { time: 'O(n log n)', space: 'O(n)' },
    ],
    'Trees': [
      { time: 'O(n)', space: 'O(h)' },
      { time: 'O(log n)', space: 'O(1)' },
      { time: 'O(n)', space: 'O(n)' },
    ],
  };
  
  const topicPatterns = patterns[topic] || [{ time: 'O(n)', space: 'O(1)' }];
  return topicPatterns[Math.floor(Math.random() * topicPatterns.length)];
};

const getApproach = (topic: string): string => {
  const approachPatterns: { [key: string]: string[] } = {
    'Arrays': ['Use two pointers technique', 'Apply prefix sum approach', 'Use sliding window', 'Consider sorting first', 'Use hash map for O(1) lookup'],
    'Strings': ['Use frequency counting', 'Apply two pointer technique', 'Consider using StringBuilder', 'Try pattern matching algorithm', 'Use hash map for character mapping'],
    'Sorting': ['Choose appropriate sorting algorithm', 'Consider stable vs unstable sort', 'Use comparator for custom order', 'Try counting sort for bounded values', 'Apply merge sort for linked lists'],
    'Search': ['Apply binary search', 'Use BFS for shortest path', 'Try DFS for exhaustive search', 'Consider hash-based lookup', 'Use ternary search for unimodal'],
    'Graph Theory': ['Use BFS/DFS traversal', 'Apply Dijkstra for weighted graphs', 'Consider Union-Find for connectivity', 'Try Kruskal/Prim for MST', 'Use topological sort for DAG'],
    'Dynamic Programming': ['Identify subproblems', 'Define state and transitions', 'Consider memoization vs tabulation', 'Optimize space if possible', 'Check for overlapping subproblems'],
    'Greedy': ['Sort by optimal metric first', 'Make locally optimal choice', 'Prove greedy choice property', 'Consider interval scheduling', 'Use priority queue for efficiency'],
    'Recursion': ['Identify base cases', 'Define recursive relation', 'Consider tail recursion', 'Use memoization to optimize', 'Apply divide and conquer'],
    'Linked Lists': ['Use slow/fast pointers', 'Consider dummy node', 'Reverse in-place if needed', 'Handle edge cases carefully', 'Use recursion for elegant solution'],
    'Stacks': ['Use monotonic stack pattern', 'Process elements in order', 'Consider using auxiliary stack', 'Handle balanced parentheses', 'Implement with array or linked list'],
    'Queues': ['Use BFS pattern', 'Consider priority queue', 'Implement circular queue', 'Use deque for both ends', 'Process level by level'],
    'Trees': ['Use tree traversal (inorder/preorder/postorder)', 'Consider iterative vs recursive', 'Apply level order with queue', 'Check tree properties recursively', 'Use parent pointers if needed'],
    'Heaps': ['Use min/max heap appropriately', 'Consider heap for k-th element', 'Apply for merge k sorted', 'Use for median finding', 'Implement custom comparator'],
    'Bit Manipulation': ['Use XOR properties', 'Apply bit masking', 'Check powers of two', 'Count set bits efficiently', 'Use left/right shift operators'],
    'Mathematics': ['Apply modular arithmetic', 'Use mathematical formulas', 'Consider number theory concepts', 'Apply combinatorics', 'Check for edge cases with zero'],
    'Implementation': ['Simulate the process', 'Handle edge cases', 'Optimize for constraints', 'Use appropriate data structures', 'Break into smaller functions'],
    'Data Structures': ['Choose optimal data structure', 'Consider trade-offs', 'Implement with efficiency', 'Handle edge cases', 'Use built-in libraries when possible'],
    'Algorithms': ['Analyze time complexity', 'Consider space trade-offs', 'Apply known algorithms', 'Optimize for given constraints', 'Test with edge cases'],
  };
  
  const approaches = approachPatterns[topic] || ['Analyze the problem carefully', 'Consider edge cases', 'Optimize step by step'];
  return approaches[Math.floor(Math.random() * approaches.length)];
};

const generateHackerRankProblems = (): HackerRankProblem[] => {
  const problems: HackerRankProblem[] = [];
  let id = 1;

  // Real HackerRank problems with actual URLs
  const realProblems = [
    // Arrays
    { hackerrankId: 'arrays-ds', title: 'Arrays - DS', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: '1D Array', slug: 'arrays-ds', time: 'O(n)', space: 'O(n)', acceptance: 92.5 },
    { hackerrankId: '2d-array', title: '2D Array - DS', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: '2D Array', slug: '2d-array', time: 'O(n²)', space: 'O(1)', acceptance: 89.4 },
    { hackerrankId: 'dynamic-array', title: 'Dynamic Array', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Manipulation', slug: 'dynamic-array', time: 'O(n)', space: 'O(n)', acceptance: 86.8 },
    { hackerrankId: 'left-rotation', title: 'Left Rotation', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Manipulation', slug: 'array-left-rotation', time: 'O(n)', space: 'O(n)', acceptance: 91.2 },
    { hackerrankId: 'sparse-arrays', title: 'Sparse Arrays', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Queries', slug: 'sparse-arrays', time: 'O(n×m)', space: 'O(n)', acceptance: 78.5 },
    { hackerrankId: 'array-manipulation', title: 'Array Manipulation', difficulty: 'Hard' as const, topic: 'Arrays', subTopic: 'Queries', slug: 'crush', time: 'O(n+m)', space: 'O(n)', acceptance: 52.8 },
    
    // Strings
    { hackerrankId: 'caesar-cipher-1', title: 'Caesar Cipher', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Manipulation', slug: 'caesar-cipher-1', time: 'O(n)', space: 'O(n)', acceptance: 88.5 },
    { hackerrankId: 'camelcase', title: 'CamelCase', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Parsing', slug: 'camelcase', time: 'O(n)', space: 'O(1)', acceptance: 94.2 },
    { hackerrankId: 'two-characters', title: 'Two Characters', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Pattern Matching', slug: 'two-characters', time: 'O(n)', space: 'O(1)', acceptance: 65.8 },
    { hackerrankId: 'pangrams', title: 'Pangrams', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Pattern Matching', slug: 'pangrams', time: 'O(n)', space: 'O(1)', acceptance: 92.1 },
    { hackerrankId: 'alternating-characters', title: 'Alternating Characters', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Manipulation', slug: 'alternating-characters', time: 'O(n)', space: 'O(1)', acceptance: 91.4 },
    { hackerrankId: 'sherlock-and-valid-string', title: 'Sherlock and the Valid String', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Pattern Matching', slug: 'sherlock-and-valid-string', time: 'O(n)', space: 'O(1)', acceptance: 54.8 },
    { hackerrankId: 'special-palindrome-again', title: 'Special String Again', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Pattern Matching', slug: 'special-palindrome-again', time: 'O(n)', space: 'O(n)', acceptance: 48.2 },
    { hackerrankId: 'common-child', title: 'Common Child', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Pattern Matching', slug: 'common-child', time: 'O(n²)', space: 'O(n)', acceptance: 62.5 },
    { hackerrankId: 'making-anagrams', title: 'Making Anagrams', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Anagram', slug: 'making-anagrams', time: 'O(n+m)', space: 'O(1)', acceptance: 89.8 },
    { hackerrankId: 'anagram', title: 'Anagram', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Anagram', slug: 'anagram', time: 'O(n)', space: 'O(1)', acceptance: 87.4 },
    
    // Sorting
    { hackerrankId: 'big-sorting', title: 'Big Sorting', difficulty: 'Easy' as const, topic: 'Sorting', subTopic: 'Comparator', slug: 'big-sorting', time: 'O(n log n)', space: 'O(1)', acceptance: 78.5 },
    { hackerrankId: 'intro-to-tutorial-challenges', title: 'Intro to Tutorial Challenges', difficulty: 'Easy' as const, topic: 'Sorting', subTopic: 'Binary Search', slug: 'tutorial-intro', time: 'O(n)', space: 'O(1)', acceptance: 96.2 },
    { hackerrankId: 'insertion-sort', title: 'Insertion Sort - Part 1', difficulty: 'Easy' as const, topic: 'Sorting', subTopic: 'Bubble Sort', slug: 'insertionsort1', time: 'O(n)', space: 'O(1)', acceptance: 91.8 },
    { hackerrankId: 'insertion-sort-part-2', title: 'Insertion Sort - Part 2', difficulty: 'Easy' as const, topic: 'Sorting', subTopic: 'Bubble Sort', slug: 'insertionsort2', time: 'O(n²)', space: 'O(1)', acceptance: 88.5 },
    { hackerrankId: 'correctness-invariant', title: 'Correctness and the Loop Invariant', difficulty: 'Easy' as const, topic: 'Sorting', subTopic: 'Bubble Sort', slug: 'correctness-invariant', time: 'O(n²)', space: 'O(1)', acceptance: 94.2 },
    { hackerrankId: 'running-time', title: 'Running Time of Algorithms', difficulty: 'Easy' as const, topic: 'Sorting', subTopic: 'Bubble Sort', slug: 'runningtime', time: 'O(n²)', space: 'O(1)', acceptance: 92.8 },
    { hackerrankId: 'quicksort1', title: 'Quicksort 1 - Partition', difficulty: 'Easy' as const, topic: 'Sorting', subTopic: 'Quick Sort', slug: 'quicksort1', time: 'O(n)', space: 'O(n)', acceptance: 89.4 },
    { hackerrankId: 'quicksort2', title: 'Quicksort 2 - Sorting', difficulty: 'Easy' as const, topic: 'Sorting', subTopic: 'Quick Sort', slug: 'quicksort2', time: 'O(n log n)', space: 'O(n)', acceptance: 85.6 },
    { hackerrankId: 'quicksort3', title: 'Quicksort In-Place', difficulty: 'Medium' as const, topic: 'Sorting', subTopic: 'Quick Sort', slug: 'quicksort3', time: 'O(n log n)', space: 'O(log n)', acceptance: 72.8 },
    { hackerrankId: 'countingsort1', title: 'Counting Sort 1', difficulty: 'Easy' as const, topic: 'Sorting', subTopic: 'Counting Sort', slug: 'countingsort1', time: 'O(n+k)', space: 'O(k)', acceptance: 91.2 },
    { hackerrankId: 'countingsort2', title: 'Counting Sort 2', difficulty: 'Easy' as const, topic: 'Sorting', subTopic: 'Counting Sort', slug: 'countingsort2', time: 'O(n+k)', space: 'O(k)', acceptance: 88.5 },
    { hackerrankId: 'closest-numbers', title: 'Closest Numbers', difficulty: 'Easy' as const, topic: 'Sorting', subTopic: 'Comparator', slug: 'closest-numbers', time: 'O(n log n)', space: 'O(n)', acceptance: 82.4 },
    { hackerrankId: 'find-the-median', title: 'Find the Median', difficulty: 'Easy' as const, topic: 'Sorting', subTopic: 'Quick Sort', slug: 'find-the-median', time: 'O(n log n)', space: 'O(1)', acceptance: 86.8 },
    { hackerrankId: 'fraudulent-activity-notifications', title: 'Fraudulent Activity Notifications', difficulty: 'Medium' as const, topic: 'Sorting', subTopic: 'Counting Sort', slug: 'fraudulent-activity-notifications', time: 'O(n×d)', space: 'O(d)', acceptance: 42.5 },
    { hackerrankId: 'lilys-homework', title: "Lily's Homework", difficulty: 'Medium' as const, topic: 'Sorting', subTopic: 'Comparator', slug: 'lilys-homework', time: 'O(n log n)', space: 'O(n)', acceptance: 58.2 },

    // Search
    { hackerrankId: 'icecream-parlor', title: 'Ice Cream Parlor', difficulty: 'Easy' as const, topic: 'Search', subTopic: 'Binary Search', slug: 'icecream-parlor', time: 'O(n)', space: 'O(n)', acceptance: 78.5 },
    { hackerrankId: 'missing-numbers', title: 'Missing Numbers', difficulty: 'Easy' as const, topic: 'Search', subTopic: 'Linear Search', slug: 'missing-numbers', time: 'O(n)', space: 'O(n)', acceptance: 72.8 },
    { hackerrankId: 'pairs', title: 'Pairs', difficulty: 'Medium' as const, topic: 'Search', subTopic: 'Binary Search', slug: 'pairs', time: 'O(n log n)', space: 'O(n)', acceptance: 68.4 },
    { hackerrankId: 'sherlock-and-array', title: 'Sherlock and Array', difficulty: 'Easy' as const, topic: 'Search', subTopic: 'Linear Search', slug: 'sherlock-and-array', time: 'O(n)', space: 'O(1)', acceptance: 65.2 },
    { hackerrankId: 'connected-cell-in-a-grid', title: 'Connected Cells in a Grid', difficulty: 'Medium' as const, topic: 'Search', subTopic: 'Binary Search', slug: 'connected-cell-in-a-grid', time: 'O(n×m)', space: 'O(n×m)', acceptance: 58.8 },
    { hackerrankId: 'count-luck', title: 'Count Luck', difficulty: 'Medium' as const, topic: 'Search', subTopic: 'Binary Search', slug: 'count-luck', time: 'O(n×m)', space: 'O(n×m)', acceptance: 62.5 },
    { hackerrankId: 'cut-the-tree', title: 'Cut the Tree', difficulty: 'Medium' as const, topic: 'Search', subTopic: 'Linear Search', slug: 'cut-the-tree', time: 'O(n)', space: 'O(n)', acceptance: 54.8 },
    { hackerrankId: 'gena', title: 'Gena Playing Hanoi', difficulty: 'Medium' as const, topic: 'Search', subTopic: 'Binary Search', slug: 'gena', time: 'O(4^n)', space: 'O(4^n)', acceptance: 48.2 },
    { hackerrankId: 'red-knights-shortest-path', title: "Red Knight's Shortest Path", difficulty: 'Medium' as const, topic: 'Search', subTopic: 'Binary Search', slug: 'red-knights-shortest-path', time: 'O(n²)', space: 'O(n²)', acceptance: 52.4 },
    { hackerrankId: 'similar-pair', title: 'Similar Pair', difficulty: 'Hard' as const, topic: 'Search', subTopic: 'Binary Search', slug: 'similarpair', time: 'O(n log n)', space: 'O(n)', acceptance: 38.5 },
    { hackerrankId: 'maximum-subarray-sum', title: 'Maximum Subarray Sum', difficulty: 'Hard' as const, topic: 'Search', subTopic: 'Binary Search', slug: 'maximum-subarray-sum', time: 'O(n log n)', space: 'O(n)', acceptance: 42.8 },

    // Graph Theory
    { hackerrankId: 'bfsshortreach', title: 'BFS: Shortest Reach in a Graph', difficulty: 'Medium' as const, topic: 'Graph Theory', subTopic: 'BFS', slug: 'bfsshortreach', time: 'O(V+E)', space: 'O(V)', acceptance: 72.5 },
    { hackerrankId: 'dijkstrashortreach', title: "Dijkstra: Shortest Reach 2", difficulty: 'Hard' as const, topic: 'Graph Theory', subTopic: 'Shortest Path', slug: 'dijkstrashortreach', time: 'O(E log V)', space: 'O(V+E)', acceptance: 52.4 },
    { hackerrankId: 'primsmstsub', title: "Prim's (MST): Special Subtree", difficulty: 'Medium' as const, topic: 'Graph Theory', subTopic: 'MST', slug: 'primsmstsub', time: 'O(E log V)', space: 'O(V+E)', acceptance: 68.5 },
    { hackerrankId: 'kruskalmstrsub', title: "Kruskal (MST): Really Special Subtree", difficulty: 'Medium' as const, topic: 'Graph Theory', subTopic: 'MST', slug: 'kruskalmstrsub', time: 'O(E log E)', space: 'O(V+E)', acceptance: 65.8 },
    { hackerrankId: 'snakes-and-ladders', title: 'Snakes and Ladders: The Quickest Way Up', difficulty: 'Medium' as const, topic: 'Graph Theory', subTopic: 'BFS', slug: 'the-quickest-way-up', time: 'O(n)', space: 'O(n)', acceptance: 58.2 },
    { hackerrankId: 'ctci-bfs-shortest-reach', title: 'Roads and Libraries', difficulty: 'Medium' as const, topic: 'Graph Theory', subTopic: 'DFS', slug: 'torque-and-development', time: 'O(V+E)', space: 'O(V)', acceptance: 62.8 },
    { hackerrankId: 'journey-to-the-moon', title: 'Journey to the Moon', difficulty: 'Medium' as const, topic: 'Graph Theory', subTopic: 'Connectivity', slug: 'journey-to-the-moon', time: 'O(V+E)', space: 'O(V)', acceptance: 56.4 },
    { hackerrankId: 'synchronous-shopping', title: 'Synchronous Shopping', difficulty: 'Medium' as const, topic: 'Graph Theory', subTopic: 'Shortest Path', slug: 'synchronous-shopping', time: 'O(E log V × 2^k)', space: 'O(V × 2^k)', acceptance: 48.5 },
    { hackerrankId: 'rust-murderer', title: 'Rust & Murderer', difficulty: 'Medium' as const, topic: 'Graph Theory', subTopic: 'BFS', slug: 'rust-murderer', time: 'O(V+E)', space: 'O(V)', acceptance: 54.2 },
    { hackerrankId: 'even-tree', title: 'Even Tree', difficulty: 'Medium' as const, topic: 'Graph Theory', subTopic: 'DFS', slug: 'even-tree', time: 'O(n)', space: 'O(n)', acceptance: 72.8 },
    { hackerrankId: 'floyd-city-of-blinding-lights', title: 'Floyd: City of Blinding Lights', difficulty: 'Hard' as const, topic: 'Graph Theory', subTopic: 'Shortest Path', slug: 'floyd-city-of-blinding-lights', time: 'O(V³)', space: 'O(V²)', acceptance: 62.5 },
    { hackerrankId: 'jeanies-route', title: "Jeanie's Route", difficulty: 'Hard' as const, topic: 'Graph Theory', subTopic: 'DFS', slug: 'jeanies-route', time: 'O(V+E)', space: 'O(V)', acceptance: 45.8 },
    { hackerrankId: 'matrix', title: 'Matrix', difficulty: 'Hard' as const, topic: 'Graph Theory', subTopic: 'MST', slug: 'matrix', time: 'O(E log E)', space: 'O(V+E)', acceptance: 38.2 },

    // Dynamic Programming
    { hackerrankId: 'coin-change', title: 'The Coin Change Problem', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack', slug: 'coin-change', time: 'O(n×m)', space: 'O(n)', acceptance: 68.5 },
    { hackerrankId: 'equal', title: 'Equal', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Memoization', slug: 'equal', time: 'O(n×max)', space: 'O(max)', acceptance: 54.2 },
    { hackerrankId: 'sherlock-and-cost', title: 'Sherlock and Cost', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Tabulation', slug: 'sherlock-and-cost', time: 'O(n)', space: 'O(1)', acceptance: 62.8 },
    { hackerrankId: 'construct-the-array', title: 'Construct the Array', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Memoization', slug: 'construct-the-array', time: 'O(n)', space: 'O(1)', acceptance: 58.4 },
    { hackerrankId: 'kingdom-division', title: 'Kingdom Division', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Tabulation', slug: 'kingdom-division', time: 'O(n)', space: 'O(n)', acceptance: 42.5 },
    { hackerrankId: 'sam-and-substrings', title: 'Sam and substrings', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Memoization', slug: 'sam-and-substrings', time: 'O(n)', space: 'O(1)', acceptance: 52.8 },
    { hackerrankId: 'fibonacci-modified', title: 'Fibonacci Modified', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Memoization', slug: 'fibonacci-modified', time: 'O(n)', space: 'O(1)', acceptance: 65.4 },
    { hackerrankId: 'abbreviation', title: 'Abbreviation', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'LCS', slug: 'abbr', time: 'O(n×m)', space: 'O(m)', acceptance: 48.2 },
    { hackerrankId: 'candies', title: 'Candies', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Tabulation', slug: 'candies', time: 'O(n)', space: 'O(n)', acceptance: 58.6 },
    { hackerrankId: 'max-array-sum', title: 'Max Array Sum', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Memoization', slug: 'max-array-sum', time: 'O(n)', space: 'O(1)', acceptance: 72.4 },
    { hackerrankId: 'decibinary-numbers', title: 'Decibinary Numbers', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'Tabulation', slug: 'decibinary-numbers', time: 'O(n×d)', space: 'O(n×d)', acceptance: 38.5 },
    { hackerrankId: 'fair-cut', title: 'Fair Cut', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack', slug: 'fair-cut', time: 'O(n²×k)', space: 'O(n×k)', acceptance: 42.8 },
    { hackerrankId: 'knapsack', title: 'Knapsack', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack', slug: 'unbounded-knapsack', time: 'O(n×W)', space: 'O(W)', acceptance: 62.5 },
    { hackerrankId: 'red-john-is-back', title: 'Red John is Back', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Memoization', slug: 'red-john-is-back', time: 'O(n)', space: 'O(n)', acceptance: 58.2 },
    { hackerrankId: 'play-game', title: 'Play with words', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'LCS', slug: 'play-with-words', time: 'O(n²)', space: 'O(n²)', acceptance: 45.8 },
    { hackerrankId: 'longest-increasing-subsequent', title: 'Longest Increasing Subsequence', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'LIS', slug: 'longest-increasing-subsequent', time: 'O(n log n)', space: 'O(n)', acceptance: 48.5 },

    // Greedy
    { hackerrankId: 'minimum-absolute-difference-in-an-array', title: 'Minimum Absolute Difference in an Array', difficulty: 'Easy' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'minimum-absolute-difference-in-an-array', time: 'O(n log n)', space: 'O(1)', acceptance: 78.5 },
    { hackerrankId: 'luck-balance', title: 'Luck Balance', difficulty: 'Easy' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'luck-balance', time: 'O(n log n)', space: 'O(1)', acceptance: 82.4 },
    { hackerrankId: 'greedy-florist', title: 'Greedy Florist', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'greedy-florist', time: 'O(n log n)', space: 'O(1)', acceptance: 68.5 },
    { hackerrankId: 'max-min', title: 'Max Min', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'angry-children', time: 'O(n log n)', space: 'O(1)', acceptance: 72.8 },
    { hackerrankId: 'jim-and-the-orders', title: 'Jim and the Orders', difficulty: 'Easy' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'jim-and-the-orders', time: 'O(n log n)', space: 'O(n)', acceptance: 85.2 },
    { hackerrankId: 'permuting-two-arrays', title: 'Permuting Two Arrays', difficulty: 'Easy' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'two-arrays', time: 'O(n log n)', space: 'O(1)', acceptance: 78.8 },
    { hackerrankId: 'marcs-cakewalk', title: "Marc's Cakewalk", difficulty: 'Easy' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'marcs-cakewalk', time: 'O(n log n)', space: 'O(1)', acceptance: 88.5 },
    { hackerrankId: 'grid-challenge', title: 'Grid Challenge', difficulty: 'Easy' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'grid-challenge', time: 'O(n² log n)', space: 'O(1)', acceptance: 82.4 },
    { hackerrankId: 'beautiful-pairs', title: 'Beautiful Pairs', difficulty: 'Easy' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'beautiful-pairs', time: 'O(n log n)', space: 'O(n)', acceptance: 75.8 },
    { hackerrankId: 'priyanka-and-toys', title: 'Priyanka and Toys', difficulty: 'Easy' as const, topic: 'Greedy', subTopic: 'Interval', slug: 'priyanka-and-toys', time: 'O(n log n)', space: 'O(1)', acceptance: 72.5 },
    { hackerrankId: 'chief-hopper', title: 'Chief Hopper', difficulty: 'Hard' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'chief-hopper', time: 'O(n)', space: 'O(1)', acceptance: 58.2 },
    { hackerrankId: 'accessory-collection', title: 'Accessory Collection', difficulty: 'Hard' as const, topic: 'Greedy', subTopic: 'Interval', slug: 'accessory-collection', time: 'O(n log n)', space: 'O(n)', acceptance: 42.8 },

    // Recursion
    { hackerrankId: 'the-power-sum', title: 'The Power Sum', difficulty: 'Medium' as const, topic: 'Recursion', subTopic: 'Backtracking', slug: 'the-power-sum', time: 'O(X^(1/N) × N)', space: 'O(N)', acceptance: 68.5 },
    { hackerrankId: 'crossword-puzzle', title: 'Crossword Puzzle', difficulty: 'Medium' as const, topic: 'Recursion', subTopic: 'Backtracking', slug: 'crossword-puzzle', time: 'O(10! × 10)', space: 'O(100)', acceptance: 52.4 },
    { hackerrankId: 'recursive-digit-sum', title: 'Recursive Digit Sum', difficulty: 'Medium' as const, topic: 'Recursion', subTopic: 'Basic', slug: 'recursive-digit-sum', time: 'O(log n)', space: 'O(log n)', acceptance: 72.8 },
    { hackerrankId: 'password-cracker', title: 'Password Cracker', difficulty: 'Medium' as const, topic: 'Recursion', subTopic: 'Backtracking', slug: 'password-cracker', time: 'O(n × m)', space: 'O(n)', acceptance: 48.5 },
    { hackerrankId: 'stone-division-2', title: 'Stone Division, Revisited', difficulty: 'Hard' as const, topic: 'Recursion', subTopic: 'Divide and Conquer', slug: 'stone-division-2', time: 'O(n × m)', space: 'O(n)', acceptance: 38.2 },
    { hackerrankId: 'arithmetic-expressions', title: 'Arithmetic Expressions', difficulty: 'Hard' as const, topic: 'Recursion', subTopic: 'Backtracking', slug: 'arithmetic-expressions', time: 'O(3^n)', space: 'O(n)', acceptance: 42.5 },

    // Linked Lists
    { hackerrankId: 'print-the-elements-of-a-linked-list', title: 'Print the Elements of a Linked List', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Singly Linked', slug: 'print-the-elements-of-a-linked-list', time: 'O(n)', space: 'O(1)', acceptance: 95.8 },
    { hackerrankId: 'insert-a-node-at-the-tail-of-a-linked-list', title: 'Insert a Node at the Tail of a Linked List', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Singly Linked', slug: 'insert-a-node-at-the-tail-of-a-linked-list', time: 'O(n)', space: 'O(1)', acceptance: 92.5 },
    { hackerrankId: 'insert-a-node-at-the-head-of-a-linked-list', title: 'Insert a node at the head of a linked list', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Singly Linked', slug: 'insert-a-node-at-the-head-of-a-linked-list', time: 'O(1)', space: 'O(1)', acceptance: 94.2 },
    { hackerrankId: 'insert-a-node-at-a-specific-position-in-a-linked-list', title: 'Insert a node at a specific position in a linked list', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Singly Linked', slug: 'insert-a-node-at-a-specific-position-in-a-linked-list', time: 'O(n)', space: 'O(1)', acceptance: 88.5 },
    { hackerrankId: 'delete-a-node-from-a-linked-list', title: 'Delete a Node', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Singly Linked', slug: 'delete-a-node-from-a-linked-list', time: 'O(n)', space: 'O(1)', acceptance: 90.2 },
    { hackerrankId: 'print-in-reverse', title: 'Print in Reverse', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Singly Linked', slug: 'print-the-elements-of-a-linked-list-in-reverse', time: 'O(n)', space: 'O(n)', acceptance: 88.8 },
    { hackerrankId: 'reverse-a-linked-list', title: 'Reverse a linked list', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Singly Linked', slug: 'reverse-a-linked-list', time: 'O(n)', space: 'O(1)', acceptance: 85.4 },
    { hackerrankId: 'compare-two-linked-lists', title: 'Compare two linked lists', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Singly Linked', slug: 'compare-two-linked-lists', time: 'O(n)', space: 'O(1)', acceptance: 89.8 },
    { hackerrankId: 'merge-two-sorted-linked-lists', title: 'Merge two sorted linked lists', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Singly Linked', slug: 'merge-two-sorted-linked-lists', time: 'O(n+m)', space: 'O(1)', acceptance: 82.5 },
    { hackerrankId: 'get-the-value-of-the-node-at-a-specific-position-from-the-tail', title: 'Get Node Value', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Singly Linked', slug: 'get-the-value-of-the-node-at-a-specific-position-from-the-tail', time: 'O(n)', space: 'O(1)', acceptance: 78.5 },
    { hackerrankId: 'delete-duplicate-value-nodes-from-a-sorted-linked-list', title: 'Delete duplicate-value nodes from a sorted linked list', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Singly Linked', slug: 'delete-duplicate-value-nodes-from-a-sorted-linked-list', time: 'O(n)', space: 'O(1)', acceptance: 85.2 },
    { hackerrankId: 'detect-whether-a-linked-list-contains-a-cycle', title: 'Cycle Detection', difficulty: 'Medium' as const, topic: 'Linked Lists', subTopic: 'Circular', slug: 'detect-whether-a-linked-list-contains-a-cycle', time: 'O(n)', space: 'O(1)', acceptance: 72.8 },
    { hackerrankId: 'find-merge-point-of-two-linked-lists', title: 'Find Merge Point of Two Lists', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Singly Linked', slug: 'find-the-merge-point-of-two-joined-linked-lists', time: 'O(n+m)', space: 'O(1)', acceptance: 75.4 },
    { hackerrankId: 'inserting-a-node-into-a-sorted-doubly-linked-list', title: 'Inserting a Node Into a Sorted Doubly Linked List', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Doubly Linked', slug: 'insert-a-node-into-a-sorted-doubly-linked-list', time: 'O(n)', space: 'O(1)', acceptance: 82.8 },
    { hackerrankId: 'reverse-a-doubly-linked-list', title: 'Reverse a doubly linked list', difficulty: 'Easy' as const, topic: 'Linked Lists', subTopic: 'Doubly Linked', slug: 'reverse-a-doubly-linked-list', time: 'O(n)', space: 'O(1)', acceptance: 88.5 },

    // Stacks
    { hackerrankId: 'maximum-element', title: 'Maximum Element', difficulty: 'Easy' as const, topic: 'Stacks', subTopic: 'Maximum Element', slug: 'maximum-element', time: 'O(1)', space: 'O(n)', acceptance: 78.5 },
    { hackerrankId: 'balanced-brackets', title: 'Balanced Brackets', difficulty: 'Medium' as const, topic: 'Stacks', subTopic: 'Balanced Brackets', slug: 'balanced-brackets', time: 'O(n)', space: 'O(n)', acceptance: 72.8 },
    { hackerrankId: 'equal-stacks', title: 'Equal Stacks', difficulty: 'Easy' as const, topic: 'Stacks', subTopic: 'Basic Stack', slug: 'equal-stacks', time: 'O(n)', space: 'O(n)', acceptance: 75.4 },
    { hackerrankId: 'game-of-two-stacks', title: 'Game of Two Stacks', difficulty: 'Medium' as const, topic: 'Stacks', subTopic: 'Basic Stack', slug: 'game-of-two-stacks', time: 'O(n+m)', space: 'O(1)', acceptance: 58.2 },
    { hackerrankId: 'largest-rectangle', title: 'Largest Rectangle', difficulty: 'Medium' as const, topic: 'Stacks', subTopic: 'Basic Stack', slug: 'largest-rectangle', time: 'O(n)', space: 'O(n)', acceptance: 52.8 },
    { hackerrankId: 'simple-text-editor', title: 'Simple Text Editor', difficulty: 'Medium' as const, topic: 'Stacks', subTopic: 'Basic Stack', slug: 'simple-text-editor', time: 'O(n)', space: 'O(n)', acceptance: 65.4 },
    { hackerrankId: 'waiter', title: 'Waiter', difficulty: 'Medium' as const, topic: 'Stacks', subTopic: 'Basic Stack', slug: 'waiter', time: 'O(n×q)', space: 'O(n)', acceptance: 58.8 },
    { hackerrankId: 'and-xor-or', title: 'AND xor OR', difficulty: 'Hard' as const, topic: 'Stacks', subTopic: 'Basic Stack', slug: 'and-xor-or', time: 'O(n)', space: 'O(n)', acceptance: 42.5 },
    { hackerrankId: 'poisonous-plants', title: 'Poisonous Plants', difficulty: 'Hard' as const, topic: 'Stacks', subTopic: 'Basic Stack', slug: 'poisonous-plants', time: 'O(n)', space: 'O(n)', acceptance: 38.8 },

    // Queues
    { hackerrankId: 'queue-using-two-stacks', title: 'Queue using Two Stacks', difficulty: 'Medium' as const, topic: 'Queues', subTopic: 'Simple Queue', slug: 'queue-using-two-stacks', time: 'O(1) amortized', space: 'O(n)', acceptance: 72.5 },
    { hackerrankId: 'castle-on-the-grid', title: 'Castle on the Grid', difficulty: 'Medium' as const, topic: 'Queues', subTopic: 'Simple Queue', slug: 'castle-on-the-grid', time: 'O(n²)', space: 'O(n²)', acceptance: 52.8 },
    { hackerrankId: 'down-to-zero-ii', title: 'Down to Zero II', difficulty: 'Medium' as const, topic: 'Queues', subTopic: 'Simple Queue', slug: 'down-to-zero-ii', time: 'O(n√n)', space: 'O(n)', acceptance: 48.5 },
    { hackerrankId: 'truck-tour', title: 'Truck Tour', difficulty: 'Hard' as const, topic: 'Queues', subTopic: 'Circular Queue', slug: 'truck-tour', time: 'O(n)', space: 'O(1)', acceptance: 58.2 },
    { hackerrankId: 'queries-with-fixed-length', title: 'Queries with Fixed Length', difficulty: 'Hard' as const, topic: 'Queues', subTopic: 'Priority Queue', slug: 'queries-with-fixed-length', time: 'O(n)', space: 'O(n)', acceptance: 42.8 },

    // Trees
    { hackerrankId: 'tree-preorder-traversal', title: 'Tree: Preorder Traversal', difficulty: 'Easy' as const, topic: 'Trees', subTopic: 'Binary Tree', slug: 'tree-preorder-traversal', time: 'O(n)', space: 'O(h)', acceptance: 92.5 },
    { hackerrankId: 'tree-postorder-traversal', title: 'Tree: Postorder Traversal', difficulty: 'Easy' as const, topic: 'Trees', subTopic: 'Binary Tree', slug: 'tree-postorder-traversal', time: 'O(n)', space: 'O(h)', acceptance: 91.8 },
    { hackerrankId: 'tree-inorder-traversal', title: 'Tree: Inorder Traversal', difficulty: 'Easy' as const, topic: 'Trees', subTopic: 'Binary Tree', slug: 'tree-inorder-traversal', time: 'O(n)', space: 'O(h)', acceptance: 93.2 },
    { hackerrankId: 'tree-height-of-a-binary-tree', title: 'Tree: Height of a Binary Tree', difficulty: 'Easy' as const, topic: 'Trees', subTopic: 'Binary Tree', slug: 'tree-height-of-a-binary-tree', time: 'O(n)', space: 'O(h)', acceptance: 88.5 },
    { hackerrankId: 'tree-level-order-traversal', title: 'Tree: Level Order Traversal', difficulty: 'Easy' as const, topic: 'Trees', subTopic: 'Binary Tree', slug: 'tree-level-order-traversal', time: 'O(n)', space: 'O(n)', acceptance: 85.4 },
    { hackerrankId: 'binary-search-tree-insertion', title: 'Binary Search Tree: Insertion', difficulty: 'Easy' as const, topic: 'Trees', subTopic: 'BST', slug: 'binary-search-tree-insertion', time: 'O(h)', space: 'O(h)', acceptance: 89.8 },
    { hackerrankId: 'binary-search-tree-lowest-common-ancestor', title: 'Binary Search Tree: Lowest Common Ancestor', difficulty: 'Easy' as const, topic: 'Trees', subTopic: 'BST', slug: 'binary-search-tree-lowest-common-ancestor', time: 'O(h)', space: 'O(1)', acceptance: 82.5 },
    { hackerrankId: 'tree-top-view', title: 'Tree: Top View', difficulty: 'Medium' as const, topic: 'Trees', subTopic: 'Binary Tree', slug: 'tree-top-view', time: 'O(n)', space: 'O(n)', acceptance: 68.5 },
    { hackerrankId: 'is-binary-search-tree', title: 'Is This a Binary Search Tree?', difficulty: 'Medium' as const, topic: 'Trees', subTopic: 'BST', slug: 'is-binary-search-tree', time: 'O(n)', space: 'O(h)', acceptance: 72.8 },
    { hackerrankId: 'tree-huffman-decoding', title: 'Tree: Huffman Decoding', difficulty: 'Medium' as const, topic: 'Trees', subTopic: 'Huffman', slug: 'tree-huffman-decoding', time: 'O(n)', space: 'O(1)', acceptance: 75.4 },
    { hackerrankId: 'swap-nodes-algo', title: 'Swap Nodes [Algo]', difficulty: 'Medium' as const, topic: 'Trees', subTopic: 'Binary Tree', slug: 'swap-nodes-algo', time: 'O(n×k)', space: 'O(n)', acceptance: 62.5 },
    { hackerrankId: 'balanced-forest', title: 'Balanced Forest', difficulty: 'Hard' as const, topic: 'Trees', subTopic: 'Binary Tree', slug: 'balanced-forest', time: 'O(n)', space: 'O(n)', acceptance: 38.5 },
    { hackerrankId: 'array-and-simple-queries', title: 'Array and simple queries', difficulty: 'Hard' as const, topic: 'Trees', subTopic: 'Balanced Trees', slug: 'array-and-simple-queries', time: 'O(n log n)', space: 'O(n)', acceptance: 42.8 },
    { hackerrankId: 'self-balancing-tree', title: 'Self Balancing Tree', difficulty: 'Medium' as const, topic: 'Trees', subTopic: 'Balanced Trees', slug: 'self-balancing-tree', time: 'O(log n)', space: 'O(n)', acceptance: 58.2 },

    // Heaps
    { hackerrankId: 'qheap1', title: 'QHEAP1', difficulty: 'Easy' as const, topic: 'Heaps', subTopic: 'Min Heap', slug: 'qheap1', time: 'O(log n)', space: 'O(n)', acceptance: 78.5 },
    { hackerrankId: 'jesse-and-cookies', title: 'Jesse and Cookies', difficulty: 'Easy' as const, topic: 'Heaps', subTopic: 'Min Heap', slug: 'jesse-and-cookies', time: 'O(n log n)', space: 'O(n)', acceptance: 72.8 },
    { hackerrankId: 'find-the-running-median', title: 'Find the Running Median', difficulty: 'Hard' as const, topic: 'Heaps', subTopic: 'Max Heap', slug: 'find-the-running-median', time: 'O(n log n)', space: 'O(n)', acceptance: 52.4 },
    { hackerrankId: 'minimum-average-waiting-time', title: 'Minimum Average Waiting Time', difficulty: 'Hard' as const, topic: 'Heaps', subTopic: 'Priority Queue', slug: 'minimum-average-waiting-time', time: 'O(n log n)', space: 'O(n)', acceptance: 48.5 },

    // Bit Manipulation
    { hackerrankId: 'lonely-integer', title: 'Lonely Integer', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'XOR', slug: 'lonely-integer', time: 'O(n)', space: 'O(1)', acceptance: 88.5 },
    { hackerrankId: 'maximizing-xor', title: 'Maximizing XOR', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'XOR', slug: 'maximizing-xor', time: 'O(L × R)', space: 'O(1)', acceptance: 82.4 },
    { hackerrankId: 'sum-vs-xor', title: 'Sum vs XOR', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'XOR', slug: 'sum-vs-xor', time: 'O(log n)', space: 'O(1)', acceptance: 75.8 },
    { hackerrankId: 'flipping-bits', title: 'Flipping bits', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'Bit Shifting', slug: 'flipping-bits', time: 'O(1)', space: 'O(1)', acceptance: 85.2 },
    { hackerrankId: 'counter-game', title: 'Counter game', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Counting Bits', slug: 'counter-game', time: 'O(log n)', space: 'O(1)', acceptance: 68.5 },
    { hackerrankId: 'xor-sequence', title: 'Xor-sequence', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'XOR', slug: 'xor-sequence', time: 'O(1)', space: 'O(1)', acceptance: 52.8 },
    { hackerrankId: 'the-great-xor', title: 'The Great XOR', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'XOR', slug: 'the-great-xor', time: 'O(log x)', space: 'O(1)', acceptance: 58.4 },
    { hackerrankId: 'yet-another-minimax-problem', title: 'Yet Another Minimax Problem', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'XOR', slug: 'yet-another-minimax-problem', time: 'O(n log max)', space: 'O(n)', acceptance: 48.2 },
    { hackerrankId: 'sansa-and-xor', title: 'Sansa and XOR', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'XOR', slug: 'sansa-and-xor', time: 'O(n)', space: 'O(1)', acceptance: 62.5 },
    { hackerrankId: 'and-product', title: 'AND Product', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'AND/OR', slug: 'and-product', time: 'O(log n)', space: 'O(1)', acceptance: 55.8 },
    { hackerrankId: 'winning-lottery-ticket', title: 'Winning Lottery Ticket', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Counting Bits', slug: 'winning-lottery-ticket', time: 'O(n × 2^10)', space: 'O(2^10)', acceptance: 42.8 },

    // Mathematics
    { hackerrankId: 'find-the-point', title: 'Find the Point', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Geometry', slug: 'find-point', time: 'O(1)', space: 'O(1)', acceptance: 92.5 },
    { hackerrankId: 'maximum-draws', title: 'Maximum Draws', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Combinatorics', slug: 'maximum-draws', time: 'O(1)', space: 'O(1)', acceptance: 94.2 },
    { hackerrankId: 'handshake', title: 'Handshake', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Combinatorics', slug: 'handshake', time: 'O(1)', space: 'O(1)', acceptance: 88.5 },
    { hackerrankId: 'minimum-height-triangle', title: 'Minimum Height Triangle', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Geometry', slug: 'lowest-triangle', time: 'O(1)', space: 'O(1)', acceptance: 75.8 },
    { hackerrankId: 'army-game', title: 'Army Game', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Algebra', slug: 'game-with-cells', time: 'O(1)', space: 'O(1)', acceptance: 82.4 },
    { hackerrankId: 'leonardos-prime-factors', title: "Leonardo's Prime Factors", difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Number Theory', slug: 'leonardo-and-prime', time: 'O(log n)', space: 'O(1)', acceptance: 68.5 },
    { hackerrankId: 'connecting-towns', title: 'Connecting Towns', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Combinatorics', slug: 'connecting-towns', time: 'O(n)', space: 'O(1)', acceptance: 78.5 },
    { hackerrankId: 'cutting-paper-squares', title: 'Cutting Paper Squares', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Algebra', slug: 'p1-paper-cutting', time: 'O(1)', space: 'O(1)', acceptance: 85.2 },
    { hackerrankId: 'sherlock-and-divisors', title: 'Sherlock and Divisors', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Number Theory', slug: 'sherlock-and-divisors', time: 'O(√n)', space: 'O(1)', acceptance: 72.8 },
    { hackerrankId: 'sherlock-and-moving-tiles', title: 'Sherlock and Moving Tiles', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Geometry', slug: 'sherlock-and-moving-tiles', time: 'O(1)', space: 'O(1)', acceptance: 65.4 },
    { hackerrankId: 'strange-grid', title: 'Strange Grid Again', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Algebra', slug: 'strange-grid', time: 'O(1)', space: 'O(1)', acceptance: 78.8 },
    { hackerrankId: 'diwali-lights', title: 'Diwali Lights', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Number Theory', slug: 'diwali-lights', time: 'O(n)', space: 'O(1)', acceptance: 82.5 },
    { hackerrankId: 'sherlock-and-permutations', title: 'Sherlock and Permutations', difficulty: 'Medium' as const, topic: 'Mathematics', subTopic: 'Combinatorics', slug: 'sherlock-and-permutations', time: 'O(n)', space: 'O(n)', acceptance: 58.2 },
    { hackerrankId: 'reverse-game', title: 'Reverse Game', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Algebra', slug: 'reverse-game', time: 'O(1)', space: 'O(1)', acceptance: 72.5 },
    { hackerrankId: 'strange-grid-again', title: 'Bus Station', difficulty: 'Easy' as const, topic: 'Mathematics', subTopic: 'Number Theory', slug: 'bus-station', time: 'O(√n)', space: 'O(√n)', acceptance: 68.8 },

    // Implementation
    { hackerrankId: 'grading', title: 'Grading Students', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'grading', time: 'O(n)', space: 'O(n)', acceptance: 92.5 },
    { hackerrankId: 'apple-and-orange', title: 'Apple and Orange', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'apple-and-orange', time: 'O(m+n)', space: 'O(1)', acceptance: 88.5 },
    { hackerrankId: 'kangaroo', title: 'Number Line Jumps', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'kangaroo', time: 'O(1)', space: 'O(1)', acceptance: 72.8 },
    { hackerrankId: 'between-two-sets', title: 'Between Two Sets', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', slug: 'between-two-sets', time: 'O(n×m×max)', space: 'O(1)', acceptance: 65.4 },
    { hackerrankId: 'breaking-best-and-worst-records', title: 'Breaking the Records', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'breaking-best-and-worst-records', time: 'O(n)', space: 'O(1)', acceptance: 88.2 },
    { hackerrankId: 'birthday', title: 'Subarray Division', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', slug: 'the-birthday-bar', time: 'O(n)', space: 'O(1)', acceptance: 82.5 },
    { hackerrankId: 'divisible-sum-pairs', title: 'Divisible Sum Pairs', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', slug: 'divisible-sum-pairs', time: 'O(n²)', space: 'O(1)', acceptance: 78.8 },
    { hackerrankId: 'migratory-birds', title: 'Migratory Birds', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'migratory-birds', time: 'O(n)', space: 'O(1)', acceptance: 75.4 },
    { hackerrankId: 'day-of-the-programmer', title: 'Day of the Programmer', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'day-of-the-programmer', time: 'O(1)', space: 'O(1)', acceptance: 68.5 },
    { hackerrankId: 'bon-appetit', title: 'Bill Division', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'bon-appetit', time: 'O(n)', space: 'O(1)', acceptance: 85.2 },
    { hackerrankId: 'sock-merchant', title: 'Sales by Match', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'sock-merchant', time: 'O(n)', space: 'O(n)', acceptance: 82.8 },
    { hackerrankId: 'drawing-book', title: 'Drawing Book', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'drawing-book', time: 'O(1)', space: 'O(1)', acceptance: 72.5 },
    { hackerrankId: 'counting-valleys', title: 'Counting Valleys', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'counting-valleys', time: 'O(n)', space: 'O(1)', acceptance: 78.8 },
    { hackerrankId: 'electronics-shop', title: 'Electronics Shop', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', slug: 'electronics-shop', time: 'O(n×m)', space: 'O(1)', acceptance: 68.5 },
    { hackerrankId: 'cats-and-a-mouse', title: 'Cats and a Mouse', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'cats-and-a-mouse', time: 'O(1)', space: 'O(1)', acceptance: 92.8 },
    { hackerrankId: 'the-hurdle-race', title: 'The Hurdle Race', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'the-hurdle-race', time: 'O(n)', space: 'O(1)', acceptance: 88.5 },
    { hackerrankId: 'designer-pdf-viewer', title: 'Designer PDF Viewer', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'designer-pdf-viewer', time: 'O(n)', space: 'O(1)', acceptance: 85.2 },
    { hackerrankId: 'utopian-tree', title: 'Utopian Tree', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'utopian-tree', time: 'O(n)', space: 'O(1)', acceptance: 82.8 },
    { hackerrankId: 'angry-professor', title: 'Angry Professor', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'angry-professor', time: 'O(n)', space: 'O(1)', acceptance: 88.5 },
    { hackerrankId: 'beautiful-days-at-the-movies', title: 'Beautiful Days at the Movies', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', slug: 'beautiful-days-at-the-movies', time: 'O(n log max)', space: 'O(1)', acceptance: 78.5 },
    { hackerrankId: 'viral-advertising', title: 'Viral Advertising', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'strange-advertising', time: 'O(n)', space: 'O(1)', acceptance: 85.8 },
    { hackerrankId: 'save-the-prisoner', title: 'Save the Prisoner!', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'save-the-prisoner', time: 'O(1)', space: 'O(1)', acceptance: 62.5 },
    { hackerrankId: 'circular-array-rotation', title: 'Circular Array Rotation', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'circular-array-rotation', time: 'O(n+k)', space: 'O(n)', acceptance: 72.8 },
    { hackerrankId: 'sequence-equation', title: 'Sequence Equation', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'permutation-equation', time: 'O(n)', space: 'O(n)', acceptance: 68.5 },
    { hackerrankId: 'jumping-on-the-clouds-revisited', title: 'Jumping on the Clouds: Revisited', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'jumping-on-the-clouds-revisited', time: 'O(n)', space: 'O(1)', acceptance: 78.8 },
    { hackerrankId: 'find-digits', title: 'Find Digits', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', slug: 'find-digits', time: 'O(log n)', space: 'O(1)', acceptance: 82.5 },
    { hackerrankId: 'extra-long-factorials', title: 'Extra Long Factorials', difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'extra-long-factorials', time: 'O(n²)', space: 'O(n)', acceptance: 68.8 },
    { hackerrankId: 'append-and-delete', title: 'Append and Delete', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'append-and-delete', time: 'O(n)', space: 'O(1)', acceptance: 55.8 },
    { hackerrankId: 'sherlock-and-squares', title: 'Sherlock and Squares', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'sherlock-and-squares', time: 'O(1)', space: 'O(1)', acceptance: 72.5 },
    { hackerrankId: 'library-fine', title: 'Library Fine', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'library-fine', time: 'O(1)', space: 'O(1)', acceptance: 75.8 },
    { hackerrankId: 'cut-the-sticks', title: 'Cut the sticks', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'cut-the-sticks', time: 'O(n log n)', space: 'O(n)', acceptance: 78.5 },
    { hackerrankId: 'non-divisible-subset', title: 'Non-Divisible Subset', difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'non-divisible-subset', time: 'O(n)', space: 'O(k)', acceptance: 48.5 },
    { hackerrankId: 'repeated-string', title: 'Repeated String', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'repeated-string', time: 'O(n)', space: 'O(1)', acceptance: 72.8 },
    { hackerrankId: 'jumping-on-the-clouds', title: 'Jumping on the Clouds', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'jumping-on-the-clouds', time: 'O(n)', space: 'O(1)', acceptance: 85.4 },
    { hackerrankId: 'equality-in-a-array', title: 'Equalize the Array', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'equality-in-a-array', time: 'O(n)', space: 'O(n)', acceptance: 78.8 },
    { hackerrankId: 'acm-icpc-team', title: 'ACM ICPC Team', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', slug: 'acm-icpc-team', time: 'O(n² × m)', space: 'O(1)', acceptance: 72.5 },
    { hackerrankId: 'taum-and-bday', title: "Taum and B'day", difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'taum-and-bday', time: 'O(1)', space: 'O(1)', acceptance: 68.5 },
    { hackerrankId: 'modified-kaprekar-numbers', title: 'Modified Kaprekar Numbers', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', slug: 'kaprekar-numbers', time: 'O(n)', space: 'O(1)', acceptance: 65.8 },
    { hackerrankId: 'beautiful-triplets', title: 'Beautiful Triplets', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', slug: 'beautiful-triplets', time: 'O(n)', space: 'O(n)', acceptance: 72.8 },
    { hackerrankId: 'minimum-distances', title: 'Minimum Distances', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', slug: 'minimum-distances', time: 'O(n²)', space: 'O(1)', acceptance: 78.5 },
    { hackerrankId: 'halloween-sale', title: 'Halloween Sale', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'halloween-sale', time: 'O(n)', space: 'O(1)', acceptance: 72.5 },
    { hackerrankId: 'chocolate-feast', title: 'Chocolate Feast', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'chocolate-feast', time: 'O(log n)', space: 'O(1)', acceptance: 78.8 },
    { hackerrankId: 'service-lane', title: 'Service Lane', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'service-lane', time: 'O(n)', space: 'O(n)', acceptance: 82.5 },
    { hackerrankId: 'lisa-workbook', title: "Lisa's Workbook", difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'lisa-workbook', time: 'O(n)', space: 'O(1)', acceptance: 68.5 },
    { hackerrankId: 'flatland-space-stations', title: 'Flatland Space Stations', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'flatland-space-stations', time: 'O(n log n)', space: 'O(n)', acceptance: 72.8 },
    { hackerrankId: 'fair-rations', title: 'Fair Rations', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'fair-rations', time: 'O(n)', space: 'O(1)', acceptance: 68.5 },
    { hackerrankId: 'cavity-map', title: 'Cavity Map', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'cavity-map', time: 'O(n²)', space: 'O(n²)', acceptance: 75.8 },
    { hackerrankId: 'manasa-and-stones', title: 'Manasa and Stones', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'manasa-and-stones', time: 'O(n)', space: 'O(n)', acceptance: 72.5 },
    { hackerrankId: 'the-grid-search', title: 'The Grid Search', difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Brute Force', slug: 'the-grid-search', time: 'O(n×m×r×c)', space: 'O(1)', acceptance: 58.5 },
    { hackerrankId: 'happy-ladybugs', title: 'Happy Ladybugs', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'happy-ladybugs', time: 'O(n)', space: 'O(1)', acceptance: 68.8 },
    { hackerrankId: 'strange-counter', title: 'Strange Counter', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'strange-code', time: 'O(log t)', space: 'O(1)', acceptance: 62.5 },
    { hackerrankId: '3d-surface-area', title: '3D Surface Area', difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: '3d-surface-area', time: 'O(H×W)', space: 'O(1)', acceptance: 58.2 },
    { hackerrankId: 'absolute-permutation', title: 'Absolute Permutation', difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'absolute-permutation', time: 'O(n)', space: 'O(n)', acceptance: 52.8 },
    { hackerrankId: 'the-bomberman-game', title: 'The Bomberman Game', difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'bomber-man', time: 'O(r×c)', space: 'O(r×c)', acceptance: 48.5 },
    { hackerrankId: 'emas-supercomputer', title: "Ema's Supercomputer", difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Brute Force', slug: 'two-pluses', time: 'O(n²×m²)', space: 'O(n×m)', acceptance: 42.8 },
    { hackerrankId: 'organizing-containers-of-balls', title: 'Organizing Containers of Balls', difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'organizing-containers-of-balls', time: 'O(n²)', space: 'O(n)', acceptance: 55.8 },
    { hackerrankId: 'bigger-is-greater', title: 'Bigger is Greater', difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'bigger-is-greater', time: 'O(n)', space: 'O(n)', acceptance: 48.5 },
    { hackerrankId: 'encryption', title: 'Encryption', difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'encryption', time: 'O(n)', space: 'O(n)', acceptance: 68.5 },
    { hackerrankId: 'matrix-rotation-algo', title: 'Matrix Layer Rotation', difficulty: 'Hard' as const, topic: 'Implementation', subTopic: 'Simulation', slug: 'matrix-rotation-algo', time: 'O(m×n)', space: 'O(m×n)', acceptance: 38.5 },
    { hackerrankId: 'larrys-array', title: "Larry's Array", difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'larrys-array', time: 'O(n²)', space: 'O(1)', acceptance: 58.2 },
    { hackerrankId: 'almost-sorted', title: 'Almost Sorted', difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Ad-hoc', slug: 'almost-sorted', time: 'O(n)', space: 'O(n)', acceptance: 52.8 },

    // Data Structures
    { hackerrankId: 'contacts', title: 'Contacts', difficulty: 'Medium' as const, topic: 'Data Structures', subTopic: 'Trie', slug: 'contacts', time: 'O(n×k)', space: 'O(n×k)', acceptance: 62.5 },
    { hackerrankId: 'no-prefix-set', title: 'No Prefix Set', difficulty: 'Hard' as const, topic: 'Data Structures', subTopic: 'Trie', slug: 'no-prefix-set', time: 'O(n×k)', space: 'O(n×k)', acceptance: 52.8 },
    { hackerrankId: 'find-the-running-median', title: 'Find the Running Median', difficulty: 'Hard' as const, topic: 'Data Structures', subTopic: 'Segment Tree', slug: 'find-the-running-median', time: 'O(n log n)', space: 'O(n)', acceptance: 48.5 },
    { hackerrankId: 'components-in-graph', title: 'Components in a graph', difficulty: 'Medium' as const, topic: 'Data Structures', subTopic: 'Disjoint Set', slug: 'components-in-graph', time: 'O(n α(n))', space: 'O(n)', acceptance: 68.5 },
    { hackerrankId: 'kundu-and-tree', title: 'Kundu and Tree', difficulty: 'Hard' as const, topic: 'Data Structures', subTopic: 'Disjoint Set', slug: 'kundu-and-tree', time: 'O(n)', space: 'O(n)', acceptance: 42.8 },
    { hackerrankId: 'merging-communities', title: 'Merging Communities', difficulty: 'Hard' as const, topic: 'Data Structures', subTopic: 'Disjoint Set', slug: 'merging-communities', time: 'O(n α(n))', space: 'O(n)', acceptance: 58.2 },

    // Algorithms
    { hackerrankId: 'game-of-stones-1', title: 'Game of Stones', difficulty: 'Easy' as const, topic: 'Algorithms', subTopic: 'Game Theory', slug: 'game-of-stones-1', time: 'O(1)', space: 'O(1)', acceptance: 78.5 },
    { hackerrankId: 'tower-breakers-1', title: 'Tower Breakers', difficulty: 'Easy' as const, topic: 'Algorithms', subTopic: 'Game Theory', slug: 'tower-breakers-1', time: 'O(1)', space: 'O(1)', acceptance: 82.4 },
    { hackerrankId: 'a-chessboard-game-1', title: 'A Chessboard Game', difficulty: 'Easy' as const, topic: 'Algorithms', subTopic: 'Game Theory', slug: 'a-chessboard-game-1', time: 'O(1)', space: 'O(1)', acceptance: 72.8 },
    { hackerrankId: 'introduction-to-nim-game', title: 'Introduction to Nim Game', difficulty: 'Easy' as const, topic: 'Algorithms', subTopic: 'Game Theory', slug: 'nim-game-1', time: 'O(n)', space: 'O(1)', acceptance: 78.5 },
    { hackerrankId: 'misere-nim-1', title: 'Misère Nim', difficulty: 'Easy' as const, topic: 'Algorithms', subTopic: 'Game Theory', slug: 'misere-nim-1', time: 'O(n)', space: 'O(1)', acceptance: 68.5 },
    { hackerrankId: 'nimble-game-1', title: 'Nimble Game', difficulty: 'Easy' as const, topic: 'Algorithms', subTopic: 'Game Theory', slug: 'nimble-game-1', time: 'O(n)', space: 'O(1)', acceptance: 72.8 },
    { hackerrankId: 'poker-nim-1', title: 'Poker Nim', difficulty: 'Easy' as const, topic: 'Algorithms', subTopic: 'Game Theory', slug: 'poker-nim-1', time: 'O(n)', space: 'O(1)', acceptance: 75.4 },
    { hackerrankId: 'random', title: 'Random', difficulty: 'Medium' as const, topic: 'Algorithms', subTopic: 'Probability', slug: 'random', time: 'O(1)', space: 'O(1)', acceptance: 58.2 },
  ];

  // Add real problems
  for (const p of realProblems) {
    const randomCompanies = companies
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 4) + 1);
    
    problems.push({
      id: id++,
      hackerrankId: p.hackerrankId,
      title: p.title,
      difficulty: p.difficulty,
      topic: p.topic,
      subTopic: p.subTopic,
      companies: randomCompanies,
      acceptance: p.acceptance,
      frequency: Math.floor(Math.random() * 100),
      isPremium: false,
      url: `https://www.hackerrank.com/challenges/${p.slug}/problem`,
      timeComplexity: p.time,
      spaceComplexity: p.space,
      approach: getApproach(p.topic),
      platform: 'hackerrank',
    });
  }

  // Generate additional problems
  const additionalTitles = [
    'Maximum Score', 'Minimum Operations', 'Count Elements', 'Find Pattern', 'Calculate Result',
    'Process Array', 'Parse String', 'Build Structure', 'Optimize Solution', 'Transform Data',
    'Validate Input', 'Generate Sequence', 'Compute Value', 'Analyze Graph', 'Solve Equation',
  ];

  const prefixes = ['', 'Find ', 'Count ', 'Maximum ', 'Minimum ', 'Special ', 'Unique ', 'Valid ', 'Check ', 'Create '];
  const suffixes = ['', ' II', ' III', ' Easy', ' Challenge', ' Problem', ' Task', ' Query'];

  while (problems.length < 2000) {
    const topic = hackerrankTopics[Math.floor(Math.random() * hackerrankTopics.length)];
    const subTopic = topic.subTopics[Math.floor(Math.random() * topic.subTopics.length)];
    const difficulty = ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)] as 'Easy' | 'Medium' | 'Hard';
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const baseTitle = additionalTitles[Math.floor(Math.random() * additionalTitles.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const title = `${prefix}${baseTitle}${suffix}`.trim();
    
    const randomCompanies = companies
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 4) + 1);
    
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    const complexity = getComplexity(topic.name);

    problems.push({
      id: id++,
      hackerrankId: `hr-${id}`,
      title,
      difficulty,
      topic: topic.name,
      subTopic,
      companies: randomCompanies,
      acceptance: Math.floor(Math.random() * 40) + 30,
      frequency: Math.floor(Math.random() * 100),
      isPremium: Math.random() > 0.9,
      url: `https://www.hackerrank.com/challenges/${slug}/problem`,
      timeComplexity: complexity.time,
      spaceComplexity: complexity.space,
      approach: getApproach(topic.name),
      platform: 'hackerrank',
    });
  }

  return problems;
};

export const hackerrankProblems = generateHackerRankProblems();

export const getHackerRankTopicCounts = () => {
  const counts: { [key: string]: number } = {};
  hackerrankProblems.forEach((p) => {
    counts[p.topic] = (counts[p.topic] || 0) + 1;
  });
  return counts;
};

export const getHackerRankDifficultyCounts = () => {
  const counts = { Easy: 0, Medium: 0, Hard: 0 };
  hackerrankProblems.forEach((p) => {
    counts[p.difficulty]++;
  });
  return counts;
};
