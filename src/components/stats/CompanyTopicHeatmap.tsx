import { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Flame } from 'lucide-react';
import { UnifiedProblem } from '@/types/problem';

interface CompanyTopicHeatmapProps {
  problems: UnifiedProblem[];
}

const HEATMAP_COLORS = [
  'hsl(var(--muted))',
  'hsl(142, 55%, 75%)',
  'hsl(142, 55%, 55%)',
  'hsl(48, 90%, 55%)',
  'hsl(25, 90%, 55%)',
  'hsl(0, 75%, 55%)',
];

function getHeatColor(count: number, max: number): string {
  if (count === 0) return HEATMAP_COLORS[0];
  const ratio = count / max;
  if (ratio <= 0.15) return HEATMAP_COLORS[1];
  if (ratio <= 0.35) return HEATMAP_COLORS[2];
  if (ratio <= 0.55) return HEATMAP_COLORS[3];
  if (ratio <= 0.8) return HEATMAP_COLORS[4];
  return HEATMAP_COLORS[5];
}

export const CompanyTopicHeatmap = ({ problems }: CompanyTopicHeatmapProps) => {
  const [topN, setTopN] = useState('10');

  const { companies, topics, matrix, maxVal } = useMemo(() => {
    const companyTopicMap: Record<string, Record<string, number>> = {};
    const topicTotals: Record<string, number> = {};
    const companyTotals: Record<string, number> = {};

    problems.forEach(p => {
      const topic = p.topic || 'Unknown';
      if (!p.companies?.length) return;
      p.companies.forEach(c => {
        companyTotals[c] = (companyTotals[c] || 0) + 1;
        topicTotals[topic] = (topicTotals[topic] || 0) + 1;
        if (!companyTopicMap[c]) companyTopicMap[c] = {};
        companyTopicMap[c][topic] = (companyTopicMap[c][topic] || 0) + 1;
      });
    });

    const n = parseInt(topN);
    const companies = Object.entries(companyTotals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
      .map(([name]) => name);

    const topics = Object.entries(topicTotals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map(([name]) => name);

    let maxVal = 0;
    const matrix = companies.map(c =>
      topics.map(t => {
        const val = companyTopicMap[c]?.[t] || 0;
        if (val > maxVal) maxVal = val;
        return val;
      })
    );

    return { companies, topics, matrix, maxVal };
  }, [problems, topN]);

  if (companies.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Flame className="h-5 w-5" />
            Company × Topic Heatmap
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
        <div className="overflow-x-auto">
          <TooltipProvider delayDuration={100}>
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="text-left p-1.5 font-medium text-muted-foreground sticky left-0 bg-card z-10 min-w-[100px]">
                    Company
                  </th>
                  {topics.map(t => (
                    <th
                      key={t}
                      className="p-1 font-medium text-muted-foreground text-center"
                    >
                      <div className="truncate max-w-[70px] mx-auto" title={t}>{t}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {companies.map((company, ri) => (
                  <tr key={company}>
                    <td className="p-1.5 font-medium truncate max-w-[120px] sticky left-0 bg-card z-10" title={company}>
                      {company}
                    </td>
                    {matrix[ri].map((val, ci) => (
                      <td key={ci} className="p-0.5 text-center">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div
                              className="w-full aspect-square rounded-sm flex items-center justify-center min-w-[28px] min-h-[28px] cursor-default transition-transform hover:scale-110"
                              style={{ backgroundColor: getHeatColor(val, maxVal) }}
                            >
                              {val > 0 && (
                                <span className="text-[10px] font-semibold text-white mix-blend-difference">
                                  {val}
                                </span>
                              )}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="text-xs">
                            <p className="font-semibold">{company} × {topics[ci]}</p>
                            <p>{val} problem{val !== 1 ? 's' : ''}</p>
                          </TooltipContent>
                        </Tooltip>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </TooltipProvider>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-muted-foreground">
          <span>Less</span>
          {HEATMAP_COLORS.map((color, i) => (
            <div key={i} className="w-4 h-4 rounded-sm" style={{ backgroundColor: color }} />
          ))}
          <span>More</span>
        </div>
      </CardContent>
    </Card>
  );
};
