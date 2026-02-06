import { useState } from 'react';
import { Download, FileJson, FileSpreadsheet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UnifiedProblem } from '@/types/problem';
import { toast } from 'sonner';

interface ExportDataProps {
  problems: UnifiedProblem[];
  getVideoUrl: (problemId: number, title?: string) => string | undefined;
}

type ExportFormat = 'json' | 'csv';

export const ExportData = ({ problems, getVideoUrl }: ExportDataProps) => {
  const [isExporting, setIsExporting] = useState(false);

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const escapeCsvValue = (value: any): string => {
    if (value === null || value === undefined) return '';
    const str = String(value);
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };

  const exportProblemsAsJson = () => {
    setIsExporting(true);
    try {
      const exportData = problems.map(p => ({
        id: p.id,
        title: p.title,
        difficulty: p.difficulty,
        topic: p.topic,
        subTopic: p.subTopic,
        companies: p.companies,
        companyYears: p.companyYears,
        acceptance: p.acceptance,
        frequency: p.frequency,
        isPremium: p.isPremium,
        url: p.url,
        timeComplexity: p.timeComplexity,
        spaceComplexity: p.spaceComplexity,
        approach: p.approach,
        platform: p.platform,
        videoUrl: getVideoUrl(p.id, p.title) || null,
      }));
      
      const json = JSON.stringify(exportData, null, 2);
      const timestamp = new Date().toISOString().split('T')[0];
      downloadFile(json, `problems-export-${timestamp}.json`, 'application/json');
      toast.success(`Exported ${problems.length} problems as JSON`);
    } catch (error) {
      toast.error('Failed to export problems');
      console.error('Export error:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const exportProblemsAsCsv = () => {
    setIsExporting(true);
    try {
      const headers = [
        'ID', 'Title', 'Difficulty', 'Topic', 'SubTopic', 'Companies', 
        'Acceptance', 'Frequency', 'Premium', 'URL', 'Time Complexity', 
        'Space Complexity', 'Approach', 'Platform', 'Video URL'
      ];
      
      const rows = problems.map(p => [
        p.id,
        escapeCsvValue(p.title),
        p.difficulty,
        escapeCsvValue(p.topic),
        escapeCsvValue(p.subTopic),
        escapeCsvValue(p.companies?.join('; ') || ''),
        p.acceptance,
        p.frequency,
        p.isPremium ? 'Yes' : 'No',
        p.url,
        escapeCsvValue(p.timeComplexity),
        escapeCsvValue(p.spaceComplexity),
        escapeCsvValue(p.approach),
        p.platform,
        getVideoUrl(p.id, p.title) || '',
      ]);
      
      const csv = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
      const timestamp = new Date().toISOString().split('T')[0];
      downloadFile(csv, `problems-export-${timestamp}.csv`, 'text/csv');
      toast.success(`Exported ${problems.length} problems as CSV`);
    } catch (error) {
      toast.error('Failed to export problems');
      console.error('Export error:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const exportVideosAsJson = () => {
    setIsExporting(true);
    try {
      const videosData = problems
        .map(p => ({
          problemId: p.id,
          problemTitle: p.title,
          platform: p.platform,
          videoUrl: getVideoUrl(p.id, p.title),
        }))
        .filter(v => v.videoUrl);
      
      const json = JSON.stringify(videosData, null, 2);
      const timestamp = new Date().toISOString().split('T')[0];
      downloadFile(json, `videos-export-${timestamp}.json`, 'application/json');
      toast.success(`Exported ${videosData.length} video links as JSON`);
    } catch (error) {
      toast.error('Failed to export videos');
      console.error('Export error:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const exportVideosAsCsv = () => {
    setIsExporting(true);
    try {
      const headers = ['Problem ID', 'Problem Title', 'Platform', 'Video URL'];
      
      const rows = problems
        .map(p => ({
          id: p.id,
          title: p.title,
          platform: p.platform,
          videoUrl: getVideoUrl(p.id, p.title),
        }))
        .filter(v => v.videoUrl)
        .map(v => [
          v.id,
          escapeCsvValue(v.title),
          v.platform,
          v.videoUrl,
        ]);
      
      const csv = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
      const timestamp = new Date().toISOString().split('T')[0];
      downloadFile(csv, `videos-export-${timestamp}.csv`, 'text/csv');
      toast.success(`Exported ${rows.length} video links as CSV`);
    } catch (error) {
      toast.error('Failed to export videos');
      console.error('Export error:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const videoCount = problems.filter(p => getVideoUrl(p.id, p.title)).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" disabled={isExporting}>
          <Download className="h-4 w-4 mr-2" />
          {isExporting ? 'Exporting...' : 'Export'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Export Problems ({problems.length})</DropdownMenuLabel>
        <DropdownMenuItem onClick={exportProblemsAsJson}>
          <FileJson className="h-4 w-4 mr-2" />
          Export as JSON
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportProblemsAsCsv}>
          <FileSpreadsheet className="h-4 w-4 mr-2" />
          Export as CSV
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel>Export Videos ({videoCount})</DropdownMenuLabel>
        <DropdownMenuItem onClick={exportVideosAsJson} disabled={videoCount === 0}>
          <FileJson className="h-4 w-4 mr-2" />
          Export as JSON
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportVideosAsCsv} disabled={videoCount === 0}>
          <FileSpreadsheet className="h-4 w-4 mr-2" />
          Export as CSV
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
