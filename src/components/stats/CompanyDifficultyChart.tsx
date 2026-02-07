import { useMemo, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3 } from 'lucide-react';
import { UnifiedProblem } from '@/types/problem';

interface CompanyDifficultyChartProps {
  problems: UnifiedProblem[];
}

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: 'hsl(142, 71%, 45%)',
  Medium: 'hsl(48, 96%, 53%)',
  Hard: 'hsl(0, 84%, 60%)',
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const total = payload.reduce((s: number, p: any) => s + (p.value || 0), 0);
  return (
    <div className="bg-popover border border-border rounded-lg p-3 shadow-lg text-sm">
      <p className="font-semibold text-foreground mb-1">{label}</p>
      {payload.map((p: any) => (
        <div key={p.dataKey} className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: p.fill }} />
          <span className="text-muted-foreground">{p.dataKey}:</span>
          <span className="font-medium text-foreground">{p.value}</span>
        </div>
      ))}
      <div className="border-t border-border mt-1 pt-1 text-muted-foreground">
        Total: <span className="font-medium text-foreground">{total}</span>
      </div>
    </div>
  );
};

export const CompanyDifficultyChart = ({ problems }: CompanyDifficultyChartProps) => {
  const [topN, setTopN] = useState('10');

  const chartData = useMemo(() => {
    const map: Record<string, { Easy: number; Medium: number; Hard: number }> = {};

    problems.forEach(p => {
      if (!p.companies?.length) return;
      const diff = p.difficulty || 'Medium';
      p.companies.forEach(c => {
        if (!map[c]) map[c] = { Easy: 0, Medium: 0, Hard: 0 };
        if (diff in map[c]) map[c][diff as keyof typeof map[typeof c]]++;
      });
    });

    return Object.entries(map)
      .map(([company, counts]) => ({
        company,
        ...counts,
        total: counts.Easy + counts.Medium + counts.Hard,
      }))
      .sort((a, b) => b.total - a.total)
      .slice(0, parseInt(topN));
  }, [problems, topN]);

  if (chartData.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Difficulty Breakdown by Company
          </CardTitle>
          <Select value={topN} onValueChange={setTopN}>
            <SelectTrigger className="w-[130px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">Top 5</SelectItem>
              <SelectItem value="10">Top 10</SelectItem>
              <SelectItem value="15">Top 15</SelectItem>
              <SelectItem value="20">Top 20</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 20, top: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
              <XAxis type="number" tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
              <YAxis
                type="category"
                dataKey="company"
                width={100}
                tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted) / 0.3)' }} />
              <Legend
                wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
                formatter={(value: string) => <span className="text-foreground">{value}</span>}
              />
              <Bar dataKey="Easy" stackId="a" fill={DIFFICULTY_COLORS.Easy} radius={[0, 0, 0, 0]} />
              <Bar dataKey="Medium" stackId="a" fill={DIFFICULTY_COLORS.Medium} />
              <Bar dataKey="Hard" stackId="a" fill={DIFFICULTY_COLORS.Hard} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
