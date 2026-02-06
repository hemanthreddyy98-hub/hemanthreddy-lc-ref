import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DifficultyData {
  difficulty: 'Easy' | 'Medium' | 'Hard';
  total: number;
  withVideo: number;
  percentage: number;
}

interface PlatformData {
  platform: string;
  total: number;
  withVideo: number;
  percentage: number;
  color: string;
}

interface DistributionChartsProps {
  difficultyStats: DifficultyData[];
  platformStats: PlatformData[];
  getPlatformDisplayName: (platform: string) => string;
}

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: 'hsl(142, 76%, 36%)',
  Medium: 'hsl(45, 93%, 47%)',
  Hard: 'hsl(0, 84%, 60%)',
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
        <p className="font-medium text-foreground">{data.name || data.difficulty || data.platform}</p>
        <p className="text-sm text-muted-foreground">
          Problems: <span className="font-semibold text-foreground">{data.total || data.value}</span>
        </p>
        {data.withVideo !== undefined && (
          <p className="text-sm text-muted-foreground">
            With Video: <span className="font-semibold text-foreground">{data.withVideo}</span>
          </p>
        )}
      </div>
    );
  }
  return null;
};

export const DistributionCharts = ({ 
  difficultyStats, 
  platformStats,
  getPlatformDisplayName 
}: DistributionChartsProps) => {
  // Prepare data for difficulty pie chart
  const difficultyPieData = difficultyStats.map(d => ({
    name: d.difficulty,
    value: d.total,
    withVideo: d.withVideo,
    color: DIFFICULTY_COLORS[d.difficulty],
  }));

  // Prepare data for platform bar chart
  const platformBarData = platformStats.map(p => ({
    name: getPlatformDisplayName(p.platform),
    total: p.total,
    withVideo: p.withVideo,
    fill: p.color,
  }));

  const totalProblems = difficultyStats.reduce((sum, d) => sum + d.total, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Difficulty Distribution Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Difficulty Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={difficultyPieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {difficultyPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value) => <span className="text-foreground text-sm">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center mt-2">
            <span className="text-2xl font-bold text-foreground">{totalProblems.toLocaleString()}</span>
            <span className="text-muted-foreground text-sm ml-2">Total Problems</span>
          </div>
        </CardContent>
      </Card>

      {/* Platform Distribution Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Platform Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={platformBarData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
              >
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12}
                  width={75}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="total" 
                  name="Problems"
                  radius={[0, 4, 4, 0]}
                >
                  {platformBarData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-2 flex-wrap">
            {platformBarData.map((p) => (
              <div key={p.name} className="flex items-center gap-1.5">
                <div 
                  className="w-3 h-3 rounded-sm" 
                  style={{ backgroundColor: p.fill }}
                />
                <span className="text-xs text-muted-foreground">{p.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
