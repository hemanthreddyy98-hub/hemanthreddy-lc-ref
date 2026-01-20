import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export type SortField = 'none' | 'difficulty' | 'frequency' | 'acceptance';
export type SortDirection = 'asc' | 'desc';

interface SortingControlsProps {
  sortField: SortField;
  sortDirection: SortDirection;
  onSortChange: (field: SortField, direction: SortDirection) => void;
}

const sortOptions = [
  { field: 'none' as SortField, label: 'Default Order' },
  { field: 'difficulty' as SortField, label: 'Difficulty' },
  { field: 'frequency' as SortField, label: 'Frequency' },
  { field: 'acceptance' as SortField, label: 'Acceptance Rate' },
];

export const SortingControls = ({ sortField, sortDirection, onSortChange }: SortingControlsProps) => {
  const currentSort = sortOptions.find(o => o.field === sortField);

  const handleSortSelect = (field: SortField) => {
    if (field === 'none') {
      onSortChange('none', 'asc');
    } else if (field === sortField) {
      // Toggle direction
      onSortChange(field, sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // New field, default to descending for frequency/acceptance, ascending for difficulty
      onSortChange(field, field === 'difficulty' ? 'asc' : 'desc');
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          {sortField !== 'none' ? (
            sortDirection === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
          ) : (
            <ArrowUpDown className="h-4 w-4" />
          )}
          <span className="hidden sm:inline">
            {sortField === 'none' ? 'Sort By' : currentSort?.label}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {sortOptions.map((option) => (
          <DropdownMenuItem
            key={option.field}
            onClick={() => handleSortSelect(option.field)}
            className={sortField === option.field ? 'bg-accent' : ''}
          >
            <div className="flex items-center gap-2 w-full">
              {option.field !== 'none' && sortField === option.field && (
                sortDirection === 'asc' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />
              )}
              {option.label}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};