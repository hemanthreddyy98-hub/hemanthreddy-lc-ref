import { getDifficultyCounts } from '@/data/leetcodeProblems';

interface HeroSectionProps {
  onDifficultyFilter: (difficulty: string) => void;
}

export const HeroSection = ({ onDifficultyFilter }: HeroSectionProps) => {
  const counts = getDifficultyCounts();
  
  return (
    <section className="mb-8">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="text-gradient-accent">Complete LeetCode</span>{' '}
          <span className="text-foreground">Problem Index</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          All {(counts.Easy + counts.Medium + counts.Hard).toLocaleString()} Data Structures & Algorithms problems organized by topic with difficulty levels, time complexity, and company tags.
        </p>
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
