import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { 
  ArrowLeft, Plus, Trash2, Edit, Save, X, Loader2, Upload, Filter, 
  Search, ArrowUpDown, ArrowUp, ArrowDown, Youtube, ExternalLink 
} from 'lucide-react';
import { CompanyYearsEditor } from '@/components/CompanyYearsEditor';
import { BulkImport, ImportedProblem } from '@/components/BulkImport';
import { UNIQUE_COMPANIES } from '@/data/companies';
import { Json } from '@/integrations/supabase/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Problem {
  id: number;
  title: string;
  difficulty: string;
  topic: string;
  sub_topic: string;
  companies: string[];
  acceptance: number;
  frequency: number;
  is_premium: boolean;
  url: string;
  time_complexity: string;
  space_complexity: string;
  approach: string | null;
  platform: string;
  platform_id: string | null;
  rating: number | null;
  company_years: Record<string, number[]>;
}

interface VideoLink {
  id: string;
  problem_id: number;
  youtube_url: string;
  title: string | null;
}

const platforms = ['leetcode', 'hackerrank', 'gfg', 'codechef', 'codeforces'];
const difficulties = ['Easy', 'Medium', 'Hard'];
const topics = [
  'Arrays', 'Strings', 'Hash Table', 'Dynamic Programming', 'Math', 'Sorting',
  'Greedy', 'Depth-First Search', 'Breadth-First Search', 'Binary Search',
  'Tree', 'Binary Tree', 'Binary Search Tree', 'Graph', 'Linked List',
  'Recursion', 'Backtracking', 'Stack', 'Queue', 'Heap', 'Trie',
  'Bit Manipulation', 'Two Pointers', 'Sliding Window', 'Union Find',
  'Divide and Conquer', 'Design', 'Simulation', 'Matrix', 'Prefix Sum'
];

type SortField = 'id' | 'title' | 'frequency' | 'acceptance';
type SortDirection = 'asc' | 'desc';

const YOUTUBE_URL_REGEX = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)[a-zA-Z0-9_-]{11}(&[a-zA-Z0-9_=-]*)*$/;

const isValidYoutubeUrl = (url: string): boolean => {
  return YOUTUBE_URL_REGEX.test(url.trim());
};

const ProblemManager = () => {
  const { user, loading, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [videoLinks, setVideoLinks] = useState<VideoLink[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showBulkImport, setShowBulkImport] = useState(false);
  
  // Filter states
  const [platformFilter, setPlatformFilter] = useState<string>('all');
  const [topicFilter, setTopicFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [companyFilter, setCompanyFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sort states
  const [sortField, setSortField] = useState<SortField>('id');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  // Video dialog states
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);
  const [selectedProblemForVideo, setSelectedProblemForVideo] = useState<Problem | null>(null);
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [editingVideoId, setEditingVideoId] = useState<string | null>(null);
  const [editVideoUrl, setEditVideoUrl] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    difficulty: 'Easy',
    topic: 'Arrays',
    sub_topic: '',
    companies: '',
    acceptance: 50,
    frequency: 50,
    is_premium: false,
    url: '',
    time_complexity: 'O(n)',
    space_complexity: 'O(1)',
    approach: '',
    platform: 'leetcode',
    platform_id: '',
    rating: '',
    company_years: {} as Record<string, number[]>
  });

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    } else if (!loading && user && !isAdmin) {
      toast.error('Access denied. Admin privileges required.');
      navigate('/');
    }
  }, [user, loading, isAdmin, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchProblems();
      fetchVideoLinks();
    }
  }, [isAdmin]);

  const fetchProblems = async () => {
    try {
      const { data, error } = await supabase
        .from('problems')
        .select('*')
        .order('id', { ascending: false });

      if (error) throw error;
      
      const transformedData = (data || []).map(p => ({
        ...p,
        company_years: (p.company_years as Record<string, number[]>) || {}
      }));
      
      setProblems(transformedData);
    } catch (error) {
      console.error('Error fetching problems:', error);
      toast.error('Failed to fetch problems');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchVideoLinks = async () => {
    try {
      const { data, error } = await supabase
        .from('problem_videos')
        .select('*');

      if (error) throw error;
      setVideoLinks(data || []);
    } catch (error) {
      console.error('Error fetching video links:', error);
    }
  };

  // Get unique companies from all problems for filter dropdown
  const problemCompanies = useMemo(() => {
    const companies = new Set<string>();
    problems.forEach(p => p.companies.forEach(c => companies.add(c)));
    return Array.from(companies).sort();
  }, [problems]);

  // Filter and sort problems
  const filteredProblems = useMemo(() => {
    let result = [...problems];

    // Apply filters
    if (platformFilter !== 'all') {
      result = result.filter(p => p.platform === platformFilter);
    }
    if (topicFilter !== 'all') {
      result = result.filter(p => p.topic === topicFilter);
    }
    if (difficultyFilter !== 'all') {
      result = result.filter(p => p.difficulty === difficultyFilter);
    }
    if (companyFilter !== 'all') {
      result = result.filter(p => p.companies.includes(companyFilter));
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.id.toString().includes(query)
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case 'id':
          comparison = a.id - b.id;
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'frequency':
          comparison = a.frequency - b.frequency;
          break;
        case 'acceptance':
          comparison = a.acceptance - b.acceptance;
          break;
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [problems, platformFilter, topicFilter, difficultyFilter, companyFilter, searchQuery, sortField, sortDirection]);

  // Get video for a problem
  const getVideoForProblem = (problemId: number): VideoLink | undefined => {
    return videoLinks.find(v => v.problem_id === problemId);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return <ArrowUpDown className="w-4 h-4 ml-1" />;
    return sortDirection === 'asc' 
      ? <ArrowUp className="w-4 h-4 ml-1" /> 
      : <ArrowDown className="w-4 h-4 ml-1" />;
  };

  const resetForm = () => {
    setFormData({
      title: '',
      difficulty: 'Easy',
      topic: 'Arrays',
      sub_topic: '',
      companies: '',
      acceptance: 50,
      frequency: 50,
      is_premium: false,
      url: '',
      time_complexity: 'O(n)',
      space_complexity: 'O(1)',
      approach: '',
      platform: 'leetcode',
      platform_id: '',
      rating: '',
      company_years: {}
    });
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.url.trim()) {
      toast.error('Title and URL are required');
      return;
    }

    setIsSubmitting(true);

    try {
      const problemData = {
        title: formData.title.trim(),
        difficulty: formData.difficulty,
        topic: formData.topic,
        sub_topic: formData.sub_topic.trim() || formData.topic,
        companies: formData.companies.split(',').map(c => c.trim()).filter(Boolean),
        acceptance: formData.acceptance,
        frequency: formData.frequency,
        is_premium: formData.is_premium,
        url: formData.url.trim(),
        time_complexity: formData.time_complexity,
        space_complexity: formData.space_complexity,
        approach: formData.approach.trim() || null,
        platform: formData.platform,
        platform_id: formData.platform_id.trim() || null,
        rating: formData.rating ? parseInt(formData.rating) : null,
        company_years: formData.company_years as unknown as Json
      };

      if (editingId) {
        const { error } = await supabase
          .from('problems')
          .update(problemData)
          .eq('id', editingId);

        if (error) throw error;
        toast.success('Problem updated successfully');
      } else {
        const { error } = await supabase
          .from('problems')
          .insert([problemData]);

        if (error) throw error;
        toast.success('Problem added successfully');
      }

      resetForm();
      setShowForm(false);
      fetchProblems();
    } catch (error) {
      console.error('Error saving problem:', error);
      toast.error('Failed to save problem');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (problem: Problem) => {
    setFormData({
      title: problem.title,
      difficulty: problem.difficulty,
      topic: problem.topic,
      sub_topic: problem.sub_topic,
      companies: problem.companies.join(', '),
      acceptance: problem.acceptance,
      frequency: problem.frequency,
      is_premium: problem.is_premium,
      url: problem.url,
      time_complexity: problem.time_complexity,
      space_complexity: problem.space_complexity,
      approach: problem.approach || '',
      platform: problem.platform,
      platform_id: problem.platform_id || '',
      rating: problem.rating?.toString() || '',
      company_years: problem.company_years || {}
    });
    setEditingId(problem.id);
    setShowForm(true);
    setShowBulkImport(false);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this problem?')) return;

    try {
      const { error } = await supabase
        .from('problems')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('Problem deleted successfully');
      fetchProblems();
    } catch (error) {
      console.error('Error deleting problem:', error);
      toast.error('Failed to delete problem');
    }
  };

  const handleBulkImport = async (importedProblems: ImportedProblem[]) => {
    try {
      const problemsToInsert = importedProblems.map(p => ({
        title: p.title,
        difficulty: p.difficulty,
        topic: p.topic,
        sub_topic: p.sub_topic,
        companies: p.companies,
        url: p.url,
        platform: p.platform,
        platform_id: p.platform_id || null,
        acceptance: p.acceptance || 50,
        frequency: p.frequency || 50,
        is_premium: p.is_premium || false,
        time_complexity: p.time_complexity || 'O(n)',
        space_complexity: p.space_complexity || 'O(1)',
        approach: p.approach || null,
        rating: p.rating || null,
        company_years: (p.company_years || {}) as unknown as Json
      }));

      const { error } = await supabase
        .from('problems')
        .insert(problemsToInsert);

      if (error) throw error;
      
      fetchProblems();
    } catch (error) {
      console.error('Error bulk importing:', error);
      throw error;
    }
  };

  // Video management functions
  const openVideoDialog = (problem: Problem) => {
    setSelectedProblemForVideo(problem);
    setNewVideoUrl('');
    setEditingVideoId(null);
    setVideoDialogOpen(true);
  };

  const handleAddVideo = async () => {
    if (!selectedProblemForVideo || !newVideoUrl.trim()) {
      toast.error('Please enter a YouTube URL');
      return;
    }

    if (!isValidYoutubeUrl(newVideoUrl)) {
      toast.error('Please enter a valid YouTube URL');
      return;
    }

    try {
      const { error } = await supabase
        .from('problem_videos')
        .insert({
          problem_id: selectedProblemForVideo.id,
          youtube_url: newVideoUrl.trim(),
          title: selectedProblemForVideo.title
        });

      if (error) {
        if (error.code === '23505') {
          toast.error('A video already exists for this problem');
        } else {
          throw error;
        }
        return;
      }

      toast.success('Video added successfully');
      setNewVideoUrl('');
      fetchVideoLinks();
    } catch (error) {
      console.error('Error adding video:', error);
      toast.error('Failed to add video');
    }
  };

  const handleUpdateVideo = async (videoId: string) => {
    if (!editVideoUrl.trim()) {
      toast.error('Please enter a YouTube URL');
      return;
    }

    if (!isValidYoutubeUrl(editVideoUrl)) {
      toast.error('Please enter a valid YouTube URL');
      return;
    }

    try {
      const { error } = await supabase
        .from('problem_videos')
        .update({ youtube_url: editVideoUrl.trim() })
        .eq('id', videoId);

      if (error) throw error;

      toast.success('Video updated successfully');
      setEditingVideoId(null);
      fetchVideoLinks();
    } catch (error) {
      console.error('Error updating video:', error);
      toast.error('Failed to update video');
    }
  };

  const handleDeleteVideo = async (videoId: string) => {
    if (!confirm('Are you sure you want to delete this video?')) return;

    try {
      const { error } = await supabase
        .from('problem_videos')
        .delete()
        .eq('id', videoId);

      if (error) throw error;

      toast.success('Video deleted successfully');
      fetchVideoLinks();
    } catch (error) {
      console.error('Error deleting video:', error);
      toast.error('Failed to delete video');
    }
  };

  const clearFilters = () => {
    setPlatformFilter('all');
    setTopicFilter('all');
    setDifficultyFilter('all');
    setCompanyFilter('all');
    setSearchQuery('');
    setSortField('id');
    setSortDirection('desc');
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Hard': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Problem Manager</h1>
              <p className="text-muted-foreground">Add and manage coding problems</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email}</span>
            <Button variant="outline" onClick={() => navigate('/video-manager')}>
              Video Manager
            </Button>
            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-6">
          {!showForm && !showBulkImport && (
            <>
              <Button onClick={() => { setShowForm(true); setShowBulkImport(false); }}>
                <Plus className="w-4 h-4 mr-2" />
                Add New Problem
              </Button>
              <Button variant="outline" onClick={() => { setShowBulkImport(true); setShowForm(false); }}>
                <Upload className="w-4 h-4 mr-2" />
                Bulk Import
              </Button>
            </>
          )}
        </div>

        {/* Bulk Import */}
        {showBulkImport && (
          <div className="mb-8">
            <BulkImport 
              onImport={handleBulkImport}
              onClose={() => setShowBulkImport(false)}
            />
          </div>
        )}

        {/* Add/Edit Form */}
        {showForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingId ? 'Edit Problem' : 'Add New Problem'}</CardTitle>
              <CardDescription>
                {editingId ? 'Update the problem details' : 'Fill in the details to add a new coding problem'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g., Two Sum"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="platform">Platform *</Label>
                    <Select
                      value={formData.platform}
                      onValueChange={(value) => setFormData({ ...formData, platform: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {platforms.map((p) => (
                          <SelectItem key={p} value={p}>
                            {p.charAt(0).toUpperCase() + p.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="difficulty">Difficulty *</Label>
                    <Select
                      value={formData.difficulty}
                      onValueChange={(value) => setFormData({ ...formData, difficulty: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {difficulties.map((d) => (
                          <SelectItem key={d} value={d}>{d}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic *</Label>
                    <Select
                      value={formData.topic}
                      onValueChange={(value) => setFormData({ ...formData, topic: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {topics.map((t) => (
                          <SelectItem key={t} value={t}>{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sub_topic">Sub Topic</Label>
                    <Input
                      id="sub_topic"
                      value={formData.sub_topic}
                      onChange={(e) => setFormData({ ...formData, sub_topic: e.target.value })}
                      placeholder="e.g., Two Pointers"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="url">Problem URL *</Label>
                    <Input
                      id="url"
                      type="url"
                      value={formData.url}
                      onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                      placeholder="https://leetcode.com/problems/..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="platform_id">Platform ID</Label>
                    <Input
                      id="platform_id"
                      value={formData.platform_id}
                      onChange={(e) => setFormData({ ...formData, platform_id: e.target.value })}
                      placeholder="e.g., 1 for LeetCode"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companies">Companies (comma-separated)</Label>
                    <Input
                      id="companies"
                      value={formData.companies}
                      onChange={(e) => setFormData({ ...formData, companies: e.target.value })}
                      placeholder="e.g., Google, Amazon, Meta"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="acceptance">Acceptance Rate (%)</Label>
                    <Input
                      id="acceptance"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.acceptance}
                      onChange={(e) => setFormData({ ...formData, acceptance: parseFloat(e.target.value) || 0 })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="frequency">Frequency (%)</Label>
                    <Input
                      id="frequency"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.frequency}
                      onChange={(e) => setFormData({ ...formData, frequency: parseFloat(e.target.value) || 0 })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time_complexity">Time Complexity</Label>
                    <Input
                      id="time_complexity"
                      value={formData.time_complexity}
                      onChange={(e) => setFormData({ ...formData, time_complexity: e.target.value })}
                      placeholder="e.g., O(n)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="space_complexity">Space Complexity</Label>
                    <Input
                      id="space_complexity"
                      value={formData.space_complexity}
                      onChange={(e) => setFormData({ ...formData, space_complexity: e.target.value })}
                      placeholder="e.g., O(1)"
                    />
                  </div>

                  {formData.platform === 'codeforces' && (
                    <div className="space-y-2">
                      <Label htmlFor="rating">Rating</Label>
                      <Input
                        id="rating"
                        type="number"
                        value={formData.rating}
                        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                        placeholder="e.g., 1500"
                      />
                    </div>
                  )}
                </div>

                {/* Company Years Editor */}
                <CompanyYearsEditor
                  companyYears={formData.company_years}
                  companies={formData.companies.split(',').map(c => c.trim()).filter(Boolean)}
                  onChange={(company_years) => setFormData({ ...formData, company_years })}
                />

                <div className="space-y-2">
                  <Label htmlFor="approach">Approach/Solution Hint</Label>
                  <Textarea
                    id="approach"
                    value={formData.approach}
                    onChange={(e) => setFormData({ ...formData, approach: e.target.value })}
                    placeholder="Brief description of the approach to solve this problem..."
                    rows={3}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="is_premium"
                    checked={formData.is_premium}
                    onChange={(e) => setFormData({ ...formData, is_premium: e.target.checked })}
                    className="rounded"
                  />
                  <Label htmlFor="is_premium">Premium Problem</Label>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4 mr-2" />
                    )}
                    {editingId ? 'Update Problem' : 'Add Problem'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      resetForm();
                      setShowForm(false);
                    }}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Problems Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <CardTitle>All Problems ({filteredProblems.length})</CardTitle>
                <CardDescription>Manage your coding problems database</CardDescription>
              </div>
            </div>
            
            {/* Search and Filters */}
            <div className="mt-4 space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filter Row */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Filters:</span>
                </div>
                
                <Select value={platformFilter} onValueChange={setPlatformFilter}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Platforms</SelectItem>
                    {platforms.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p.charAt(0).toUpperCase() + p.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={topicFilter} onValueChange={setTopicFilter}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Topics</SelectItem>
                    {topics.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                  <SelectTrigger className="w-[130px]">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    {difficulties.map((d) => (
                      <SelectItem key={d} value={d}>{d}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={companyFilter} onValueChange={setCompanyFilter}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Companies</SelectItem>
                    {problemCompanies.slice(0, 50).map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {(platformFilter !== 'all' || topicFilter !== 'all' || difficultyFilter !== 'all' || companyFilter !== 'all' || searchQuery) && (
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X className="w-4 h-4 mr-1" />
                    Clear
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {filteredProblems.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No problems found. {searchQuery || platformFilter !== 'all' || topicFilter !== 'all' || difficultyFilter !== 'all' || companyFilter !== 'all' 
                  ? 'Try adjusting your filters.' 
                  : 'Click "Add New Problem" or "Bulk Import" to get started.'}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>
                        <button 
                          onClick={() => handleSort('id')}
                          className="flex items-center hover:text-foreground transition-colors"
                        >
                          ID {getSortIcon('id')}
                        </button>
                      </TableHead>
                      <TableHead>
                        <button 
                          onClick={() => handleSort('title')}
                          className="flex items-center hover:text-foreground transition-colors"
                        >
                          Title {getSortIcon('title')}
                        </button>
                      </TableHead>
                      <TableHead>Platform</TableHead>
                      <TableHead>Difficulty</TableHead>
                      <TableHead>Topic</TableHead>
                      <TableHead>
                        <button 
                          onClick={() => handleSort('frequency')}
                          className="flex items-center hover:text-foreground transition-colors"
                        >
                          Freq% {getSortIcon('frequency')}
                        </button>
                      </TableHead>
                      <TableHead>
                        <button 
                          onClick={() => handleSort('acceptance')}
                          className="flex items-center hover:text-foreground transition-colors"
                        >
                          Acc% {getSortIcon('acceptance')}
                        </button>
                      </TableHead>
                      <TableHead>Video</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProblems.map((problem) => {
                      const video = getVideoForProblem(problem.id);
                      return (
                        <TableRow key={problem.id}>
                          <TableCell className="font-mono">{problem.id}</TableCell>
                          <TableCell>
                            <a
                              href={problem.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {problem.title}
                            </a>
                            {problem.is_premium && (
                              <Badge variant="outline" className="ml-2 text-yellow-400 border-yellow-400/30">
                                Premium
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell className="capitalize">{problem.platform}</TableCell>
                          <TableCell>
                            <Badge className={getDifficultyColor(problem.difficulty)}>
                              {problem.difficulty}
                            </Badge>
                          </TableCell>
                          <TableCell>{problem.topic}</TableCell>
                          <TableCell>{problem.frequency}%</TableCell>
                          <TableCell>{problem.acceptance}%</TableCell>
                          <TableCell>
                            {video ? (
                              <div className="flex items-center gap-1">
                                <a
                                  href={video.youtube_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-red-500 hover:text-red-400"
                                >
                                  <Youtube className="w-4 h-4" />
                                </a>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={() => openVideoDialog(problem)}
                                >
                                  <Edit className="w-3 h-3" />
                                </Button>
                              </div>
                            ) : (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 text-xs"
                                onClick={() => openVideoDialog(problem)}
                              >
                                <Plus className="w-3 h-3 mr-1" />
                                Add
                              </Button>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleEdit(problem)}
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDelete(problem.id)}
                                className="text-destructive hover:text-destructive"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Youtube className="w-5 h-5 text-red-500" />
              Reference Video
            </DialogTitle>
            <DialogDescription>
              {selectedProblemForVideo && (
                <span>
                  #{selectedProblemForVideo.id} - {selectedProblemForVideo.title}
                </span>
              )}
            </DialogDescription>
          </DialogHeader>

          {selectedProblemForVideo && (
            <div className="space-y-4">
              {(() => {
                const video = getVideoForProblem(selectedProblemForVideo.id);
                if (video) {
                  return (
                    <div className="space-y-3">
                      <Label>Current Video (Java Explanation)</Label>
                      {editingVideoId === video.id ? (
                        <div className="flex gap-2">
                          <Input
                            value={editVideoUrl}
                            onChange={(e) => setEditVideoUrl(e.target.value)}
                            placeholder="YouTube URL"
                          />
                          <Button size="icon" onClick={() => handleUpdateVideo(video.id)}>
                            <Save className="w-4 h-4" />
                          </Button>
                          <Button size="icon" variant="ghost" onClick={() => setEditingVideoId(null)}>
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                          <a
                            href={video.youtube_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-sm text-primary hover:underline truncate flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4 flex-shrink-0" />
                            {video.youtube_url}
                          </a>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                              setEditingVideoId(video.id);
                              setEditVideoUrl(video.youtube_url);
                            }}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="text-destructive"
                            onClick={() => handleDeleteVideo(video.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <div className="space-y-3">
                      <Label>Add Video URL (Java Explanation)</Label>
                      <p className="text-xs text-muted-foreground">
                        Only add Java explanation videos for this problem.
                      </p>
                      <div className="flex gap-2">
                        <Input
                          value={newVideoUrl}
                          onChange={(e) => setNewVideoUrl(e.target.value)}
                          placeholder="https://youtube.com/watch?v=..."
                        />
                        <Button onClick={handleAddVideo}>
                          <Plus className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  );
                }
              })()}
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setVideoDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProblemManager;