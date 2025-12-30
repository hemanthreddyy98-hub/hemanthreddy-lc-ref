import { AlertCircle, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

const LINKEDIN_URL = 'https://www.linkedin.com/in/suryakant-kumar-3b0b1b1a0/';

export const ContactBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-warning/20 via-warning/10 to-warning/20 border border-warning/30 rounded-xl p-4 mb-6">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-warning/20 flex items-center justify-center">
          <AlertCircle className="h-4 w-4 text-warning" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground mb-1">
            Found a missing or incorrect problem URL?
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            If you notice any problem with missing or incorrect URLs, time/space complexity, or any other issue, 
            please reach out to me on LinkedIn. I'll fix it as soon as possible!
          </p>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <span>Contact on LinkedIn</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 p-1 rounded-md hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
