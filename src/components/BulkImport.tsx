import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Upload, FileJson, FileSpreadsheet, Loader2, Check, X } from 'lucide-react';

interface BulkImportProps {
  onImport: (data: ImportedProblem[]) => Promise<void>;
  onClose: () => void;
}

export interface ImportedProblem {
  title: string;
  difficulty: string;
  topic: string;
  sub_topic: string;
  companies: string[];
  url: string;
  platform: string;
  platform_id?: string;
  acceptance?: number;
  frequency?: number;
  is_premium?: boolean;
  time_complexity?: string;
  space_complexity?: string;
  approach?: string;
  rating?: number;
  company_years?: Record<string, number[]>;
}

const EXAMPLE_JSON = `[
  {
    "title": "Two Sum",
    "difficulty": "Easy",
    "topic": "Arrays",
    "sub_topic": "Two Pointers",
    "companies": ["Google", "Amazon", "Meta"],
    "url": "https://leetcode.com/problems/two-sum",
    "platform": "leetcode",
    "acceptance": 49.5,
    "frequency": 95,
    "time_complexity": "O(n)",
    "space_complexity": "O(n)",
    "company_years": {
      "Google": [2024, 2023, 2022],
      "Amazon": [2024, 2023],
      "Meta": [2024, 2023, 2022, 2021]
    }
  }
]`;

const EXAMPLE_CSV = `title,difficulty,topic,sub_topic,companies,url,platform,company_years
Two Sum,Easy,Arrays,Two Pointers,"Google,Amazon,Meta",https://leetcode.com/problems/two-sum,leetcode,"{""Google"":[2024,2023],""Amazon"":[2024]}"
Merge Intervals,Medium,Arrays,Sorting,"Google,Meta",https://leetcode.com/problems/merge-intervals,leetcode,"{""Google"":[2024,2023,2022]}"`;

export const BulkImport = ({ onImport, onClose }: BulkImportProps) => {
  const [jsonInput, setJsonInput] = useState('');
  const [csvInput, setCsvInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [previewData, setPreviewData] = useState<ImportedProblem[]>([]);
  const [parseError, setParseError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parseJSON = (input: string): ImportedProblem[] => {
    try {
      const data = JSON.parse(input);
      if (!Array.isArray(data)) {
        throw new Error('Input must be an array of problems');
      }
      return data.map(validateProblem);
    } catch (error) {
      throw new Error(`JSON parsing error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const parseCSV = (input: string): ImportedProblem[] => {
    try {
      const lines = input.trim().split('\n');
      if (lines.length < 2) {
        throw new Error('CSV must have header row and at least one data row');
      }

      const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/\s+/g, '_'));
      const problems: ImportedProblem[] = [];

      for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i]);
        const problem: any = {};

        headers.forEach((header, index) => {
          let value = values[index]?.trim() || '';
          
          // Handle special fields
          if (header === 'companies') {
            problem[header] = value.split(',').map(c => c.trim()).filter(Boolean);
          } else if (header === 'company_years') {
            try {
              problem[header] = value ? JSON.parse(value.replace(/'/g, '"')) : {};
            } catch {
              problem[header] = {};
            }
          } else if (['acceptance', 'frequency', 'rating'].includes(header)) {
            problem[header] = parseFloat(value) || 0;
          } else if (header === 'is_premium') {
            problem[header] = value.toLowerCase() === 'true';
          } else {
            problem[header] = value;
          }
        });

        problems.push(validateProblem(problem));
      }

      return problems;
    } catch (error) {
      throw new Error(`CSV parsing error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const parseCSVLine = (line: string): string[] => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    let inJson = 0;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"' && inJson === 0) {
        inQuotes = !inQuotes;
      } else if (char === '{') {
        inJson++;
        current += char;
      } else if (char === '}') {
        inJson--;
        current += char;
      } else if (char === ',' && !inQuotes && inJson === 0) {
        result.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current);
    return result;
  };

  const validateProblem = (data: any): ImportedProblem => {
    if (!data.title || !data.difficulty || !data.topic || !data.url || !data.platform) {
      throw new Error(`Missing required fields in problem: ${data.title || 'Unknown'}`);
    }

    return {
      title: data.title,
      difficulty: data.difficulty,
      topic: data.topic,
      sub_topic: data.sub_topic || data.subTopic || data.topic,
      companies: Array.isArray(data.companies) ? data.companies : [],
      url: data.url,
      platform: data.platform,
      platform_id: data.platform_id || data.platformId,
      acceptance: data.acceptance || 50,
      frequency: data.frequency || 50,
      is_premium: data.is_premium || data.isPremium || false,
      time_complexity: data.time_complexity || data.timeComplexity || 'O(n)',
      space_complexity: data.space_complexity || data.spaceComplexity || 'O(1)',
      approach: data.approach,
      rating: data.rating,
      company_years: data.company_years || data.companyYears || {},
    };
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
      toast.success(`Parsed ${data.length} problems successfully`);
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
        handlePreview('json');
      } else {
        setCsvInput(text);
        handlePreview('csv');
      }
    } catch (error) {
      toast.error('Failed to read file');
    }
  };

  const handleImport = async () => {
    if (previewData.length === 0) {
      toast.error('No data to import');
      return;
    }

    setIsLoading(true);
    try {
      await onImport(previewData);
      toast.success(`Imported ${previewData.length} problems successfully`);
      onClose();
    } catch (error) {
      toast.error('Failed to import problems');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Bulk Import Problems
        </CardTitle>
        <CardDescription>
          Import multiple problems from JSON or CSV format with company_years data
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
                rows={10}
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
                rows={10}
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
            <X className="w-4 h-4" />
            {parseError}
          </div>
        )}

        {/* Preview */}
        {previewData.length > 0 && (
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Preview ({previewData.length} problems)
              </h4>
            </div>
            <div className="max-h-48 overflow-y-auto border rounded-md">
              <table className="w-full text-sm">
                <thead className="bg-muted sticky top-0">
                  <tr>
                    <th className="p-2 text-left">Title</th>
                    <th className="p-2 text-left">Platform</th>
                    <th className="p-2 text-left">Difficulty</th>
                    <th className="p-2 text-left">Companies</th>
                    <th className="p-2 text-left">Years</th>
                  </tr>
                </thead>
                <tbody>
                  {previewData.slice(0, 10).map((problem, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="p-2">{problem.title}</td>
                      <td className="p-2 capitalize">{problem.platform}</td>
                      <td className="p-2">{problem.difficulty}</td>
                      <td className="p-2">{problem.companies.slice(0, 2).join(', ')}</td>
                      <td className="p-2 text-xs">
                        {Object.entries(problem.company_years || {})
                          .slice(0, 2)
                          .map(([c, y]) => `${c}: ${y.join(',')}`)
                          .join('; ')}
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
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Importing...
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Import {previewData.length} Problems
                  </>
                )}
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
