import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SubtopicStats {
  subtopic: string;
  total: number;
  withVideo: number;
  percentage: number;
}

interface TopicWithSubtopics {
  topic: string;
  total: number;
  withVideo: number;
  percentage: number;
  subtopics: SubtopicStats[];
}

interface TopicSubtopicStatsProps {
  topicStats: TopicWithSubtopics[];
}

export const TopicSubtopicStats = ({ topicStats }: TopicSubtopicStatsProps) => {
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());

  const toggleTopic = (topic: string) => {
    setExpandedTopics(prev => {
      const next = new Set(prev);
      if (next.has(topic)) {
        next.delete(topic);
      } else {
        next.add(topic);
      }
      return next;
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Topics & Subtopics Breakdown</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {topicStats.map((topic, index) => {
          const isExpanded = expandedTopics.has(topic.topic);
          const hasSubtopics = topic.subtopics.length > 0;
          
          return (
            <div key={topic.topic} className="border rounded-lg overflow-hidden">
              {/* Topic Header */}
              <button
                onClick={() => hasSubtopics && toggleTopic(topic.topic)}
                className={cn(
                  "w-full flex items-center gap-2 p-3 text-left transition-colors",
                  hasSubtopics ? "hover:bg-muted/50 cursor-pointer" : "cursor-default",
                  isExpanded && "bg-muted/30"
                )}
              >
                {hasSubtopics ? (
                  isExpanded ? (
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )
                ) : (
                  <div className="w-4" />
                )}
                
                <Badge variant="outline" className="shrink-0 w-6 h-6 p-0 flex items-center justify-center text-xs">
                  {index + 1}
                </Badge>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium truncate" title={topic.topic}>
                      {topic.topic}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-sm text-muted-foreground">
                        {topic.withVideo}/{topic.total} videos
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {topic.percentage}%
                      </Badge>
                    </div>
                  </div>
                  <Progress value={topic.percentage} className="h-1.5 mt-2" />
                </div>
              </button>
              
              {/* Subtopics */}
              {isExpanded && hasSubtopics && (
                <div className="border-t bg-muted/20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 p-2">
                    {topic.subtopics.map((subtopic) => (
                      <div
                        key={subtopic.subtopic}
                        className="flex items-center justify-between p-2 rounded bg-background/50 text-sm"
                      >
                        <span className="truncate mr-2" title={subtopic.subtopic}>
                          {subtopic.subtopic}
                        </span>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs text-muted-foreground">
                            {subtopic.withVideo}/{subtopic.total}
                          </span>
                          <div className="w-16">
                            <Progress value={subtopic.percentage} className="h-1" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {topicStats.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">No topic data available</p>
        )}
      </CardContent>
    </Card>
  );
};
