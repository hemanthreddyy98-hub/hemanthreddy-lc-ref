import { ChevronRight } from 'lucide-react';
import { topics, getTopicCounts } from '@/data/leetcodeProblems';
import { cn } from '@/lib/utils';

interface SidebarProps {
  selectedTopic: string;
  onTopicSelect: (topic: string) => void;
  isOpen: boolean;
}

export const Sidebar = ({ selectedTopic, onTopicSelect, isOpen }: SidebarProps) => {
  const topicCounts = getTopicCounts();

  return (
    <aside
      className={cn(
        "fixed lg:sticky top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="h-full overflow-y-auto scrollbar-thin p-4">
        <div className="mb-4">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
            Topics
          </h2>
        </div>

        <nav className="space-y-1">
          <button
            onClick={() => onTopicSelect('All')}
            className={cn(
              "topic-item w-full",
              selectedTopic === 'All' && "active"
            )}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">📚</span>
              <span className="text-sm font-medium">All Problems</span>
            </div>
            <span className="text-xs font-mono bg-secondary/80 px-2 py-0.5 rounded-md">
              {Object.values(topicCounts).reduce((a, b) => a + b, 0)}
            </span>
          </button>

          {topics.map((topic) => (
            <button
              key={topic.name}
              onClick={() => onTopicSelect(topic.name)}
              className={cn(
                "topic-item w-full group",
                selectedTopic === topic.name && "active"
              )}
            >
              <div className="flex items-center gap-2">
                <ChevronRight className={cn(
                  "h-3 w-3 transition-transform text-muted-foreground",
                  selectedTopic === topic.name && "rotate-90 text-primary"
                )} />
                <span className="text-lg">{topic.icon}</span>
                <span className="text-sm font-medium truncate">{topic.name}</span>
              </div>
              <span className="text-xs font-mono bg-secondary/80 px-2 py-0.5 rounded-md group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                {topicCounts[topic.name] || topic.count}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};
