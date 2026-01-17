import { Calendar, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface YearFilterProps {
  selectedYears: number[];
  onYearsChange: (years: number[]) => void;
  availableYears: number[];
}

export const YearFilter = ({ selectedYears, onYearsChange, availableYears }: YearFilterProps) => {
  const hasNoFilter = selectedYears.length === 0;

  const toggleYear = (year: number) => {
    if (selectedYears.includes(year)) {
      onYearsChange(selectedYears.filter(y => y !== year));
    } else {
      onYearsChange([...selectedYears, year]);
    }
  };

  const clearAll = () => {
    onYearsChange([]);
  };

  if (availableYears.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50">
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-foreground">Filter by Year Asked</span>
        {selectedYears.length > 0 && (
          <button
            onClick={clearAll}
            className="ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear all
          </button>
        )}
      </div>
      
      <div className="flex items-center gap-2 flex-wrap">
        {/* All button */}
        <button
          onClick={clearAll}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
            hasNoFilter
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50'
          }`}
        >
          All Years
        </button>

        {availableYears.map((year) => (
          <button
            key={year}
            onClick={() => toggleYear(year)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              selectedYears.includes(year)
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Show selected years badges */}
      {selectedYears.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground">Showing problems asked in:</span>
          {selectedYears.sort((a, b) => b - a).map((year) => (
            <Badge key={year} variant="secondary" className="gap-1 pr-1">
              <Calendar className="h-3 w-3" />
              {year}
              <button 
                onClick={() => toggleYear(year)}
                className="ml-1 hover:bg-secondary rounded p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
