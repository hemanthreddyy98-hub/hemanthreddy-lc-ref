import { useState, useMemo, useCallback } from 'react';
import { Code2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { ProblemCard } from '@/components/ProblemCard';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';
import { CompanyFilter } from '@/components/CompanyFilter';
import { YearFilter } from '@/components/YearFilter';
import { ContactBanner } from '@/components/ContactBanner';
import { PlatformSwitcher, Platform } from '@/components/PlatformSwitcher';
import { SubtopicTabs } from '@/components/SubtopicTabs';
import { SortingControls, SortField, SortDirection } from '@/components/SortingControls';
import { ProblemPagination } from '@/components/ProblemPagination';
import { useProblemVideos } from '@/hooks/useProblemVideos';
import { useProblems } from '@/hooks/useProblems';
import { topics as leetcodeTopics } from '@/data/leetcodeProblems';
import { hackerrankTopics } from '@/data/hackerrankProblems';
import { gfgTopics } from '@/data/gfgProblems';
import { codechefTopics } from '@/data/codechefProblems';
import { codeforcesTopics } from '@/data/codeforcesProblems';
import { UnifiedProblem } from '@/types/problem';

const PROBLEMS_PER_PAGE = 24;

const platformTopics = {
  leetcode: leetcodeTopics,
  hackerrank: hackerrankTopics,
  gfg: gfgTopics,
  codechef: codechefTopics,
  codeforces: codeforcesTopics,
};

// Combine all topics for "all" platform view
const allTopics = [...new Set([
  ...leetcodeTopics.map(t => t.name),
  ...hackerrankTopics.map(t => t.name),
  ...gfgTopics.map(t => t.name),
  ...codechefTopics.map(t => t.name),
  ...codeforcesTopics.map(t => t.name),
])].map(name => {
  const topic = leetcodeTopics.find(t => t.name === name) ||
    hackerrankTopics.find(t => t.name === name) ||
    gfgTopics.find(t => t.name === name) ||
    codechefTopics.find(t => t.name === name) ||
    codeforcesTopics.find(t => t.name === name);
  return topic!;
});

const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };

const Index = () => {
  const [platform, setPlatform] = useState<Platform>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedSubtopic, setSelectedSubtopic] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [bookmarked, setBookmarked] = useState<Set<number>>(new Set());
  const [solved, setSolved] = useState<Set<number>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<SortField>('none');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const { getVideoUrl } = useProblemVideos();
  
  // Fetch problems from database with static fallback
  const { problems: allProblems, platformCounts } = useProblems(platform);
  
  const topics = platform === 'all' ? allTopics : platformTopics[platform];

  const currentTopicSubtopics = useMemo(() => {
    if (selectedTopic === 'All') return [];
    const topic = topics.find(t => t.name === selectedTopic);
    return topic?.subTopics || [];
  }, [selectedTopic, topics]);

  // Get available years based on selected companies
  const availableYears = useMemo(() => {
    if (selectedCompanies.length === 0) return [];
    
    const yearsSet = new Set<number>();
    allProblems.forEach(problem => {
      if (problem.companyYears) {
        selectedCompanies.forEach(company => {
          const years = problem.companyYears?.[company];
          if (years) {
            years.forEach(year => yearsSet.add(year));
          }
        });
      }
    });
    return Array.from(yearsSet).sort((a, b) => b - a);
  }, [allProblems, selectedCompanies]);

  const handleSortChange = (field: SortField, direction: SortDirection) => {
    setSortField(field);
    setSortDirection(direction);
    setCurrentPage(1);
  };

  const filteredAndSortedProblems = useMemo(() => {
    // First filter
    let filtered = allProblems.filter((problem) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          problem.title.toLowerCase().includes(query) ||
          problem.topic.toLowerCase().includes(query) ||
          problem.subTopic.toLowerCase().includes(query) ||
          problem.companies.some((c) => c.toLowerCase().includes(query)) ||
          problem.id.toString().includes(query);
        if (!matchesSearch) return false;
      }
      if (selectedTopic !== 'All' && problem.topic !== selectedTopic) return false;
      if (selectedSubtopic !== 'All' && problem.subTopic !== selectedSubtopic) return false;
      if (difficulty !== 'All' && problem.difficulty !== difficulty) return false;
      if (selectedCompanies.length > 0 && !selectedCompanies.some(sc => problem.companies.includes(sc))) return false;
      
      // Year filter: only apply when companies and years are selected
      if (selectedCompanies.length > 0 && selectedYears.length > 0) {
        const hasMatchingYear = selectedCompanies.some(company => {
          const years = problem.companyYears?.[company];
          return years && years.some(year => selectedYears.includes(year));
        });
        if (!hasMatchingYear) return false;
      }
      
      return true;
    });

    // Then sort
    if (sortField !== 'none') {
      filtered = [...filtered].sort((a, b) => {
        let comparison = 0;
        
        switch (sortField) {
          case 'difficulty':
            comparison = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
            break;
          case 'frequency':
            comparison = (a.frequency || 0) - (b.frequency || 0);
            break;
          case 'acceptance':
            comparison = (a.acceptance || 0) - (b.acceptance || 0);
            break;
        }
        
        return sortDirection === 'asc' ? comparison : -comparison;
      });
    }

    return filtered;
  }, [allProblems, searchQuery, selectedTopic, selectedSubtopic, difficulty, selectedCompanies, selectedYears, sortField, sortDirection]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredAndSortedProblems.length / PROBLEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROBLEMS_PER_PAGE;
  const visibleProblems = useMemo(() => 
    filteredAndSortedProblems.slice(startIndex, startIndex + PROBLEMS_PER_PAGE), 
    [filteredAndSortedProblems, startIndex]
  );

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleToggleBookmark = useCallback((id: number) => {
    setBookmarked((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  }, []);

  const handleToggleSolved = useCallback((id: number) => {
    setSolved((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  }, []);

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setSelectedSubtopic('All');
    setCurrentPage(1);
    setIsSidebarOpen(false);
  };

  const handlePlatformChange = (p: Platform) => {
    setPlatform(p);
    setSelectedTopic('All');
    setSelectedSubtopic('All');
    setCurrentPage(1);
  };

  // Generate unique key for problems (platform + id combination)
  const getProblemKey = (problem: UnifiedProblem) => `${problem.platform}-${problem.id}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        difficulty={difficulty}
        onDifficultyChange={(d) => { setDifficulty(d); setCurrentPage(1); }}
        totalProblems={allProblems.length}
        filteredCount={filteredAndSortedProblems.length}
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex flex-1">
        <Sidebar selectedTopic={selectedTopic} onTopicSelect={handleTopicSelect} isOpen={isSidebarOpen} platform={platform} />
        
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
        )}

        <main className="flex-1 lg:ml-0 min-w-0">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
            <HeroSection onDifficultyFilter={(d) => { setDifficulty(d); setCurrentPage(1); }} />
            <ContactBanner />

            <div className="mb-6 flex justify-center">
              <PlatformSwitcher platform={platform} onPlatformChange={handlePlatformChange} counts={platformCounts} />
            </div>

            <div className="mb-6">
              <CompanyFilter selectedCompanies={selectedCompanies} onCompaniesChange={(c) => { setSelectedCompanies(c); setSelectedYears([]); setCurrentPage(1); }} />
            </div>

            {/* Year filter - only visible when companies are selected */}
            {selectedCompanies.length > 0 && availableYears.length > 0 && (
              <div className="mb-6">
                <YearFilter 
                  selectedYears={selectedYears} 
                  onYearsChange={(y) => { setSelectedYears(y); setCurrentPage(1); }} 
                  availableYears={availableYears} 
                />
              </div>
            )}

            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">
                    {selectedTopic === 'All' ? 'All Problems' : selectedTopic}
                  </h2>
                </div>
                <span className="text-sm text-muted-foreground">({filteredAndSortedProblems.length} problems)</span>
              </div>
              
              <SortingControls
                sortField={sortField}
                sortDirection={sortDirection}
                onSortChange={handleSortChange}
              />
            </div>

            {selectedTopic !== 'All' && currentTopicSubtopics.length > 0 && (
              <SubtopicTabs subTopics={currentTopicSubtopics} selectedSubtopic={selectedSubtopic} onSubtopicSelect={(s) => { setSelectedSubtopic(s); setCurrentPage(1); }} />
            )}

            {visibleProblems.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {visibleProblems.map((problem, index) => (
                    <ProblemCard key={getProblemKey(problem)} problem={problem} index={index} isBookmarked={bookmarked.has(problem.id)} isSolved={solved.has(problem.id)} videoUrl={getVideoUrl(problem.id, problem.title)} onToggleBookmark={handleToggleBookmark} onToggleSolved={handleToggleSolved} selectedCompanies={selectedCompanies} />
                  ))}
                </div>
                <ProblemPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                  <Code2 className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">No problems found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
