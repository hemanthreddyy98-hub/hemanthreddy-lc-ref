import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers } from 'lucide-react';

interface SubtopicData {
  subtopic: string;
  total: number;
  withVideo: number;
  percentage: number;
}

interface TopicData {
  topic: string;
  total: number;
  withVideo: number;
  percentage: number;
  subtopics: SubtopicData[];
}

interface TopicTreemapProps {
  topicStats: TopicData[];
}

// Color palette for topics
const TOPIC_COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
  'hsl(200, 70%, 50%)',
  'hsl(280, 65%, 55%)',
  'hsl(340, 75%, 55%)',
  'hsl(160, 60%, 45%)',
  'hsl(60, 70%, 50%)',
];

interface TreemapNode {
  name: string;
  size?: number;
  children?: TreemapNode[];
  color?: string;
  total?: number;
  withVideo?: number;
  percentage?: number;
  isSubtopic?: boolean;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-popover border border-border rounded-lg p-3 shadow-lg max-w-xs">
        <p className="font-semibold text-foreground truncate">{data.name}</p>
        <div className="mt-1 space-y-0.5">
          <p className="text-sm text-muted-foreground">
            Problems: <span className="font-medium text-foreground">{data.total}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            With Video: <span className="font-medium text-foreground">{data.withVideo}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Coverage: <span className="font-medium text-foreground">{data.percentage}%</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

// Custom content renderer for treemap cells
const CustomizedContent = (props: any) => {
  const { x, y, width, height, name, depth, color, total } = props;
  
  // Don't render if too small
  if (width < 30 || height < 20) return null;
  
  const fontSize = Math.min(12, Math.max(8, width / 10));
  const showLabel = width > 50 && height > 25;
  const showCount = width > 60 && height > 40;
  
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: color,
          stroke: 'hsl(var(--background))',
          strokeWidth: depth === 1 ? 2 : 1,
          opacity: depth === 2 ? 0.85 : 1,
        }}
      />
      {showLabel && (
        <text
          x={x + width / 2}
          y={y + height / 2 - (showCount ? 6 : 0)}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontSize: fontSize,
            fill: 'white',
            fontWeight: depth === 1 ? 600 : 400,
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
          }}
        >
          {name.length > width / 7 ? name.slice(0, Math.floor(width / 7)) + '...' : name}
        </text>
      )}
      {showCount && (
        <text
          x={x + width / 2}
          y={y + height / 2 + 10}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontSize: fontSize - 1,
            fill: 'rgba(255,255,255,0.8)',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
          }}
        >
          {total}
        </text>
      )}
    </g>
  );
};

export const TopicTreemap = ({ topicStats }: TopicTreemapProps) => {
  // Transform data for treemap - flatten structure with subtopics
  const treemapData: TreemapNode[] = topicStats.map((topic, index) => {
    const color = TOPIC_COLORS[index % TOPIC_COLORS.length];
    
    // If topic has subtopics with meaningful data, include them
    if (topic.subtopics && topic.subtopics.length > 1) {
      return {
        name: topic.topic,
        color,
        total: topic.total,
        withVideo: topic.withVideo,
        percentage: topic.percentage,
        children: topic.subtopics.slice(0, 8).map(sub => ({
          name: sub.subtopic,
          size: sub.total,
          total: sub.total,
          withVideo: sub.withVideo,
          percentage: sub.percentage,
          color: color,
          isSubtopic: true,
        })),
      };
    }
    
    // Otherwise just show the topic
    return {
      name: topic.topic,
      size: topic.total,
      total: topic.total,
      withVideo: topic.withVideo,
      percentage: topic.percentage,
      color,
    };
  });

  const totalProblems = topicStats.reduce((sum, t) => sum + t.total, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Layers className="h-5 w-5" />
          Topic Distribution Treemap
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <Treemap
              data={treemapData}
              dataKey="size"
              aspectRatio={4 / 3}
              stroke="hsl(var(--background))"
              content={<CustomizedContent />}
            >
              <Tooltip content={<CustomTooltip />} />
            </Treemap>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {topicStats.slice(0, 10).map((topic, index) => (
            <div key={topic.topic} className="flex items-center gap-1.5">
              <div 
                className="w-3 h-3 rounded-sm shrink-0" 
                style={{ backgroundColor: TOPIC_COLORS[index % TOPIC_COLORS.length] }}
              />
              <span className="text-xs text-muted-foreground truncate max-w-[100px]" title={topic.topic}>
                {topic.topic}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-3 text-sm text-muted-foreground">
          {totalProblems.toLocaleString()} problems across {topicStats.length} topics
        </div>
      </CardContent>
    </Card>
  );
};
