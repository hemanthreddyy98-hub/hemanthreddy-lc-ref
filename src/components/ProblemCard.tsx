import { Clock, HardDrive, ExternalLink, Bookmark, BookmarkCheck, Check, Lock, Lightbulb, Youtube } from 'lucide-react';
import { UnifiedProblem } from '@/types/problem';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ProblemCardProps {
  problem: UnifiedProblem;
  index: number;
  isBookmarked: boolean;
  isSolved: boolean;
  videoUrl?: string;
  onToggleBookmark: (id: number) => void;
  onToggleSolved: (id: number) => void;
  selectedCompanies?: string[];
}

export const ProblemCard = ({
  problem,
  index,
  isBookmarked,
  isSolved,
  videoUrl,
  onToggleBookmark,
  onToggleSolved,
  selectedCompanies = [],
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
          {problem.platform === 'leetcode' && problem.leetcodeId && (
            <span className="text-xs text-[#FFA116] font-mono">LC #{problem.leetcodeId}</span>
          )}
          {problem.platform === 'hackerrank' && problem.hackerrankId && (
            <span className="text-xs text-[#00EA64] font-mono">HR</span>
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

      {/* Approach Hint */}
      {problem.approach && (
        <div className="flex items-start gap-2 mb-3 p-2 rounded-lg bg-accent/10 border border-accent/20">
          <Lightbulb className="h-3.5 w-3.5 text-accent mt-0.5 flex-shrink-0" />
          <span className="text-xs text-accent leading-relaxed">{problem.approach}</span>
        </div>
      )}

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

      {/* Companies with year info when filtered */}
      {problem.companies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {problem.companies.slice(0, 3).map((company) => {
            const years = problem.companyYears?.[company];
            const showYears = selectedCompanies.length > 0 && selectedCompanies.includes(company) && years && years.length > 0;
            return (
              <span key={company} className="company-tag flex items-center gap-1">
                {company}
                {showYears && (
                  <span className="text-[10px] text-primary font-medium ml-0.5">
                    ({years.sort((a, b) => b - a).slice(0, 2).join(', ')})
                  </span>
                )}
              </span>
            );
          })}
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
            Solve
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </a>
        
        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="gap-2 bg-red-500/10 border-red-500/30 text-red-500 hover:bg-red-500/20">
              <Youtube className="h-4 w-4" />
            </Button>
          </a>
        )}
        
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
