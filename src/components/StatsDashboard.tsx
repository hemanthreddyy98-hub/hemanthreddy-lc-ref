import { useMemo } from 'react';
import { BarChart3, Video, FileText, TrendingUp, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { UnifiedProblem } from '@/types/problem';

interface StatsDashboardProps {
  problems: UnifiedProblem[];
  getVideoUrl: (problemId: number, title?: string) => string | undefined;
}

interface PlatformStats {
  platform: string;
  total: number;
  withVideo: number;
  percentage: number;
  color: string;
}

interface TopicStats {
  topic: string;
  total: number;
  withVideo: number;
  percentage: number;
}

interface DifficultyStats {
  difficulty: 'Easy' | 'Medium' | 'Hard';
  total: number;
  withVideo: number;
  percentage: number;
  color: string;
  bgColor: string;
}

interface CompanyStats {
  company: string;
  total: number;
  withVideo: number;
  percentage: number;
}

export const StatsDashboard = ({ problems, getVideoUrl }: StatsDashboardProps) => {
  const stats = useMemo(() => {
    const totalProblems = problems.length;
    let problemsWithVideos = 0;
    
    // Platform stats
    const platformMap: Record<string, { total: number; withVideo: number }> = {};
    // Topic stats
    const topicMap: Record<string, { total: number; withVideo: number }> = {};
    // Difficulty stats
    const difficultyMap: Record<string, { total: number; withVideo: number }> = {
      Easy: { total: 0, withVideo: 0 },
      Medium: { total: 0, withVideo: 0 },
      Hard: { total: 0, withVideo: 0 },
    };
    // Company stats
    const companyMap: Record<string, { total: number; withVideo: number }> = {};
    
    problems.forEach(problem => {
      const hasVideo = !!getVideoUrl(problem.id, problem.title);
      if (hasVideo) problemsWithVideos++;
      
      // Platform stats
      const platform = problem.platform || 'unknown';
      if (!platformMap[platform]) {
        platformMap[platform] = { total: 0, withVideo: 0 };
      }
      platformMap[platform].total++;
      if (hasVideo) platformMap[platform].withVideo++;
      
      // Topic stats
      const topic = problem.topic || 'Unknown';
      if (!topicMap[topic]) {
        topicMap[topic] = { total: 0, withVideo: 0 };
      }
      topicMap[topic].total++;
      if (hasVideo) topicMap[topic].withVideo++;
      
      // Difficulty stats
      const difficulty = problem.difficulty || 'Medium';
      if (difficultyMap[difficulty]) {
        difficultyMap[difficulty].total++;
        if (hasVideo) difficultyMap[difficulty].withVideo++;
      }
      
      // Company stats
      if (problem.companies && problem.companies.length > 0) {
        problem.companies.forEach(company => {
          if (!companyMap[company]) {
            companyMap[company] = { total: 0, withVideo: 0 };
          }
          companyMap[company].total++;
          if (hasVideo) companyMap[company].withVideo++;
        });
      }
    });
    
    const platformColors: Record<string, string> = {
      leetcode: 'hsl(var(--chart-1))',
      hackerrank: 'hsl(var(--chart-2))',
      gfg: 'hsl(var(--chart-3))',
      codechef: 'hsl(var(--chart-4))',
      codeforces: 'hsl(var(--chart-5))',
    };
    
    const platformStats: PlatformStats[] = Object.entries(platformMap)
      .map(([platform, data]) => ({
        platform,
        total: data.total,
        withVideo: data.withVideo,
        percentage: data.total > 0 ? Math.round((data.withVideo / data.total) * 100) : 0,
        color: platformColors[platform] || 'hsl(var(--primary))',
      }))
      .sort((a, b) => b.total - a.total);
    
    const topicStats: TopicStats[] = Object.entries(topicMap)
      .map(([topic, data]) => ({
        topic,
        total: data.total,
        withVideo: data.withVideo,
        percentage: data.total > 0 ? Math.round((data.withVideo / data.total) * 100) : 0,
      }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 10); // Top 10 topics
    
    const difficultyColors: Record<string, { color: string; bgColor: string }> = {
      Easy: { color: 'text-green-600 dark:text-green-400', bgColor: 'bg-green-500' },
      Medium: { color: 'text-yellow-600 dark:text-yellow-400', bgColor: 'bg-yellow-500' },
      Hard: { color: 'text-red-600 dark:text-red-400', bgColor: 'bg-red-500' },
    };
    
    const difficultyStats: DifficultyStats[] = (['Easy', 'Medium', 'Hard'] as const).map(difficulty => ({
      difficulty,
      total: difficultyMap[difficulty].total,
      withVideo: difficultyMap[difficulty].withVideo,
      percentage: difficultyMap[difficulty].total > 0 
        ? Math.round((difficultyMap[difficulty].withVideo / difficultyMap[difficulty].total) * 100) 
        : 0,
      color: difficultyColors[difficulty].color,
      bgColor: difficultyColors[difficulty].bgColor,
    }));
    
    const companyStats: CompanyStats[] = Object.entries(companyMap)
      .map(([company, data]) => ({
        company,
        total: data.total,
        withVideo: data.withVideo,
        percentage: data.total > 0 ? Math.round((data.withVideo / data.total) * 100) : 0,
      }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 15); // Top 15 companies
    
    return {
      totalProblems,
      problemsWithVideos,
      overallPercentage: totalProblems > 0 ? Math.round((problemsWithVideos / totalProblems) * 100) : 0,
      platformStats,
      topicStats,
      difficultyStats,
      companyStats,
      totalCompanies: Object.keys(companyMap).length,
    };
  }, [problems, getVideoUrl]);

  const getPlatformDisplayName = (platform: string) => {
    const names: Record<string, string> = {
      leetcode: 'LeetCode',
      hackerrank: 'HackerRank',
      gfg: 'GeeksforGeeks',
      codechef: 'CodeChef',
      codeforces: 'Codeforces',
    };
    return names[platform] || platform;
  };

  return (
    <div className="space-y-6 mb-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Problems</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProblems.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all platforms</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">With Video</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.problemsWithVideos.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Have explanations</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Coverage</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.overallPercentage}%</div>
            <Progress value={stats.overallPercentage} className="mt-2 h-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Companies</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCompanies.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Unique companies</p>
          </CardContent>
        </Card>
      </div>

      {/* Difficulty Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Problem Distribution by Difficulty</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.difficultyStats.map((diff) => (
              <div key={diff.difficulty} className="text-center p-4 rounded-lg bg-muted/50">
                <div className={`text-2xl font-bold ${diff.color}`}>
                  {diff.total.toLocaleString()}
                </div>
                <div className="text-sm font-medium mt-1">{diff.difficulty}</div>
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Video Coverage</span>
                    <span>{diff.percentage}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${diff.bgColor} transition-all duration-300`}
                      style={{ width: `${diff.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {diff.withVideo}/{diff.total} videos
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Company Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Top Companies by Problem Count
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {stats.companyStats.map((company, index) => (
              <div 
                key={company.company} 
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Badge variant="outline" className="shrink-0 w-6 h-6 p-0 flex items-center justify-center text-xs">
                    {index + 1}
                  </Badge>
                  <span className="font-medium truncate" title={company.company}>
                    {company.company}
                  </span>
                </div>
                <div className="flex flex-col items-end shrink-0 ml-2">
                  <span className="text-sm font-semibold">{company.total}</span>
                  <span className="text-xs text-muted-foreground">
                    {company.withVideo} videos ({company.percentage}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
          {stats.companyStats.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">No company data available</p>
          )}
        </CardContent>
      </Card>

      {/* Platform & Topic Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Video Coverage by Platform</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {stats.platformStats.map((platform) => (
              <div key={platform.platform} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{getPlatformDisplayName(platform.platform)}</span>
                  <span className="text-muted-foreground">
                    {platform.withVideo}/{platform.total} ({platform.percentage}%)
                  </span>
                </div>
                <Progress 
                  value={platform.percentage} 
                  className="h-2"
                  style={{ '--progress-background': platform.color } as React.CSSProperties}
                />
              </div>
            ))}
            {stats.platformStats.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">No platform data available</p>
            )}
          </CardContent>
        </Card>

        {/* Topic Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Topics by Problem Count</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {stats.topicStats.map((topic, index) => (
              <div key={topic.topic} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium truncate max-w-[200px]" title={topic.topic}>
                    {index + 1}. {topic.topic}
                  </span>
                  <span className="text-muted-foreground whitespace-nowrap">
                    {topic.withVideo}/{topic.total} videos
                  </span>
                </div>
                <Progress value={topic.percentage} className="h-2" />
              </div>
            ))}
            {stats.topicStats.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">No topic data available</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
