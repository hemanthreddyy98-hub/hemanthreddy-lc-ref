import { Clock, HardDrive, ExternalLink, Bookmark, BookmarkCheck, Check, Lock } from 'lucide-react';
import { Problem } from '@/data/leetcodeProblems';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ProblemCardProps {
  problem: Problem;
  index: number;
  isBookmarked: boolean;
  isSolved: boolean;
  onToggleBookmark: (id: number) => void;
  onToggleSolved: (id: number) => void;
}

export const ProblemCard = ({
  problem,
  index,
  isBookmarked,
  isSolved,
  onToggleBookmark,
  onToggleSolved,
}: ProblemCardProps) => {
  const difficultyClass = {
    Easy: 'difficulty-easy',
    Medium: 'difficulty-medium',
    Hard: 'difficulty-hard',
  }[problem.difficulty];

  return (
    <article
      className={cn(
        "problem-card card-glow animate-fade-in opacity-0",
        isSolved && "border-success/30 bg-success/5"
      )}
      style={{ animationDelay: `${(index % 12) * 50}ms`, animationFillMode: 'forwards' }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">#{problem.id}</span>
          {problem.leetcodeId && (
            <span className="text-xs text-primary font-mono">LC #{problem.leetcodeId}</span>
          )}
          {problem.isPremium && (
            <Lock className="h-3 w-3 text-warning" />
          )}
        </div>
        <span className={cn("text-xs px-2.5 py-1 rounded-full font-medium", difficultyClass)}>
          {problem.difficulty}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-foreground font-semibold mb-3 line-clamp-2 leading-tight">
        {problem.title}
      </h3>

      {/* Stats */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground" title="Time Complexity">
          <Clock className="h-3.5 w-3.5 text-primary" />
          <span className="font-mono">{problem.timeComplexity}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground" title="Space Complexity">
          <HardDrive className="h-3.5 w-3.5 text-accent" />
          <span className="font-mono">{problem.spaceComplexity}</span>
        </div>
        <span className="text-xs text-muted-foreground ml-auto">
          {problem.acceptance}% acceptance
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        <span className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary border border-primary/20">
          {problem.topic}
        </span>
        {problem.subTopic && (
          <span className="px-2 py-0.5 text-xs rounded-md bg-secondary/80 text-muted-foreground">
            {problem.subTopic}
          </span>
        )}
      </div>

      {/* Companies */}
      {problem.companies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {problem.companies.slice(0, 3).map((company) => (
            <span key={company} className="company-tag">
              {company}
            </span>
          ))}
          {problem.companies.length > 3 && (
            <span className="company-tag">+{problem.companies.length - 3} more</span>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2">
        <a
          href={problem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button variant="outline" className="w-full gap-2 bg-primary/10 border-primary/30 text-primary hover:bg-primary/20">
            Solve Problem
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </a>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onToggleSolved(problem.id)}
          className={cn(
            "transition-colors",
            isSolved ? "text-success hover:text-success/80" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Check className="h-4 w-4" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onToggleBookmark(problem.id)}
          className={cn(
            "transition-colors",
            isBookmarked ? "text-accent hover:text-accent/80" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {isBookmarked ? (
            <BookmarkCheck className="h-4 w-4" />
          ) : (
            <Bookmark className="h-4 w-4" />
          )}
        </Button>
      </div>
    </article>
  );
};
