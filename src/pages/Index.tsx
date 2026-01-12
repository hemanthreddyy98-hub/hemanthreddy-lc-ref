import { useState, useMemo, useCallback } from 'react';
import { Code2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { ProblemCard } from '@/components/ProblemCard';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';
import { CompanyFilter } from '@/components/CompanyFilter';
import { ContactBanner } from '@/components/ContactBanner';
import { PlatformSwitcher, Platform } from '@/components/PlatformSwitcher';
import { SubtopicTabs } from '@/components/SubtopicTabs';
import { useProblemVideos } from '@/hooks/useProblemVideos';
import { useProblems } from '@/hooks/useProblems';
import { topics as leetcodeTopics } from '@/data/leetcodeProblems';
import { hackerrankTopics } from '@/data/hackerrankProblems';
import { gfgTopics } from '@/data/gfgProblems';
import { codechefTopics } from '@/data/codechefProblems';
import { codeforcesTopics } from '@/data/codeforcesProblems';

const PROBLEMS_PER_PAGE = 24;

const platformTopics = {
  leetcode: leetcodeTopics,
  hackerrank: hackerrankTopics,
  gfg: gfgTopics,
  codechef: codechefTopics,
  codeforces: codeforcesTopics,
};

const Index = () => {
  const [platform, setPlatform] = useState<Platform>('leetcode');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedSubtopic, setSelectedSubtopic] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [bookmarked, setBookmarked] = useState<Set<number>>(new Set());
  const [solved, setSolved] = useState<Set<number>>(new Set());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PROBLEMS_PER_PAGE);
  const { getVideoUrl } = useProblemVideos();
  
  // Fetch problems from database with static fallback
  const { problems: allProblems, platformCounts } = useProblems(platform);
  
  const topics = platformTopics[platform];

  const currentTopicSubtopics = useMemo(() => {
    if (selectedTopic === 'All') return [];
    const topic = topics.find(t => t.name === selectedTopic);
    return topic?.subTopics || [];
  }, [selectedTopic, topics]);

  const filteredProblems = useMemo(() => {
    return allProblems.filter((problem) => {
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
      if (selectedCompany !== 'All' && !problem.companies.includes(selectedCompany)) return false;
      return true;
    });
  }, [allProblems, searchQuery, selectedTopic, selectedSubtopic, difficulty, selectedCompany]);

  const visibleProblems = useMemo(() => filteredProblems.slice(0, visibleCount), [filteredProblems, visibleCount]);

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
    setVisibleCount(PROBLEMS_PER_PAGE);
    setIsSidebarOpen(false);
  };

  const handlePlatformChange = (p: Platform) => {
    setPlatform(p);
    setSelectedTopic('All');
    setSelectedSubtopic('All');
    setVisibleCount(PROBLEMS_PER_PAGE);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        difficulty={difficulty}
        onDifficultyChange={(d) => { setDifficulty(d); setVisibleCount(PROBLEMS_PER_PAGE); }}
        totalProblems={allProblems.length}
        filteredCount={filteredProblems.length}
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
            <HeroSection onDifficultyFilter={(d) => { setDifficulty(d); setVisibleCount(PROBLEMS_PER_PAGE); }} />
            <ContactBanner />

            <div className="mb-6 flex justify-center">
              <PlatformSwitcher platform={platform} onPlatformChange={handlePlatformChange} counts={platformCounts} />
            </div>

            <div className="mb-6">
              <CompanyFilter selectedCompany={selectedCompany} onCompanyChange={(c) => { setSelectedCompany(c); setVisibleCount(PROBLEMS_PER_PAGE); }} />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">
                  {selectedTopic === 'All' ? 'All Problems' : selectedTopic}
                </h2>
              </div>
              <span className="text-sm text-muted-foreground">({filteredProblems.length} problems)</span>
            </div>

            {selectedTopic !== 'All' && currentTopicSubtopics.length > 0 && (
              <SubtopicTabs subTopics={currentTopicSubtopics} selectedSubtopic={selectedSubtopic} onSubtopicSelect={(s) => { setSelectedSubtopic(s); setVisibleCount(PROBLEMS_PER_PAGE); }} />
            )}

            {visibleProblems.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {visibleProblems.map((problem, index) => (
                    <ProblemCard key={`${platform}-${problem.id}`} problem={problem} index={index} isBookmarked={bookmarked.has(problem.id)} isSolved={solved.has(problem.id)} videoUrl={getVideoUrl(problem.id)} onToggleBookmark={handleToggleBookmark} onToggleSolved={handleToggleSolved} />
                  ))}
                </div>
                {visibleCount < filteredProblems.length && (
                  <div className="mt-8 text-center">
                    <button onClick={() => setVisibleCount((prev) => prev + PROBLEMS_PER_PAGE)} className="px-8 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary font-medium hover:bg-primary/20 transition-all">
                      Load More ({filteredProblems.length - visibleCount} remaining)
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
