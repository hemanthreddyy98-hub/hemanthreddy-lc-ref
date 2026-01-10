export interface CodeforcesProblem {
  id: number;
  codeforcesId: string;
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
  platform: 'codeforces';
  rating?: number;
}

export interface Topic {
  name: string;
  icon: string;
  count: number;
  subTopics: string[];
}

export const codeforcesTopics: Topic[] = [
  { name: 'Implementation', icon: '⚙️', count: 285, subTopics: ['Brute Force', 'Simulation', 'Constructive', 'Two Pointers', 'Ad-hoc'] },
  { name: 'Math', icon: '➗', count: 245, subTopics: ['Number Theory', 'Combinatorics', 'Geometry', 'Probability', 'Game Theory', 'Binary Exponentiation'] },
  { name: 'Greedy', icon: '💰', count: 195, subTopics: ['Sorting', 'Scheduling', 'Interval', 'Exchange Argument', 'Huffman'] },
  { name: 'DP', icon: '🧮', count: 225, subTopics: ['Standard DP', 'Bitmask DP', 'Digit DP', 'Tree DP', 'SOS DP', 'Convex Hull Trick'] },
  { name: 'Data Structures', icon: '🏗️', count: 175, subTopics: ['Segment Tree', 'Fenwick Tree', 'Treap', 'Splay Tree', 'LiChao Tree', 'Persistent'] },
  { name: 'Graphs', icon: '🕸️', count: 198, subTopics: ['DFS/BFS', 'Shortest Paths', 'MST', 'Flows', 'Matching', 'LCA', 'Centroid'] },
  { name: 'Strings', icon: '📝', count: 145, subTopics: ['Hashing', 'KMP', 'Z-function', 'Suffix Array', 'Suffix Automaton', 'Aho-Corasick'] },
  { name: 'Binary Search', icon: '🎯', count: 125, subTopics: ['Standard', 'On Answer', 'Ternary Search', 'Parallel Binary Search'] },
  { name: 'Trees', icon: '🌳', count: 145, subTopics: ['Tree Traversal', 'Tree DP', 'Heavy-Light', 'Euler Tour', 'Centroid Decomposition'] },
  { name: 'Number Theory', icon: '🔢', count: 155, subTopics: ['Primes', 'Factorization', 'GCD/LCM', 'Modular Inverse', 'Chinese Remainder', 'Miller-Rabin'] },
  { name: 'Divide and Conquer', icon: '✂️', count: 85, subTopics: ['Standard', 'CDQ', 'FFT/NTT', 'Polynomial'] },
  { name: 'Bitmasks', icon: '💻', count: 95, subTopics: ['Basic Operations', 'Subset Enumeration', 'SOS DP', 'Meet in Middle'] },
  { name: 'Combinatorics', icon: '🎰', count: 115, subTopics: ['Counting', 'Inclusion-Exclusion', 'Generating Functions', 'Burnside', 'Polya'] },
  { name: 'Interactive', icon: '🎤', count: 45, subTopics: ['Binary Search', 'Graph Queries', 'Guessing Games'] },
  { name: 'Games', icon: '🎲', count: 65, subTopics: ['Nim', 'Sprague-Grundy', 'Minimax', 'Optimal Strategy'] },
];

const getApproach = (topic: string): string => {
  const approachPatterns: { [key: string]: string[] } = {
    'Implementation': ['Simulate the process', 'Handle edge cases', 'Use appropriate data structures'],
    'Math': ['Apply number theory', 'Use modular arithmetic', 'Consider mathematical formula'],
    'Greedy': ['Sort optimally', 'Exchange argument', 'Local optimal is global optimal'],
    'DP': ['Define state clearly', 'Find recurrence', 'Optimize if needed'],
    'Data Structures': ['Choose right structure', 'Segment tree for range', 'Fenwick for prefix'],
    'Graphs': ['DFS/BFS based on need', 'Dijkstra for weighted', 'Union-Find for connectivity'],
    'Strings': ['Use string hashing', 'KMP for pattern matching', 'Suffix structures for complex'],
    'Binary Search': ['Monotonic property', 'Binary search on answer', 'Check feasibility'],
    'Trees': ['Tree DP from leaves', 'Heavy-light for paths', 'Centroid for balanced'],
    'Number Theory': ['Sieve for primes', 'Extended GCD', 'Modular inverse'],
    'default': ['Analyze constraints', 'Consider complexity', 'Handle edge cases'],
  };
  const patterns = approachPatterns[topic] || approachPatterns['default'];
  return patterns[Math.floor(Math.random() * patterns.length)];
};

const getComplexity = (topic: string): { time: string; space: string } => {
  const patterns: { [key: string]: { time: string; space: string }[] } = {
    'Implementation': [{ time: 'O(n)', space: 'O(1)' }, { time: 'O(n²)', space: 'O(1)' }],
    'DP': [{ time: 'O(n²)', space: 'O(n)' }, { time: 'O(n×m)', space: 'O(n×m)' }, { time: 'O(n×2^n)', space: 'O(2^n)' }],
    'Graphs': [{ time: 'O(V+E)', space: 'O(V)' }, { time: 'O(E log V)', space: 'O(V+E)' }],
    'Data Structures': [{ time: 'O(n log n)', space: 'O(n)' }, { time: 'O(log n)', space: 'O(n)' }],
    'Strings': [{ time: 'O(n)', space: 'O(n)' }, { time: 'O(n log n)', space: 'O(n)' }],
  };
  const topicPatterns = patterns[topic] || [{ time: 'O(n)', space: 'O(1)' }];
  return topicPatterns[Math.floor(Math.random() * topicPatterns.length)];
};

const generateCodeforcesProblems = (): CodeforcesProblem[] => {
  const problems: CodeforcesProblem[] = [];
  let id = 1;

  // Real Codeforces problems with contest IDs
  const realProblems = [
    // Div 3/Educational - Easy (800-1200 rating)
    { codeforcesId: '1/A', title: 'Theatre Square', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory', rating: 1000, time: 'O(1)', space: 'O(1)', acceptance: 85.2 },
    { codeforcesId: '4/A', title: 'Watermelon', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory', rating: 800, time: 'O(1)', space: 'O(1)', acceptance: 92.5 },
    { codeforcesId: '71/A', title: 'Way Too Long Words', difficulty: 'Easy' as const, topic: 'Strings', subTopic: 'Hashing', rating: 800, time: 'O(n)', space: 'O(1)', acceptance: 88.4 },
    { codeforcesId: '158/A', title: 'Next Round', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', rating: 800, time: 'O(n)', space: 'O(1)', acceptance: 90.2 },
    { codeforcesId: '231/A', title: 'Team', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', rating: 800, time: 'O(n)', space: 'O(1)', acceptance: 91.5 },
    { codeforcesId: '282/A', title: 'Bit++', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', rating: 800, time: 'O(n)', space: 'O(1)', acceptance: 89.8 },
    { codeforcesId: '263/A', title: 'Beautiful Matrix', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', rating: 800, time: 'O(n²)', space: 'O(1)', acceptance: 87.4 },
    { codeforcesId: '339/A', title: 'Helpful Maths', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Simulation', rating: 800, time: 'O(n log n)', space: 'O(n)', acceptance: 85.6 },
    { codeforcesId: '546/A', title: 'Soldier and Bananas', difficulty: 'Easy' as const, topic: 'Math', subTopic: 'Number Theory', rating: 800, time: 'O(1)', space: 'O(1)', acceptance: 88.2 },
    { codeforcesId: '677/A', title: 'Vanya and Fence', difficulty: 'Easy' as const, topic: 'Implementation', subTopic: 'Brute Force', rating: 800, time: 'O(n)', space: 'O(1)', acceptance: 86.5 },
    
    // Div 2 Medium (1300-1700 rating)
    { codeforcesId: '1/B', title: 'Spreadsheet', difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Simulation', rating: 1600, time: 'O(n)', space: 'O(1)', acceptance: 52.4 },
    { codeforcesId: '2/B', title: 'The least round way', difficulty: 'Medium' as const, topic: 'DP', subTopic: 'Standard DP', rating: 1900, time: 'O(n²)', space: 'O(n²)', acceptance: 38.5 },
    { codeforcesId: '1560/E', title: 'Polycarp and String Transformation', difficulty: 'Medium' as const, topic: 'Strings', subTopic: 'Hashing', rating: 1700, time: 'O(n)', space: 'O(n)', acceptance: 42.8 },
    { codeforcesId: '1593/D1', title: 'All Are Same', difficulty: 'Medium' as const, topic: 'Math', subTopic: 'GCD/LCM', rating: 1400, time: 'O(n)', space: 'O(1)', acceptance: 55.2 },
    { codeforcesId: '1409/D', title: 'Decrease the Sum of Digits', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Exchange Argument', rating: 1500, time: 'O(log n)', space: 'O(1)', acceptance: 48.6 },
    { codeforcesId: '1294/D', title: 'MEX maximizing', difficulty: 'Medium' as const, topic: 'Data Structures', subTopic: 'Segment Tree', rating: 1600, time: 'O(n log n)', space: 'O(n)', acceptance: 45.2 },
    { codeforcesId: '1256/C', title: 'Platforms Jumping', difficulty: 'Medium' as const, topic: 'Greedy', subTopic: 'Constructive', rating: 1700, time: 'O(n)', space: 'O(n)', acceptance: 42.5 },
    { codeforcesId: '1343/D', title: 'Constant Palindrome Sum', difficulty: 'Medium' as const, topic: 'Implementation', subTopic: 'Two Pointers', rating: 1700, time: 'O(n×k)', space: 'O(k)', acceptance: 38.8 },
    { codeforcesId: '1472/E', title: 'Correct Placement', difficulty: 'Medium' as const, topic: 'Binary Search', subTopic: 'Standard', rating: 1700, time: 'O(n log n)', space: 'O(n)', acceptance: 35.4 },
    { codeforcesId: '1547/E', title: 'Air Conditioners', difficulty: 'Medium' as const, topic: 'DP', subTopic: 'Standard DP', rating: 1500, time: 'O(n)', space: 'O(n)', acceptance: 48.2 },
    
    // Div 1/Hard (1800+ rating)
    { codeforcesId: '1/C', title: 'Ancient Berland Circus', difficulty: 'Hard' as const, topic: 'Math', subTopic: 'Geometry', rating: 2100, time: 'O(1)', space: 'O(1)', acceptance: 25.4 },
    { codeforcesId: '1C', title: 'Ancient Berland Circus', difficulty: 'Hard' as const, topic: 'Math', subTopic: 'Geometry', rating: 2100, time: 'O(1)', space: 'O(1)', acceptance: 25.4 },
    { codeforcesId: '1349/C', title: 'Orac and Game of Life', difficulty: 'Hard' as const, topic: 'Graphs', subTopic: 'DFS/BFS', rating: 2000, time: 'O(n×m)', space: 'O(n×m)', acceptance: 28.6 },
    { codeforcesId: '1553/E', title: 'Permutation Shift', difficulty: 'Hard' as const, topic: 'Math', subTopic: 'Combinatorics', rating: 2100, time: 'O(n log n)', space: 'O(n)', acceptance: 22.4 },
    { codeforcesId: '1536/E', title: 'Omkar and Forest', difficulty: 'Hard' as const, topic: 'Math', subTopic: 'Combinatorics', rating: 2000, time: 'O(n×m)', space: 'O(n×m)', acceptance: 32.5 },
    { codeforcesId: '1420/D', title: 'Rescue Nibel!', difficulty: 'Hard' as const, topic: 'Combinatorics', subTopic: 'Counting', rating: 1800, time: 'O(n log n)', space: 'O(n)', acceptance: 35.8 },
    { codeforcesId: '1466/E', title: 'Apollo versus Pan', difficulty: 'Hard' as const, topic: 'Bitmasks', subTopic: 'Basic Operations', rating: 1800, time: 'O(n log n)', space: 'O(log n)', acceptance: 38.2 },
    { codeforcesId: '1527/C', title: 'Sequence Pair Weight', difficulty: 'Hard' as const, topic: 'Math', subTopic: 'Combinatorics', rating: 1600, time: 'O(n)', space: 'O(n)', acceptance: 42.5 },
    { codeforcesId: '1540/B', title: 'Tree Array', difficulty: 'Hard' as const, topic: 'Trees', subTopic: 'Tree DP', rating: 2100, time: 'O(n² log n)', space: 'O(n²)', acceptance: 25.8 },
    { codeforcesId: '1539/D', title: 'PriceFixed', difficulty: 'Hard' as const, topic: 'Greedy', subTopic: 'Sorting', rating: 1600, time: 'O(n log n)', space: 'O(n)', acceptance: 45.2 },
    { codeforcesId: '1562/D1', title: 'Two Hundred Twenty One (easy version)', difficulty: 'Hard' as const, topic: 'Implementation', subTopic: 'Two Pointers', rating: 1700, time: 'O(n)', space: 'O(n)', acceptance: 38.4 },
    { codeforcesId: '1462/E1', title: 'Close Tuples (easy version)', difficulty: 'Hard' as const, topic: 'Combinatorics', subTopic: 'Counting', rating: 1700, time: 'O(n log n)', space: 'O(n)', acceptance: 42.6 },
    { codeforcesId: '1521/C', title: 'Nastia and a Hidden Permutation', difficulty: 'Hard' as const, topic: 'Interactive', subTopic: 'Binary Search', rating: 2000, time: 'O(n)', space: 'O(n)', acceptance: 28.5 },
  ];

  // Add real problems
  for (const prob of realProblems) {
    problems.push({
      id: id++,
      codeforcesId: prob.codeforcesId,
      title: prob.title,
      difficulty: prob.difficulty,
      topic: prob.topic,
      subTopic: prob.subTopic,
      companies: [],
      acceptance: prob.acceptance,
      frequency: Math.floor(Math.random() * 100) + 1,
      isPremium: false,
      url: `https://codeforces.com/problemset/problem/${prob.codeforcesId}`,
      timeComplexity: prob.time,
      spaceComplexity: prob.space || 'O(1)',
      approach: getApproach(prob.topic),
      platform: 'codeforces',
      rating: prob.rating,
    });
  }

  // Generate more problems
  for (const topic of codeforcesTopics) {
    const targetCount = topic.count - problems.filter(p => p.topic === topic.name).length;
    for (let i = 0; i < Math.min(targetCount, 50); i++) {
      const subTopic = topic.subTopics[Math.floor(Math.random() * topic.subTopics.length)];
      const difficulty = ['Easy', 'Medium', 'Hard'][Math.floor(Math.random() * 3)] as 'Easy' | 'Medium' | 'Hard';
      const complexity = getComplexity(topic.name);
      const contestNum = 1000 + Math.floor(Math.random() * 800);
      const problemLetter = ['A', 'B', 'C', 'D', 'E', 'F'][Math.floor(Math.random() * 6)];
      const rating = difficulty === 'Easy' ? 800 + Math.floor(Math.random() * 400) : 
                     difficulty === 'Medium' ? 1300 + Math.floor(Math.random() * 500) : 
                     1800 + Math.floor(Math.random() * 600);
      
      problems.push({
        id: id++,
        codeforcesId: `${contestNum}/${problemLetter}`,
        title: `${topic.name} ${subTopic} ${problemLetter}${i + 1}`,
        difficulty,
        topic: topic.name,
        subTopic,
        companies: [],
        acceptance: Math.floor(Math.random() * 50) + 20,
        frequency: Math.floor(Math.random() * 100) + 1,
        isPremium: false,
        url: `https://codeforces.com/problemset/problem/${contestNum}/${problemLetter}`,
        timeComplexity: complexity.time,
        spaceComplexity: complexity.space,
        approach: getApproach(topic.name),
        platform: 'codeforces',
        rating,
      });
    }
  }

  return problems;
};

export const codeforcesProblems = generateCodeforcesProblems();

export const getCodeforcesTopicCounts = (): { [key: string]: number } => {
  const counts: { [key: string]: number } = {};
  for (const problem of codeforcesProblems) {
    counts[problem.topic] = (counts[problem.topic] || 0) + 1;
  }
  return counts;
};
