import { getDifficultyCounts } from '@/data/leetcodeProblems';

interface HeroSectionProps {
  onDifficultyFilter: (difficulty: string) => void;
}

export const HeroSection = ({ onDifficultyFilter }: HeroSectionProps) => {
  const counts = getDifficultyCounts();
  const totalProblems = counts.Easy + counts.Medium + counts.Hard;
  
  return (
    <section className="mb-8">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="text-gradient-accent">Complete Coding</span>{' '}
          <span className="text-foreground">Problem Index</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          <span className="text-primary font-semibold">20,000+</span> problems solved across LeetCode, HackerRank, CodeChef, Coding Ninjas, CodeTantra, TAi Platform & more. Organized by topic with approach hints & company tags.
        </p>
        <div className="flex flex-wrap gap-2 mt-3 text-xs text-muted-foreground">
          <span className="px-2 py-1 bg-[#FFA116]/10 text-[#FFA116] rounded">LeetCode</span>
          <span className="px-2 py-1 bg-[#00EA64]/10 text-[#00EA64] rounded">HackerRank</span>
          <span className="px-2 py-1 bg-[#5B4638]/10 text-[#5B4638] dark:text-[#d4a574] rounded">CodeChef</span>
          <span className="px-2 py-1 bg-[#F66C3B]/10 text-[#F66C3B] rounded">Coding Ninjas</span>
          <span className="px-2 py-1 bg-[#2EC866]/10 text-[#2EC866] rounded">GeeksforGeeks</span>
          <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded">CodeTantra</span>
          <span className="px-2 py-1 bg-blue-500/10 text-blue-500 rounded">TAi Platform</span>
        </div>
      </div>

      {/* Difficulty Quick Filters */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onDifficultyFilter('Easy')}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-success/10 border border-success/30 hover:bg-success/20 transition-all duration-200"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
          <span className="text-success font-medium">Easy</span>
          <span className="text-success/70 text-sm">{counts.Easy.toLocaleString()}</span>
        </button>

        <button
          onClick={() => onDifficultyFilter('Medium')}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-warning/10 border border-warning/30 hover:bg-warning/20 transition-all duration-200"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-warning animate-pulse" />
          <span className="text-warning font-medium">Medium</span>
          <span className="text-warning/70 text-sm">{counts.Medium.toLocaleString()}</span>
        </button>

        <button
          onClick={() => onDifficultyFilter('Hard')}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-destructive/10 border border-destructive/30 hover:bg-destructive/20 transition-all duration-200"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-destructive animate-pulse" />
          <span className="text-destructive font-medium">Hard</span>
          <span className="text-destructive/70 text-sm">{counts.Hard.toLocaleString()}</span>
        </button>
      </div>
    </section>
  );
};
