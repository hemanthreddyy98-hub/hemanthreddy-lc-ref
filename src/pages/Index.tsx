import { useState, useMemo, useCallback } from 'react';
import { Code2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { ProblemCard } from '@/components/ProblemCard';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';
import { CompanyFilter } from '@/components/CompanyFilter';
import { ContactBanner } from '@/components/ContactBanner';
import { problems as allProblems, topics } from '@/data/leetcodeProblems';

const PROBLEMS_PER_PAGE = 24;

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [bookmarked, setBookmarked] = useState<Set<number>>(new Set());
  const [solved, setSolved] = useState<Set<number>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PROBLEMS_PER_PAGE);

  const filteredProblems = useMemo(() => {
    return allProblems.filter((problem) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          problem.title.toLowerCase().includes(query) ||
          problem.topic.toLowerCase().includes(query) ||
          problem.subTopic.toLowerCase().includes(query) ||
          problem.companies.some((c) => c.toLowerCase().includes(query)) ||
          problem.leetcodeId.toString().includes(query);
        if (!matchesSearch) return false;
      }

      // Topic filter
      if (selectedTopic !== 'All' && problem.topic !== selectedTopic) {
        return false;
      }

      // Difficulty filter
      if (difficulty !== 'All' && problem.difficulty !== difficulty) {
        return false;
      }

      // Company filter
      if (selectedCompany !== 'All' && !problem.companies.includes(selectedCompany)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedTopic, difficulty, selectedCompany]);

  const visibleProblems = useMemo(() => {
    return filteredProblems.slice(0, visibleCount);
  }, [filteredProblems, visibleCount]);

  const handleToggleBookmark = useCallback((id: number) => {
    setBookmarked((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  const handleToggleSolved = useCallback((id: number) => {
    setSolved((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PROBLEMS_PER_PAGE);
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setVisibleCount(PROBLEMS_PER_PAGE);
    setIsSidebarOpen(false);
  };

  const handleDifficultyFilter = (diff: string) => {
    setDifficulty(diff);
    setVisibleCount(PROBLEMS_PER_PAGE);
  };

  const handleCompanyChange = (company: string) => {
    setSelectedCompany(company);
    setVisibleCount(PROBLEMS_PER_PAGE);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        difficulty={difficulty}
        onDifficultyChange={handleDifficultyFilter}
        totalProblems={allProblems.length}
        filteredCount={filteredProblems.length}
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex flex-1">
        <Sidebar
          selectedTopic={selectedTopic}
          onTopicSelect={handleTopicSelect}
          isOpen={isSidebarOpen}
        />

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <main className="flex-1 lg:ml-0 min-w-0">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
            <HeroSection onDifficultyFilter={handleDifficultyFilter} />

            {/* Contact Banner */}
            <ContactBanner />

            {/* Company Filter */}
            <div className="mb-6">
              <CompanyFilter 
                selectedCompany={selectedCompany} 
                onCompanyChange={handleCompanyChange} 
              />
            </div>

            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">
                  {selectedTopic === 'All' ? 'All Problems' : selectedTopic}
                </h2>
              </div>
              {selectedTopic !== 'All' && (
                <span className="text-sm text-muted-foreground">
                  {topics.find((t) => t.name === selectedTopic)?.subTopics.join(', ')}
                </span>
              )}
            </div>

            {/* Problems Grid */}
            {visibleProblems.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {visibleProblems.map((problem, index) => (
                    <ProblemCard
                      key={problem.id}
                      problem={problem}
                      index={index}
                      isBookmarked={bookmarked.has(problem.id)}
                      isSolved={solved.has(problem.id)}
                      onToggleBookmark={handleToggleBookmark}
                      onToggleSolved={handleToggleSolved}
                    />
                  ))}
                </div>

                {/* Load More */}
                {visibleCount < filteredProblems.length && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={handleLoadMore}
                      className="px-8 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary/20 transition-all duration-200"
                    >
                      Load More Problems
                      <span className="text-primary/70 ml-2">
                        ({filteredProblems.length - visibleCount} remaining)
                      </span>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                  <Code2 className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">No problems found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
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
