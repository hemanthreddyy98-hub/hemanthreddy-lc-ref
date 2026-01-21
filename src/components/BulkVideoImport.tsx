import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { Upload, FileJson, FileSpreadsheet, Loader2, Check, X, Youtube } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface BulkVideoImportProps {
  onClose: () => void;
  onSuccess: () => void;
}

interface VideoRecord {
  problem_id: number;
  youtube_url: string;
  title?: string;
}

const YOUTUBE_URL_REGEX = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)[a-zA-Z0-9_-]{11}(&[a-zA-Z0-9_=-]*)*$/;

const EXAMPLE_JSON = `[
  {
    "problem_id": 1,
    "youtube_url": "https://www.youtube.com/watch?v=KLlXCFG5TnA",
    "title": "Two Sum - Java Solution"
  },
  {
    "problem_id": 2,
    "youtube_url": "https://www.youtube.com/watch?v=wgFPrzTjm7s",
    "title": "Add Two Numbers"
  }
]`;

const EXAMPLE_CSV = `problem_id,youtube_url,title
1,https://www.youtube.com/watch?v=KLlXCFG5TnA,Two Sum - Java Solution
2,https://www.youtube.com/watch?v=wgFPrzTjm7s,Add Two Numbers
3,https://www.youtube.com/watch?v=0K_eZGS5NsU,Longest Substring`;

// Normalize column names for flexible matching
function normalizeColumnName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[_\s]+/g, " ")
    .trim();
}

function findColumnIndex(headers: string[], possibleNames: string[]): number {
  const normalizedHeaders = headers.map((h) => h ? normalizeColumnName(String(h)) : "");
  const normalizedNames = possibleNames.map(normalizeColumnName);

  for (const name of normalizedNames) {
    const idx = normalizedHeaders.indexOf(name);
    if (idx !== -1) return idx;
  }
  for (const name of normalizedNames) {
    const idx = normalizedHeaders.findIndex((h) => h.startsWith(name));
    if (idx !== -1) return idx;
  }
  return normalizedHeaders.findIndex((h) => normalizedNames.some(name => h.includes(name)));
}

function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      values.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  values.push(current.trim());
  return values;
}

export const BulkVideoImport = ({ onClose, onSuccess }: BulkVideoImportProps) => {
  const [jsonInput, setJsonInput] = useState('');
  const [csvInput, setCsvInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [previewData, setPreviewData] = useState<VideoRecord[]>([]);
  const [parseError, setParseError] = useState<string | null>(null);
  const [progress, setProgress] = useState({ current: 0, total: 0, percent: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateVideoRecord = (data: any, index: number): VideoRecord => {
    const problemId = parseInt(data.problem_id);
    if (isNaN(problemId) || problemId <= 0) {
      throw new Error(`Row ${index + 1}: Invalid problem_id "${data.problem_id}"`);
    }

    const youtubeUrl = data.youtube_url?.trim() || data.url?.trim() || data.video_url?.trim();
    if (!youtubeUrl) {
      throw new Error(`Row ${index + 1}: Missing youtube_url`);
    }

    if (!YOUTUBE_URL_REGEX.test(youtubeUrl)) {
      throw new Error(`Row ${index + 1}: Invalid YouTube URL "${youtubeUrl}"`);
    }

    return {
      problem_id: problemId,
      youtube_url: youtubeUrl,
      title: data.title?.trim() || undefined,
    };
  };

  const parseJSON = (input: string): VideoRecord[] => {
    const data = JSON.parse(input);
    if (!Array.isArray(data)) {
      throw new Error('Input must be an array of video records');
    }
    return data.map((item, idx) => validateVideoRecord(item, idx));
  };

  const parseCSV = (input: string): VideoRecord[] => {
    const lines = input.trim().split('\n').filter(line => line.trim());
    if (lines.length < 2) {
      throw new Error('CSV must have header row and at least one data row');
    }

    const headers = parseCSVLine(lines[0]);
    const problemIdIdx = findColumnIndex(headers, ["problem id", "problem_id", "id", "problemid"]);
    const urlIdx = findColumnIndex(headers, ["youtube url", "youtube_url", "url", "video url", "video_url", "link"]);
    const titleIdx = findColumnIndex(headers, ["title", "video title", "name", "description"]);

    if (problemIdIdx === -1) {
      throw new Error('Could not find problem_id column. Expected: problem_id, id, or problem id');
    }
    if (urlIdx === -1) {
      throw new Error('Could not find youtube_url column. Expected: youtube_url, url, or video_url');
    }

    const records: VideoRecord[] = [];
    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      if (values.length === 0 || !values[problemIdIdx]) continue;

      records.push(validateVideoRecord({
        problem_id: values[problemIdIdx],
        youtube_url: values[urlIdx],
        title: titleIdx !== -1 ? values[titleIdx] : undefined,
      }, i - 1));
    }

    return records;
  };

  const handlePreview = (type: 'json' | 'csv') => {
    setParseError(null);
    setPreviewData([]);

    try {
      const input = type === 'json' ? jsonInput : csvInput;
      if (!input.trim()) {
        setParseError('Please enter data to import');
        return;
      }

      const data = type === 'json' ? parseJSON(input) : parseCSV(input);
      setPreviewData(data);
      toast.success(`Parsed ${data.length} video records successfully`);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      setParseError(message);
      toast.error(message);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const isJSON = file.name.endsWith('.json');

      if (isJSON) {
        setJsonInput(text);
        setTimeout(() => handlePreview('json'), 100);
      } else {
        setCsvInput(text);
        setTimeout(() => handlePreview('csv'), 100);
      }
    } catch (error) {
      toast.error('Failed to read file');
    }
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleImport = async () => {
    if (previewData.length === 0) {
      toast.error('No data to import');
      return;
    }

    setIsLoading(true);
    setProgress({ current: 0, total: previewData.length, percent: 0 });

    const BATCH_SIZE = 100;
    let imported = 0;
    let errors: string[] = [];

    try {
      for (let i = 0; i < previewData.length; i += BATCH_SIZE) {
        const batch = previewData.slice(i, i + BATCH_SIZE);

        const { error } = await supabase
          .from('problem_videos')
          .upsert(batch, { 
            onConflict: 'problem_id',
            ignoreDuplicates: false 
          });

        if (error) {
          errors.push(`Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${error.message}`);
        } else {
          imported += batch.length;
        }

        setProgress({
          current: Math.min(i + BATCH_SIZE, previewData.length),
          total: previewData.length,
          percent: Math.round(((i + BATCH_SIZE) / previewData.length) * 100),
        });

        // Yield to UI thread
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      if (errors.length > 0) {
        toast.warning(`Imported ${imported} videos with ${errors.length} batch errors`);
        console.error('Import errors:', errors);
      } else {
        toast.success(`Successfully imported ${imported} video links`);
      }

      onSuccess();
      onClose();
    } catch (error) {
      console.error('Import failed:', error);
      toast.error('Failed to import videos');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Youtube className="w-5 h-5 text-red-500" />
          Bulk Import Video Links
        </CardTitle>
        <CardDescription>
          Import multiple YouTube video links from JSON or CSV format
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="json" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="json" className="flex items-center gap-2">
              <FileJson className="w-4 h-4" />
              JSON
            </TabsTrigger>
            <TabsTrigger value="csv" className="flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4" />
              CSV
            </TabsTrigger>
          </TabsList>

          <TabsContent value="json" className="space-y-4">
            <div>
              <Textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder={EXAMPLE_JSON}
                rows={8}
                className="font-mono text-sm"
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setJsonInput(EXAMPLE_JSON)}
              >
                Load Example
              </Button>
              <Button
                type="button"
                onClick={() => handlePreview('json')}
                disabled={!jsonInput.trim()}
              >
                Preview
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="csv" className="space-y-4">
            <div>
              <Textarea
                value={csvInput}
                onChange={(e) => setCsvInput(e.target.value)}
                placeholder={EXAMPLE_CSV}
                rows={8}
                className="font-mono text-sm"
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCsvInput(EXAMPLE_CSV)}
              >
                Load Example
              </Button>
              <Button
                type="button"
                onClick={() => handlePreview('csv')}
                disabled={!csvInput.trim()}
              >
                Preview
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* File Upload */}
        <div className="mt-4 pt-4 border-t">
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,.csv"
            onChange={handleFileUpload}
            className="hidden"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            className="w-full"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload File (.json or .csv)
          </Button>
        </div>

        {/* Error Display */}
        {parseError && (
          <div className="mt-4 p-3 rounded-md bg-destructive/10 text-destructive text-sm flex items-center gap-2">
            <X className="w-4 h-4 flex-shrink-0" />
            {parseError}
          </div>
        )}

        {/* Progress */}
        {isLoading && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Importing...</span>
              <span>{progress.current} / {progress.total}</span>
            </div>
            <Progress value={progress.percent} className="h-2" />
          </div>
        )}

        {/* Preview */}
        {previewData.length > 0 && !isLoading && (
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Preview ({previewData.length} videos)
              </h4>
            </div>
            <div className="max-h-48 overflow-y-auto border rounded-md">
              <table className="w-full text-sm">
                <thead className="bg-muted sticky top-0">
                  <tr>
                    <th className="p-2 text-left">Problem ID</th>
                    <th className="p-2 text-left">Title</th>
                    <th className="p-2 text-left">YouTube URL</th>
                  </tr>
                </thead>
                <tbody>
                  {previewData.slice(0, 10).map((video, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-2 font-mono">#{video.problem_id}</td>
                      <td className="p-2">{video.title || '-'}</td>
                      <td className="p-2 text-muted-foreground truncate max-w-[200px]">
                        {video.youtube_url}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {previewData.length > 10 && (
                <div className="p-2 text-center text-muted-foreground text-sm">
                  ...and {previewData.length - 10} more
                </div>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                type="button"
                onClick={handleImport}
                disabled={isLoading}
                className="flex-1"
              >
                <Check className="w-4 h-4 mr-2" />
                Import {previewData.length} Videos
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
