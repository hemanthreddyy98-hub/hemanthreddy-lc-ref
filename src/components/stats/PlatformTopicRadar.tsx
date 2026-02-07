import { useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crosshair } from 'lucide-react';
import { UnifiedProblem } from '@/types/problem';

interface PlatformTopicRadarProps {
  problems: UnifiedProblem[];
}

const PLATFORM_COLORS: Record<string, string> = {
  leetcode: 'hsl(var(--chart-1))',
  hackerrank: 'hsl(var(--chart-2))',
  gfg: 'hsl(var(--chart-3))',
  codechef: 'hsl(var(--chart-4))',
  codeforces: 'hsl(var(--chart-5))',
};

const PLATFORM_NAMES: Record<string, string> = {
  leetcode: 'LeetCode',
  hackerrank: 'HackerRank',
  gfg: 'GFG',
  codechef: 'CodeChef',
  codeforces: 'Codeforces',
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-popover border border-border rounded-lg p-3 shadow-lg text-sm">
      <p className="font-semibold text-foreground mb-1">{label}</p>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.stroke }} />
          <span className="text-muted-foreground">{PLATFORM_NAMES[p.dataKey] || p.dataKey}:</span>
          <span className="font-medium text-foreground">{p.value}</span>
        </div>
      ))}
    </div>
  );
};

export const PlatformTopicRadar = ({ problems }: PlatformTopicRadarProps) => {
  const { chartData, platforms } = useMemo(() => {
    const map: Record<string, Record<string, number>> = {};
    const topicTotals: Record<string, number> = {};
    const platformSet = new Set<string>();

    problems.forEach(p => {
      const topic = p.topic || 'Unknown';
      const platform = p.platform || 'unknown';
      platformSet.add(platform);
      topicTotals[topic] = (topicTotals[topic] || 0) + 1;
      if (!map[topic]) map[topic] = {};
      map[topic][platform] = (map[topic][platform] || 0) + 1;
    });

    const topTopics = Object.entries(topicTotals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([t]) => t);

    const platforms = Array.from(platformSet).filter(p => p in PLATFORM_COLORS);

    const chartData = topTopics.map(topic => {
      const row: Record<string, any> = { topic };
      platforms.forEach(p => { row[p] = map[topic]?.[p] || 0; });
      return row;
    });

    return { chartData, platforms };
  }, [problems]);

  if (chartData.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Crosshair className="h-5 w-5" />
          Topic Coverage by Platform
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[420px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData} outerRadius="75%">
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis
                dataKey="topic"
                tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
              />
              <PolarRadiusAxis
                angle={90}
                tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip content={<CustomTooltip />} />
              {platforms.map(p => (
                <Radar
                  key={p}
                  name={PLATFORM_NAMES[p] || p}
                  dataKey={p}
                  stroke={PLATFORM_COLORS[p]}
                  fill={PLATFORM_COLORS[p]}
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
              ))}
              <Legend
                wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
                formatter={(value: string) => <span className="text-foreground">{value}</span>}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
