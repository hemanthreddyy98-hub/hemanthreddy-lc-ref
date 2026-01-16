// Comprehensive topics with all subtopics for DSA problems

export interface TopicDefinition {
  name: string;
  icon: string;
  count: number;
  subTopics: string[];
}

// Master topic list with comprehensive subtopics
export const MASTER_TOPICS: TopicDefinition[] = [
  { 
    name: 'Arrays', 
    icon: '📊', 
    count: 500,
    subTopics: [
      'Two Pointers', 'Sliding Window', 'Prefix Sum', 'Suffix Sum', 'Difference Array',
      'Kadane\'s Algorithm', 'Dutch National Flag', 'Matrix Traversal', 'Spiral Matrix',
      'Rotate Matrix', 'Search in Matrix', 'Boyer-Moore Voting', 'Merge Intervals',
      'Insert Interval', 'Non-overlapping Intervals', 'Meeting Rooms', 'Array Rearrangement',
      'Next Permutation', 'Product Except Self', 'Trapping Rain Water', 'Container With Water',
      'Jump Game', 'Gas Station', 'Candy Distribution', 'First Missing Positive',
      'K-th Element', 'Median of Two Arrays', 'Merge Sorted Arrays', 'Remove Duplicates',
      'Move Zeros', 'Sort Colors', 'Wiggle Sort', 'Pancake Sorting'
    ]
  },
  { 
    name: 'Strings', 
    icon: '📝', 
    count: 350,
    subTopics: [
      'Pattern Matching', 'KMP Algorithm', 'Rabin-Karp', 'Z-Algorithm', 'Boyer-Moore',
      'Palindrome Check', 'Longest Palindrome', 'Palindrome Partitioning', 'Manacher\'s Algorithm',
      'Anagram Check', 'Group Anagrams', 'Minimum Window Substring', 'Longest Substring K Distinct',
      'Longest Substring Without Repeat', 'String Hashing', 'Rolling Hash', 'Suffix Array',
      'Suffix Tree', 'Suffix Automaton', 'Aho-Corasick', 'Trie Operations',
      'Regular Expression', 'Wildcard Matching', 'Edit Distance', 'String Compression',
      'Run-Length Encoding', 'Count and Say', 'Decode Ways', 'Interleaving Strings',
      'Scramble String', 'Distinct Subsequences', 'Shortest Superstring', 'Longest Common Prefix'
    ]
  },
  { 
    name: 'Hash Table', 
    icon: '🔑', 
    count: 280,
    subTopics: [
      'Two Sum Pattern', 'Three Sum', 'Four Sum', 'Subarray Sum Equals K',
      'Contiguous Array', 'Longest Consecutive Sequence', 'Group Anagrams',
      'Top K Frequent', 'Frequency Counting', 'Character Mapping', 'Isomorphic Strings',
      'Word Pattern', 'Valid Sudoku', 'Sudoku Solver', 'Design HashMap',
      'Design HashSet', 'LRU Cache', 'LFU Cache', 'Time Based Key-Value Store',
      'Random Pick Index', 'Insert Delete GetRandom', 'First Unique Character',
      'Intersection of Arrays', 'Union of Arrays', 'Find Duplicates', 'Single Number Variants'
    ]
  },
  { 
    name: 'Dynamic Programming', 
    icon: '🧮', 
    count: 600,
    subTopics: [
      // 1D DP
      'Climbing Stairs', 'House Robber', 'Fibonacci Variants', 'Coin Change', 'Perfect Squares',
      'Jump Game DP', 'Decode Ways', 'Word Break', 'Longest Increasing Subsequence',
      // 2D DP
      'Grid Paths', 'Unique Paths', 'Minimum Path Sum', 'Triangle', 'Maximal Square',
      'Maximal Rectangle', 'Edit Distance', 'Longest Common Subsequence', 'Shortest Common Supersequence',
      // Knapsack
      '0/1 Knapsack', 'Unbounded Knapsack', 'Bounded Knapsack', 'Subset Sum', 'Partition Equal Subset',
      'Target Sum', 'Coin Change 2', 'Combination Sum IV', 'Perfect Sum',
      // Interval DP
      'Matrix Chain Multiplication', 'Burst Balloons', 'Palindrome Partitioning', 'Minimum Cost Tree',
      'Optimal BST', 'Boolean Parenthesization', 'Scramble String',
      // State Machine
      'Best Time Buy Sell Stock', 'Stock with Cooldown', 'Stock with Transaction Fee',
      'Paint House', 'Paint Fence', 'Domino Tiling',
      // Digit DP
      'Count Numbers with Digit', 'Numbers At Most N Digit K', 'Count Special Integers',
      // Bitmask DP
      'Traveling Salesman', 'Assignment Problem', 'Counting Subsets', 'Parallel Courses',
      // Tree DP
      'House Robber III', 'Binary Tree Cameras', 'Distribute Coins', 'Sum of Distances in Tree',
      // Other DP
      'Regular Expression Matching', 'Wildcard Matching', 'Interleaving String', 'Distinct Subsequences',
      'Russian Doll Envelopes', 'Box Stacking', 'Maximum Height by Stacking Cuboids'
    ]
  },
  { 
    name: 'Binary Search', 
    icon: '🎯', 
    count: 200,
    subTopics: [
      'Standard Binary Search', 'Lower Bound', 'Upper Bound', 'First Occurrence', 'Last Occurrence',
      'Search Insert Position', 'Peak Element', 'Find Peak in Mountain Array', 'Search in Rotated Array',
      'Search in Rotated Array II', 'Find Minimum in Rotated', 'Single Element in Sorted',
      'Median of Two Sorted Arrays', 'K-th Smallest in Matrix', 'Search 2D Matrix',
      'Binary Search on Answer', 'Koko Eating Bananas', 'Capacity to Ship Packages',
      'Split Array Largest Sum', 'Minimize Max Distance to Gas Station', 'Aggressive Cows',
      'Allocate Books', 'Painter\'s Partition', 'Magnetic Force Between Balls',
      'Nth Magical Number', 'Find K-th Smallest Pair Distance', 'Median of Data Stream'
    ]
  },
  { 
    name: 'Trees', 
    icon: '🌳', 
    count: 400,
    subTopics: [
      // Traversal
      'Inorder Traversal', 'Preorder Traversal', 'Postorder Traversal', 'Level Order Traversal',
      'Zigzag Level Order', 'Vertical Order Traversal', 'Boundary Traversal', 'Morris Traversal',
      // Views
      'Left View', 'Right View', 'Top View', 'Bottom View',
      // Construction
      'Build from Inorder Preorder', 'Build from Inorder Postorder', 'Serialize Deserialize',
      'Construct from Traversal', 'Clone Binary Tree',
      // Properties
      'Height of Tree', 'Diameter', 'Width', 'Is Balanced', 'Is Symmetric', 'Is Same Tree',
      'Is Subtree', 'Invert Binary Tree', 'Flatten to Linked List',
      // Path Problems
      'Path Sum', 'Path Sum II', 'Path Sum III', 'Maximum Path Sum', 'Sum Root to Leaf',
      'Longest Path', 'All Paths from Root', 'Binary Tree Paths',
      // Ancestor
      'LCA Binary Tree', 'LCA BST', 'Distance Between Nodes', 'All Ancestors',
      // BST
      'Validate BST', 'Search in BST', 'Insert into BST', 'Delete from BST',
      'Kth Smallest in BST', 'Kth Largest in BST', 'Floor Ceil in BST', 'Two Sum BST',
      'Recover BST', 'Convert Sorted Array to BST', 'Convert Sorted List to BST',
      // Advanced Trees
      'Segment Tree', 'Fenwick Tree', 'Binary Indexed Tree', 'Trie', 'Suffix Tree',
      'AVL Tree', 'Red-Black Tree', 'B-Tree Basics', 'Merkle Tree',
      'Heavy Light Decomposition', 'Centroid Decomposition', 'Euler Tour', 'LCA with Sparse Table'
    ]
  },
  { 
    name: 'Graphs', 
    icon: '🕸️', 
    count: 450,
    subTopics: [
      // Traversal
      'BFS Traversal', 'DFS Traversal', 'Level Order in Graph', 'Iterative DFS',
      // Shortest Path
      'Dijkstra\'s Algorithm', 'Bellman-Ford', 'Floyd-Warshall', 'SPFA',
      'Shortest Path Unweighted', 'Shortest Path with K Edges', 'Cheapest Flights within K Stops',
      // MST
      'Prim\'s Algorithm', 'Kruskal\'s Algorithm', 'Minimum Spanning Tree', 'Second Best MST',
      // Union Find
      'Union Find Basic', 'Path Compression', 'Union by Rank', 'Connected Components',
      'Number of Islands', 'Accounts Merge', 'Redundant Connection', 'Making A Large Island',
      // Cycle Detection
      'Cycle in Undirected Graph', 'Cycle in Directed Graph', 'Detect Negative Cycle',
      // Topological Sort
      'Kahn\'s Algorithm', 'DFS Topological Sort', 'Course Schedule', 'Course Schedule II',
      'Alien Dictionary', 'Sequence Reconstruction', 'Parallel Courses',
      // Bipartite
      'Check Bipartite', 'Graph Coloring', 'Is Graph Bipartite', 'Possible Bipartition',
      // Special Graphs
      'Strongly Connected Components', 'Kosaraju\'s Algorithm', 'Tarjan\'s Algorithm',
      'Bridges in Graph', 'Articulation Points', 'Eulerian Path', 'Hamiltonian Path',
      // Flow Networks
      'Ford-Fulkerson', 'Edmonds-Karp', 'Max Flow Min Cut', 'Bipartite Matching',
      'Maximum Bipartite Matching', 'Hungarian Algorithm',
      // Grid Graphs
      'Flood Fill', 'Number of Islands', 'Surrounded Regions', 'Pacific Atlantic Water Flow',
      'Shortest Path in Binary Matrix', 'Rotting Oranges', 'Walls and Gates',
      // Other
      'Clone Graph', 'Graph Valid Tree', 'Minimum Height Trees', 'Reconstruct Itinerary',
      'Network Delay Time', 'Word Ladder', 'Word Ladder II', 'Bus Routes'
    ]
  },
  { 
    name: 'Linked List', 
    icon: '🔗', 
    count: 150,
    subTopics: [
      'Reversal', 'Reverse in Groups', 'Reverse Between', 'Swap Nodes in Pairs',
      'Cycle Detection', 'Find Cycle Start', 'Happy Number', 'Linked List Cycle II',
      'Merge Two Lists', 'Merge K Lists', 'Merge Sort List', 'Insertion Sort List',
      'Remove Duplicates', 'Remove Duplicates II', 'Remove Nth from End', 'Delete Node',
      'Partition List', 'Rotate List', 'Reorder List', 'Palindrome Linked List',
      'Add Two Numbers', 'Add Two Numbers II', 'Multiply Two Numbers',
      'Intersection of Lists', 'Copy with Random Pointer', 'Flatten Multilevel List',
      'Split Linked List', 'Odd Even Linked List', 'Swapping Nodes', 'Delete Middle Node',
      'Design Linked List', 'LRU Cache', 'LFU Cache', 'Skip List'
    ]
  },
  { 
    name: 'Stack', 
    icon: '📚', 
    count: 180,
    subTopics: [
      'Valid Parentheses', 'Longest Valid Parentheses', 'Score of Parentheses',
      'Minimum Add to Make Valid', 'Remove Invalid Parentheses',
      'Monotonic Stack', 'Next Greater Element', 'Next Greater Element II', 'Next Smaller Element',
      'Daily Temperatures', 'Stock Span', 'Largest Rectangle Histogram', 'Maximal Rectangle',
      'Trapping Rain Water', 'Sum of Subarray Minimums', 'Sum of Subarray Ranges',
      'Expression Evaluation', 'Basic Calculator', 'Basic Calculator II', 'Evaluate RPN',
      'Min Stack', 'Max Stack', 'Design Stack with Increment', 'Implement Queue using Stacks',
      'Decode String', 'Remove K Digits', 'Remove Duplicate Letters', 'Create Maximum Number',
      'Asteroid Collision', 'Car Fleet', 'Online Stock Span', '132 Pattern',
      'Simplify Path', 'Exclusive Time of Functions', 'Flatten Nested List Iterator'
    ]
  },
  { 
    name: 'Queue', 
    icon: '📋', 
    count: 120,
    subTopics: [
      'BFS Applications', 'Level Order Traversal', 'Shortest Path Unweighted',
      'Rotting Oranges', 'Walls and Gates', 'Nearest Exit from Maze',
      'Priority Queue', 'Top K Frequent', 'K Closest Points', 'Merge K Sorted Lists',
      'Task Scheduler', 'Reorganize String', 'Sliding Window Maximum',
      'Deque', 'Monotonic Deque', 'Shortest Subarray with Sum at Least K',
      'Circular Queue', 'Design Circular Queue', 'Design Circular Deque',
      'Implement Stack using Queues', 'Moving Average from Data Stream',
      'Number of Recent Calls', 'Dota2 Senate', 'Reveal Cards In Increasing Order'
    ]
  },
  { 
    name: 'Heap', 
    icon: '🏔️', 
    count: 150,
    subTopics: [
      'Min Heap Basics', 'Max Heap Basics', 'Build Heap', 'Heap Sort',
      'Kth Largest Element', 'Kth Smallest Element', 'K Closest Points',
      'Top K Frequent Elements', 'Top K Frequent Words', 'Sort Characters By Frequency',
      'Merge K Sorted Lists', 'Merge K Sorted Arrays', 'Smallest Range Covering K Lists',
      'Find Median from Data Stream', 'Sliding Window Median', 'IPO',
      'Meeting Rooms II', 'Car Pooling', 'Task Scheduler',
      'Minimum Cost to Hire K Workers', 'Maximum Performance of a Team',
      'Trapping Rain Water II', 'Swim in Rising Water', 'Path with Minimum Effort',
      'Ugly Number II', 'Super Ugly Number', 'Nth Smallest Prime Fraction',
      'Design Twitter', 'Exam Room', 'Seat Reservation Manager'
    ]
  },
  { 
    name: 'Backtracking', 
    icon: '↩️', 
    count: 180,
    subTopics: [
      'Permutations', 'Permutations II', 'Next Permutation', 'Permutation Sequence',
      'Combinations', 'Combination Sum', 'Combination Sum II', 'Combination Sum III',
      'Subsets', 'Subsets II', 'Generate Subsets', 'Subsets with Duplicates',
      'N-Queens', 'N-Queens II', 'Sudoku Solver', 'Valid Sudoku',
      'Word Search', 'Word Search II', 'Word Break II', 'Palindrome Partitioning',
      'Restore IP Addresses', 'Letter Combinations of Phone', 'Generate Parentheses',
      'Expression Add Operators', 'Target Sum', 'Partition to K Equal Sum',
      'Beautiful Arrangement', 'Matchsticks to Square', 'Stickers to Spell Word',
      'Path with Maximum Gold', 'Robot Room Cleaner', 'Unique Paths III',
      'Splitting a String', 'All Paths from Source to Target', 'Rat in a Maze'
    ]
  },
  { 
    name: 'Greedy', 
    icon: '💰', 
    count: 200,
    subTopics: [
      'Activity Selection', 'Job Scheduling', 'Weighted Job Scheduling', 'Meeting Rooms',
      'Interval Scheduling', 'Non-overlapping Intervals', 'Minimum Arrows to Burst Balloons',
      'Merge Intervals', 'Insert Interval', 'Interval List Intersections',
      'Jump Game', 'Jump Game II', 'Video Stitching', 'Minimum Taps to Water Garden',
      'Gas Station', 'Candy', 'Task Scheduler', 'Reorganize String',
      'Partition Labels', 'Queue Reconstruction by Height', 'Boats to Save People',
      'Two City Scheduling', 'Minimum Deletions to Make Unique', 'Reduce Array Size to Half',
      'Assign Cookies', 'Lemonade Change', 'Broken Calculator', 'Minimum Moves to Equal Array',
      'Huffman Coding', 'Fractional Knapsack', 'Minimum Spanning Tree Greedy',
      'Maximum Units on Truck', 'Maximum Bags With Full Capacity', 'Minimum Cost for Tickets'
    ]
  },
  { 
    name: 'Bit Manipulation', 
    icon: '💻', 
    count: 120,
    subTopics: [
      'XOR Operations', 'Single Number', 'Single Number II', 'Single Number III',
      'Missing Number', 'Find Missing Positive', 'Two Missing Numbers',
      'Counting Bits', 'Number of 1 Bits', 'Hamming Distance', 'Total Hamming Distance',
      'Power of Two', 'Power of Four', 'Check if Power of 2',
      'Reverse Bits', 'Bit Reversal', 'Bitwise AND of Numbers Range',
      'Maximum XOR of Two Numbers', 'Maximum XOR with Element', 'XOR Queries of Subarray',
      'Subset Generation', 'Iterate All Subsets', 'Subset Sum Bitmask',
      'Gray Code', 'Circular Permutation in Binary', 'Minimum Flips to Make OR Equal',
      'Complement of Base 10 Integer', 'Prime Number of Set Bits', 'Binary Number with Alternating Bits',
      'Divide Two Integers', 'Sum of Two Integers', 'Maximum Product of Word Lengths'
    ]
  },
  { 
    name: 'Math', 
    icon: '➗', 
    count: 250,
    subTopics: [
      // Number Theory
      'GCD LCM', 'Extended Euclidean', 'Prime Numbers', 'Sieve of Eratosthenes',
      'Segmented Sieve', 'Prime Factorization', 'Euler Totient', 'Modular Exponentiation',
      'Modular Inverse', 'Chinese Remainder Theorem', 'Miller-Rabin Primality',
      // Combinatorics
      'Factorial', 'Permutations Count', 'Combinations nCr', 'Pascal\'s Triangle',
      'Catalan Numbers', 'Fibonacci Sequence', 'Binomial Coefficient', 'Derangements',
      'Stars and Bars', 'Inclusion Exclusion', 'Pigeonhole Principle',
      // Geometry
      'Line Intersection', 'Point in Polygon', 'Convex Hull', 'Graham Scan',
      'Closest Pair of Points', 'Area of Polygon', 'Triangle Area', 'Circle Intersection',
      // Probability
      'Random Sampling', 'Reservoir Sampling', 'Shuffle an Array', 'Random Pick with Weight',
      'Linked List Random Node', 'Random Pick Index',
      // Other
      'Integer to Roman', 'Roman to Integer', 'Excel Sheet Column', 'Add Binary',
      'Multiply Strings', 'Pow(x,n)', 'Sqrt(x)', 'Valid Perfect Square',
      'Happy Number', 'Ugly Number', 'Count Primes', 'Nth Digit',
      'Fraction to Decimal', 'Water and Jug Problem', 'Bulb Switcher'
    ]
  },
  { 
    name: 'Two Pointers', 
    icon: '👆', 
    count: 150,
    subTopics: [
      'Opposite Direction', 'Two Sum II', 'Three Sum', 'Three Sum Closest',
      'Four Sum', 'Container With Most Water', 'Trapping Rain Water',
      'Same Direction', 'Remove Duplicates', 'Remove Element', 'Move Zeroes',
      'Fast Slow Pointer', 'Linked List Cycle', 'Find Duplicate Number', 'Happy Number',
      'Partition Array', 'Sort Colors', 'Wiggle Sort', 'Dutch National Flag',
      'Merge Sorted Array', 'Squares of Sorted Array', 'Boats to Save People',
      'Subarray Product Less Than K', 'Minimum Size Subarray Sum', 'Longest Subarray with Ones',
      'Interval List Intersections', 'Compare Version Numbers', 'Backspace String Compare'
    ]
  },
  { 
    name: 'Sliding Window', 
    icon: '🪟', 
    count: 130,
    subTopics: [
      'Fixed Size Window', 'Maximum Sum of K Elements', 'Maximum Average Subarray',
      'Contains Duplicate II', 'Substrings of Size Three', 'Find All Anagrams',
      'Variable Size Window', 'Minimum Window Substring', 'Longest Substring Without Repeat',
      'Longest Substring with At Most K Distinct', 'Longest Repeating Character Replacement',
      'Max Consecutive Ones III', 'Fruit Into Baskets', 'Subarrays with K Different Integers',
      'Minimum Window Subsequence', 'Grumpy Bookstore Owner', 'Maximum Points from Cards',
      'Get Equal Substrings Within Budget', 'Count Number of Nice Subarrays',
      'Binary Subarrays with Sum', 'Number of Substrings Containing All Three Characters',
      'Count Vowel Substrings', 'Minimum Consecutive Cards to Pick Up',
      'Maximum Erasure Value', 'Frequency of Most Frequent Element'
    ]
  },
  { 
    name: 'Trie', 
    icon: '🔤', 
    count: 80,
    subTopics: [
      'Implement Trie', 'Insert Search', 'Prefix Search', 'Delete from Trie',
      'Word Search II', 'Word Break', 'Replace Words', 'Implement Magic Dictionary',
      'Map Sum Pairs', 'Stream of Characters', 'Design Add and Search Words',
      'Longest Word in Dictionary', 'Short Encoding of Words', 'Camelcase Matching',
      'XOR Trie', 'Maximum XOR of Two Numbers', 'Maximum XOR with Element',
      'Palindrome Pairs', 'Word Squares', 'Concatenated Words',
      'Search Suggestions System', 'Design Search Autocomplete System',
      'Implement Trie II', 'Count Prefix and Suffix Pairs'
    ]
  },
  { 
    name: 'Union Find', 
    icon: '🤝', 
    count: 100,
    subTopics: [
      'Basic Union Find', 'Path Compression', 'Union by Rank', 'Union by Size',
      'Connected Components', 'Number of Islands', 'Number of Provinces',
      'Redundant Connection', 'Redundant Connection II', 'Accounts Merge',
      'Regions Cut By Slashes', 'Satisfiability of Equality Equations',
      'Smallest String with Swaps', 'Minimize Malware Spread', 'Making A Large Island',
      'Bricks Falling When Hit', 'Most Stones Removed', 'Swim in Rising Water',
      'Similar String Groups', 'Number of Operations to Make Network Connected',
      'Remove Max Number of Edges', 'Checking Existence of Edge Length Limited Paths'
    ]
  },
  { 
    name: 'Design', 
    icon: '🎨', 
    count: 150,
    subTopics: [
      'LRU Cache', 'LFU Cache', 'Time Based Key-Value Store', 'All O(1) Data Structure',
      'Design HashMap', 'Design HashSet', 'Design Linked List', 'Design Circular Queue',
      'Design Stack with Increment', 'Design Browser History', 'Design Parking System',
      'Design Twitter', 'Design Hit Counter', 'Design Leaderboard', 'Design Underground System',
      'Insert Delete GetRandom O(1)', 'Randomized Set', 'Random Pick with Weight',
      'Implement Trie', 'Implement Queue using Stacks', 'Implement Stack using Queues',
      'Min Stack', 'Max Stack', 'Median Finder', 'Kth Largest in Stream',
      'Design File System', 'Design In-Memory File System', 'Design Log Storage System',
      'Serialize and Deserialize Binary Tree', 'Serialize and Deserialize N-ary Tree',
      'Encode and Decode TinyURL', 'Design Compressed String Iterator', 'Logger Rate Limiter',
      'Design Tic-Tac-Toe', 'Design Snake Game', 'Design Search Autocomplete'
    ]
  },
  { 
    name: 'Game Theory', 
    icon: '🎲', 
    count: 60,
    subTopics: [
      'Nim Game', 'Stone Game', 'Stone Game II', 'Stone Game III', 'Stone Game IV',
      'Predict the Winner', 'Divisor Game', 'Cat and Mouse', 'Cat and Mouse II',
      'Flip Game', 'Flip Game II', 'Can I Win', 'Guess Number Higher or Lower II',
      'Optimal Division', 'Dungeon Game', 'Cherry Pickup', 'Cherry Pickup II',
      'Sprague-Grundy', 'Minimax Algorithm', 'Alpha-Beta Pruning',
      'Sticks Game', 'Coin Game', 'Chessboard Games'
    ]
  },
  { 
    name: 'Divide and Conquer', 
    icon: '✂️', 
    count: 80,
    subTopics: [
      'Merge Sort', 'Quick Sort', 'Quick Select', 'Median of Medians',
      'Count Inversions', 'Count Smaller Numbers', 'Reverse Pairs',
      'Closest Pair of Points', 'Strassen Matrix Multiplication',
      'Maximum Subarray', 'Search in Rotated Array', 'Find Peak Element',
      'Kth Largest Element', 'Median of Two Sorted Arrays',
      'Majority Element', 'Majority Element II', 'Beautiful Array',
      'Expression Add Operators', 'Different Ways to Add Parentheses'
    ]
  },
  { 
    name: 'Recursion', 
    icon: '🔄', 
    count: 100,
    subTopics: [
      'Basic Recursion', 'Factorial', 'Fibonacci', 'Tower of Hanoi',
      'Power Function', 'GCD Recursion', 'Sum of Digits', 'Reverse String',
      'Palindrome Check', 'String Permutations', 'Generate Subsets',
      'Generate Combinations', 'Generate Parentheses', 'Letter Combinations',
      'Tail Recursion', 'Memoization', 'Recursion to Iteration',
      'Tree Recursion', 'Graph Recursion', 'Backtracking Recursion',
      'Divide and Conquer Recursion', 'Mutual Recursion'
    ]
  },
  { 
    name: 'Simulation', 
    icon: '🎮', 
    count: 100,
    subTopics: [
      'Game Simulation', 'Robot Simulation', 'Walking Robot', 'Spiral Matrix',
      'Rotate Image', 'Set Matrix Zeroes', 'Game of Life', 'Valid Tic-Tac-Toe State',
      'Candy Crush', 'Tetris', 'Snake Game', 'Minesweeper',
      'Process Simulation', 'Task Scheduler', 'Print FooBar Alternately',
      'Queue Reconstruction', 'Build Array from Permutation', 'Design Circular Queue',
      'Fizz Buzz', 'Roman to Integer', 'Integer to Roman', 'Days Between Dates',
      'Calculator', 'Basic Calculator', 'Expression Evaluation'
    ]
  },
  { 
    name: 'Prefix Sum', 
    icon: '➕', 
    count: 100,
    subTopics: [
      '1D Prefix Sum', 'Running Sum', 'Subarray Sum Equals K', 'Contiguous Array',
      'Find Pivot Index', 'Product Except Self', 'Range Sum Query',
      '2D Prefix Sum', 'Matrix Block Sum', 'Range Sum Query 2D', 'Maximal Square',
      'Difference Array', 'Car Pooling', 'Corporate Flight Bookings',
      'Prefix XOR', 'XOR Queries of Subarray', 'Count Triplets with XOR',
      'Prefix Maximum', 'Prefix Minimum', 'Product of Array Except Self',
      'Maximum Average Subarray', 'Subarray Sums Divisible by K'
    ]
  },
  { 
    name: 'Matrix', 
    icon: '⬜', 
    count: 150,
    subTopics: [
      'Matrix Traversal', 'Spiral Matrix', 'Diagonal Traverse', 'Anti-Diagonal Traverse',
      'Rotate Matrix', 'Transpose Matrix', 'Reflect Matrix', 'Rotate Image',
      'Search in Matrix', 'Search 2D Matrix', 'Search 2D Matrix II', 'Kth Smallest in Matrix',
      'Set Matrix Zeroes', 'Game of Life', 'Valid Sudoku', 'Sudoku Solver',
      'Island Problems', 'Number of Islands', 'Max Area of Island', 'Surrounded Regions',
      'Pacific Atlantic Water Flow', 'Shortest Path in Binary Matrix', 'Rotting Oranges',
      'Matrix Chain Multiplication', 'Unique Paths', 'Minimum Path Sum', 'Dungeon Game',
      'Maximal Square', 'Maximal Rectangle', 'Count Square Submatrices',
      'Toeplitz Matrix', 'Reshape the Matrix', 'Lucky Numbers in Matrix'
    ]
  },
  { 
    name: 'Geometry', 
    icon: '📐', 
    count: 60,
    subTopics: [
      'Point Operations', 'Distance Between Points', 'Slope of Line',
      'Line Intersection', 'Parallel Lines', 'Perpendicular Lines',
      'Triangle Area', 'Valid Triangle', 'Triangle Type', 'Largest Triangle',
      'Rectangle Operations', 'Rectangle Overlap', 'Rectangle Area', 'Perfect Rectangle',
      'Circle Operations', 'Point Inside Circle', 'Circle Intersection',
      'Convex Hull', 'Graham Scan', 'Jarvis March', 'Convex Hull Optimizations',
      'Point in Polygon', 'Polygon Area', 'Closest Pair of Points',
      'Erect the Fence', 'Max Points on a Line', 'Minimum Area Rectangle'
    ]
  },
  { 
    name: 'Concurrency', 
    icon: '⚡', 
    count: 30,
    subTopics: [
      'Print in Order', 'Print FooBar Alternately', 'Print Zero Even Odd',
      'Building H2O', 'Dining Philosophers', 'The Dining Philosophers',
      'Fizz Buzz Multithreaded', 'Web Crawler Multithreaded',
      'Traffic Light Controlled', 'Design Bounded Blocking Queue',
      'Semaphores', 'Mutex', 'Read-Write Lock', 'Thread Pool'
    ]
  },
  { 
    name: 'SQL', 
    icon: '🗄️', 
    count: 100,
    subTopics: [
      'Basic SELECT', 'WHERE Clause', 'ORDER BY', 'GROUP BY', 'HAVING',
      'JOINs', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN',
      'Subqueries', 'Nested Queries', 'Correlated Subqueries',
      'Aggregate Functions', 'COUNT', 'SUM', 'AVG', 'MIN', 'MAX',
      'Window Functions', 'ROW_NUMBER', 'RANK', 'DENSE_RANK', 'LAG', 'LEAD',
      'String Functions', 'Date Functions', 'CASE WHEN', 'COALESCE',
      'UNION', 'INTERSECT', 'EXCEPT', 'EXISTS', 'IN', 'ANY', 'ALL'
    ]
  }
];

// Get subtopics for a specific topic
export const getSubTopicsForTopic = (topicName: string): string[] => {
  const topic = MASTER_TOPICS.find(t => t.name === topicName);
  return topic?.subTopics || ['General'];
};

// Get a random subtopic for a topic
export const getRandomSubTopic = (topicName: string): string => {
  const subTopics = getSubTopicsForTopic(topicName);
  return subTopics[Math.floor(Math.random() * subTopics.length)];
};
