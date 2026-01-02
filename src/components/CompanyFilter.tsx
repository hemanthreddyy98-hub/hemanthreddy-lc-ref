import { Building2 } from 'lucide-react';

interface CompanyFilterProps {
  selectedCompany: string;
  onCompanyChange: (company: string) => void;
}

const companies = [
  'All', 'Google', 'Amazon', 'Meta', 'Microsoft', 'Apple', 'Netflix', 'Adobe', 'Uber', 'LinkedIn', 
  'Twitter', 'Salesforce', 'Oracle', 'IBM', 'Goldman Sachs', 'Bloomberg', 'Morgan Stanley', 'JPMorgan',
  'Airbnb', 'Lyft', 'Snap', 'Pinterest', 'Dropbox', 'Stripe', 'PayPal', 'Walmart', 'eBay', 'Shopify',
  'TCS', 'Infosys', 'Wipro', 'Flipkart', 'Paytm', 'Zomato', 'PhonePe', 'CRED', 'Nvidia', 'AMD', 'Intel',
  'Tesla', 'SpaceX', 'Visa', 'Mastercard', 'Databricks', 'Snowflake', 'MongoDB', 'Atlassian'
];

export const CompanyFilter = ({ selectedCompany, onCompanyChange }: CompanyFilterProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <Building2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
      <div className="flex gap-2">
        {companies.map((company) => (
          <button
            key={company}
            onClick={() => onCompanyChange(company)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
              selectedCompany === company
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50'
            }`}
          >
            {company}
          </button>
        ))}
      </div>
    </div>
  );
};
