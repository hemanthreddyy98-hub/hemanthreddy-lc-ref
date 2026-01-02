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
  approach: string;
}

export interface Topic {
  name: string;
  icon: string;
  count: number;
  subTopics: string[];
}

export const topics: Topic[] = [
  { name: 'Arrays', icon: '📊', count: 1487, subTopics: ['Two Pointers', 'Sliding Window', 'Prefix Sum', 'Matrix', 'Simulation'] },
  { name: 'Strings', icon: '📝', count: 912, subTopics: ['Pattern Matching', 'Palindrome', 'Anagram', 'Subsequence', 'Parsing'] },
  { name: 'Hash Table', icon: '🔑', count: 789, subTopics: ['Counting', 'Mapping', 'Set Operations', 'Frequency'] },
  { name: 'Dynamic Programming', icon: '🧮', count: 1276, subTopics: ['1D DP', '2D DP', 'Knapsack', 'LCS', 'LIS', 'State Machine', 'Interval DP'] },
  { name: 'Math', icon: '➗', count: 687, subTopics: ['Number Theory', 'Geometry', 'Combinatorics', 'Bit Manipulation'] },
  { name: 'Sorting', icon: '🔢', count: 456, subTopics: ['QuickSort', 'MergeSort', 'Bucket Sort', 'Counting Sort', 'Custom Comparator'] },
  { name: 'Greedy', icon: '💰', count: 578, subTopics: ['Interval Scheduling', 'Task Scheduling', 'Huffman', 'Activity Selection'] },
  { name: 'Depth-First Search', icon: '🌲', count: 798, subTopics: ['Tree DFS', 'Graph DFS', 'Backtracking', 'Cycle Detection'] },
  { name: 'Breadth-First Search', icon: '🌊', count: 587, subTopics: ['Level Order', 'Shortest Path', 'Multi-Source BFS', 'Bidirectional BFS'] },
  { name: 'Binary Search', icon: '🎯', count: 456, subTopics: ['Search in Array', 'Search Answer', 'Rotated Array', 'Matrix Search'] },
  { name: 'Tree', icon: '🌳', count: 634, subTopics: ['Binary Tree', 'BST', 'N-ary Tree', 'Segment Tree', 'Fenwick Tree'] },
  { name: 'Binary Tree', icon: '🌿', count: 489, subTopics: ['Traversal', 'Construction', 'Path', 'Ancestor', 'Serialization'] },
  { name: 'Binary Search Tree', icon: '🔍', count: 267, subTopics: ['Validation', 'Operations', 'Iterator', 'Recovery'] },
  { name: 'Graph', icon: '🕸️', count: 598, subTopics: ['Traversal', 'Shortest Path', 'Minimum Spanning Tree', 'Topological Sort', 'Union Find'] },
  { name: 'Linked List', icon: '🔗', count: 289, subTopics: ['Reversal', 'Cycle Detection', 'Merge', 'Partition', 'Copy'] },
  { name: 'Recursion', icon: '🔄', count: 276, subTopics: ['Divide and Conquer', 'Memoization', 'Tail Recursion'] },
  { name: 'Backtracking', icon: '↩️', count: 398, subTopics: ['Permutations', 'Combinations', 'Subsets', 'N-Queens', 'Sudoku'] },
  { name: 'Stack', icon: '📚', count: 423, subTopics: ['Monotonic Stack', 'Expression Parsing', 'Valid Parentheses', 'Calculator'] },
  { name: 'Queue', icon: '📋', count: 267, subTopics: ['Priority Queue', 'Deque', 'Circular Queue', 'Monotonic Queue'] },
  { name: 'Heap', icon: '🏔️', count: 398, subTopics: ['Min Heap', 'Max Heap', 'Top K Elements', 'Median Finding', 'Merge K Lists'] },
  { name: 'Trie', icon: '🔤', count: 145, subTopics: ['Prefix Tree', 'Autocomplete', 'Word Search', 'XOR Trie'] },
  { name: 'Bit Manipulation', icon: '💻', count: 289, subTopics: ['XOR Operations', 'Bit Masking', 'Power of Two', 'Counting Bits'] },
  { name: 'Two Pointers', icon: '👆', count: 434, subTopics: ['Opposite Direction', 'Same Direction', 'Fast Slow Pointer'] },
  { name: 'Sliding Window', icon: '🪟', count: 267, subTopics: ['Fixed Size', 'Variable Size', 'With Hash Map'] },
  { name: 'Union Find', icon: '🤝', count: 278, subTopics: ['Path Compression', 'Union by Rank', 'Connected Components'] },
  { name: 'Divide and Conquer', icon: '✂️', count: 145, subTopics: ['Merge Sort', 'Quick Select', 'Closest Pair'] },
  { name: 'Design', icon: '🎨', count: 434, subTopics: ['Data Structures', 'System Design', 'Iterator Design', 'LRU/LFU Cache'] },
  { name: 'Simulation', icon: '🎮', count: 289, subTopics: ['Game Simulation', 'Process Simulation', 'Robot Movement'] },
  { name: 'Counting', icon: '🔢', count: 278, subTopics: ['Frequency Count', 'Digit Count', 'Element Count'] },
  { name: 'Matrix', icon: '⬜', count: 423, subTopics: ['Rotation', 'Spiral', 'Search', 'Island Problems'] },
  { name: 'Prefix Sum', icon: '➕', count: 289, subTopics: ['1D Prefix', '2D Prefix', 'Difference Array'] },
  { name: 'Geometry', icon: '📐', count: 145, subTopics: ['Line Intersection', 'Convex Hull', 'Point in Polygon'] },
  { name: 'Game Theory', icon: '🎲', count: 134, subTopics: ['Nim Game', 'Minimax', 'Alpha-Beta Pruning'] },
  { name: 'Interactive', icon: '🎤', count: 123, subTopics: ['Binary Search Guess', 'Find Element', 'Graph Queries'] },
  { name: 'Concurrency', icon: '⚡', count: 112, subTopics: ['Multi-threading', 'Synchronization', 'Semaphores'] },
  { name: 'Database', icon: '🗄️', count: 289, subTopics: ['SQL Queries', 'Joins', 'Aggregation', 'Window Functions'] },
  { name: 'Shell', icon: '💲', count: 54, subTopics: ['Bash Scripting', 'Text Processing'] },
];

// Extended companies list - 50+ companies
const companies = [
  // FAANG+
  'Google', 'Amazon', 'Meta', 'Microsoft', 'Apple', 'Netflix',
  // Big Tech
  'Adobe', 'Uber', 'LinkedIn', 'Twitter', 'Salesforce', 'Oracle', 'IBM', 'Intel', 'Cisco', 'VMware',
  // Finance
  'Goldman Sachs', 'Bloomberg', 'Morgan Stanley', 'JPMorgan', 'Capital One', 'Stripe', 'PayPal', 'Square', 'Robinhood',
  // E-commerce & Retail
  'Walmart', 'eBay', 'Shopify', 'Target', 'Instacart', 'DoorDash', 'Flipkart', 'Myntra',
  // Tech Startups
  'Airbnb', 'Lyft', 'Snap', 'Pinterest', 'Dropbox', 'Slack', 'Zoom', 'Twilio', 'Databricks', 'Snowflake',
  // India Tech
  'TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra', 'Cognizant', 'Accenture', 'Paytm', 'Zomato', 'Swiggy', 'PhonePe', 'Razorpay', 'CRED', 'Ola', 'Byju\'s', 'Dream11', 'Meesho',
  // Gaming & Entertainment
  'Nvidia', 'Epic Games', 'EA', 'Activision', 'Roblox', 'Spotify', 'Disney',
  // Cloud & SaaS
  'Atlassian', 'ServiceNow', 'Workday', 'Splunk', 'Palantir', 'Cloudflare', 'MongoDB', 'Elastic',
  // Semiconductor
  'AMD', 'Qualcomm', 'Broadcom', 'Samsung', 'TSMC',
  // Social & Media
  'Reddit', 'TikTok', 'ByteDance', 'Quora', 'Medium',
  // Others
  'Tesla', 'SpaceX', 'Visa', 'Mastercard', 'American Express', 'Booking.com', 'Expedia', 'Zillow', 'Redfin'
];

// Approach patterns for different topics
const approachPatterns: { [key: string]: string[] } = {
  'Arrays': [
    'Use two pointers from both ends',
    'Sort and use binary search',
    'Use hash map for O(1) lookup',
    'Kadane\'s algorithm for subarray',
    'Prefix sum for range queries',
    'Sliding window technique',
    'Dutch National Flag partitioning',
  ],
  'Strings': [
    'Two pointers for palindrome check',
    'Sliding window for substring',
    'KMP/Rabin-Karp for pattern matching',
    'Use hash map for character frequency',
    'Expand around center for palindrome',
    'Trie for prefix matching',
  ],
  'Dynamic Programming': [
    'Bottom-up tabulation approach',
    'Top-down with memoization',
    'State compression using bitmask',
    '1D DP with space optimization',
    '2D DP with careful state definition',
    'Interval DP for range problems',
    'Digit DP for counting numbers',
  ],
  'Graph': [
    'BFS for shortest path in unweighted',
    'DFS for connected components',
    'Dijkstra for weighted shortest path',
    'Topological sort for DAG',
    'Union-Find for connectivity',
    'Bellman-Ford for negative weights',
    'Floyd-Warshall for all pairs',
  ],
  'Tree': [
    'DFS traversal (preorder/inorder/postorder)',
    'BFS level order traversal',
    'Recursive approach with return values',
    'Morris traversal for O(1) space',
    'Binary search in BST',
    'LCA using parent pointers',
  ],
  'Binary Search': [
    'Standard binary search template',
    'Search for leftmost/rightmost',
    'Binary search on answer space',
    'Rotated array handling',
    'Peak finding approach',
  ],
  'Backtracking': [
    'Generate all permutations',
    'Generate all subsets',
    'Pruning with constraints',
    'State restoration after recursion',
    'Constraint satisfaction approach',
  ],
  'Stack': [
    'Monotonic stack for next greater',
    'Stack for valid parentheses',
    'Expression evaluation',
    'Min stack with O(1) getMin',
    'Histogram largest rectangle',
  ],
  'Heap': [
    'Min heap for Kth largest',
    'Max heap for Kth smallest',
    'Two heaps for median',
    'Heap for merge K sorted',
    'Priority queue with custom comparator',
  ],
  'Hash Table': [
    'Count frequency of elements',
    'Two sum pattern with complement',
    'Grouping by key pattern',
    'Sliding window with hash map',
    'Prefix sum with hash map',
  ],
  'Greedy': [
    'Sort by end time for intervals',
    'Activity selection approach',
    'Huffman coding pattern',
    'Local optimal leads to global',
    'Exchange argument proof',
  ],
  'Linked List': [
    'Fast and slow pointer technique',
    'Reverse in-place',
    'Dummy head for edge cases',
    'Merge two sorted lists',
    'Floyd\'s cycle detection',
  ],
  'Bit Manipulation': [
    'XOR for finding single element',
    'Bit masking for subsets',
    'Count set bits using n&(n-1)',
    'Check power of two',
    'Isolate rightmost set bit',
  ],
  'default': [
    'Brute force with optimization',
    'Use appropriate data structure',
    'Divide and conquer',
    'Greedy with proof',
    'Dynamic programming approach',
  ],
};

const getApproach = (topic: string): string => {
  const patterns = approachPatterns[topic] || approachPatterns['default'];
  return patterns[Math.floor(Math.random() * patterns.length)];
};

const generateProblems = (): Problem[] => {
  const problems: Problem[] = [];
  let id = 1;
  
  // Real LeetCode problems data with exact URL slugs and complexity
  const realProblems = [
    // Arrays - Easy
    { leetcodeId: 1, title: 'Two Sum', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'two-sum', time: 'O(n)', space: 'O(n)', acceptance: 49.5, approach: 'Use hash map to store complement and find pair in O(n)' },
    { leetcodeId: 26, title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'remove-duplicates-from-sorted-array', time: 'O(n)', space: 'O(1)', acceptance: 52.4, approach: 'Two pointers - slow for unique, fast for scanning' },
    { leetcodeId: 27, title: 'Remove Element', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'remove-element', time: 'O(n)', space: 'O(1)', acceptance: 54.1, approach: 'Two pointers - swap unwanted elements to end' },
    { leetcodeId: 35, title: 'Search Insert Position', difficulty: 'Easy' as const, topic: 'Binary Search', subTopic: 'Search in Array', slug: 'search-insert-position', time: 'O(log n)', space: 'O(1)', acceptance: 44.2, approach: 'Binary search - find leftmost insertion point' },
    { leetcodeId: 53, title: 'Maximum Subarray', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'maximum-subarray', time: 'O(n)', space: 'O(1)', acceptance: 50.2, approach: 'Kadane\'s algorithm - track max ending here' },
    { leetcodeId: 55, title: 'Jump Game', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'jump-game', time: 'O(n)', space: 'O(1)', acceptance: 38.5, approach: 'Greedy - track max reachable index' },
    { leetcodeId: 56, title: 'Merge Intervals', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'merge-intervals', time: 'O(n log n)', space: 'O(n)', acceptance: 46.8, approach: 'Sort by start, merge overlapping intervals' },
    { leetcodeId: 66, title: 'Plus One', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'plus-one', time: 'O(n)', space: 'O(1)', acceptance: 43.8, approach: 'Iterate from end, handle carry propagation' },
    { leetcodeId: 70, title: 'Climbing Stairs', difficulty: 'Easy' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'climbing-stairs', time: 'O(n)', space: 'O(1)', acceptance: 52.1, approach: 'Fibonacci pattern - dp[i] = dp[i-1] + dp[i-2]' },
    { leetcodeId: 88, title: 'Merge Sorted Array', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'merge-sorted-array', time: 'O(m+n)', space: 'O(1)', acceptance: 48.5, approach: 'Three pointers from end, fill from back' },
    { leetcodeId: 121, title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'best-time-to-buy-and-sell-stock', time: 'O(n)', space: 'O(1)', acceptance: 54.3, approach: 'Track min price so far, maximize profit' },
    { leetcodeId: 122, title: 'Best Time to Buy and Sell Stock II', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Activity Selection', slug: 'best-time-to-buy-and-sell-stock-ii', time: 'O(n)', space: 'O(1)', acceptance: 63.8, approach: 'Sum all positive differences (upward slopes)' },
    { leetcodeId: 136, title: 'Single Number', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'XOR Operations', slug: 'single-number', time: 'O(n)', space: 'O(1)', acceptance: 71.2, approach: 'XOR all elements - duplicates cancel out' },
    { leetcodeId: 169, title: 'Majority Element', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'majority-element', time: 'O(n)', space: 'O(1)', acceptance: 64.3, approach: 'Boyer-Moore voting algorithm' },
    { leetcodeId: 189, title: 'Rotate Array', difficulty: 'Medium' as const, topic: 'Arrays', subTopic: 'Simulation', slug: 'rotate-array', time: 'O(n)', space: 'O(1)', acceptance: 39.4, approach: 'Reverse entire array, then reverse parts' },
    { leetcodeId: 217, title: 'Contains Duplicate', difficulty: 'Easy' as const, topic: 'Hash Table', subTopic: 'Set Operations', slug: 'contains-duplicate', time: 'O(n)', space: 'O(n)', acceptance: 61.5, approach: 'Use Set to track seen elements' },
    { leetcodeId: 283, title: 'Move Zeroes', difficulty: 'Easy' as const, topic: 'Arrays', subTopic: 'Two Pointers', slug: 'move-zeroes', time: 'O(n)', space: 'O(1)', acceptance: 61.3, approach: 'Two pointers - swap non-zeros to front' },
    { leetcodeId: 268, title: 'Missing Number', difficulty: 'Easy' as const, topic: 'Bit Manipulation', subTopic: 'XOR Operations', slug: 'missing-number', time: 'O(n)', space: 'O(1)', acceptance: 63.1, approach: 'XOR with indices or use sum formula' },
    // Strings
    { leetcodeId: 3, title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Sliding Window', slug: 'longest-substring-without-repeating-characters', time: 'O(n)', space: 'O(min(m,n))', acceptance: 34.2, approach: 'Sliding window with hash set for unique chars' },
    { leetcodeId: 5, title: 'Longest Palindromic Substring', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Palindrome', slug: 'longest-palindromic-substring', time: 'O(n²)', space: 'O(1)', acceptance: 33.1, approach: 'Expand around each center (odd and even)' },
    { leetcodeId: 20, title: 'Valid Parentheses', difficulty: 'Easy' as const, topic: 'Stack', subTopic: 'Valid Parentheses', slug: 'valid-parentheses', time: 'O(n)', space: 'O(n)', acceptance: 40.5, approach: 'Stack - push open, pop and match close' },
    { leetcodeId: 49, title: 'Group Anagrams', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Anagram', slug: 'group-anagrams', time: 'O(n×k log k)', space: 'O(n×k)', acceptance: 67.8, approach: 'Sort each string as key, group in hash map' },
    { leetcodeId: 125, title: 'Valid Palindrome', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Palindrome', slug: 'valid-palindrome', time: 'O(n)', space: 'O(1)', acceptance: 45.8, approach: 'Two pointers from both ends, skip non-alphanumeric' },
    // Linked List
    { leetcodeId: 2, title: 'Add Two Numbers', difficulty: 'Medium' as const, topic: 'Linked List', subTopic: 'Operations', slug: 'add-two-numbers', time: 'O(max(m,n))', space: 'O(max(m,n))', acceptance: 41.6, approach: 'Traverse both lists, handle carry' },
    { leetcodeId: 21, title: 'Merge Two Sorted Lists', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Merge', slug: 'merge-two-sorted-lists', time: 'O(n+m)', space: 'O(1)', acceptance: 63.5, approach: 'Dummy head, compare and link smaller node' },
    { leetcodeId: 23, title: 'Merge k Sorted Lists', difficulty: 'Hard' as const, topic: 'Heap', subTopic: 'Merge K Lists', slug: 'merge-k-sorted-lists', time: 'O(n log k)', space: 'O(k)', acceptance: 51.8, approach: 'Min heap to always get smallest across k lists' },
    { leetcodeId: 141, title: 'Linked List Cycle', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Cycle Detection', slug: 'linked-list-cycle', time: 'O(n)', space: 'O(1)', acceptance: 47.8, approach: 'Floyd\'s cycle detection - fast and slow pointers' },
    { leetcodeId: 206, title: 'Reverse Linked List', difficulty: 'Easy' as const, topic: 'Linked List', subTopic: 'Reversal', slug: 'reverse-linked-list', time: 'O(n)', space: 'O(1)', acceptance: 74.5, approach: 'Iterative - track prev, curr, next pointers' },
    // Trees
    { leetcodeId: 94, title: 'Binary Tree Inorder Traversal', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'binary-tree-inorder-traversal', time: 'O(n)', space: 'O(h)', acceptance: 74.8, approach: 'Recursive: left -> root -> right, or use stack' },
    { leetcodeId: 98, title: 'Validate Binary Search Tree', difficulty: 'Medium' as const, topic: 'Binary Search Tree', subTopic: 'Validation', slug: 'validate-binary-search-tree', time: 'O(n)', space: 'O(h)', acceptance: 32.4, approach: 'DFS with min/max bounds, or inorder must be sorted' },
    { leetcodeId: 100, title: 'Same Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'same-tree', time: 'O(n)', space: 'O(h)', acceptance: 59.3, approach: 'Recursive comparison of structure and values' },
    { leetcodeId: 101, title: 'Symmetric Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'symmetric-tree', time: 'O(n)', space: 'O(h)', acceptance: 54.6, approach: 'Compare left subtree with mirror of right' },
    { leetcodeId: 102, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium' as const, topic: 'Binary Tree', subTopic: 'Traversal', slug: 'binary-tree-level-order-traversal', time: 'O(n)', space: 'O(n)', acceptance: 65.4, approach: 'BFS with queue, process level by level' },
    { leetcodeId: 104, title: 'Maximum Depth of Binary Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Path', slug: 'maximum-depth-of-binary-tree', time: 'O(n)', space: 'O(h)', acceptance: 74.1, approach: 'Recursive: 1 + max(left depth, right depth)' },
    { leetcodeId: 226, title: 'Invert Binary Tree', difficulty: 'Easy' as const, topic: 'Binary Tree', subTopic: 'Operations', slug: 'invert-binary-tree', time: 'O(n)', space: 'O(h)', acceptance: 76.4, approach: 'Recursive: swap left and right children' },
    // Dynamic Programming
    { leetcodeId: 62, title: 'Unique Paths', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP', slug: 'unique-paths', time: 'O(m×n)', space: 'O(n)', acceptance: 63.8, approach: 'DP: dp[i][j] = dp[i-1][j] + dp[i][j-1]' },
    { leetcodeId: 64, title: 'Minimum Path Sum', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '2D DP', slug: 'minimum-path-sum', time: 'O(m×n)', space: 'O(1)', acceptance: 62.5, approach: 'DP: dp[i][j] = grid[i][j] + min(up, left)' },
    { leetcodeId: 72, title: 'Edit Distance', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'LCS', slug: 'edit-distance', time: 'O(m×n)', space: 'O(m×n)', acceptance: 54.8, approach: 'DP: insert, delete, replace operations' },
    { leetcodeId: 139, title: 'Word Break', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'word-break', time: 'O(n²)', space: 'O(n)', acceptance: 46.1, approach: 'DP: dp[i] = any dp[j] && s[j:i] in dict' },
    { leetcodeId: 198, title: 'House Robber', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: '1D DP', slug: 'house-robber', time: 'O(n)', space: 'O(1)', acceptance: 49.8, approach: 'DP: max(rob this + dp[i-2], dp[i-1])' },
    { leetcodeId: 300, title: 'Longest Increasing Subsequence', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'LIS', slug: 'longest-increasing-subsequence', time: 'O(n log n)', space: 'O(n)', acceptance: 53.4, approach: 'Binary search on patience sort / tails array' },
    { leetcodeId: 322, title: 'Coin Change', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'Knapsack', slug: 'coin-change', time: 'O(n×amount)', space: 'O(amount)', acceptance: 43.2, approach: 'DP: dp[a] = min(dp[a], dp[a-coin]+1)' },
    { leetcodeId: 1143, title: 'Longest Common Subsequence', difficulty: 'Medium' as const, topic: 'Dynamic Programming', subTopic: 'LCS', slug: 'longest-common-subsequence', time: 'O(m×n)', space: 'O(m×n)', acceptance: 58.5, approach: 'DP: if match dp[i][j]=dp[i-1][j-1]+1 else max' },
    // Graph
    { leetcodeId: 133, title: 'Clone Graph', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Traversal', slug: 'clone-graph', time: 'O(V+E)', space: 'O(V)', acceptance: 54.2, approach: 'DFS/BFS with hash map to track cloned nodes' },
    { leetcodeId: 200, title: 'Number of Islands', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Traversal', slug: 'number-of-islands', time: 'O(m×n)', space: 'O(m×n)', acceptance: 57.8, approach: 'DFS/BFS to mark connected land, count components' },
    { leetcodeId: 207, title: 'Course Schedule', difficulty: 'Medium' as const, topic: 'Graph', subTopic: 'Topological Sort', slug: 'course-schedule', time: 'O(V+E)', space: 'O(V+E)', acceptance: 45.8, approach: 'Detect cycle using DFS or Kahn\'s algorithm' },
    // Backtracking
    { leetcodeId: 39, title: 'Combination Sum', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Combinations', slug: 'combination-sum', time: 'O(n^target)', space: 'O(target)', acceptance: 69.8, approach: 'Backtrack with start index, reuse same element' },
    { leetcodeId: 46, title: 'Permutations', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Permutations', slug: 'permutations', time: 'O(n!)', space: 'O(n)', acceptance: 76.8, approach: 'Backtrack with used array or swap elements' },
    { leetcodeId: 78, title: 'Subsets', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Subsets', slug: 'subsets', time: 'O(n×2ⁿ)', space: 'O(n)', acceptance: 76.2, approach: 'Include/exclude each element, or iterative doubling' },
    { leetcodeId: 79, title: 'Word Search', difficulty: 'Medium' as const, topic: 'Backtracking', subTopic: 'Grid', slug: 'word-search', time: 'O(m×n×4^L)', space: 'O(L)', acceptance: 41.8, approach: 'DFS from each cell, mark visited, backtrack' },
    // Binary Search
    { leetcodeId: 4, title: 'Median of Two Sorted Arrays', difficulty: 'Hard' as const, topic: 'Binary Search', subTopic: 'Search Answer', slug: 'median-of-two-sorted-arrays', time: 'O(log(m+n))', space: 'O(1)', acceptance: 38.5, approach: 'Binary search on partition, ensure left half valid' },
    { leetcodeId: 33, title: 'Search in Rotated Sorted Array', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Rotated Array', slug: 'search-in-rotated-sorted-array', time: 'O(log n)', space: 'O(1)', acceptance: 40.2, approach: 'Binary search - identify sorted half, narrow search' },
    { leetcodeId: 153, title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Rotated Array', slug: 'find-minimum-in-rotated-sorted-array', time: 'O(log n)', space: 'O(1)', acceptance: 49.6, approach: 'Binary search - compare mid with right end' },
    // Heap
    { leetcodeId: 215, title: 'Kth Largest Element in an Array', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Top K Elements', slug: 'kth-largest-element-in-an-array', time: 'O(n log k)', space: 'O(k)', acceptance: 66.5, approach: 'Min heap of size k, or QuickSelect for O(n) avg' },
    { leetcodeId: 295, title: 'Find Median from Data Stream', difficulty: 'Hard' as const, topic: 'Heap', subTopic: 'Median Finding', slug: 'find-median-from-data-stream', time: 'O(log n)', space: 'O(n)', acceptance: 51.6, approach: 'Two heaps: max heap for lower, min heap for upper' },
    { leetcodeId: 347, title: 'Top K Frequent Elements', difficulty: 'Medium' as const, topic: 'Heap', subTopic: 'Top K Elements', slug: 'top-k-frequent-elements', time: 'O(n log k)', space: 'O(n)', acceptance: 64.8, approach: 'Count frequency, use min heap of size k' },
    // Trie
    { leetcodeId: 208, title: 'Implement Trie (Prefix Tree)', difficulty: 'Medium' as const, topic: 'Trie', subTopic: 'Prefix Tree', slug: 'implement-trie-prefix-tree', time: 'O(m)', space: 'O(m)', acceptance: 63.8, approach: 'Tree nodes with children map, track word end' },
    // Stack
    { leetcodeId: 42, title: 'Trapping Rain Water', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Monotonic Stack', slug: 'trapping-rain-water', time: 'O(n)', space: 'O(1)', acceptance: 60.5, approach: 'Two pointers or monotonic stack for bounds' },
    { leetcodeId: 84, title: 'Largest Rectangle in Histogram', difficulty: 'Hard' as const, topic: 'Stack', subTopic: 'Monotonic Stack', slug: 'largest-rectangle-in-histogram', time: 'O(n)', space: 'O(n)', acceptance: 43.8, approach: 'Monotonic stack - find left/right smaller bounds' },
    { leetcodeId: 155, title: 'Min Stack', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Data Structure', slug: 'min-stack', time: 'O(1)', space: 'O(n)', acceptance: 53.8, approach: 'Two stacks: one for elements, one for min so far' },
    { leetcodeId: 739, title: 'Daily Temperatures', difficulty: 'Medium' as const, topic: 'Stack', subTopic: 'Monotonic Stack', slug: 'daily-temperatures', time: 'O(n)', space: 'O(n)', acceptance: 66.4, approach: 'Monotonic decreasing stack, store indices' },
  ];

  const complexityPatterns: { [key: string]: { time: string; space: string }[] } = {
    'Arrays': [
      { time: 'O(n)', space: 'O(1)' },
      { time: 'O(n)', space: 'O(n)' },
      { time: 'O(n log n)', space: 'O(1)' },
      { time: 'O(n²)', space: 'O(1)' },
    ],
    'Dynamic Programming': [
      { time: 'O(n)', space: 'O(n)' },
      { time: 'O(n)', space: 'O(1)' },
      { time: 'O(n²)', space: 'O(n)' },
      { time: 'O(m×n)', space: 'O(m×n)' },
      { time: 'O(n×amount)', space: 'O(amount)' },
    ],
    'Binary Search': [
      { time: 'O(log n)', space: 'O(1)' },
      { time: 'O(n log n)', space: 'O(n)' },
    ],
    'Graph': [
      { time: 'O(V+E)', space: 'O(V)' },
      { time: 'O(V+E)', space: 'O(V+E)' },
      { time: 'O(E log V)', space: 'O(V)' },
      { time: 'O(V²)', space: 'O(V²)' },
    ],
    'Tree': [
      { time: 'O(n)', space: 'O(h)' },
      { time: 'O(n)', space: 'O(n)' },
      { time: 'O(h)', space: 'O(1)' },
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
      .slice(0, Math.floor(Math.random() * 5) + 2);
    
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
      isPremium: false,
      url: `https://leetcode.com/problems/${p.slug}/`,
      timeComplexity: p.time,
      spaceComplexity: p.space,
      approach: p.approach,
    });
  }

  // Generate additional problems to reach ~12000 (LeetCode portion)
  const additionalTitles = [
    'Maximum Sum', 'Minimum Cost', 'Count Pairs', 'Find Path', 'Calculate Distance',
    'Merge Arrays', 'Split String', 'Validate Tree', 'Optimize Route', 'Process Query',
    'Build Graph', 'Transform Matrix', 'Encode Message', 'Decode Signal', 'Parse Expression',
    'Compress Data', 'Expand Pattern', 'Rotate Elements', 'Flip Bits', 'Count Substrings',
    'Find Median', 'Get Maximum', 'Calculate Sum', 'Determine Winner', 'Minimize Operations',
    'Maximize Profit', 'Balance Partition', 'Detect Cycle', 'Find Bridge', 'Count Islands',
    'Shortest Bridge', 'Longest Path', 'Minimum Spanning', 'Maximum Flow', 'Bipartite Check',
    'Palindrome Check', 'Anagram Groups', 'Subsequence Match', 'Pattern Search', 'String Hash',
  ];

  const prefixes = ['', 'Find ', 'Count ', 'Maximum ', 'Minimum ', 'Longest ', 'Shortest ', 'Valid ', 'Check ', 'Design ', 'Implement ', 'Optimize '];
  const suffixes = ['', ' II', ' III', ' IV', ' with Constraints', ' in Array', ' in Tree', ' in Graph', ' Optimized', ' Extended', ' Advanced'];

  let leetcodeId = 401;
  while (problems.length < 12000) {
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const subTopic = topic.subTopics[Math.floor(Math.random() * topic.subTopics.length)];
    const difficulty = ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)] as 'Easy' | 'Medium' | 'Hard';
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const baseTitle = additionalTitles[Math.floor(Math.random() * additionalTitles.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const title = `${prefix}${baseTitle}${suffix}`.trim();
    
    const randomCompanies = companies
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 5) + 1);
    
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
      url: `https://leetcode.com/problemset/?search=${encodeURIComponent(title)}&page=1`,
      timeComplexity: complexity.time,
      spaceComplexity: complexity.space,
      approach: getApproach(topic.name),
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
