import { useState, useMemo } from 'react';
import { Building2, Check, ChevronDown, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import {
  FAANG,
  USMajorTech,
  FinanceGlobal,
  IndianTechGiants,
  IndianStartups,
  EcommerceRetail,
  GamingEntertainment,
  SemiconductorHardware,
  CloudInfrastructure,
  Cybersecurity,
  HealthTechBioTech,
  SpaceAerospace,
  AutomotiveEV,
  TravelHospitality,
  SocialMedia,
  GlobalMNCsIndia,
} from '@/data/companies';

interface CompanyFilterProps {
  selectedCompanies: string[];
  onCompaniesChange: (companies: string[]) => void;
}

// Company categories for organized display
const companyCategories = [
  { name: 'FAANG & Big Tech', companies: FAANG },
  { name: 'US Major Tech', companies: USMajorTech.slice(0, 20) },
  { name: 'Finance & FinTech', companies: FinanceGlobal.slice(0, 15) },
  { name: 'Indian Tech Giants', companies: IndianTechGiants.slice(0, 12) },
  { name: 'Indian Startups (Fintech)', companies: IndianStartups.slice(0, 18) },
  { name: 'Indian Startups (E-commerce)', companies: IndianStartups.slice(36, 50) },
  { name: 'Indian Startups (EdTech)', companies: IndianStartups.slice(50, 63) },
  { name: 'Indian Startups (Others)', companies: IndianStartups.slice(70, 95) },
  { name: 'E-commerce & Retail', companies: EcommerceRetail },
  { name: 'Gaming & Entertainment', companies: GamingEntertainment.slice(0, 12) },
  { name: 'Semiconductor & Hardware', companies: SemiconductorHardware.slice(0, 12) },
  { name: 'Cloud & Infrastructure', companies: CloudInfrastructure.slice(0, 12) },
  { name: 'Cybersecurity', companies: Cybersecurity.slice(0, 10) },
  { name: 'Health Tech', companies: HealthTechBioTech.slice(0, 10) },
  { name: 'Space & Automotive', companies: [...SpaceAerospace.slice(0, 5), ...AutomotiveEV.slice(0, 5)] },
  { name: 'Travel & Social', companies: [...TravelHospitality.slice(0, 5), ...SocialMedia.slice(0, 5)] },
  { name: 'Global MNCs (India)', companies: GlobalMNCsIndia.slice(0, 15) },
];

// Quick filter popular companies
const popularCompanies = [
  'Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Netflix', 
  'Flipkart', 'Goldman Sachs', 'Uber', 'Adobe', 'Paytm', 'Razorpay'
];

export const CompanyFilter = ({ selectedCompanies, onCompaniesChange }: CompanyFilterProps) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Get all unique companies for search
  const allCompanies = useMemo(() => {
    const all = new Set<string>();
    companyCategories.forEach(cat => cat.companies.forEach(c => all.add(c)));
    return Array.from(all).sort();
  }, []);

  // Filter companies based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery) return companyCategories;
    
    const query = searchQuery.toLowerCase();
    return companyCategories
      .map(cat => ({
        ...cat,
        companies: cat.companies.filter(c => c.toLowerCase().includes(query))
      }))
      .filter(cat => cat.companies.length > 0);
  }, [searchQuery]);

  const isSelected = (company: string) => selectedCompanies.includes(company);
  const hasNoFilter = selectedCompanies.length === 0;

  const toggleCompany = (company: string) => {
    if (isSelected(company)) {
      onCompaniesChange(selectedCompanies.filter(c => c !== company));
    } else {
      onCompaniesChange([...selectedCompanies, company]);
    }
  };

  const clearAll = () => {
    onCompaniesChange([]);
    setOpen(false);
  };

  const removeCompany = (company: string) => {
    onCompaniesChange(selectedCompanies.filter(c => c !== company));
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Quick filter buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <Building2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        <div className="flex gap-2">
          {/* All button */}
          <button
            onClick={clearAll}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              hasNoFilter
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50'
            }`}
          >
            All
          </button>
          
          {popularCompanies.map((company) => (
            <button
              key={company}
              onClick={() => toggleCompany(company)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                isSelected(company)
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50'
              }`}
            >
              {company}
            </button>
          ))}
          
          {/* Dropdown for more companies */}
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="gap-1 whitespace-nowrap"
              >
                <span>More Companies</span>
                {selectedCompanies.filter(c => !popularCompanies.includes(c)).length > 0 && (
                  <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">
                    +{selectedCompanies.filter(c => !popularCompanies.includes(c)).length}
                  </Badge>
                )}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </PopoverTrigger>
            <PopoverContent 
              className="w-80 p-0 bg-popover border border-border shadow-lg z-50" 
              align="start"
              sideOffset={5}
            >
              {/* Search input */}
              <div className="p-3 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search companies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 h-9"
                  />
                </div>
              </div>

              {/* Selection summary */}
              {selectedCompanies.length > 0 && (
                <div className="p-2 border-b border-border bg-secondary/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {selectedCompanies.length} selected
                    </span>
                    <button
                      onClick={clearAll}
                      className="text-xs text-primary hover:underline"
                    >
                      Clear all
                    </button>
                  </div>
                </div>
              )}

              {/* Company list */}
              <ScrollArea className="h-[400px]">
                <div className="p-2">
                  {/* Categories */}
                  {filteredCategories.map((category) => (
                    <div key={category.name} className="mt-3 first:mt-0">
                      <div className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {category.name}
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {category.companies.map((company) => (
                          <button
                            key={company}
                            onClick={() => toggleCompany(company)}
                            className={`flex items-center justify-between px-3 py-1.5 rounded-md text-sm transition-colors truncate ${
                              isSelected(company)
                                ? 'bg-primary/10 text-primary'
                                : 'hover:bg-secondary/80 text-foreground'
                            }`}
                          >
                            <span className="truncate">{company}</span>
                            {isSelected(company) && <Check className="h-3 w-3 flex-shrink-0 ml-1" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}

                  {filteredCategories.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No companies found matching "{searchQuery}"
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Footer with count */}
              <div className="p-2 border-t border-border bg-secondary/30">
                <p className="text-xs text-muted-foreground text-center">
                  {allCompanies.length}+ companies available
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Show selected companies badges */}
      {selectedCompanies.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">Filtering by:</span>
          {selectedCompanies.map((company) => (
            <Badge key={company} variant="secondary" className="gap-1 pr-1">
              <Building2 className="h-3 w-3" />
              {company}
              <button 
                onClick={() => removeCompany(company)}
                className="ml-1 hover:bg-secondary rounded p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          <button
            onClick={clearAll}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
};
