import { Search, Code2, Menu, X, Shield, Youtube, ListChecks, LogIn, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  difficulty: string;
  onDifficultyChange: (difficulty: string) => void;
  totalProblems: number;
  filteredCount: number;
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
}

export const Header = ({
  searchQuery,
  onSearchChange,
  difficulty,
  onDifficultyChange,
  totalProblems,
  filteredCount,
  onMenuToggle,
  isSidebarOpen
}: HeaderProps) => {
  const { user, isAdmin, adminCheckComplete, signOut } = useAuth();
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const handleSignOut = async () => {
    await signOut();
    toast.success('Signed out successfully');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between px-4 lg:px-6 h-16">
        {/* Logo & Menu Toggle */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuToggle}
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-semibold text-foreground">LeetCode Index</h1>
              <p className="text-xs text-muted-foreground">Problem Collection</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search problems, topics, companies..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-secondary/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Difficulty Filters & Count & Admin */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            {difficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => onDifficultyChange(diff)}
                className={`filter-btn ${difficulty === diff ? 'active' : ''}`}
              >
                {diff === 'Easy' && <span className="w-2 h-2 rounded-full bg-success mr-1.5" />}
                {diff === 'Medium' && <span className="w-2 h-2 rounded-full bg-warning mr-1.5" />}
                {diff === 'Hard' && <span className="w-2 h-2 rounded-full bg-destructive mr-1.5" />}
                {diff}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50">
            <div className="w-1.5 h-4 bg-primary rounded-full" />
            <span className="text-sm text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredCount.toLocaleString()}</span> of {totalProblems.toLocaleString()}
            </span>
          </div>

          {/* Admin Menu or Login Button */}
          {user && isAdmin && adminCheckComplete ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="hidden sm:inline">Admin</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/video-manager" className="flex items-center gap-2 cursor-pointer">
                    <Youtube className="h-4 w-4" />
                    Video Manager
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/problem-manager" className="flex items-center gap-2 cursor-pointer">
                    <ListChecks className="h-4 w-4" />
                    Problem Manager
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 cursor-pointer text-destructive">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : !user ? (
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="gap-2">
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">Admin</span>
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
};
