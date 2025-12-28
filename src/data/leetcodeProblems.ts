export interface Problem {
  id: number;
  leetcodeId: number;
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
}

export interface Topic {
  name: string;
  icon: string;
  count: number;
  subTopics: string[];
}

export const topics: Topic[] = [
  { name: 'Arrays', icon: '📊', count: 487, subTopics: ['Two Pointers', 'Sliding Window', 'Prefix Sum', 'Matrix', 'Simulation'] },
  { name: 'Strings', icon: '📝', count: 312, subTopics: ['Pattern Matching', 'Palindrome', 'Anagram', 'Subsequence', 'Parsing'] },
  { name: 'Hash Table', icon: '🔑', count: 289, subTopics: ['Counting', 'Mapping', 'Set Operations', 'Frequency'] },
  { name: 'Dynamic Programming', icon: '🧮', count: 476, subTopics: ['1D DP', '2D DP', 'Knapsack', 'LCS', 'LIS', 'State Machine', 'Interval DP'] },
  { name: 'Math', icon: '➗', count: 287, subTopics: ['Number Theory', 'Geometry', 'Combinatorics', 'Bit Manipulation'] },
  { name: 'Sorting', icon: '🔢', count: 156, subTopics: ['QuickSort', 'MergeSort', 'Bucket Sort', 'Counting Sort', 'Custom Comparator'] },
  { name: 'Greedy', icon: '💰', count: 178, subTopics: ['Interval Scheduling', 'Task Scheduling', 'Huffman', 'Activity Selection'] },
  { name: 'Depth-First Search', icon: '🌲', count: 298, subTopics: ['Tree DFS', 'Graph DFS', 'Backtracking', 'Cycle Detection'] },
  { name: 'Breadth-First Search', icon: '🌊', count: 187, subTopics: ['Level Order', 'Shortest Path', 'Multi-Source BFS', 'Bidirectional BFS'] },
  { name: 'Binary Search', icon: '🎯', count: 156, subTopics: ['Search in Array', 'Search Answer', 'Rotated Array', 'Matrix Search'] },
  { name: 'Tree', icon: '🌳', count: 234, subTopics: ['Binary Tree', 'BST', 'N-ary Tree', 'Segment Tree', 'Fenwick Tree'] },
  { name: 'Binary Tree', icon: '🌿', count: 189, subTopics: ['Traversal', 'Construction', 'Path', 'Ancestor', 'Serialization'] },
  { name: 'Binary Search Tree', icon: '🔍', count: 67, subTopics: ['Validation', 'Operations', 'Iterator', 'Recovery'] },
  { name: 'Graph', icon: '🕸️', count: 198, subTopics: ['Traversal', 'Shortest Path', 'Minimum Spanning Tree', 'Topological Sort', 'Union Find'] },
  { name: 'Linked List', icon: '🔗', count: 89, subTopics: ['Reversal', 'Cycle Detection', 'Merge', 'Partition', 'Copy'] },
  { name: 'Recursion', icon: '🔄', count: 76, subTopics: ['Divide and Conquer', 'Memoization', 'Tail Recursion'] },
  { name: 'Backtracking', icon: '↩️', count: 98, subTopics: ['Permutations', 'Combinations', 'Subsets', 'N-Queens', 'Sudoku'] },
  { name: 'Stack', icon: '📚', count: 123, subTopics: ['Monotonic Stack', 'Expression Parsing', 'Valid Parentheses', 'Calculator'] },
  { name: 'Queue', icon: '📋', count: 67, subTopics: ['Priority Queue', 'Deque', 'Circular Queue', 'Monotonic Queue'] },
  { name: 'Heap', icon: '🏔️', count: 98, subTopics: ['Min Heap', 'Max Heap', 'Top K Elements', 'Median Finding', 'Merge K Lists'] },
  { name: 'Trie', icon: '🔤', count: 45, subTopics: ['Prefix Tree', 'Autocomplete', 'Word Search', 'XOR Trie'] },
  { name: 'Bit Manipulation', icon: '💻', count: 89, subTopics: ['XOR Operations', 'Bit Masking', 'Power of Two', 'Counting Bits'] },
  { name: 'Two Pointers', icon: '👆', count: 134, subTopics: ['Opposite Direction', 'Same Direction', 'Fast Slow Pointer'] },
  { name: 'Sliding Window', icon: '🪟', count: 67, subTopics: ['Fixed Size', 'Variable Size', 'With Hash Map'] },
  { name: 'Union Find', icon: '🤝', count: 78, subTopics: ['Path Compression', 'Union by Rank', 'Connected Components'] },
  { name: 'Divide and Conquer', icon: '✂️', count: 45, subTopics: ['Merge Sort', 'Quick Select', 'Closest Pair'] },
  { name: 'Design', icon: '🎨', count: 134, subTopics: ['Data Structures', 'System Design', 'Iterator Design', 'LRU/LFU Cache'] },
  { name: 'Simulation', icon: '🎮', count: 89, subTopics: ['Game Simulation', 'Process Simulation', 'Robot Movement'] },
  { name: 'Counting', icon: '🔢', count: 78, subTopics: ['Frequency Count', 'Digit Count', 'Element Count'] },
  { name: 'Matrix', icon: '⬜', count: 123, subTopics: ['Rotation', 'Spiral', 'Search', 'Island Problems'] },
  { name: 'Prefix Sum', icon: '➕', count: 89, subTopics: ['1D Prefix', '2D Prefix', 'Difference Array'] },
  { name: 'Geometry', icon: '📐', count: 45, subTopics: ['Line Intersection', 'Convex Hull', 'Point in Polygon'] },
  { name: 'Game Theory', icon: '🎲', count: 34, subTopics: ['Nim Game', 'Minimax', 'Alpha-Beta Pruning'] },
  { name: 'Interactive', icon: '🎤', count: 23, subTopics: ['Binary Search Guess', 'Find Element', 'Graph Queries'] },
  { name: 'Concurrency', icon: '⚡', count: 12, subTopics: ['Multi-threading', 'Synchronization', 'Semaphores'] },
  { name: 'Database', icon: '🗄️', count: 89, subTopics: ['SQL Queries', 'Joins', 'Aggregation', 'Window Functions'] },
  { name: 'Shell', icon: '💲', count: 4, subTopics: ['Bash Scripting', 'Text Processing'] },
];

// Generate comprehensive problem data
const companies = ['Google', 'Amazon', 'Meta', 'Microsoft', 'Apple', 'Netflix', 'Adobe', 'Uber', 'LinkedIn', 'Twitter', 'Salesforce', 'Oracle', 'IBM', 'Goldman Sachs', 'Bloomberg'];

const generateProblems = (): Problem[] => {
  const problems: Problem[] = [];
  let id = 1;
  
  // Real LeetCode problems data with exact URL slugs and complexity
  const realProblems = [
    // Arrays - Easy
    { leetcodeId: 1, title: 'Two Sum', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'two-sum', time: 'O(n)', space: 'O(n)', acceptance: 49.5 },
    { leetcodeId: 26, title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'remove-duplicates-from-sorted-array', time: 'O(n)', space: 'O(1)', acceptance: 52.4 },
    { leetcodeId: 27, title: 'Remove Element', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'remove-element', time: 'O(n)', space: 'O(1)', acceptance: 54.1 },
    { leetcodeId: 35, title: 'Search Insert Position', difficulty: 'Easy' as const, topic: 'Binary Search', subTopic: 'Search in Array', slug: 'search-insert-position', time: 'O(log n)', space: 'O(1)', acceptance: 44.2 },
    { leetcodeId: 53, title: 'Maximum Subarray', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'maximum-subarray', time: 'O(n)', space: 'O(1)', acceptance: 50.2 },
    { leetcodeId: 55, title: 'Jump Game', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'jump-game', time: 'O(n)', space: 'O(1)', acceptance: 38.5 },
    { leetcodeId: 56, title: 'Merge Intervals', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'merge-intervals', time: 'O(n log n)', space: 'O(n)', acceptance: 46.8 },
    { leetcodeId: 66, title: 'Plus One', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'plus-one', time: 'O(n)', space: 'O(1)', acceptance: 43.8 },
    { leetcodeId: 70, title: 'Climbing Stairs', difficulty: 'Easy' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'climbing-stairs', time: 'O(n)', space: 'O(1)', acceptance: 52.1 },
    { leetcodeId: 88, title: 'Merge Sorted Array', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'merge-sorted-array', time: 'O(m+n)', space: 'O(1)', acceptance: 48.5 },
    { leetcodeId: 121, title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'best-time-to-buy-and-sell-stock', time: 'O(n)', space: 'O(1)', acceptance: 54.3 },
    { leetcodeId: 122, title: 'Best Time to Buy and Sell Stock II', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'best-time-to-buy-and-sell-stock-ii', time: 'O(n)', space: 'O(1)', acceptance: 63.8 },
    { leetcodeId: 136, title: 'Single Number', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'XOR Operations', slug: 'single-number', time: 'O(n)', space: 'O(1)', acceptance: 71.2 },
    { leetcodeId: 169, title: 'Majority Element', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'majority-element', time: 'O(n)', space: 'O(1)', acceptance: 64.3 },
    { leetcodeId: 189, title: 'Rotate Array', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'rotate-array', time: 'O(n)', space: 'O(1)', acceptance: 39.4 },
    { leetcodeId: 217, title: 'Contains Duplicate', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Set Operations', slug: 'contains-duplicate', time: 'O(n)', space: 'O(n)', acceptance: 61.5 },
    { leetcodeId: 283, title: 'Move Zeroes', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'move-zeroes', time: 'O(n)', space: 'O(1)', acceptance: 61.3 },
    { leetcodeId: 268, title: 'Missing Number', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'XOR Operations', slug: 'missing-number', time: 'O(n)', space: 'O(1)', acceptance: 63.1 },
    { leetcodeId: 485, title: 'Max Consecutive Ones', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'max-consecutive-ones', time: 'O(n)', space: 'O(1)', acceptance: 56.2 },
    { leetcodeId: 448, title: 'Find All Numbers Disappeared in an Array', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'find-all-numbers-disappeared-in-an-array', time: 'O(n)', space: 'O(1)', acceptance: 60.8 },
    // Strings
    { leetcodeId: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Sliding Window', slug: 'longest-substring-without-repeating-characters', time: 'O(n)', space: 'O(min(m,n))', acceptance: 34.2 },
    { leetcodeId: 5, title: 'Longest Palindromic Substring', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Palindrome', slug: 'longest-palindromic-substring', time: 'O(n²)', space: 'O(1)', acceptance: 33.1 },
    { leetcodeId: 6, title: 'Zigzag Conversion', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Simulation', slug: 'zigzag-conversion', time: 'O(n)', space: 'O(n)', acceptance: 45.6 },
    { leetcodeId: 8, title: 'String to Integer (atoi)', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Parsing', slug: 'string-to-integer-atoi', time: 'O(n)', space: 'O(1)', acceptance: 17.1 },
    { leetcodeId: 14, title: 'Longest Common Prefix', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Pattern Matching', slug: 'longest-common-prefix', time: 'O(S)', space: 'O(1)', acceptance: 41.6 },
    { leetcodeId: 20, title: 'Valid Parentheses', difficulty: 'Easy' as const, topic: 'Stack', subTopic: 'Valid Parentheses', slug: 'valid-parentheses', time: 'O(n)', space: 'O(n)', acceptance: 40.5 },
    { leetcodeId: 22, title: 'Generate Parentheses', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Combinations', slug: 'generate-parentheses', time: 'O(4ⁿ/√n)', space: 'O(n)', acceptance: 73.4 },
    { leetcodeId: 28, title: 'Find the Index of the First Occurrence in a String', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Pattern Matching', slug: 'find-the-index-of-the-first-occurrence-in-a-string', time: 'O(n×m)', space: 'O(1)', acceptance: 40.2 },
    { leetcodeId: 49, title: 'Group Anagrams', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Anagram', slug: 'group-anagrams', time: 'O(n×k log k)', space: 'O(n×k)', acceptance: 67.8 },
    { leetcodeId: 125, title: 'Valid Palindrome', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Palindrome', slug: 'valid-palindrome', time: 'O(n)', space: 'O(1)', acceptance: 45.8 },
    // Linked List
    { leetcodeId: 2, title: 'Add Two Numbers', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'add-two-numbers', time: 'O(max(m,n))', space: 'O(max(m,n))', acceptance: 41.6 },
    { leetcodeId: 19, title: 'Remove Nth Node From End of List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Two Pointers', slug: 'remove-nth-node-from-end-of-list', time: 'O(n)', space: 'O(1)', acceptance: 42.1 },
    { leetcodeId: 21, title: 'Merge Two Sorted Lists', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Merge', slug: 'merge-two-sorted-lists', time: 'O(n+m)', space: 'O(1)', acceptance: 63.5 },
    { leetcodeId: 23, title: 'Merge k Sorted Lists', difficulty: 'Hard' as const, topic: 'Heap', subTopic: 'Merge K Lists', slug: 'merge-k-sorted-lists', time: 'O(n log k)', space: 'O(k)', acceptance: 51.8 },
    { leetcodeId: 24, title: 'Swap Nodes in Pairs', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'swap-nodes-in-pairs', time: 'O(n)', space: 'O(1)', acceptance: 62.4 },
    { leetcodeId: 25, title: 'Reverse Nodes in k-Group', difficulty: 'Hard' as const, topic: 'Linked List', subTopic: 'Reversal', slug: 'reverse-nodes-in-k-group', time: 'O(n)', space: 'O(1)', acceptance: 55.8 },
    { leetcodeId: 141, title: 'Linked List Cycle', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Cycle Detection', slug: 'linked-list-cycle', time: 'O(n)', space: 'O(1)', acceptance: 47.8 },
    { leetcodeId: 142, title: 'Linked List Cycle II', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Cycle Detection', slug: 'linked-list-cycle-ii', time: 'O(n)', space: 'O(1)', acceptance: 49.2 },
    { leetcodeId: 206, title: 'Reverse Linked List', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Reversal', slug: 'reverse-linked-list', time: 'O(n)', space: 'O(1)', acceptance: 74.5 },
    { leetcodeId: 234, title: 'Palindrome Linked List', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'palindrome-linked-list', time: 'O(n)', space: 'O(1)', acceptance: 52.1 },
    // Trees
    { leetcodeId: 94, title: 'Binary Tree Inorder Traversal', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'binary-tree-inorder-traversal', time: 'O(n)', space: 'O(h)', acceptance: 74.8 },
    { leetcodeId: 98, title: 'Validate Binary Search Tree', difficulty: 'Medium' as const, topic: 'Binary Search Tree', subTopic: 'Validation', slug: 'validate-binary-search-tree', time: 'O(n)', space: 'O(h)', acceptance: 32.4 },
    { leetcodeId: 100, title: 'Same Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'same-tree', time: 'O(n)', space: 'O(h)', acceptance: 59.3 },
    { leetcodeId: 101, title: 'Symmetric Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'symmetric-tree', time: 'O(n)', space: 'O(h)', acceptance: 54.6 },
    { leetcodeId: 102, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'binary-tree-level-order-traversal', time: 'O(n)', space: 'O(n)', acceptance: 65.4 },
    { leetcodeId: 104, title: 'Maximum Depth of Binary Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'maximum-depth-of-binary-tree', time: 'O(n)', space: 'O(h)', acceptance: 74.1 },
    { leetcodeId: 105, title: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Construction', slug: 'construct-binary-tree-from-preorder-and-inorder-traversal', time: 'O(n)', space: 'O(n)', acceptance: 62.8 },
    { leetcodeId: 108, title: 'Convert Sorted Array to Binary Search Tree', difficulty: 'Easy' as const, topic: 'Binary Search Tree', subTopic: 'Construction', slug: 'convert-sorted-array-to-binary-search-tree', time: 'O(n)', space: 'O(log n)', acceptance: 70.5 },
    { leetcodeId: 110, title: 'Balanced Binary Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'balanced-binary-tree', time: 'O(n)', space: 'O(h)', acceptance: 51.2 },
    { leetcodeId: 112, title: 'Path Sum', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'path-sum', time: 'O(n)', space: 'O(h)', acceptance: 48.3 },
    { leetcodeId: 124, title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'binary-tree-maximum-path-sum', time: 'O(n)', space: 'O(h)', acceptance: 39.2 },
    { leetcodeId: 226, title: 'Invert Binary Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Operations', slug: 'invert-binary-tree', time: 'O(n)', space: 'O(h)', acceptance: 76.4 },
    { leetcodeId: 230, title: 'Kth Smallest Element in a BST', difficulty: 'Medium' as const, topic: 'Binary Search Tree', subTopic: 'Operations', slug: 'kth-smallest-element-in-a-bst', time: 'O(h+k)', space: 'O(h)', acceptance: 71.3 },
    { leetcodeId: 235, title: 'Lowest Common Ancestor of a Binary Search Tree', difficulty: 'Medium' as const, topic: 'Binary Search Tree', subTopic: 'Ancestor', slug: 'lowest-common-ancestor-of-a-binary-search-tree', time: 'O(h)', space: 'O(1)', acceptance: 62.5 },
    { leetcodeId: 236, title: 'Lowest Common Ancestor of a Binary Tree', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Ancestor', slug: 'lowest-common-ancestor-of-a-binary-tree', time: 'O(n)', space: 'O(h)', acceptance: 60.8 },
    // Dynamic Programming
    { leetcodeId: 62, title: 'Unique Paths', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP', slug: 'unique-paths', time: 'O(m×n)', space: 'O(n)', acceptance: 63.8 },
    { leetcodeId: 63, title: 'Unique Paths II', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP', slug: 'unique-paths-ii', time: 'O(m×n)', space: 'O(n)', acceptance: 40.3 },
    { leetcodeId: 64, title: 'Minimum Path Sum', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP', slug: 'minimum-path-sum', time: 'O(m×n)', space: 'O(1)', acceptance: 62.5 },
    { leetcodeId: 72, title: 'Edit Distance', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'LCS', slug: 'edit-distance', time: 'O(m×n)', space: 'O(m×n)', acceptance: 54.8 },
    { leetcodeId: 91, title: 'Decode Ways', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'decode-ways', time: 'O(n)', space: 'O(1)', acceptance: 33.5 },
    { leetcodeId: 139, title: 'Word Break', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'word-break', time: 'O(n²)', space: 'O(n)', acceptance: 46.1 },
    { leetcodeId: 152, title: 'Maximum Product Subarray', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'maximum-product-subarray', time: 'O(n)', space: 'O(1)', acceptance: 35.1 },
    { leetcodeId: 198, title: 'House Robber', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'house-robber', time: 'O(n)', space: 'O(1)', acceptance: 49.8 },
    { leetcodeId: 213, title: 'House Robber II', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'house-robber-ii', time: 'O(n)', space: 'O(1)', acceptance: 41.3 },
    { leetcodeId: 300, title: 'Longest Increasing Subsequence', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'LIS', slug: 'longest-increasing-subsequence', time: 'O(n log n)', space: 'O(n)', acceptance: 53.4 },
    { leetcodeId: 322, title: 'Coin Change', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack', slug: 'coin-change', time: 'O(n×amount)', space: 'O(amount)', acceptance: 43.2 },
    { leetcodeId: 416, title: 'Partition Equal Subset Sum', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack', slug: 'partition-equal-subset-sum', time: 'O(n×sum)', space: 'O(sum)', acceptance: 46.8 },
    { leetcodeId: 494, title: 'Target Sum', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack', slug: 'target-sum', time: 'O(n×sum)', space: 'O(sum)', acceptance: 45.7 },
    { leetcodeId: 518, title: 'Coin Change II', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack', slug: 'coin-change-ii', time: 'O(n×amount)', space: 'O(amount)', acceptance: 61.2 },
    { leetcodeId: 1143, title: 'Longest Common Subsequence', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'LCS', slug: 'longest-common-subsequence', time: 'O(m×n)', space: 'O(m×n)', acceptance: 58.5 },
    // Graph
    { leetcodeId: 133, title: 'Clone Graph', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Traversal', slug: 'clone-graph', time: 'O(V+E)', space: 'O(V)', acceptance: 54.2 },
    { leetcodeId: 200, title: 'Number of Islands', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Traversal', slug: 'number-of-islands', time: 'O(m×n)', space: 'O(m×n)', acceptance: 57.8 },
    { leetcodeId: 207, title: 'Course Schedule', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Topological Sort', slug: 'course-schedule', time: 'O(V+E)', space: 'O(V+E)', acceptance: 45.8 },
    { leetcodeId: 210, title: 'Course Schedule II', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Topological Sort', slug: 'course-schedule-ii', time: 'O(V+E)', space: 'O(V+E)', acceptance: 48.6 },
    { leetcodeId: 261, title: 'Graph Valid Tree', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Union Find', slug: 'graph-valid-tree', time: 'O(V+E)', space: 'O(V)', acceptance: 46.5, premium: true },
    { leetcodeId: 269, title: 'Alien Dictionary', difficulty: 'Hard' as const, topic: 'Graph', subTopic: 'Topological Sort', slug: 'alien-dictionary', time: 'O(C)', space: 'O(1)', acceptance: 35.2, premium: true },
    { leetcodeId: 323, title: 'Number of Connected Components in an Undirected Graph', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Union Find', slug: 'number-of-connected-components-in-an-undirected-graph', time: 'O(V+E)', space: 'O(V)', acceptance: 62.8, premium: true },
    { leetcodeId: 417, title: 'Pacific Atlantic Water Flow', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Traversal', slug: 'pacific-atlantic-water-flow', time: 'O(m×n)', space: 'O(m×n)', acceptance: 54.6 },
    { leetcodeId: 684, title: 'Redundant Connection', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Union Find', slug: 'redundant-connection', time: 'O(n)', space: 'O(n)', acceptance: 62.4 },
    { leetcodeId: 743, title: 'Network Delay Time', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Shortest Path', slug: 'network-delay-time', time: 'O(E log V)', space: 'O(V+E)', acceptance: 52.3 },
    // Backtracking
    { leetcodeId: 17, title: 'Letter Combinations of a Phone Number', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Combinations', slug: 'letter-combinations-of-a-phone-number', time: 'O(4ⁿ)', space: 'O(n)', acceptance: 58.6 },
    { leetcodeId: 39, title: 'Combination Sum', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Combinations', slug: 'combination-sum', time: 'O(n^target)', space: 'O(target)', acceptance: 69.8 },
    { leetcodeId: 40, title: 'Combination Sum II', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Combinations', slug: 'combination-sum-ii', time: 'O(2ⁿ)', space: 'O(n)', acceptance: 54.2 },
    { leetcodeId: 46, title: 'Permutations', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Permutations', slug: 'permutations', time: 'O(n!)', space: 'O(n)', acceptance: 76.8 },
    { leetcodeId: 47, title: 'Permutations II', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Permutations', slug: 'permutations-ii', time: 'O(n!)', space: 'O(n)', acceptance: 57.4 },
    { leetcodeId: 51, title: 'N-Queens', difficulty: 'Hard' as const, topic: 'Backtracking', subTopic: 'N-Queens', slug: 'n-queens', time: 'O(n!)', space: 'O(n²)', acceptance: 65.8 },
    { leetcodeId: 78, title: 'Subsets', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Subsets', slug: 'subsets', time: 'O(n×2ⁿ)', space: 'O(n)', acceptance: 76.2 },
    { leetcodeId: 79, title: 'Word Search', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Grid', slug: 'word-search', time: 'O(m×n×4^L)', space: 'O(L)', acceptance: 41.8 },
    { leetcodeId: 90, title: 'Subsets II', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Subsets', slug: 'subsets-ii', time: 'O(n×2ⁿ)', space: 'O(n)', acceptance: 56.5 },
    { leetcodeId: 131, title: 'Palindrome Partitioning', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Subsets', slug: 'palindrome-partitioning', time: 'O(n×2ⁿ)', space: 'O(n)', acceptance: 65.3 },
    // Binary Search
    { leetcodeId: 4, title: 'Median of Two Sorted Arrays', difficulty: 'Hard' as const, topic: 'Binary Search', subTopic: 'Search Answer', slug: 'median-of-two-sorted-arrays', time: 'O(log(m+n))', space: 'O(1)', acceptance: 38.5 },
    { leetcodeId: 33, title: 'Search in Rotated Sorted Array', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Rotated Array', slug: 'search-in-rotated-sorted-array', time: 'O(log n)', space: 'O(1)', acceptance: 40.2 },
    { leetcodeId: 34, title: 'Find First and Last Position of Element in Sorted Array', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Search in Array', slug: 'find-first-and-last-position-of-element-in-sorted-array', time: 'O(log n)', space: 'O(1)', acceptance: 42.8 },
    { leetcodeId: 74, title: 'Search a 2D Matrix', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Matrix Search', slug: 'search-a-2d-matrix', time: 'O(log(m×n))', space: 'O(1)', acceptance: 49.5 },
    { leetcodeId: 81, title: 'Search in Rotated Sorted Array II', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Rotated Array', slug: 'search-in-rotated-sorted-array-ii', time: 'O(n)', space: 'O(1)', acceptance: 36.4 },
    { leetcodeId: 153, title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Rotated Array', slug: 'find-minimum-in-rotated-sorted-array', time: 'O(log n)', space: 'O(1)', acceptance: 49.6 },
    { leetcodeId: 154, title: 'Find Minimum in Rotated Sorted Array II', difficulty: 'Hard' as const, topic: 'Binary Search', subTopic: 'Rotated Array', slug: 'find-minimum-in-rotated-sorted-array-ii', time: 'O(n)', space: 'O(1)', acceptance: 43.8 },
    { leetcodeId: 162, title: 'Find Peak Element', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Search Answer', slug: 'find-peak-element', time: 'O(log n)', space: 'O(1)', acceptance: 46.2 },
    { leetcodeId: 240, title: 'Search a 2D Matrix II', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Matrix Search', slug: 'search-a-2d-matrix-ii', time: 'O(m+n)', space: 'O(1)', acceptance: 52.4 },
    { leetcodeId: 278, title: 'First Bad Version', difficulty: 'Easy' as const, topic: 'Binary Search', subTopic: 'Search Answer', slug: 'first-bad-version', time: 'O(log n)', space: 'O(1)', acceptance: 44.5 },
    // Heap
    { leetcodeId: 215, title: 'Kth Largest Element in an Array', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Top K Elements', slug: 'kth-largest-element-in-an-array', time: 'O(n log k)', space: 'O(k)', acceptance: 66.5 },
    { leetcodeId: 253, title: 'Meeting Rooms II', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Interval Scheduling', slug: 'meeting-rooms-ii', time: 'O(n log n)', space: 'O(n)', acceptance: 50.8, premium: true },
    { leetcodeId: 295, title: 'Find Median from Data Stream', difficulty: 'Hard' as const, topic: 'Heap', subTopic: 'Median Finding', slug: 'find-median-from-data-stream', time: 'O(log n)', space: 'O(n)', acceptance: 51.6 },
    { leetcodeId: 347, title: 'Top K Frequent Elements', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Top K Elements', slug: 'top-k-frequent-elements', time: 'O(n log k)', space: 'O(n)', acceptance: 64.8 },
    { leetcodeId: 355, title: 'Design Twitter', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'Data Structures', slug: 'design-twitter', time: 'O(n log k)', space: 'O(n)', acceptance: 37.8 },
    { leetcodeId: 373, title: 'Find K Pairs with Smallest Sums', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Top K Elements', slug: 'find-k-pairs-with-smallest-sums', time: 'O(k log k)', space: 'O(k)', acceptance: 38.6 },
    { leetcodeId: 378, title: 'Kth Smallest Element in a Sorted Matrix', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Top K Elements', slug: 'kth-smallest-element-in-a-sorted-matrix', time: 'O(n log(max-min))', space: 'O(1)', acceptance: 62.5 },
    { leetcodeId: 621, title: 'Task Scheduler', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Task Scheduling', slug: 'task-scheduler', time: 'O(n)', space: 'O(1)', acceptance: 57.8 },
    { leetcodeId: 692, title: 'Top K Frequent Words', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Top K Elements', slug: 'top-k-frequent-words', time: 'O(n log k)', space: 'O(n)', acceptance: 56.4 },
    { leetcodeId: 703, title: 'Kth Largest Element in a Stream', difficulty: 'Easy' as const, topic: 'Heap', subTopic: 'Top K Elements', slug: 'kth-largest-element-in-a-stream', time: 'O(log k)', space: 'O(k)', acceptance: 56.2 },
    // Trie
    { leetcodeId: 208, title: 'Implement Trie (Prefix Tree)', difficulty: 'Medium' as const, topic: 'Trie', subTopic: 'Prefix Tree', slug: 'implement-trie-prefix-tree', time: 'O(m)', space: 'O(m)', acceptance: 63.8 },
    { leetcodeId: 211, title: 'Design Add and Search Words Data Structure', difficulty: 'Medium' as const, topic: 'Trie', subTopic: 'Prefix Tree', slug: 'design-add-and-search-words-data-structure', time: 'O(m)', space: 'O(m)', acceptance: 44.5 },
    { leetcodeId: 212, title: 'Word Search II', difficulty: 'Hard' as const, topic: 'Trie', subTopic: 'Word Search', slug: 'word-search-ii', time: 'O(m×n×4^L)', space: 'O(W×L)', acceptance: 36.8 },
    { leetcodeId: 336, title: 'Palindrome Pairs', difficulty: 'Hard' as const, topic: 'Trie', subTopic: 'Prefix Tree', slug: 'palindrome-pairs', time: 'O(n×k²)', space: 'O(n×k)', acceptance: 35.6 },
    { leetcodeId: 421, title: 'Maximum XOR of Two Numbers in an Array', difficulty: 'Medium' as const, topic: 'Trie', subTopic: 'XOR Trie', slug: 'maximum-xor-of-two-numbers-in-an-array', time: 'O(n)', space: 'O(n)', acceptance: 54.2 },
    // Stack
    { leetcodeId: 32, title: 'Longest Valid Parentheses', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Valid Parentheses', slug: 'longest-valid-parentheses', time: 'O(n)', space: 'O(n)', acceptance: 33.5 },
    { leetcodeId: 42, title: 'Trapping Rain Water', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Monotonic Stack', slug: 'trapping-rain-water', time: 'O(n)', space: 'O(1)', acceptance: 60.5 },
    { leetcodeId: 71, title: 'Simplify Path', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Expression Parsing', slug: 'simplify-path', time: 'O(n)', space: 'O(n)', acceptance: 41.2 },
    { leetcodeId: 84, title: 'Largest Rectangle in Histogram', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Monotonic Stack', slug: 'largest-rectangle-in-histogram', time: 'O(n)', space: 'O(n)', acceptance: 43.8 },
    { leetcodeId: 85, title: 'Maximal Rectangle', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Monotonic Stack', slug: 'maximal-rectangle', time: 'O(m×n)', space: 'O(n)', acceptance: 47.2 },
    { leetcodeId: 150, title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Expression Parsing', slug: 'evaluate-reverse-polish-notation', time: 'O(n)', space: 'O(n)', acceptance: 46.5 },
    { leetcodeId: 155, title: 'Min Stack', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Data Structure', slug: 'min-stack', time: 'O(1)', space: 'O(n)', acceptance: 53.8 },
    { leetcodeId: 224, title: 'Basic Calculator', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Calculator', slug: 'basic-calculator', time: 'O(n)', space: 'O(n)', acceptance: 42.8 },
    { leetcodeId: 227, title: 'Basic Calculator II', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Calculator', slug: 'basic-calculator-ii', time: 'O(n)', space: 'O(n)', acceptance: 43.5 },
    { leetcodeId: 394, title: 'Decode String', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Expression Parsing', slug: 'decode-string', time: 'O(n)', space: 'O(n)', acceptance: 58.4 },
    { leetcodeId: 496, title: 'Next Greater Element I', difficulty: 'Easy' as const, topic: 'Stack', subTopic: 'Monotonic Stack', slug: 'next-greater-element-i', time: 'O(n+m)', space: 'O(n)', acceptance: 72.5 },
    { leetcodeId: 503, title: 'Next Greater Element II', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Monotonic Stack', slug: 'next-greater-element-ii', time: 'O(n)', space: 'O(n)', acceptance: 63.8 },
    { leetcodeId: 739, title: 'Daily Temperatures', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Monotonic Stack', slug: 'daily-temperatures', time: 'O(n)', space: 'O(n)', acceptance: 66.4 },
    // Greedy
    { leetcodeId: 45, title: 'Jump Game II', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'jump-game-ii', time: 'O(n)', space: 'O(1)', acceptance: 40.5 },
    { leetcodeId: 134, title: 'Gas Station', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'gas-station', time: 'O(n)', space: 'O(1)', acceptance: 45.8 },
    { leetcodeId: 135, title: 'Candy', difficulty: 'Hard' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'candy', time: 'O(n)', space: 'O(n)', acceptance: 42.6 },
    { leetcodeId: 406, title: 'Queue Reconstruction by Height', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Sorting', slug: 'queue-reconstruction-by-height', time: 'O(n²)', space: 'O(n)', acceptance: 72.5 },
    { leetcodeId: 435, title: 'Non-overlapping Intervals', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Interval Scheduling', slug: 'non-overlapping-intervals', time: 'O(n log n)', space: 'O(1)', acceptance: 52.8 },
    { leetcodeId: 452, title: 'Minimum Number of Arrows to Burst Balloons', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Interval Scheduling', slug: 'minimum-number-of-arrows-to-burst-balloons', time: 'O(n log n)', space: 'O(1)', acceptance: 56.4 },
    { leetcodeId: 455, title: 'Assign Cookies', difficulty: 'Easy' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'assign-cookies', time: 'O(n log n)', space: 'O(1)', acceptance: 50.5 },
    { leetcodeId: 763, title: 'Partition Labels', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Interval Scheduling', slug: 'partition-labels', time: 'O(n)', space: 'O(1)', acceptance: 79.8 },
    // Math
    { leetcodeId: 7, title: 'Reverse Integer', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'reverse-integer', time: 'O(log x)', space: 'O(1)', acceptance: 28.2 },
    { leetcodeId: 9, title: 'Palindrome Number', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'palindrome-number', time: 'O(log x)', space: 'O(1)', acceptance: 54.5 },
    { leetcodeId: 12, title: 'Integer to Roman', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'integer-to-roman', time: 'O(1)', space: 'O(1)', acceptance: 62.8 },
    { leetcodeId: 13, title: 'Roman to Integer', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'roman-to-integer', time: 'O(n)', space: 'O(1)', acceptance: 58.4 },
    { leetcodeId: 29, title: 'Divide Two Integers', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Bit Manipulation', slug: 'divide-two-integers', time: 'O(log n)', space: 'O(1)', acceptance: 17.5 },
    { leetcodeId: 43, title: 'Multiply Strings', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'multiply-strings', time: 'O(m×n)', space: 'O(m+n)', acceptance: 40.2 },
    { leetcodeId: 48, title: 'Rotate Image', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Rotation', slug: 'rotate-image', time: 'O(n²)', space: 'O(1)', acceptance: 72.5 },
    { leetcodeId: 50, title: 'Pow(x, n)', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'powx-n', time: 'O(log n)', space: 'O(1)', acceptance: 34.8 },
    { leetcodeId: 69, title: 'Sqrt(x)', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'sqrtx', time: 'O(log x)', space: 'O(1)', acceptance: 38.2 },
    { leetcodeId: 172, title: 'Factorial Trailing Zeroes', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'factorial-trailing-zeroes', time: 'O(log n)', space: 'O(1)', acceptance: 43.5 },
    { leetcodeId: 202, title: 'Happy Number', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'happy-number', time: 'O(log n)', space: 'O(log n)', acceptance: 55.4 },
    { leetcodeId: 204, title: 'Count Primes', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'count-primes', time: 'O(n log log n)', space: 'O(n)', acceptance: 33.5 },
    // Bit Manipulation
    { leetcodeId: 137, title: 'Single Number II', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Counting Bits', slug: 'single-number-ii', time: 'O(n)', space: 'O(1)', acceptance: 60.5 },
    { leetcodeId: 190, title: 'Reverse Bits', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'Bit Operations', slug: 'reverse-bits', time: 'O(1)', space: 'O(1)', acceptance: 55.8 },
    { leetcodeId: 191, title: 'Number of 1 Bits', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'Counting Bits', slug: 'number-of-1-bits', time: 'O(1)', space: 'O(1)', acceptance: 68.5 },
    { leetcodeId: 231, title: 'Power of Two', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'Power of Two', slug: 'power-of-two', time: 'O(1)', space: 'O(1)', acceptance: 46.5 },
    { leetcodeId: 260, title: 'Single Number III', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'XOR Operations', slug: 'single-number-iii', time: 'O(n)', space: 'O(1)', acceptance: 68.2 },
    { leetcodeId: 338, title: 'Counting Bits', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'Counting Bits', slug: 'counting-bits', time: 'O(n)', space: 'O(n)', acceptance: 76.8 },
    { leetcodeId: 371, title: 'Sum of Two Integers', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Bit Operations', slug: 'sum-of-two-integers', time: 'O(1)', space: 'O(1)', acceptance: 50.5 },
    { leetcodeId: 389, title: 'Find the Difference', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'XOR Operations', slug: 'find-the-difference', time: 'O(n)', space: 'O(1)', acceptance: 60.2 },
    // Design
    { leetcodeId: 146, title: 'LRU Cache', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'LRU/LFU Cache', slug: 'lru-cache', time: 'O(1)', space: 'O(capacity)', acceptance: 42.5 },
    { leetcodeId: 173, title: 'Binary Search Tree Iterator', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'Iterator Design', slug: 'binary-search-tree-iterator', time: 'O(1) avg', space: 'O(h)', acceptance: 70.8 },
    { leetcodeId: 225, title: 'Implement Stack using Queues', difficulty: 'Easy' as const, topic: 'Design', subTopic: 'Data Structures', slug: 'implement-stack-using-queues', time: 'O(n)', space: 'O(n)', acceptance: 60.5 },
    { leetcodeId: 232, title: 'Implement Queue using Stacks', difficulty: 'Easy' as const, topic: 'Design', subTopic: 'Data Structures', slug: 'implement-queue-using-stacks', time: 'O(1) amortized', space: 'O(n)', acceptance: 63.8 },
    { leetcodeId: 297, title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard' as const, topic: 'Design', subTopic: 'Data Structures', slug: 'serialize-and-deserialize-binary-tree', time: 'O(n)', space: 'O(n)', acceptance: 55.8 },
    { leetcodeId: 380, title: 'Insert Delete GetRandom O(1)', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'Data Structures', slug: 'insert-delete-getrandom-o1', time: 'O(1)', space: 'O(n)', acceptance: 53.2 },
    { leetcodeId: 460, title: 'LFU Cache', difficulty: 'Hard' as const, topic: 'Design', subTopic: 'LRU/LFU Cache', slug: 'lfu-cache', time: 'O(1)', space: 'O(capacity)', acceptance: 43.5 },
    { leetcodeId: 588, title: 'Design In-Memory File System', difficulty: 'Hard' as const, topic: 'Design', subTopic: 'System Design', slug: 'design-in-memory-file-system', time: 'O(m+n)', space: 'O(n)', acceptance: 48.5, premium: true },
    { leetcodeId: 705, title: 'Design HashSet', difficulty: 'Easy' as const, topic: 'Design', subTopic: 'Data Structures', slug: 'design-hashset', time: 'O(1)', space: 'O(n)', acceptance: 66.2 },
    { leetcodeId: 706, title: 'Design HashMap', difficulty: 'Easy' as const, topic: 'Design', subTopic: 'Data Structures', slug: 'design-hashmap', time: 'O(1)', space: 'O(n)', acceptance: 65.5 },
    // Sliding Window
    { leetcodeId: 76, title: 'Minimum Window Substring', difficulty: 'Hard' as const, topic: 'Sliding Window', subTopic: 'With Hash Map', slug: 'minimum-window-substring', time: 'O(m+n)', space: 'O(m+n)', acceptance: 42.5 },
    { leetcodeId: 209, title: 'Minimum Size Subarray Sum', difficulty: 'Medium' as const, topic: 'Sliding Window', subTopic: 'Variable Size', slug: 'minimum-size-subarray-sum', time: 'O(n)', space: 'O(1)', acceptance: 46.8 },
    { leetcodeId: 239, title: 'Sliding Window Maximum', difficulty: 'Hard' as const, topic: 'Sliding Window', subTopic: 'With Hash Map', slug: 'sliding-window-maximum', time: 'O(n)', space: 'O(k)', acceptance: 46.5 },
    { leetcodeId: 424, title: 'Longest Repeating Character Replacement', difficulty: 'Medium' as const, topic: 'Sliding Window', subTopic: 'Variable Size', slug: 'longest-repeating-character-replacement', time: 'O(n)', space: 'O(1)', acceptance: 53.8 },
    { leetcodeId: 567, title: 'Permutation in String', difficulty: 'Medium' as const, topic: 'Sliding Window', subTopic: 'Fixed Size', slug: 'permutation-in-string', time: 'O(n)', space: 'O(1)', acceptance: 44.2 },
    { leetcodeId: 643, title: 'Maximum Average Subarray I', difficulty: 'Easy' as const, topic: 'Sliding Window', subTopic: 'Fixed Size', slug: 'maximum-average-subarray-i', time: 'O(n)', space: 'O(1)', acceptance: 43.8 },
    { leetcodeId: 904, title: 'Fruit Into Baskets', difficulty: 'Medium' as const, topic: 'Sliding Window', subTopic: 'Variable Size', slug: 'fruit-into-baskets', time: 'O(n)', space: 'O(1)', acceptance: 42.5 },
    { leetcodeId: 1004, title: 'Max Consecutive Ones III', difficulty: 'Medium' as const, topic: 'Sliding Window', subTopic: 'Variable Size', slug: 'max-consecutive-ones-iii', time: 'O(n)', space: 'O(1)', acceptance: 64.2 },
    // Two Pointers
    { leetcodeId: 11, title: 'Container With Most Water', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction', slug: 'container-with-most-water', time: 'O(n)', space: 'O(1)', acceptance: 54.5 },
    { leetcodeId: 15, title: '3Sum', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction', slug: '3sum', time: 'O(n²)', space: 'O(1)', acceptance: 33.8 },
    { leetcodeId: 16, title: '3Sum Closest', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction', slug: '3sum-closest', time: 'O(n²)', space: 'O(1)', acceptance: 45.5 },
    { leetcodeId: 18, title: '4Sum', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction', slug: '4sum', time: 'O(n³)', space: 'O(1)', acceptance: 36.8 },
    { leetcodeId: 75, title: 'Sort Colors', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Same Direction', slug: 'sort-colors', time: 'O(n)', space: 'O(1)', acceptance: 60.8 },
    { leetcodeId: 167, title: 'Two Sum II - Input Array Is Sorted', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction', slug: 'two-sum-ii-input-array-is-sorted', time: 'O(n)', space: 'O(1)', acceptance: 60.5 },
    { leetcodeId: 287, title: 'Find the Duplicate Number', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Fast Slow Pointer', slug: 'find-the-duplicate-number', time: 'O(n)', space: 'O(1)', acceptance: 59.8 },
    { leetcodeId: 344, title: 'Reverse String', difficulty: 'Easy' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction', slug: 'reverse-string', time: 'O(n)', space: 'O(1)', acceptance: 77.5 },
    { leetcodeId: 680, title: 'Valid Palindrome II', difficulty: 'Easy' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction', slug: 'valid-palindrome-ii', time: 'O(n)', space: 'O(1)', acceptance: 40.5 },
    { leetcodeId: 977, title: 'Squares of a Sorted Array', difficulty: 'Easy' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction', slug: 'squares-of-a-sorted-array', time: 'O(n)', space: 'O(n)', acceptance: 71.8 },
    // Matrix
    { leetcodeId: 36, title: 'Valid Sudoku', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Validation', slug: 'valid-sudoku', time: 'O(1)', space: 'O(1)', acceptance: 58.5 },
    { leetcodeId: 37, title: 'Sudoku Solver', difficulty: 'Hard' as const, topic: 'Matrix', subTopic: 'Backtracking', slug: 'sudoku-solver', time: 'O(9^81)', space: 'O(81)', acceptance: 58.8 },
    { leetcodeId: 54, title: 'Spiral Matrix', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Spiral', slug: 'spiral-matrix', time: 'O(m×n)', space: 'O(1)', acceptance: 47.8 },
    { leetcodeId: 59, title: 'Spiral Matrix II', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Spiral', slug: 'spiral-matrix-ii', time: 'O(n²)', space: 'O(1)', acceptance: 70.5 },
    { leetcodeId: 73, title: 'Set Matrix Zeroes', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Simulation', slug: 'set-matrix-zeroes', time: 'O(m×n)', space: 'O(1)', acceptance: 53.5 },
    { leetcodeId: 130, title: 'Surrounded Regions', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Island Problems', slug: 'surrounded-regions', time: 'O(m×n)', space: 'O(m×n)', acceptance: 38.5 },
    { leetcodeId: 289, title: 'Game of Life', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Simulation', slug: 'game-of-life', time: 'O(m×n)', space: 'O(1)', acceptance: 68.5 },
    { leetcodeId: 463, title: 'Island Perimeter', difficulty: 'Easy' as const, topic: 'Matrix', subTopic: 'Island Problems', slug: 'island-perimeter', time: 'O(m×n)', space: 'O(1)', acceptance: 70.2 },
    { leetcodeId: 695, title: 'Max Area of Island', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Island Problems', slug: 'max-area-of-island', time: 'O(m×n)', space: 'O(m×n)', acceptance: 71.8 },
    { leetcodeId: 733, title: 'Flood Fill', difficulty: 'Easy' as const, topic: 'Matrix', subTopic: 'Island Problems', slug: 'flood-fill', time: 'O(m×n)', space: 'O(m×n)', acceptance: 61.5 },
    // More problems
    { leetcodeId: 10, title: 'Regular Expression Matching', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'State Machine', slug: 'regular-expression-matching', time: 'O(m×n)', space: 'O(m×n)', acceptance: 28.5 },
    { leetcodeId: 30, title: 'Substring with Concatenation of All Words', difficulty: 'Hard' as const, topic: 'Hash Table', subTopic: 'Mapping', slug: 'substring-with-concatenation-of-all-words', time: 'O(n×m×k)', space: 'O(m×k)', acceptance: 31.2 },
    { leetcodeId: 31, title: 'Next Permutation', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'next-permutation', time: 'O(n)', space: 'O(1)', acceptance: 38.8 },
    { leetcodeId: 38, title: 'Count and Say', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Simulation', slug: 'count-and-say', time: 'O(n×m)', space: 'O(m)', acceptance: 52.5 },
    { leetcodeId: 41, title: 'First Missing Positive', difficulty: 'Hard' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'first-missing-positive', time: 'O(n)', space: 'O(1)', acceptance: 37.5 },
    { leetcodeId: 44, title: 'Wildcard Matching', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'State Machine', slug: 'wildcard-matching', time: 'O(m×n)', space: 'O(m×n)', acceptance: 27.5 },
    { leetcodeId: 57, title: 'Insert Interval', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'insert-interval', time: 'O(n)', space: 'O(n)', acceptance: 39.8 },
    { leetcodeId: 58, title: 'Length of Last Word', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Parsing', slug: 'length-of-last-word', time: 'O(n)', space: 'O(1)', acceptance: 47.5 },
    { leetcodeId: 60, title: 'Permutation Sequence', difficulty: 'Hard' as const, topic: 'Math', subTopic: 'Combinatorics', slug: 'permutation-sequence', time: 'O(n²)', space: 'O(n)', acceptance: 47.2 },
    { leetcodeId: 61, title: 'Rotate List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'rotate-list', time: 'O(n)', space: 'O(1)', acceptance: 36.5 },
    { leetcodeId: 65, title: 'Valid Number', difficulty: 'Hard' as const, topic: 'Strings', subTopic: 'Parsing', slug: 'valid-number', time: 'O(n)', space: 'O(1)', acceptance: 19.5 },
    { leetcodeId: 67, title: 'Add Binary', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Parsing', slug: 'add-binary', time: 'O(max(m,n))', space: 'O(max(m,n))', acceptance: 52.5 },
    { leetcodeId: 68, title: 'Text Justification', difficulty: 'Hard' as const, topic: 'Strings', subTopic: 'Simulation', slug: 'text-justification', time: 'O(n)', space: 'O(n)', acceptance: 40.5 },
    { leetcodeId: 77, title: 'Combinations', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Combinations', slug: 'combinations', time: 'O(k×C(n,k))', space: 'O(k)', acceptance: 68.5 },
    { leetcodeId: 80, title: 'Remove Duplicates from Sorted Array II', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'remove-duplicates-from-sorted-array-ii', time: 'O(n)', space: 'O(1)', acceptance: 56.8 },
    { leetcodeId: 82, title: 'Remove Duplicates from Sorted List II', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'remove-duplicates-from-sorted-list-ii', time: 'O(n)', space: 'O(1)', acceptance: 47.2 },
    { leetcodeId: 83, title: 'Remove Duplicates from Sorted List', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'remove-duplicates-from-sorted-list', time: 'O(n)', space: 'O(1)', acceptance: 51.5 },
    { leetcodeId: 86, title: 'Partition List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Partition', slug: 'partition-list', time: 'O(n)', space: 'O(1)', acceptance: 54.5 },
    { leetcodeId: 87, title: 'Scramble String', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'Interval DP', slug: 'scramble-string', time: 'O(n⁴)', space: 'O(n³)', acceptance: 38.5 },
    { leetcodeId: 89, title: 'Gray Code', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Bit Operations', slug: 'gray-code', time: 'O(2ⁿ)', space: 'O(1)', acceptance: 58.5 },
    { leetcodeId: 92, title: 'Reverse Linked List II', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Reversal', slug: 'reverse-linked-list-ii', time: 'O(n)', space: 'O(1)', acceptance: 46.8 },
    { leetcodeId: 93, title: 'Restore IP Addresses', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Subsets', slug: 'restore-ip-addresses', time: 'O(1)', space: 'O(1)', acceptance: 47.5 },
    { leetcodeId: 95, title: 'Unique Binary Search Trees II', difficulty: 'Medium' as const, topic: 'Binary Search Tree', subTopic: 'Construction', slug: 'unique-binary-search-trees-ii', time: 'O(n×Catalan(n))', space: 'O(n×Catalan(n))', acceptance: 55.8 },
    { leetcodeId: 96, title: 'Unique Binary Search Trees', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'unique-binary-search-trees', time: 'O(n²)', space: 'O(n)', acceptance: 60.5 },
    { leetcodeId: 97, title: 'Interleaving String', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP', slug: 'interleaving-string', time: 'O(m×n)', space: 'O(n)', acceptance: 38.5 },
    { leetcodeId: 99, title: 'Recover Binary Search Tree', difficulty: 'Medium' as const, topic: 'Binary Search Tree', subTopic: 'Recovery', slug: 'recover-binary-search-tree', time: 'O(n)', space: 'O(h)', acceptance: 52.5 },
    { leetcodeId: 103, title: 'Binary Tree Zigzag Level Order Traversal', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'binary-tree-zigzag-level-order-traversal', time: 'O(n)', space: 'O(n)', acceptance: 57.8 },
    { leetcodeId: 106, title: 'Construct Binary Tree from Inorder and Postorder Traversal', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Construction', slug: 'construct-binary-tree-from-inorder-and-postorder-traversal', time: 'O(n)', space: 'O(n)', acceptance: 60.5 },
    { leetcodeId: 107, title: 'Binary Tree Level Order Traversal II', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'binary-tree-level-order-traversal-ii', time: 'O(n)', space: 'O(n)', acceptance: 62.8 },
    { leetcodeId: 109, title: 'Convert Sorted List to Binary Search Tree', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Construction', slug: 'convert-sorted-list-to-binary-search-tree', time: 'O(n log n)', space: 'O(log n)', acceptance: 60.5 },
    { leetcodeId: 111, title: 'Minimum Depth of Binary Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'minimum-depth-of-binary-tree', time: 'O(n)', space: 'O(h)', acceptance: 45.8 },
    { leetcodeId: 113, title: 'Path Sum II', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'path-sum-ii', time: 'O(n²)', space: 'O(n)', acceptance: 57.5 },
    { leetcodeId: 114, title: 'Flatten Binary Tree to Linked List', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Operations', slug: 'flatten-binary-tree-to-linked-list', time: 'O(n)', space: 'O(1)', acceptance: 63.5 },
    { leetcodeId: 115, title: 'Distinct Subsequences', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'LCS', slug: 'distinct-subsequences', time: 'O(m×n)', space: 'O(n)', acceptance: 45.8 },
    { leetcodeId: 116, title: 'Populating Next Right Pointers in Each Node', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Operations', slug: 'populating-next-right-pointers-in-each-node', time: 'O(n)', space: 'O(1)', acceptance: 60.5 },
    { leetcodeId: 117, title: 'Populating Next Right Pointers in Each Node II', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Operations', slug: 'populating-next-right-pointers-in-each-node-ii', time: 'O(n)', space: 'O(1)', acceptance: 51.5 },
    { leetcodeId: 118, title: "Pascal's Triangle", difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'pascals-triangle', time: 'O(n²)', space: 'O(1)', acceptance: 72.5 },
    { leetcodeId: 119, title: "Pascal's Triangle II", difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'pascals-triangle-ii', time: 'O(n)', space: 'O(n)', acceptance: 63.5 },
    { leetcodeId: 120, title: 'Triangle', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP', slug: 'triangle', time: 'O(n²)', space: 'O(n)', acceptance: 55.8 },
    { leetcodeId: 123, title: 'Best Time to Buy and Sell Stock III', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'State Machine', slug: 'best-time-to-buy-and-sell-stock-iii', time: 'O(n)', space: 'O(1)', acceptance: 46.5 },
    { leetcodeId: 126, title: 'Word Ladder II', difficulty: 'Hard' as const, topic: 'Breadth-First Search', subTopic: 'Shortest Path', slug: 'word-ladder-ii', time: 'O(n×m²)', space: 'O(n×m)', acceptance: 27.5 },
    { leetcodeId: 127, title: 'Word Ladder', difficulty: 'Hard' as const, topic: 'Breadth-First Search', subTopic: 'Shortest Path', slug: 'word-ladder', time: 'O(n×m²)', space: 'O(n×m)', acceptance: 38.5 },
    { leetcodeId: 128, title: 'Longest Consecutive Sequence', difficulty: 'Medium' as const, topic: 'Hash Table', subTopic: 'Set Operations', slug: 'longest-consecutive-sequence', time: 'O(n)', space: 'O(n)', acceptance: 48.5 },
    { leetcodeId: 129, title: 'Sum Root to Leaf Numbers', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'sum-root-to-leaf-numbers', time: 'O(n)', space: 'O(h)', acceptance: 61.5 },
    { leetcodeId: 132, title: 'Palindrome Partitioning II', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'Interval DP', slug: 'palindrome-partitioning-ii', time: 'O(n²)', space: 'O(n)', acceptance: 34.5 },
    { leetcodeId: 138, title: 'Copy List with Random Pointer', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Copy', slug: 'copy-list-with-random-pointer', time: 'O(n)', space: 'O(1)', acceptance: 53.8 },
    { leetcodeId: 140, title: 'Word Break II', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'Backtracking', slug: 'word-break-ii', time: 'O(n×2ⁿ)', space: 'O(n×2ⁿ)', acceptance: 45.5 },
    { leetcodeId: 143, title: 'Reorder List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'reorder-list', time: 'O(n)', space: 'O(1)', acceptance: 55.8 },
    { leetcodeId: 144, title: 'Binary Tree Preorder Traversal', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'binary-tree-preorder-traversal', time: 'O(n)', space: 'O(h)', acceptance: 67.5 },
    { leetcodeId: 145, title: 'Binary Tree Postorder Traversal', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'binary-tree-postorder-traversal', time: 'O(n)', space: 'O(h)', acceptance: 68.5 },
    { leetcodeId: 147, title: 'Insertion Sort List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Sorting', slug: 'insertion-sort-list', time: 'O(n²)', space: 'O(1)', acceptance: 52.5 },
    { leetcodeId: 148, title: 'Sort List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Sorting', slug: 'sort-list', time: 'O(n log n)', space: 'O(log n)', acceptance: 56.5 },
    { leetcodeId: 149, title: 'Max Points on a Line', difficulty: 'Hard' as const, topic: 'Geometry', subTopic: 'Line Intersection', slug: 'max-points-on-a-line', time: 'O(n²)', space: 'O(n)', acceptance: 26.5 },
    { leetcodeId: 151, title: 'Reverse Words in a String', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Parsing', slug: 'reverse-words-in-a-string', time: 'O(n)', space: 'O(n)', acceptance: 35.5 },
    { leetcodeId: 160, title: 'Intersection of Two Linked Lists', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Two Pointers', slug: 'intersection-of-two-linked-lists', time: 'O(m+n)', space: 'O(1)', acceptance: 56.5 },
    { leetcodeId: 164, title: 'Maximum Gap', difficulty: 'Medium' as const, topic: 'Sorting', subTopic: 'Bucket Sort', slug: 'maximum-gap', time: 'O(n)', space: 'O(n)', acceptance: 45.5 },
    { leetcodeId: 165, title: 'Compare Version Numbers', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Parsing', slug: 'compare-version-numbers', time: 'O(n+m)', space: 'O(n+m)', acceptance: 36.5 },
    { leetcodeId: 166, title: 'Fraction to Recurring Decimal', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'fraction-to-recurring-decimal', time: 'O(d)', space: 'O(d)', acceptance: 24.5 },
    { leetcodeId: 168, title: 'Excel Sheet Column Title', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'excel-sheet-column-title', time: 'O(log n)', space: 'O(1)', acceptance: 36.5 },
    { leetcodeId: 171, title: 'Excel Sheet Column Number', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'excel-sheet-column-number', time: 'O(n)', space: 'O(1)', acceptance: 62.5 },
    { leetcodeId: 174, title: 'Dungeon Game', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: '2D DP', slug: 'dungeon-game', time: 'O(m×n)', space: 'O(n)', acceptance: 38.5 },
    { leetcodeId: 179, title: 'Largest Number', difficulty: 'Medium' as const, topic: 'Sorting', subTopic: 'Custom Comparator', slug: 'largest-number', time: 'O(n log n)', space: 'O(n)', acceptance: 35.5 },
    { leetcodeId: 187, title: 'Repeated DNA Sequences', difficulty: 'Medium' as const, topic: 'Hash Table', subTopic: 'Mapping', slug: 'repeated-dna-sequences', time: 'O(n)', space: 'O(n)', acceptance: 47.5 },
    { leetcodeId: 188, title: 'Best Time to Buy and Sell Stock IV', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'State Machine', slug: 'best-time-to-buy-and-sell-stock-iv', time: 'O(n×k)', space: 'O(k)', acceptance: 38.5 },
    { leetcodeId: 199, title: 'Binary Tree Right Side View', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'binary-tree-right-side-view', time: 'O(n)', space: 'O(d)', acceptance: 62.5 },
    { leetcodeId: 201, title: 'Bitwise AND of Numbers Range', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Bit Operations', slug: 'bitwise-and-of-numbers-range', time: 'O(log n)', space: 'O(1)', acceptance: 43.5 },
    { leetcodeId: 203, title: 'Remove Linked List Elements', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'remove-linked-list-elements', time: 'O(n)', space: 'O(1)', acceptance: 47.5 },
    { leetcodeId: 205, title: 'Isomorphic Strings', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Mapping', slug: 'isomorphic-strings', time: 'O(n)', space: 'O(1)', acceptance: 43.5 },
    { leetcodeId: 214, title: 'Shortest Palindrome', difficulty: 'Hard' as const, topic: 'Strings', subTopic: 'Pattern Matching', slug: 'shortest-palindrome', time: 'O(n)', space: 'O(n)', acceptance: 32.5 },
    { leetcodeId: 218, title: 'The Skyline Problem', difficulty: 'Hard' as const, topic: 'Heap', subTopic: 'Sweep Line', slug: 'the-skyline-problem', time: 'O(n log n)', space: 'O(n)', acceptance: 42.5 },
    { leetcodeId: 219, title: 'Contains Duplicate II', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Mapping', slug: 'contains-duplicate-ii', time: 'O(n)', space: 'O(min(n,k))', acceptance: 43.5 },
    { leetcodeId: 220, title: 'Contains Duplicate III', difficulty: 'Hard' as const, topic: 'Sliding Window', subTopic: 'With Hash Map', slug: 'contains-duplicate-iii', time: 'O(n log k)', space: 'O(k)', acceptance: 22.5 },
    { leetcodeId: 221, title: 'Maximal Square', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP', slug: 'maximal-square', time: 'O(m×n)', space: 'O(n)', acceptance: 45.5 },
    { leetcodeId: 222, title: 'Count Complete Tree Nodes', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'count-complete-tree-nodes', time: 'O(log²n)', space: 'O(log n)', acceptance: 60.5 },
    { leetcodeId: 223, title: 'Rectangle Area', difficulty: 'Medium' as const, topic: 'Geometry', subTopic: 'Rectangle', slug: 'rectangle-area', time: 'O(1)', space: 'O(1)', acceptance: 45.5 },
    { leetcodeId: 228, title: 'Summary Ranges', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'summary-ranges', time: 'O(n)', space: 'O(1)', acceptance: 48.5 },
    { leetcodeId: 229, title: 'Majority Element II', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'majority-element-ii', time: 'O(n)', space: 'O(1)', acceptance: 48.5 },
    { leetcodeId: 233, title: 'Number of Digit One', difficulty: 'Hard' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'number-of-digit-one', time: 'O(log n)', space: 'O(1)', acceptance: 34.5 },
    { leetcodeId: 237, title: 'Delete Node in a Linked List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'delete-node-in-a-linked-list', time: 'O(1)', space: 'O(1)', acceptance: 76.5 },
    { leetcodeId: 238, title: 'Product of Array Except Self', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Prefix Sum', slug: 'product-of-array-except-self', time: 'O(n)', space: 'O(1)', acceptance: 65.5 },
    { leetcodeId: 241, title: 'Different Ways to Add Parentheses', difficulty: 'Medium' as const, topic: 'Divide and Conquer', subTopic: 'Recursion', slug: 'different-ways-to-add-parentheses', time: 'O(Catalan(n))', space: 'O(Catalan(n))', acceptance: 65.5 },
    { leetcodeId: 242, title: 'Valid Anagram', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Anagram', slug: 'valid-anagram', time: 'O(n)', space: 'O(1)', acceptance: 63.5 },
    { leetcodeId: 257, title: 'Binary Tree Paths', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'binary-tree-paths', time: 'O(n)', space: 'O(h)', acceptance: 61.5 },
    { leetcodeId: 258, title: 'Add Digits', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'add-digits', time: 'O(1)', space: 'O(1)', acceptance: 64.5 },
    { leetcodeId: 263, title: 'Ugly Number', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'ugly-number', time: 'O(log n)', space: 'O(1)', acceptance: 42.5 },
    { leetcodeId: 264, title: 'Ugly Number II', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'ugly-number-ii', time: 'O(n)', space: 'O(n)', acceptance: 46.5 },
    { leetcodeId: 273, title: 'Integer to English Words', difficulty: 'Hard' as const, topic: 'Strings', subTopic: 'Parsing', slug: 'integer-to-english-words', time: 'O(1)', space: 'O(1)', acceptance: 30.5 },
    { leetcodeId: 274, title: 'H-Index', difficulty: 'Medium' as const, topic: 'Sorting', subTopic: 'Custom Comparator', slug: 'h-index', time: 'O(n log n)', space: 'O(1)', acceptance: 38.5 },
    { leetcodeId: 275, title: 'H-Index II', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Search Answer', slug: 'h-index-ii', time: 'O(log n)', space: 'O(1)', acceptance: 38.5 },
    { leetcodeId: 279, title: 'Perfect Squares', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'perfect-squares', time: 'O(n√n)', space: 'O(n)', acceptance: 53.5 },
    { leetcodeId: 282, title: 'Expression Add Operators', difficulty: 'Hard' as const, topic: 'Backtracking', subTopic: 'Expression', slug: 'expression-add-operators', time: 'O(4ⁿ)', space: 'O(n)', acceptance: 40.5 },
    { leetcodeId: 284, title: 'Peeking Iterator', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'Iterator Design', slug: 'peeking-iterator', time: 'O(1)', space: 'O(1)', acceptance: 58.5 },
    { leetcodeId: 290, title: 'Word Pattern', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Mapping', slug: 'word-pattern', time: 'O(n)', space: 'O(n)', acceptance: 42.5 },
    { leetcodeId: 292, title: 'Nim Game', difficulty: 'Easy' as const, topic: 'Game Theory', subTopic: 'Nim Game', slug: 'nim-game', time: 'O(1)', space: 'O(1)', acceptance: 56.5 },
    { leetcodeId: 299, title: 'Bulls and Cows', difficulty: 'Medium' as const, topic: 'Hash Table', subTopic: 'Counting', slug: 'bulls-and-cows', time: 'O(n)', space: 'O(1)', acceptance: 49.5 },
    { leetcodeId: 301, title: 'Remove Invalid Parentheses', difficulty: 'Hard' as const, topic: 'Backtracking', subTopic: 'Pruning', slug: 'remove-invalid-parentheses', time: 'O(2ⁿ)', space: 'O(n)', acceptance: 47.5 },
    { leetcodeId: 303, title: 'Range Sum Query - Immutable', difficulty: 'Easy' as const, topic: 'Prefix Sum', subTopic: '1D Prefix', slug: 'range-sum-query-immutable', time: 'O(1)', space: 'O(n)', acceptance: 58.5 },
    { leetcodeId: 304, title: 'Range Sum Query 2D - Immutable', difficulty: 'Medium' as const, topic: 'Prefix Sum', subTopic: '2D Prefix', slug: 'range-sum-query-2d-immutable', time: 'O(1)', space: 'O(m×n)', acceptance: 52.5 },
    { leetcodeId: 306, title: 'Additive Number', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Pruning', slug: 'additive-number', time: 'O(n³)', space: 'O(n)', acceptance: 31.5 },
    { leetcodeId: 307, title: 'Range Sum Query - Mutable', difficulty: 'Medium' as const, topic: 'Tree', subTopic: 'Segment Tree', slug: 'range-sum-query-mutable', time: 'O(log n)', space: 'O(n)', acceptance: 41.5 },
    { leetcodeId: 309, title: 'Best Time to Buy and Sell Stock with Cooldown', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'State Machine', slug: 'best-time-to-buy-and-sell-stock-with-cooldown', time: 'O(n)', space: 'O(1)', acceptance: 56.5 },
    { leetcodeId: 310, title: 'Minimum Height Trees', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Topological Sort', slug: 'minimum-height-trees', time: 'O(n)', space: 'O(n)', acceptance: 39.5 },
    { leetcodeId: 312, title: 'Burst Balloons', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'Interval DP', slug: 'burst-balloons', time: 'O(n³)', space: 'O(n²)', acceptance: 57.5 },
    { leetcodeId: 313, title: 'Super Ugly Number', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'super-ugly-number', time: 'O(n×k)', space: 'O(n)', acceptance: 46.5 },
    { leetcodeId: 315, title: 'Count of Smaller Numbers After Self', difficulty: 'Hard' as const, topic: 'Tree', subTopic: 'Segment Tree', slug: 'count-of-smaller-numbers-after-self', time: 'O(n log n)', space: 'O(n)', acceptance: 43.5 },
    { leetcodeId: 316, title: 'Remove Duplicate Letters', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Monotonic Stack', slug: 'remove-duplicate-letters', time: 'O(n)', space: 'O(1)', acceptance: 45.5 },
    { leetcodeId: 318, title: 'Maximum Product of Word Lengths', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Bit Masking', slug: 'maximum-product-of-word-lengths', time: 'O(n²)', space: 'O(n)', acceptance: 60.5 },
    { leetcodeId: 319, title: 'Bulb Switcher', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'bulb-switcher', time: 'O(1)', space: 'O(1)', acceptance: 48.5 },
    { leetcodeId: 321, title: 'Create Maximum Number', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Monotonic Stack', slug: 'create-maximum-number', time: 'O(k²(m+n))', space: 'O(k)', acceptance: 29.5 },
    { leetcodeId: 324, title: 'Wiggle Sort II', difficulty: 'Medium' as const, topic: 'Sorting', subTopic: 'Custom Comparator', slug: 'wiggle-sort-ii', time: 'O(n)', space: 'O(n)', acceptance: 33.5 },
    { leetcodeId: 326, title: 'Power of Three', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory', slug: 'power-of-three', time: 'O(1)', space: 'O(1)', acceptance: 45.5 },
    { leetcodeId: 327, title: 'Count of Range Sum', difficulty: 'Hard' as const, topic: 'Divide and Conquer', subTopic: 'Merge Sort', slug: 'count-of-range-sum', time: 'O(n log n)', space: 'O(n)', acceptance: 36.5 },
    { leetcodeId: 328, title: 'Odd Even Linked List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'odd-even-linked-list', time: 'O(n)', space: 'O(1)', acceptance: 61.5 },
    { leetcodeId: 329, title: 'Longest Increasing Path in a Matrix', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: '2D DP', slug: 'longest-increasing-path-in-a-matrix', time: 'O(m×n)', space: 'O(m×n)', acceptance: 53.5 },
    { leetcodeId: 330, title: 'Patching Array', difficulty: 'Hard' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'patching-array', time: 'O(m + log n)', space: 'O(1)', acceptance: 40.5 },
    { leetcodeId: 331, title: 'Verify Preorder Serialization of a Binary Tree', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Serialization', slug: 'verify-preorder-serialization-of-a-binary-tree', time: 'O(n)', space: 'O(1)', acceptance: 44.5 },
    { leetcodeId: 332, title: 'Reconstruct Itinerary', difficulty: 'Hard' as const, topic: 'Graph', subTopic: 'Eulerian Path', slug: 'reconstruct-itinerary', time: 'O(E log E)', space: 'O(E)', acceptance: 41.5 },
    { leetcodeId: 334, title: 'Increasing Triplet Subsequence', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'increasing-triplet-subsequence', time: 'O(n)', space: 'O(1)', acceptance: 42.5 },
    { leetcodeId: 337, title: 'House Robber III', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Tree DP', slug: 'house-robber-iii', time: 'O(n)', space: 'O(h)', acceptance: 54.5 },
    { leetcodeId: 341, title: 'Flatten Nested List Iterator', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'Iterator Design', slug: 'flatten-nested-list-iterator', time: 'O(n)', space: 'O(d)', acceptance: 62.5 },
    { leetcodeId: 342, title: 'Power of Four', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'Power of Two', slug: 'power-of-four', time: 'O(1)', space: 'O(1)', acceptance: 46.5 },
    { leetcodeId: 343, title: 'Integer Break', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'integer-break', time: 'O(n²)', space: 'O(n)', acceptance: 56.5 },
    { leetcodeId: 345, title: 'Reverse Vowels of a String', difficulty: 'Easy' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction', slug: 'reverse-vowels-of-a-string', time: 'O(n)', space: 'O(1)', acceptance: 51.5 },
    { leetcodeId: 349, title: 'Intersection of Two Arrays', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Set Operations', slug: 'intersection-of-two-arrays', time: 'O(n+m)', space: 'O(min(n,m))', acceptance: 72.5 },
    { leetcodeId: 350, title: 'Intersection of Two Arrays II', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Counting', slug: 'intersection-of-two-arrays-ii', time: 'O(n+m)', space: 'O(min(n,m))', acceptance: 56.5 },
    { leetcodeId: 352, title: 'Data Stream as Disjoint Intervals', difficulty: 'Hard' as const, topic: 'Design', subTopic: 'Data Structures', slug: 'data-stream-as-disjoint-intervals', time: 'O(log n)', space: 'O(n)', acceptance: 58.5 },
    { leetcodeId: 354, title: 'Russian Doll Envelopes', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'LIS', slug: 'russian-doll-envelopes', time: 'O(n log n)', space: 'O(n)', acceptance: 40.5 },
  ];

  // Complexity patterns based on topic/subtopic for generated problems
  const complexityPatterns: { [key: string]: { time: string; space: string }[] } = {
    'Arrays': [
      { time: 'O(n)', space: 'O(1)' },
      { time: 'O(n)', space: 'O(n)' },
      { time: 'O(n log n)', space: 'O(1)' },
      { time: 'O(n²)', space: 'O(1)' },
    ],
    'Dynamic Programming': [
      { time: 'O(n)', space: 'O(n)' },
      { time: 'O(n²)', space: 'O(n)' },
      { time: 'O(m×n)', space: 'O(m×n)' },
      { time: 'O(n×amount)', space: 'O(amount)' },
    ],
    'Graph': [
      { time: 'O(V+E)', space: 'O(V)' },
      { time: 'O(V+E)', space: 'O(V+E)' },
      { time: 'O(E log V)', space: 'O(V)' },
      { time: 'O(V²)', space: 'O(V²)' },
    ],
    'Binary Search': [
      { time: 'O(log n)', space: 'O(1)' },
      { time: 'O(n log n)', space: 'O(1)' },
      { time: 'O(log(m×n))', space: 'O(1)' },
    ],
    'Tree': [
      { time: 'O(n)', space: 'O(h)' },
      { time: 'O(n)', space: 'O(n)' },
      { time: 'O(n log n)', space: 'O(n)' },
    ],
    'Binary Tree': [
      { time: 'O(n)', space: 'O(h)' },
      { time: 'O(n)', space: 'O(n)' },
    ],
    'Heap': [
      { time: 'O(n log k)', space: 'O(k)' },
      { time: 'O(n log n)', space: 'O(n)' },
      { time: 'O(log n)', space: 'O(n)' },
    ],
    'Stack': [
      { time: 'O(n)', space: 'O(n)' },
      { time: 'O(n)', space: 'O(1)' },
    ],
    'Backtracking': [
      { time: 'O(2ⁿ)', space: 'O(n)' },
      { time: 'O(n!)', space: 'O(n)' },
      { time: 'O(n×2ⁿ)', space: 'O(n)' },
    ],
    'Linked List': [
      { time: 'O(n)', space: 'O(1)' },
      { time: 'O(n+m)', space: 'O(1)' },
    ],
    'Hash Table': [
      { time: 'O(n)', space: 'O(n)' },
      { time: 'O(1)', space: 'O(n)' },
    ],
    'Strings': [
      { time: 'O(n)', space: 'O(n)' },
      { time: 'O(n)', space: 'O(1)' },
      { time: 'O(n²)', space: 'O(1)' },
    ],
    'Sliding Window': [
      { time: 'O(n)', space: 'O(k)' },
      { time: 'O(n)', space: 'O(1)' },
    ],
    'Two Pointers': [
      { time: 'O(n)', space: 'O(1)' },
      { time: 'O(n²)', space: 'O(1)' },
    ],
    'default': [
      { time: 'O(n)', space: 'O(1)' },
      { time: 'O(n)', space: 'O(n)' },
      { time: 'O(n log n)', space: 'O(n)' },
    ],
  };

  const getComplexity = (topic: string) => {
    const patterns = complexityPatterns[topic] || complexityPatterns['default'];
    return patterns[Math.floor(Math.random() * patterns.length)];
  };

  // Add real problems first
  for (const p of realProblems) {
    const randomCompanies = companies
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 4) + 1);
    
    problems.push({
      id: id++,
      leetcodeId: p.leetcodeId,
      title: p.title,
      difficulty: p.difficulty,
      topic: p.topic,
      subTopic: p.subTopic,
      companies: randomCompanies,
      acceptance: p.acceptance,
      frequency: Math.floor(Math.random() * 100),
      isPremium: (p as any).premium || false,
      url: `https://leetcode.com/problems/${p.slug}/`,
      timeComplexity: p.time,
      spaceComplexity: p.space,
    });
  }

  // Generate additional problems to reach ~3787
  const additionalTitles = [
    'Maximum Sum', 'Minimum Cost', 'Count Pairs', 'Find Path', 'Calculate Distance',
    'Merge Arrays', 'Split String', 'Validate Tree', 'Optimize Route', 'Process Query',
    'Build Graph', 'Transform Matrix', 'Encode Message', 'Decode Signal', 'Parse Expression',
    'Compress Data', 'Expand Pattern', 'Rotate Elements', 'Flip Bits', 'Count Substrings',
    'Find Median', 'Get Maximum', 'Calculate Sum', 'Determine Winner', 'Minimize Operations',
  ];

  const prefixes = ['', 'Find ', 'Count ', 'Maximum ', 'Minimum ', 'Longest ', 'Shortest ', 'Valid ', 'Check ', 'Design '];
  const suffixes = ['', ' II', ' III', ' IV', ' with Constraints', ' in Array', ' in Tree', ' in Graph', ' Optimized'];

  let leetcodeId = 401;
  while (problems.length < 3787) {
    const topic = topics[Math.floor(Math.random() * topics.length)];
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
      leetcodeId: leetcodeId++,
      title,
      difficulty,
      topic: topic.name,
      subTopic,
      companies: randomCompanies,
      acceptance: Math.floor(Math.random() * 40) + 30,
      frequency: Math.floor(Math.random() * 100),
      isPremium: Math.random() > 0.85,
      url: `https://leetcode.com/problems/${slug}/`,
      timeComplexity: complexity.time,
      spaceComplexity: complexity.space,
    });
  }

  return problems;
};

export const problems = generateProblems();

export const getTopicCounts = () => {
  const counts: { [key: string]: number } = {};
  problems.forEach((p) => {
    counts[p.topic] = (counts[p.topic] || 0) + 1;
  });
  return counts;
};

export const getDifficultyCounts = () => {
  const counts = { Easy: 0, Medium: 0, Hard: 0 };
  problems.forEach((p) => {
    counts[p.difficulty]++;
  });
  return counts;
};
