import { cn } from '@/lib/utils';

interface SubtopicTabsProps {
  subTopics: string[];
  selectedSubtopic: string;
  onSubtopicSelect: (subtopic: string) => void;
}

export const SubtopicTabs = ({ subTopics, selectedSubtopic, onSubtopicSelect }: SubtopicTabsProps) => {
  if (subTopics.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onSubtopicSelect('All')}
        className={cn(
          "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
          selectedSubtopic === 'All'
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary"
        )}
      >
        All
      </button>
      {subTopics.map((subtopic) => (
        <button
          key={subtopic}
          onClick={() => onSubtopicSelect(subtopic)}
          className={cn(
            "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
            selectedSubtopic === subtopic
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary"
          )}
        >
          {subtopic}
        </button>
      ))}
    </div>
  );
};
