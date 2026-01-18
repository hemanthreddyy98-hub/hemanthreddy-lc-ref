import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Plus, Calendar } from 'lucide-react';

interface CompanyYearsEditorProps {
  companyYears: Record<string, number[]>;
  companies: string[];
  onChange: (companyYears: Record<string, number[]>) => void;
}

const AVAILABLE_YEARS = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

export const CompanyYearsEditor = ({ companyYears, companies, onChange }: CompanyYearsEditorProps) => {
  const [newCompany, setNewCompany] = useState('');
  const [selectedYears, setSelectedYears] = useState<number[]>([]);

  const handleAddCompanyYears = () => {
    if (!newCompany.trim()) return;
    
    const updatedCompanyYears = { ...companyYears };
    const company = newCompany.trim();
    
    if (selectedYears.length > 0) {
      updatedCompanyYears[company] = [...(updatedCompanyYears[company] || []), ...selectedYears]
        .filter((v, i, a) => a.indexOf(v) === i)
        .sort((a, b) => b - a);
    }
    
    onChange(updatedCompanyYears);
    setNewCompany('');
    setSelectedYears([]);
  };

  const handleToggleYear = (company: string, year: number) => {
    const updatedCompanyYears = { ...companyYears };
    const years = updatedCompanyYears[company] || [];
    
    if (years.includes(year)) {
      updatedCompanyYears[company] = years.filter(y => y !== year);
      if (updatedCompanyYears[company].length === 0) {
        delete updatedCompanyYears[company];
      }
    } else {
      updatedCompanyYears[company] = [...years, year].sort((a, b) => b - a);
    }
    
    onChange(updatedCompanyYears);
  };

  const handleRemoveCompany = (company: string) => {
    const updatedCompanyYears = { ...companyYears };
    delete updatedCompanyYears[company];
    onChange(updatedCompanyYears);
  };

  const toggleYearSelection = (year: number) => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter(y => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };

  // Get companies from the companies list that aren't in companyYears yet
  const availableCompanies = companies.filter(c => !Object.keys(companyYears).includes(c));

  return (
    <Card className="border-border/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Company Interview Years
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Existing company years */}
        {Object.entries(companyYears).length > 0 && (
          <div className="space-y-2">
            {Object.entries(companyYears).map(([company, years]) => (
              <div key={company} className="flex items-center gap-2 p-2 rounded-md bg-muted/30">
                <Badge variant="outline" className="font-medium">
                  {company}
                </Badge>
                <div className="flex flex-wrap gap-1 flex-1">
                  {AVAILABLE_YEARS.map(year => (
                    <button
                      key={year}
                      type="button"
                      onClick={() => handleToggleYear(company, year)}
                      className={`px-2 py-0.5 text-xs rounded transition-colors ${
                        years.includes(year)
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => handleRemoveCompany(company)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Add new company with years */}
        <div className="space-y-2 pt-2 border-t border-border/50">
          <Label className="text-xs text-muted-foreground">Add Company with Years</Label>
          <div className="flex gap-2">
            <Input
              value={newCompany}
              onChange={(e) => setNewCompany(e.target.value)}
              placeholder="Company name..."
              className="flex-1"
              list="company-suggestions"
            />
            <datalist id="company-suggestions">
              {availableCompanies.slice(0, 20).map(company => (
                <option key={company} value={company} />
              ))}
            </datalist>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {AVAILABLE_YEARS.map(year => (
              <button
                key={year}
                type="button"
                onClick={() => toggleYearSelection(year)}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  selectedYears.includes(year)
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
          
          <Button
            type="button"
            size="sm"
            onClick={handleAddCompanyYears}
            disabled={!newCompany.trim()}
            className="w-full"
          >
            <Plus className="w-3 h-3 mr-1" />
            Add Company & Years
          </Button>
        </div>

        {/* Quick add from existing companies list */}
        {companies.length > 0 && Object.keys(companyYears).length === 0 && (
          <div className="pt-2 border-t border-border/50">
            <Label className="text-xs text-muted-foreground mb-2 block">
              Quick add from problem's companies:
            </Label>
            <div className="flex flex-wrap gap-1">
              {companies.slice(0, 6).map(company => (
                <Button
                  key={company}
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    const updatedCompanyYears = { ...companyYears };
                    updatedCompanyYears[company] = [2024, 2023];
                    onChange(updatedCompanyYears);
                  }}
                  className="text-xs h-7"
                >
                  {company}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
