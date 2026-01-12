import { useState, useEffect } from 'react';
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
import { ArrowLeft, Plus, Trash2, Edit, Save, X, Loader2 } from 'lucide-react';

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

const ProblemManager = () => {
  const { user, loading, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

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
    rating: ''
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
    }
  }, [isAdmin]);

  const fetchProblems = async () => {
    try {
      const { data, error } = await supabase
        .from('problems')
        .select('*')
        .order('id', { ascending: false });

      if (error) throw error;
      setProblems(data || []);
    } catch (error) {
      console.error('Error fetching problems:', error);
      toast.error('Failed to fetch problems');
    } finally {
      setIsLoading(false);
    }
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
      rating: ''
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
        rating: formData.rating ? parseInt(formData.rating) : null
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
      rating: problem.rating?.toString() || ''
    });
    setEditingId(problem.id);
    setShowForm(true);
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

        {/* Add/Edit Form */}
        {showForm ? (
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
        ) : (
          <Button onClick={() => setShowForm(true)} className="mb-6">
            <Plus className="w-4 h-4 mr-2" />
            Add New Problem
          </Button>
        )}

        {/* Problems Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Problems ({problems.length})</CardTitle>
            <CardDescription>Manage your coding problems database</CardDescription>
          </CardHeader>
          <CardContent>
            {problems.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No problems added yet. Click "Add New Problem" to get started.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Platform</TableHead>
                      <TableHead>Difficulty</TableHead>
                      <TableHead>Topic</TableHead>
                      <TableHead>Companies</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {problems.map((problem) => (
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
                        <TableCell>
                          <div className="flex flex-wrap gap-1 max-w-[200px]">
                            {problem.companies.slice(0, 3).map((company) => (
                              <Badge key={company} variant="secondary" className="text-xs">
                                {company}
                              </Badge>
                            ))}
                            {problem.companies.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{problem.companies.length - 3}
                              </Badge>
                            )}
                          </div>
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
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProblemManager;
