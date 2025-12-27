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
  
  // Real LeetCode problems data (comprehensive list) with exact URL slugs
  const realProblems = [
    // Arrays - Easy
    { leetcodeId: 1, title: 'Two Sum', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'two-sum' },
    { leetcodeId: 26, title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'remove-duplicates-from-sorted-array' },
    { leetcodeId: 27, title: 'Remove Element', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'remove-element' },
    { leetcodeId: 35, title: 'Search Insert Position', difficulty: 'Easy' as const, topic: 'Binary Search', subTopic: 'Search in Array', slug: 'search-insert-position' },
    { leetcodeId: 53, title: 'Maximum Subarray', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'maximum-subarray' },
    { leetcodeId: 55, title: 'Jump Game', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'jump-game' },
    { leetcodeId: 56, title: 'Merge Intervals', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'merge-intervals' },
    { leetcodeId: 66, title: 'Plus One', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'plus-one' },
    { leetcodeId: 70, title: 'Climbing Stairs', difficulty: 'Easy' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'climbing-stairs' },
    { leetcodeId: 88, title: 'Merge Sorted Array', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'merge-sorted-array' },
    { leetcodeId: 121, title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'best-time-to-buy-and-sell-stock' },
    { leetcodeId: 122, title: 'Best Time to Buy and Sell Stock II', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'best-time-to-buy-and-sell-stock-ii' },
    { leetcodeId: 136, title: 'Single Number', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'XOR Operations', slug: 'single-number' },
    { leetcodeId: 169, title: 'Majority Element', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'majority-element' },
    { leetcodeId: 189, title: 'Rotate Array', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'rotate-array' },
    { leetcodeId: 217, title: 'Contains Duplicate', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Set Operations', slug: 'contains-duplicate' },
    { leetcodeId: 283, title: 'Move Zeroes', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'move-zeroes' },
    { leetcodeId: 268, title: 'Missing Number', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'XOR Operations', slug: 'missing-number' },
    { leetcodeId: 485, title: 'Max Consecutive Ones', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'max-consecutive-ones' },
    { leetcodeId: 448, title: 'Find All Numbers Disappeared in an Array', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'find-all-numbers-disappeared-in-an-array' },
    // Strings
    { leetcodeId: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Sliding Window', slug: 'longest-substring-without-repeating-characters' },
    { leetcodeId: 5, title: 'Longest Palindromic Substring', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Palindrome', slug: 'longest-palindromic-substring' },
    { leetcodeId: 6, title: 'Zigzag Conversion', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Simulation', slug: 'zigzag-conversion' },
    { leetcodeId: 8, title: 'String to Integer (atoi)', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Parsing', slug: 'string-to-integer-atoi' },
    { leetcodeId: 14, title: 'Longest Common Prefix', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Pattern Matching', slug: 'longest-common-prefix' },
    { leetcodeId: 20, title: 'Valid Parentheses', difficulty: 'Easy' as const, topic: 'Stack', subTopic: 'Valid Parentheses', slug: 'valid-parentheses' },
    { leetcodeId: 22, title: 'Generate Parentheses', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Combinations', slug: 'generate-parentheses' },
    { leetcodeId: 28, title: 'Find the Index of the First Occurrence in a String', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Pattern Matching', slug: 'find-the-index-of-the-first-occurrence-in-a-string' },
    { leetcodeId: 49, title: 'Group Anagrams', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Anagram', slug: 'group-anagrams' },
    { leetcodeId: 125, title: 'Valid Palindrome', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Palindrome', slug: 'valid-palindrome' },
    // Linked List
    { leetcodeId: 2, title: 'Add Two Numbers', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'add-two-numbers' },
    { leetcodeId: 19, title: 'Remove Nth Node From End of List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Two Pointers', slug: 'remove-nth-node-from-end-of-list' },
    { leetcodeId: 21, title: 'Merge Two Sorted Lists', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Merge', slug: 'merge-two-sorted-lists' },
    { leetcodeId: 23, title: 'Merge k Sorted Lists', difficulty: 'Hard' as const, topic: 'Heap', subTopic: 'Merge K Lists', slug: 'merge-k-sorted-lists' },
    { leetcodeId: 24, title: 'Swap Nodes in Pairs', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'swap-nodes-in-pairs' },
    { leetcodeId: 25, title: 'Reverse Nodes in k-Group', difficulty: 'Hard' as const, topic: 'Linked List', subTopic: 'Reversal', slug: 'reverse-nodes-in-k-group' },
    { leetcodeId: 141, title: 'Linked List Cycle', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Cycle Detection', slug: 'linked-list-cycle' },
    { leetcodeId: 142, title: 'Linked List Cycle II', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Cycle Detection', slug: 'linked-list-cycle-ii' },
    { leetcodeId: 206, title: 'Reverse Linked List', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Reversal', slug: 'reverse-linked-list' },
    { leetcodeId: 234, title: 'Palindrome Linked List', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'palindrome-linked-list' },
    // Trees
    { leetcodeId: 94, title: 'Binary Tree Inorder Traversal', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'binary-tree-inorder-traversal' },
    { leetcodeId: 98, title: 'Validate Binary Search Tree', difficulty: 'Medium' as const, topic: 'Binary Search Tree', subTopic: 'Validation', slug: 'validate-binary-search-tree' },
    { leetcodeId: 100, title: 'Same Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'same-tree' },
    { leetcodeId: 101, title: 'Symmetric Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'symmetric-tree' },
    { leetcodeId: 102, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'binary-tree-level-order-traversal' },
    { leetcodeId: 104, title: 'Maximum Depth of Binary Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'maximum-depth-of-binary-tree' },
    { leetcodeId: 105, title: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Construction', slug: 'construct-binary-tree-from-preorder-and-inorder-traversal' },
    { leetcodeId: 108, title: 'Convert Sorted Array to Binary Search Tree', difficulty: 'Easy' as const, topic: 'Binary Search Tree', subTopic: 'Construction', slug: 'convert-sorted-array-to-binary-search-tree' },
    { leetcodeId: 110, title: 'Balanced Binary Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'balanced-binary-tree' },
    { leetcodeId: 112, title: 'Path Sum', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'path-sum' },
    { leetcodeId: 124, title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'binary-tree-maximum-path-sum' },
    { leetcodeId: 226, title: 'Invert Binary Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Operations', slug: 'invert-binary-tree' },
    { leetcodeId: 230, title: 'Kth Smallest Element in a BST', difficulty: 'Medium' as const, topic: 'Binary Search Tree', subTopic: 'Operations', slug: 'kth-smallest-element-in-a-bst' },
    { leetcodeId: 235, title: 'Lowest Common Ancestor of a Binary Search Tree', difficulty: 'Medium' as const, topic: 'Binary Search Tree', subTopic: 'Ancestor', slug: 'lowest-common-ancestor-of-a-binary-search-tree' },
    { leetcodeId: 236, title: 'Lowest Common Ancestor of a Binary Tree', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Ancestor', slug: 'lowest-common-ancestor-of-a-binary-tree' },
    // Dynamic Programming
    { leetcodeId: 62, title: 'Unique Paths', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP', slug: 'unique-paths' },
    { leetcodeId: 63, title: 'Unique Paths II', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP', slug: 'unique-paths-ii' },
    { leetcodeId: 64, title: 'Minimum Path Sum', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP', slug: 'minimum-path-sum' },
    { leetcodeId: 72, title: 'Edit Distance', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'LCS', slug: 'edit-distance' },
    { leetcodeId: 91, title: 'Decode Ways', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'decode-ways' },
    { leetcodeId: 139, title: 'Word Break', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'word-break' },
    { leetcodeId: 152, title: 'Maximum Product Subarray', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'maximum-product-subarray' },
    { leetcodeId: 198, title: 'House Robber', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'house-robber' },
    { leetcodeId: 213, title: 'House Robber II', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'house-robber-ii' },
    { leetcodeId: 300, title: 'Longest Increasing Subsequence', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'LIS', slug: 'longest-increasing-subsequence' },
    { leetcodeId: 322, title: 'Coin Change', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack', slug: 'coin-change' },
    { leetcodeId: 416, title: 'Partition Equal Subset Sum', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack', slug: 'partition-equal-subset-sum' },
    { leetcodeId: 494, title: 'Target Sum', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack', slug: 'target-sum' },
    { leetcodeId: 518, title: 'Coin Change II', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack', slug: 'coin-change-ii' },
    { leetcodeId: 1143, title: 'Longest Common Subsequence', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'LCS', slug: 'longest-common-subsequence' },
    // Graph
    { leetcodeId: 133, title: 'Clone Graph', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Traversal', slug: 'clone-graph' },
    { leetcodeId: 200, title: 'Number of Islands', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Traversal', slug: 'number-of-islands' },
    { leetcodeId: 207, title: 'Course Schedule', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Topological Sort', slug: 'course-schedule' },
    { leetcodeId: 210, title: 'Course Schedule II', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Topological Sort', slug: 'course-schedule-ii' },
    { leetcodeId: 261, title: 'Graph Valid Tree', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Union Find', slug: 'graph-valid-tree' },
    { leetcodeId: 269, title: 'Alien Dictionary', difficulty: 'Hard' as const, topic: 'Graph', subTopic: 'Topological Sort', slug: 'alien-dictionary' },
    { leetcodeId: 323, title: 'Number of Connected Components in an Undirected Graph', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Union Find', slug: 'number-of-connected-components-in-an-undirected-graph' },
    { leetcodeId: 417, title: 'Pacific Atlantic Water Flow', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Traversal', slug: 'pacific-atlantic-water-flow' },
    { leetcodeId: 684, title: 'Redundant Connection', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Union Find', slug: 'redundant-connection' },
    { leetcodeId: 743, title: 'Network Delay Time', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Shortest Path', slug: 'network-delay-time' },
    // Backtracking
    { leetcodeId: 17, title: 'Letter Combinations of a Phone Number', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Combinations', slug: 'letter-combinations-of-a-phone-number' },
    { leetcodeId: 39, title: 'Combination Sum', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Combinations', slug: 'combination-sum' },
    { leetcodeId: 40, title: 'Combination Sum II', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Combinations', slug: 'combination-sum-ii' },
    { leetcodeId: 46, title: 'Permutations', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Permutations', slug: 'permutations' },
    { leetcodeId: 47, title: 'Permutations II', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Permutations', slug: 'permutations-ii' },
    { leetcodeId: 51, title: 'N-Queens', difficulty: 'Hard' as const, topic: 'Backtracking', subTopic: 'N-Queens', slug: 'n-queens' },
    { leetcodeId: 78, title: 'Subsets', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Subsets', slug: 'subsets' },
    { leetcodeId: 79, title: 'Word Search', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'N-Queens', slug: 'word-search' },
    { leetcodeId: 90, title: 'Subsets II', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Subsets', slug: 'subsets-ii' },
    { leetcodeId: 131, title: 'Palindrome Partitioning', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Subsets', slug: 'palindrome-partitioning' },
    // Binary Search
    { leetcodeId: 4, title: 'Median of Two Sorted Arrays', difficulty: 'Hard' as const, topic: 'Binary Search', subTopic: 'Search Answer', slug: 'median-of-two-sorted-arrays' },
    { leetcodeId: 33, title: 'Search in Rotated Sorted Array', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Rotated Array', slug: 'search-in-rotated-sorted-array' },
    { leetcodeId: 34, title: 'Find First and Last Position of Element in Sorted Array', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Search in Array', slug: 'find-first-and-last-position-of-element-in-sorted-array' },
    { leetcodeId: 74, title: 'Search a 2D Matrix', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Matrix Search', slug: 'search-a-2d-matrix' },
    { leetcodeId: 81, title: 'Search in Rotated Sorted Array II', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Rotated Array', slug: 'search-in-rotated-sorted-array-ii' },
    { leetcodeId: 153, title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Rotated Array', slug: 'find-minimum-in-rotated-sorted-array' },
    { leetcodeId: 154, title: 'Find Minimum in Rotated Sorted Array II', difficulty: 'Hard' as const, topic: 'Binary Search', subTopic: 'Rotated Array', slug: 'find-minimum-in-rotated-sorted-array-ii' },
    { leetcodeId: 162, title: 'Find Peak Element', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Search Answer', slug: 'find-peak-element' },
    { leetcodeId: 240, title: 'Search a 2D Matrix II', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Matrix Search', slug: 'search-a-2d-matrix-ii' },
    { leetcodeId: 278, title: 'First Bad Version', difficulty: 'Easy' as const, topic: 'Binary Search', subTopic: 'Search Answer', slug: 'first-bad-version' },
    // Heap
    { leetcodeId: 215, title: 'Kth Largest Element in an Array', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Top K Elements' },
    { leetcodeId: 253, title: 'Meeting Rooms II', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Interval Scheduling' },
    { leetcodeId: 295, title: 'Find Median from Data Stream', difficulty: 'Hard' as const, topic: 'Heap', subTopic: 'Median Finding' },
    { leetcodeId: 347, title: 'Top K Frequent Elements', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Top K Elements' },
    { leetcodeId: 355, title: 'Design Twitter', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'Data Structures' },
    { leetcodeId: 373, title: 'Find K Pairs with Smallest Sums', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Top K Elements' },
    { leetcodeId: 378, title: 'Kth Smallest Element in a Sorted Matrix', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Top K Elements' },
    { leetcodeId: 621, title: 'Task Scheduler', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Task Scheduling' },
    { leetcodeId: 692, title: 'Top K Frequent Words', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Top K Elements' },
    { leetcodeId: 703, title: 'Kth Largest Element in a Stream', difficulty: 'Easy' as const, topic: 'Heap', subTopic: 'Top K Elements' },
    // Trie
    { leetcodeId: 208, title: 'Implement Trie (Prefix Tree)', difficulty: 'Medium' as const, topic: 'Trie', subTopic: 'Prefix Tree' },
    { leetcodeId: 211, title: 'Design Add and Search Words Data Structure', difficulty: 'Medium' as const, topic: 'Trie', subTopic: 'Prefix Tree' },
    { leetcodeId: 212, title: 'Word Search II', difficulty: 'Hard' as const, topic: 'Trie', subTopic: 'Word Search' },
    { leetcodeId: 336, title: 'Palindrome Pairs', difficulty: 'Hard' as const, topic: 'Trie', subTopic: 'Prefix Tree' },
    { leetcodeId: 421, title: 'Maximum XOR of Two Numbers in an Array', difficulty: 'Medium' as const, topic: 'Trie', subTopic: 'XOR Trie' },
    // Stack
    { leetcodeId: 32, title: 'Longest Valid Parentheses', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Valid Parentheses' },
    { leetcodeId: 42, title: 'Trapping Rain Water', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Monotonic Stack' },
    { leetcodeId: 71, title: 'Simplify Path', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Expression Parsing' },
    { leetcodeId: 84, title: 'Largest Rectangle in Histogram', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Monotonic Stack' },
    { leetcodeId: 85, title: 'Maximal Rectangle', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Monotonic Stack' },
    { leetcodeId: 150, title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Expression Parsing' },
    { leetcodeId: 155, title: 'Min Stack', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Data Structure' },
    { leetcodeId: 224, title: 'Basic Calculator', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Calculator' },
    { leetcodeId: 227, title: 'Basic Calculator II', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Calculator' },
    { leetcodeId: 394, title: 'Decode String', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Expression Parsing' },
    { leetcodeId: 496, title: 'Next Greater Element I', difficulty: 'Easy' as const, topic: 'Stack', subTopic: 'Monotonic Stack' },
    { leetcodeId: 503, title: 'Next Greater Element II', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Monotonic Stack' },
    { leetcodeId: 739, title: 'Daily Temperatures', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Monotonic Stack' },
    // Greedy
    { leetcodeId: 45, title: 'Jump Game II', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Activity Selection' },
    { leetcodeId: 134, title: 'Gas Station', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Activity Selection' },
    { leetcodeId: 135, title: 'Candy', difficulty: 'Hard' as const, topic: 'Greedy', subTopic: 'Activity Selection' },
    { leetcodeId: 406, title: 'Queue Reconstruction by Height', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Sorting' },
    { leetcodeId: 435, title: 'Non-overlapping Intervals', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Interval Scheduling' },
    { leetcodeId: 452, title: 'Minimum Number of Arrows to Burst Balloons', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Interval Scheduling' },
    { leetcodeId: 455, title: 'Assign Cookies', difficulty: 'Easy' as const, topic: 'Greedy', subTopic: 'Activity Selection' },
    { leetcodeId: 763, title: 'Partition Labels', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Interval Scheduling' },
    // Math
    { leetcodeId: 7, title: 'Reverse Integer', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 9, title: 'Palindrome Number', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 12, title: 'Integer to Roman', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 13, title: 'Roman to Integer', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 29, title: 'Divide Two Integers', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Bit Manipulation' },
    { leetcodeId: 43, title: 'Multiply Strings', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 48, title: 'Rotate Image', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Rotation' },
    { leetcodeId: 50, title: 'Pow(x, n)', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 69, title: 'Sqrt(x)', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 172, title: 'Factorial Trailing Zeroes', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 202, title: 'Happy Number', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 204, title: 'Count Primes', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory' },
    // Bit Manipulation
    { leetcodeId: 137, title: 'Single Number II', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Counting Bits' },
    { leetcodeId: 190, title: 'Reverse Bits', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'Bit Operations' },
    { leetcodeId: 191, title: 'Number of 1 Bits', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'Counting Bits' },
    { leetcodeId: 231, title: 'Power of Two', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'Power of Two' },
    { leetcodeId: 260, title: 'Single Number III', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'XOR Operations' },
    { leetcodeId: 338, title: 'Counting Bits', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'Counting Bits' },
    { leetcodeId: 371, title: 'Sum of Two Integers', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Bit Operations' },
    { leetcodeId: 389, title: 'Find the Difference', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'XOR Operations' },
    // Design
    { leetcodeId: 146, title: 'LRU Cache', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'LRU/LFU Cache' },
    { leetcodeId: 173, title: 'Binary Search Tree Iterator', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'Iterator Design' },
    { leetcodeId: 225, title: 'Implement Stack using Queues', difficulty: 'Easy' as const, topic: 'Design', subTopic: 'Data Structures' },
    { leetcodeId: 232, title: 'Implement Queue using Stacks', difficulty: 'Easy' as const, topic: 'Design', subTopic: 'Data Structures' },
    { leetcodeId: 297, title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard' as const, topic: 'Design', subTopic: 'Data Structures' },
    { leetcodeId: 380, title: 'Insert Delete GetRandom O(1)', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'Data Structures' },
    { leetcodeId: 460, title: 'LFU Cache', difficulty: 'Hard' as const, topic: 'Design', subTopic: 'LRU/LFU Cache' },
    { leetcodeId: 588, title: 'Design In-Memory File System', difficulty: 'Hard' as const, topic: 'Design', subTopic: 'System Design' },
    { leetcodeId: 705, title: 'Design HashSet', difficulty: 'Easy' as const, topic: 'Design', subTopic: 'Data Structures' },
    { leetcodeId: 706, title: 'Design HashMap', difficulty: 'Easy' as const, topic: 'Design', subTopic: 'Data Structures' },
    // Sliding Window
    { leetcodeId: 76, title: 'Minimum Window Substring', difficulty: 'Hard' as const, topic: 'Sliding Window', subTopic: 'With Hash Map' },
    { leetcodeId: 209, title: 'Minimum Size Subarray Sum', difficulty: 'Medium' as const, topic: 'Sliding Window', subTopic: 'Variable Size' },
    { leetcodeId: 239, title: 'Sliding Window Maximum', difficulty: 'Hard' as const, topic: 'Sliding Window', subTopic: 'With Hash Map' },
    { leetcodeId: 424, title: 'Longest Repeating Character Replacement', difficulty: 'Medium' as const, topic: 'Sliding Window', subTopic: 'Variable Size' },
    { leetcodeId: 567, title: 'Permutation in String', difficulty: 'Medium' as const, topic: 'Sliding Window', subTopic: 'Fixed Size' },
    { leetcodeId: 643, title: 'Maximum Average Subarray I', difficulty: 'Easy' as const, topic: 'Sliding Window', subTopic: 'Fixed Size' },
    { leetcodeId: 904, title: 'Fruit Into Baskets', difficulty: 'Medium' as const, topic: 'Sliding Window', subTopic: 'Variable Size' },
    { leetcodeId: 1004, title: 'Max Consecutive Ones III', difficulty: 'Medium' as const, topic: 'Sliding Window', subTopic: 'Variable Size' },
    // Two Pointers
    { leetcodeId: 11, title: 'Container With Most Water', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction' },
    { leetcodeId: 15, title: '3Sum', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction' },
    { leetcodeId: 16, title: '3Sum Closest', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction' },
    { leetcodeId: 18, title: '4Sum', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction' },
    { leetcodeId: 75, title: 'Sort Colors', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Same Direction' },
    { leetcodeId: 167, title: 'Two Sum II - Input Array Is Sorted', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction' },
    { leetcodeId: 287, title: 'Find the Duplicate Number', difficulty: 'Medium' as const, topic: 'Two Pointers', subTopic: 'Fast Slow Pointer' },
    { leetcodeId: 344, title: 'Reverse String', difficulty: 'Easy' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction' },
    { leetcodeId: 680, title: 'Valid Palindrome II', difficulty: 'Easy' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction' },
    { leetcodeId: 977, title: 'Squares of a Sorted Array', difficulty: 'Easy' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction' },
    // Matrix
    { leetcodeId: 36, title: 'Valid Sudoku', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Validation' },
    { leetcodeId: 37, title: 'Sudoku Solver', difficulty: 'Hard' as const, topic: 'Matrix', subTopic: 'Backtracking' },
    { leetcodeId: 54, title: 'Spiral Matrix', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Spiral' },
    { leetcodeId: 59, title: 'Spiral Matrix II', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Spiral' },
    { leetcodeId: 73, title: 'Set Matrix Zeroes', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Simulation' },
    { leetcodeId: 130, title: 'Surrounded Regions', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Island Problems' },
    { leetcodeId: 289, title: 'Game of Life', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Simulation' },
    { leetcodeId: 463, title: 'Island Perimeter', difficulty: 'Easy' as const, topic: 'Matrix', subTopic: 'Island Problems' },
    { leetcodeId: 695, title: 'Max Area of Island', difficulty: 'Medium' as const, topic: 'Matrix', subTopic: 'Island Problems' },
    { leetcodeId: 733, title: 'Flood Fill', difficulty: 'Easy' as const, topic: 'Matrix', subTopic: 'Island Problems' },
    // Additional problems from different topics
    { leetcodeId: 10, title: 'Regular Expression Matching', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'State Machine' },
    { leetcodeId: 30, title: 'Substring with Concatenation of All Words', difficulty: 'Hard' as const, topic: 'Hash Table', subTopic: 'Mapping' },
    { leetcodeId: 31, title: 'Next Permutation', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation' },
    { leetcodeId: 38, title: 'Count and Say', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Simulation' },
    { leetcodeId: 41, title: 'First Missing Positive', difficulty: 'Hard' as const, topic: 'Arrays', subTopic: 'Simulation' },
    { leetcodeId: 44, title: 'Wildcard Matching', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'State Machine' },
    { leetcodeId: 57, title: 'Insert Interval', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation' },
    { leetcodeId: 58, title: 'Length of Last Word', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Parsing' },
    { leetcodeId: 60, title: 'Permutation Sequence', difficulty: 'Hard' as const, topic: 'Math', subTopic: 'Combinatorics' },
    { leetcodeId: 61, title: 'Rotate List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations' },
    { leetcodeId: 65, title: 'Valid Number', difficulty: 'Hard' as const, topic: 'Strings', subTopic: 'Parsing' },
    { leetcodeId: 67, title: 'Add Binary', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Parsing' },
    { leetcodeId: 68, title: 'Text Justification', difficulty: 'Hard' as const, topic: 'Strings', subTopic: 'Simulation' },
    { leetcodeId: 77, title: 'Combinations', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Combinations' },
    { leetcodeId: 80, title: 'Remove Duplicates from Sorted Array II', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Two Pointers' },
    { leetcodeId: 82, title: 'Remove Duplicates from Sorted List II', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations' },
    { leetcodeId: 83, title: 'Remove Duplicates from Sorted List', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Operations' },
    { leetcodeId: 86, title: 'Partition List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Partition' },
    { leetcodeId: 87, title: 'Scramble String', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'Interval DP' },
    { leetcodeId: 89, title: 'Gray Code', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Bit Operations' },
    { leetcodeId: 92, title: 'Reverse Linked List II', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Reversal' },
    { leetcodeId: 93, title: 'Restore IP Addresses', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Subsets' },
    { leetcodeId: 95, title: 'Unique Binary Search Trees II', difficulty: 'Medium' as const, topic: 'Binary Search Tree', subTopic: 'Construction' },
    { leetcodeId: 96, title: 'Unique Binary Search Trees', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP' },
    { leetcodeId: 97, title: 'Interleaving String', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP' },
    { leetcodeId: 99, title: 'Recover Binary Search Tree', difficulty: 'Medium' as const, topic: 'Binary Search Tree', subTopic: 'Recovery' },
    { leetcodeId: 103, title: 'Binary Tree Zigzag Level Order Traversal', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Traversal' },
    { leetcodeId: 106, title: 'Construct Binary Tree from Inorder and Postorder Traversal', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Construction' },
    { leetcodeId: 107, title: 'Binary Tree Level Order Traversal II', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Traversal' },
    { leetcodeId: 109, title: 'Convert Sorted List to Binary Search Tree', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Construction' },
    { leetcodeId: 111, title: 'Minimum Depth of Binary Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Path' },
    { leetcodeId: 113, title: 'Path Sum II', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Path' },
    { leetcodeId: 114, title: 'Flatten Binary Tree to Linked List', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Operations' },
    { leetcodeId: 115, title: 'Distinct Subsequences', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'LCS' },
    { leetcodeId: 116, title: 'Populating Next Right Pointers in Each Node', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Operations' },
    { leetcodeId: 117, title: 'Populating Next Right Pointers in Each Node II', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Operations' },
    { leetcodeId: 118, title: 'Pascal\'s Triangle', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation' },
    { leetcodeId: 119, title: 'Pascal\'s Triangle II', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation' },
    { leetcodeId: 120, title: 'Triangle', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP' },
    { leetcodeId: 123, title: 'Best Time to Buy and Sell Stock III', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'State Machine' },
    { leetcodeId: 126, title: 'Word Ladder II', difficulty: 'Hard' as const, topic: 'Breadth-First Search', subTopic: 'Shortest Path' },
    { leetcodeId: 127, title: 'Word Ladder', difficulty: 'Hard' as const, topic: 'Breadth-First Search', subTopic: 'Shortest Path' },
    { leetcodeId: 128, title: 'Longest Consecutive Sequence', difficulty: 'Medium' as const, topic: 'Hash Table', subTopic: 'Set Operations' },
    { leetcodeId: 129, title: 'Sum Root to Leaf Numbers', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Path' },
    { leetcodeId: 132, title: 'Palindrome Partitioning II', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'Interval DP' },
    { leetcodeId: 138, title: 'Copy List with Random Pointer', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Copy' },
    { leetcodeId: 140, title: 'Word Break II', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'Backtracking' },
    { leetcodeId: 143, title: 'Reorder List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations' },
    { leetcodeId: 144, title: 'Binary Tree Preorder Traversal', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Traversal' },
    { leetcodeId: 145, title: 'Binary Tree Postorder Traversal', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Traversal' },
    { leetcodeId: 147, title: 'Insertion Sort List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Sorting' },
    { leetcodeId: 148, title: 'Sort List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Sorting' },
    { leetcodeId: 149, title: 'Max Points on a Line', difficulty: 'Hard' as const, topic: 'Geometry', subTopic: 'Line Intersection' },
    { leetcodeId: 151, title: 'Reverse Words in a String', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Parsing' },
    { leetcodeId: 160, title: 'Intersection of Two Linked Lists', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Two Pointers' },
    { leetcodeId: 164, title: 'Maximum Gap', difficulty: 'Medium' as const, topic: 'Sorting', subTopic: 'Bucket Sort' },
    { leetcodeId: 165, title: 'Compare Version Numbers', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Parsing' },
    { leetcodeId: 166, title: 'Fraction to Recurring Decimal', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 168, title: 'Excel Sheet Column Title', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 171, title: 'Excel Sheet Column Number', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 174, title: 'Dungeon Game', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: '2D DP' },
    { leetcodeId: 179, title: 'Largest Number', difficulty: 'Medium' as const, topic: 'Sorting', subTopic: 'Custom Comparator' },
    { leetcodeId: 187, title: 'Repeated DNA Sequences', difficulty: 'Medium' as const, topic: 'Hash Table', subTopic: 'Mapping' },
    { leetcodeId: 188, title: 'Best Time to Buy and Sell Stock IV', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'State Machine' },
    { leetcodeId: 199, title: 'Binary Tree Right Side View', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Traversal' },
    { leetcodeId: 201, title: 'Bitwise AND of Numbers Range', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Bit Operations' },
    { leetcodeId: 203, title: 'Remove Linked List Elements', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Operations' },
    { leetcodeId: 205, title: 'Isomorphic Strings', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Mapping' },
    { leetcodeId: 214, title: 'Shortest Palindrome', difficulty: 'Hard' as const, topic: 'Strings', subTopic: 'Pattern Matching' },
    { leetcodeId: 218, title: 'The Skyline Problem', difficulty: 'Hard' as const, topic: 'Heap', subTopic: 'Sweep Line' },
    { leetcodeId: 219, title: 'Contains Duplicate II', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Mapping' },
    { leetcodeId: 220, title: 'Contains Duplicate III', difficulty: 'Hard' as const, topic: 'Sliding Window', subTopic: 'With Hash Map' },
    { leetcodeId: 221, title: 'Maximal Square', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP' },
    { leetcodeId: 222, title: 'Count Complete Tree Nodes', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Path' },
    { leetcodeId: 223, title: 'Rectangle Area', difficulty: 'Medium' as const, topic: 'Geometry', subTopic: 'Rectangle' },
    { leetcodeId: 228, title: 'Summary Ranges', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation' },
    { leetcodeId: 229, title: 'Majority Element II', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation' },
    { leetcodeId: 233, title: 'Number of Digit One', difficulty: 'Hard' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 237, title: 'Delete Node in a Linked List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations' },
    { leetcodeId: 238, title: 'Product of Array Except Self', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Prefix Sum' },
    { leetcodeId: 241, title: 'Different Ways to Add Parentheses', difficulty: 'Medium' as const, topic: 'Divide and Conquer', subTopic: 'Recursion' },
    { leetcodeId: 242, title: 'Valid Anagram', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Anagram' },
    { leetcodeId: 257, title: 'Binary Tree Paths', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Path' },
    { leetcodeId: 258, title: 'Add Digits', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 263, title: 'Ugly Number', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 264, title: 'Ugly Number II', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP' },
    { leetcodeId: 273, title: 'Integer to English Words', difficulty: 'Hard' as const, topic: 'Strings', subTopic: 'Parsing' },
    { leetcodeId: 274, title: 'H-Index', difficulty: 'Medium' as const, topic: 'Sorting', subTopic: 'Custom Comparator' },
    { leetcodeId: 275, title: 'H-Index II', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Search Answer' },
    { leetcodeId: 279, title: 'Perfect Squares', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP' },
    { leetcodeId: 282, title: 'Expression Add Operators', difficulty: 'Hard' as const, topic: 'Backtracking', subTopic: 'Expression' },
    { leetcodeId: 284, title: 'Peeking Iterator', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'Iterator Design' },
    { leetcodeId: 290, title: 'Word Pattern', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Mapping' },
    { leetcodeId: 292, title: 'Nim Game', difficulty: 'Easy' as const, topic: 'Game Theory', subTopic: 'Nim Game' },
    { leetcodeId: 299, title: 'Bulls and Cows', difficulty: 'Medium' as const, topic: 'Hash Table', subTopic: 'Counting' },
    { leetcodeId: 301, title: 'Remove Invalid Parentheses', difficulty: 'Hard' as const, topic: 'Backtracking', subTopic: 'Pruning' },
    { leetcodeId: 303, title: 'Range Sum Query - Immutable', difficulty: 'Easy' as const, topic: 'Prefix Sum', subTopic: '1D Prefix' },
    { leetcodeId: 304, title: 'Range Sum Query 2D - Immutable', difficulty: 'Medium' as const, topic: 'Prefix Sum', subTopic: '2D Prefix' },
    { leetcodeId: 306, title: 'Additive Number', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Pruning' },
    { leetcodeId: 307, title: 'Range Sum Query - Mutable', difficulty: 'Medium' as const, topic: 'Tree', subTopic: 'Segment Tree' },
    { leetcodeId: 309, title: 'Best Time to Buy and Sell Stock with Cooldown', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'State Machine' },
    { leetcodeId: 310, title: 'Minimum Height Trees', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Topological Sort' },
    { leetcodeId: 312, title: 'Burst Balloons', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'Interval DP' },
    { leetcodeId: 313, title: 'Super Ugly Number', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP' },
    { leetcodeId: 315, title: 'Count of Smaller Numbers After Self', difficulty: 'Hard' as const, topic: 'Tree', subTopic: 'Segment Tree' },
    { leetcodeId: 316, title: 'Remove Duplicate Letters', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Monotonic Stack' },
    { leetcodeId: 318, title: 'Maximum Product of Word Lengths', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Bit Masking' },
    { leetcodeId: 319, title: 'Bulb Switcher', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 321, title: 'Create Maximum Number', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Monotonic Stack' },
    { leetcodeId: 324, title: 'Wiggle Sort II', difficulty: 'Medium' as const, topic: 'Sorting', subTopic: 'Custom Comparator' },
    { leetcodeId: 326, title: 'Power of Three', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 327, title: 'Count of Range Sum', difficulty: 'Hard' as const, topic: 'Divide and Conquer', subTopic: 'Merge Sort' },
    { leetcodeId: 328, title: 'Odd Even Linked List', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations' },
    { leetcodeId: 329, title: 'Longest Increasing Path in a Matrix', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: '2D DP' },
    { leetcodeId: 330, title: 'Patching Array', difficulty: 'Hard' as const, topic: 'Greedy', subTopic: 'Activity Selection' },
    { leetcodeId: 331, title: 'Verify Preorder Serialization of a Binary Tree', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Serialization' },
    { leetcodeId: 332, title: 'Reconstruct Itinerary', difficulty: 'Hard' as const, topic: 'Graph', subTopic: 'Eulerian Path' },
    { leetcodeId: 334, title: 'Increasing Triplet Subsequence', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation' },
    { leetcodeId: 337, title: 'House Robber III', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Tree DP' },
    { leetcodeId: 341, title: 'Flatten Nested List Iterator', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'Iterator Design' },
    { leetcodeId: 342, title: 'Power of Four', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'Power of Two' },
    { leetcodeId: 343, title: 'Integer Break', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP' },
    { leetcodeId: 345, title: 'Reverse Vowels of a String', difficulty: 'Easy' as const, topic: 'Two Pointers', subTopic: 'Opposite Direction' },
    { leetcodeId: 349, title: 'Intersection of Two Arrays', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Set Operations' },
    { leetcodeId: 350, title: 'Intersection of Two Arrays II', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Counting' },
    { leetcodeId: 352, title: 'Data Stream as Disjoint Intervals', difficulty: 'Hard' as const, topic: 'Design', subTopic: 'Data Structures' },
    { leetcodeId: 354, title: 'Russian Doll Envelopes', difficulty: 'Hard' as const, topic: 'Dynamic Programming', subTopic: 'LIS' },
    { leetcodeId: 357, title: 'Count Numbers with Unique Digits', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Combinatorics' },
    { leetcodeId: 363, title: 'Max Sum of Rectangle No Larger Than K', difficulty: 'Hard' as const, topic: 'Prefix Sum', subTopic: '2D Prefix' },
    { leetcodeId: 365, title: 'Water and Jug Problem', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 367, title: 'Valid Perfect Square', difficulty: 'Easy' as const, topic: 'Binary Search', subTopic: 'Search Answer' },
    { leetcodeId: 368, title: 'Largest Divisible Subset', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'LIS' },
    { leetcodeId: 372, title: 'Super Pow', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 374, title: 'Guess Number Higher or Lower', difficulty: 'Easy' as const, topic: 'Binary Search', subTopic: 'Search Answer' },
    { leetcodeId: 375, title: 'Guess Number Higher or Lower II', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Interval DP' },
    { leetcodeId: 376, title: 'Wiggle Subsequence', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'LIS' },
    { leetcodeId: 377, title: 'Combination Sum IV', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack' },
    { leetcodeId: 382, title: 'Linked List Random Node', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'Reservoir Sampling' },
    { leetcodeId: 383, title: 'Ransom Note', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Counting' },
    { leetcodeId: 384, title: 'Shuffle an Array', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'Randomization' },
    { leetcodeId: 385, title: 'Mini Parser', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Expression Parsing' },
    { leetcodeId: 386, title: 'Lexicographical Numbers', difficulty: 'Medium' as const, topic: 'Depth-First Search', subTopic: 'Tree DFS' },
    { leetcodeId: 387, title: 'First Unique Character in a String', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Counting' },
    { leetcodeId: 388, title: 'Longest Absolute File Path', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Expression Parsing' },
    { leetcodeId: 390, title: 'Elimination Game', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 391, title: 'Perfect Rectangle', difficulty: 'Hard' as const, topic: 'Geometry', subTopic: 'Rectangle' },
    { leetcodeId: 392, title: 'Is Subsequence', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Subsequence' },
    { leetcodeId: 393, title: 'UTF-8 Validation', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Bit Operations' },
    { leetcodeId: 395, title: 'Longest Substring with At Least K Repeating Characters', difficulty: 'Medium' as const, topic: 'Divide and Conquer', subTopic: 'Recursion' },
    { leetcodeId: 396, title: 'Rotate Function', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory' },
    { leetcodeId: 397, title: 'Integer Replacement', difficulty: 'Medium' as const, topic: 'Bit Manipulation', subTopic: 'Bit Operations' },
    { leetcodeId: 398, title: 'Random Pick Index', difficulty: 'Medium' as const, topic: 'Design', subTopic: 'Reservoir Sampling' },
    { leetcodeId: 399, title: 'Evaluate Division', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Union Find' },
    { leetcodeId: 400, title: 'Nth Digit', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'Number Theory' },
  ];

  // Helper function to generate slug from title
  const generateSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

  // Add real problems first
  for (const p of realProblems) {
    const randomCompanies = companies
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 4) + 1);
    
    const slug = (p as any).slug || generateSlug(p.title);
    
    problems.push({
      id: id++,
      leetcodeId: p.leetcodeId,
      title: p.title,
      difficulty: p.difficulty,
      topic: p.topic,
      subTopic: p.subTopic,
      companies: randomCompanies,
      acceptance: Math.floor(Math.random() * 40) + 30,
      frequency: Math.floor(Math.random() * 100),
      isPremium: Math.random() > 0.85,
      url: `https://leetcode.com/problems/${slug}/`,
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
    const baseTitle = additionalTitles[Math.floor(Math.random() * additionalTitles.length)];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const title = `${prefix}${baseTitle}${suffix} ${leetcodeId}`.trim();
    
    const difficulties: ('Easy' | 'Medium' | 'Hard')[] = ['Easy', 'Medium', 'Hard'];
    const difficultyWeights = [0.3, 0.5, 0.2];
    const rand = Math.random();
    let difficulty: 'Easy' | 'Medium' | 'Hard' = 'Medium';
    if (rand < difficultyWeights[0]) difficulty = 'Easy';
    else if (rand < difficultyWeights[0] + difficultyWeights[1]) difficulty = 'Medium';
    else difficulty = 'Hard';

    const randomCompanies = companies
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 4) + 1);

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
      url: `https://leetcode.com/problems/${generateSlug(title)}/`,
    });
  }

  return problems;
};

export const problems: Problem[] = generateProblems();

export const getTopicCounts = () => {
  const counts: Record<string, number> = {};
  topics.forEach(t => counts[t.name] = 0);
  problems.forEach(p => {
    if (counts[p.topic] !== undefined) counts[p.topic]++;
  });
  return counts;
};

export const getDifficultyCounts = () => {
  return {
    Easy: problems.filter(p => p.difficulty === 'Easy').length,
    Medium: problems.filter(p => p.difficulty === 'Medium').length,
    Hard: problems.filter(p => p.difficulty === 'Hard').length,
  };
};
