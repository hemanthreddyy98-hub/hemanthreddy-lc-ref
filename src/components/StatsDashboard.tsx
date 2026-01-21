import { useMemo } from 'react';
import { BarChart3, Video, FileText, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
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

export const StatsDashboard = ({ problems, getVideoUrl }: StatsDashboardProps) => {
  const stats = useMemo(() => {
    const totalProblems = problems.length;
    let problemsWithVideos = 0;
    
    // Platform stats
    const platformMap: Record<string, { total: number; withVideo: number }> = {};
    // Topic stats
    const topicMap: Record<string, { total: number; withVideo: number }> = {};
    
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
    
    return {
      totalProblems,
      problemsWithVideos,
      overallPercentage: totalProblems > 0 ? Math.round((problemsWithVideos / totalProblems) * 100) : 0,
      platformStats,
      topicStats,
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
            <CardTitle className="text-sm font-medium">Platforms</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.platformStats.length}</div>
            <p className="text-xs text-muted-foreground">Active platforms</p>
          </CardContent>
        </Card>
      </div>

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
