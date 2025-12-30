import { Code2, Terminal } from 'lucide-react';

export type Platform = 'leetcode' | 'hackerrank';

interface PlatformSwitcherProps {
  platform: Platform;
  onPlatformChange: (platform: Platform) => void;
  leetcodeCount: number;
  hackerrankCount: number;
}

export const PlatformSwitcher = ({
  platform,
  onPlatformChange,
  leetcodeCount,
  hackerrankCount,
}: PlatformSwitcherProps) => {
  return (
    <div className="flex items-center gap-2 p-1 rounded-xl bg-secondary/50 border border-border/50">
      <button
        onClick={() => onPlatformChange('leetcode')}
        className={`
          flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200
          ${platform === 'leetcode' 
            ? 'bg-[#FFA116]/20 text-[#FFA116] border border-[#FFA116]/30 shadow-sm' 
            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
          }
        `}
      >
        <Code2 className="h-4 w-4" />
        <span>LeetCode</span>
        <span className={`
          px-2 py-0.5 rounded-full text-xs font-semibold
          ${platform === 'leetcode' ? 'bg-[#FFA116]/20 text-[#FFA116]' : 'bg-secondary text-muted-foreground'}
        `}>
          {leetcodeCount.toLocaleString()}
        </span>
      </button>

      <button
        onClick={() => onPlatformChange('hackerrank')}
        className={`
          flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200
          ${platform === 'hackerrank' 
            ? 'bg-[#00EA64]/20 text-[#00EA64] border border-[#00EA64]/30 shadow-sm' 
            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
          }
        `}
      >
        <Terminal className="h-4 w-4" />
        <span>HackerRank</span>
        <span className={`
          px-2 py-0.5 rounded-full text-xs font-semibold
          ${platform === 'hackerrank' ? 'bg-[#00EA64]/20 text-[#00EA64]' : 'bg-secondary text-muted-foreground'}
        `}>
          {hackerrankCount.toLocaleString()}
        </span>
      </button>
    </div>
  );
};
