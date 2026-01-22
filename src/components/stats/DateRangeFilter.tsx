import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface DateRangeFilterProps {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
}

export const DateRangeFilter = ({ dateRange, onDateRangeChange }: DateRangeFilterProps) => {
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false);

  const handleClear = () => {
    onDateRangeChange({ from: undefined, to: undefined });
  };

  const hasDateRange = dateRange.from || dateRange.to;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">Filter by date:</span>
      
      {/* From Date */}
      <Popover open={isFromOpen} onOpenChange={setIsFromOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "w-[140px] justify-start text-left font-normal",
              !dateRange.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange.from ? format(dateRange.from, "MMM d, yyyy") : "From"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={dateRange.from}
            onSelect={(date) => {
              onDateRangeChange({ ...dateRange, from: date });
              setIsFromOpen(false);
            }}
            disabled={(date) => 
              date > new Date() || (dateRange.to ? date > dateRange.to : false)
            }
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>

      <span className="text-muted-foreground">to</span>

      {/* To Date */}
      <Popover open={isToOpen} onOpenChange={setIsToOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "w-[140px] justify-start text-left font-normal",
              !dateRange.to && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange.to ? format(dateRange.to, "MMM d, yyyy") : "To"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={dateRange.to}
            onSelect={(date) => {
              onDateRangeChange({ ...dateRange, to: date });
              setIsToOpen(false);
            }}
            disabled={(date) => 
              date > new Date() || (dateRange.from ? date < dateRange.from : false)
            }
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>

      {/* Clear Button */}
      {hasDateRange && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClear}
          className="h-8 px-2"
        >
          <X className="h-4 w-4" />
          <span className="ml-1">Clear</span>
        </Button>
      )}
    </div>
  );
};
