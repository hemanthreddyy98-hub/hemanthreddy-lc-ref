import { Code2, Terminal, BookOpen, Award, Trophy } from 'lucide-react';

export type Platform = 'leetcode' | 'hackerrank' | 'gfg' | 'codechef' | 'codeforces';

interface PlatformSwitcherProps {
  platform: Platform;
  onPlatformChange: (platform: Platform) => void;
  counts: { [key in Platform]: number };
}

const platforms: { id: Platform; name: string; icon: React.ReactNode; color: string }[] = [
  { id: 'leetcode', name: 'LeetCode', icon: <Code2 className="h-4 w-4" />, color: '#FFA116' },
  { id: 'hackerrank', name: 'HackerRank', icon: <Terminal className="h-4 w-4" />, color: '#00EA64' },
  { id: 'gfg', name: 'GFG', icon: <BookOpen className="h-4 w-4" />, color: '#2F8D46' },
  { id: 'codechef', name: 'CodeChef', icon: <Award className="h-4 w-4" />, color: '#5B4638' },
  { id: 'codeforces', name: 'Codeforces', icon: <Trophy className="h-4 w-4" />, color: '#1890FF' },
];

export const PlatformSwitcher = ({ platform, onPlatformChange, counts }: PlatformSwitcherProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-secondary/50 border border-border/50">
      {platforms.map((p) => (
        <button
          key={p.id}
          onClick={() => onPlatformChange(p.id)}
          className={`
            flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200
            ${platform === p.id 
              ? `bg-[${p.color}]/20 border border-[${p.color}]/30 shadow-sm` 
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
            }
          `}
          style={platform === p.id ? { backgroundColor: `${p.color}20`, borderColor: `${p.color}50`, color: p.color } : {}}
        >
          {p.icon}
          <span className="hidden sm:inline">{p.name}</span>
          <span 
            className="px-1.5 py-0.5 rounded-full text-xs font-semibold"
            style={platform === p.id ? { backgroundColor: `${p.color}20`, color: p.color } : { backgroundColor: 'var(--secondary)', color: 'var(--muted-foreground)' }}
          >
            {counts[p.id]?.toLocaleString() || 0}
          </span>
        </button>
      ))}
    </div>
  );
};
