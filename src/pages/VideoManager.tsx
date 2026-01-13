import { useState, useEffect } from 'react';
import { ArrowLeft, Youtube, Plus, Trash2, Edit2, Save, X, Search, Shield, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { problems } from '@/data/leetcodeProblems';
import { useAuth } from '@/hooks/useAuth';

// Strict YouTube URL validation regex
const YOUTUBE_URL_REGEX = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)[a-zA-Z0-9_-]{11}(&[a-zA-Z0-9_=-]*)*$/;

const isValidYoutubeUrl = (url: string): boolean => {
  return YOUTUBE_URL_REGEX.test(url.trim());
};

interface VideoLink {
  id: string;
  problem_id: number;
  youtube_url: string;
  title: string | null;
  created_at: string;
}

const VideoManager = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading: authLoading, adminCheckComplete, signOut } = useAuth();
  
  const [videoLinks, setVideoLinks] = useState<VideoLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [newProblemId, setNewProblemId] = useState('');
  const [newYoutubeUrl, setNewYoutubeUrl] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editUrl, setEditUrl] = useState('');

  useEffect(() => {
    // Wait for both auth loading AND admin check to complete
    if (!authLoading && adminCheckComplete) {
      if (!user) {
        navigate('/auth');
        return;
      }
      if (!isAdmin) {
        toast.error('Access denied. Only admin can access Video Manager.');
        navigate('/');
        return;
      }
    }
  }, [user, isAdmin, authLoading, adminCheckComplete, navigate]);

  useEffect(() => {
    if (user && isAdmin && adminCheckComplete) {
      fetchVideoLinks();
    }
  }, [user, isAdmin, adminCheckComplete]);

  const fetchVideoLinks = async () => {
    try {
      const { data, error } = await supabase
        .from('problem_videos')
        .select('*')
        .order('problem_id', { ascending: true });

      if (error) throw error;
      setVideoLinks(data || []);
    } catch (error) {
      console.error('Error fetching video links:', error);
      toast.error('Failed to fetch video links');
    } finally {
      setLoading(false);
    }
  };

  const getProblemTitle = (problemId: number) => {
    const problem = problems.find(p => p.id === problemId);
    return problem?.title || `Problem #${problemId}`;
  };

  const handleAddVideo = async () => {
    if (!newProblemId || !newYoutubeUrl) {
      toast.error('Please enter both problem ID and YouTube URL');
      return;
    }

    const problemId = parseInt(newProblemId);
    if (isNaN(problemId)) {
      toast.error('Please enter a valid problem ID');
      return;
    }

    // Check if problem exists
    const problem = problems.find(p => p.id === problemId);
    if (!problem) {
      toast.error('Problem not found with that ID');
      return;
    }

    // Strict YouTube URL validation
    if (!isValidYoutubeUrl(newYoutubeUrl)) {
      toast.error('Please enter a valid YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)');
      return;
    }

    try {
      const { error } = await supabase
        .from('problem_videos')
        .insert({
          problem_id: problemId,
          youtube_url: newYoutubeUrl.trim(),
          title: problem.title
        });

      if (error) {
        if (error.code === '23505') {
          toast.error('A video already exists for this problem');
        } else {
          throw error;
        }
        return;
      }

      toast.success('Video link added successfully');
      setNewProblemId('');
      setNewYoutubeUrl('');
      fetchVideoLinks();
    } catch (error) {
      console.error('Error adding video:', error);
      toast.error('Failed to add video link');
    }
  };

  const handleUpdateVideo = async (id: string) => {
    if (!editUrl) {
      toast.error('Please enter a YouTube URL');
      return;
    }

    // Strict YouTube URL validation
    if (!isValidYoutubeUrl(editUrl)) {
      toast.error('Please enter a valid YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)');
      return;
    }

    try {
      const { error } = await supabase
        .from('problem_videos')
        .update({ youtube_url: editUrl.trim() })
        .eq('id', id);

      if (error) throw error;

      toast.success('Video link updated');
      setEditingId(null);
      fetchVideoLinks();
    } catch (error) {
      console.error('Error updating video:', error);
      toast.error('Failed to update video link');
    }
  };

  const handleDeleteVideo = async (id: string) => {
    if (!confirm('Are you sure you want to delete this video link?')) return;

    try {
      const { error } = await supabase
        .from('problem_videos')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast.success('Video link deleted');
      fetchVideoLinks();
    } catch (error) {
      console.error('Error deleting video:', error);
      toast.error('Failed to delete video link');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast.success('Signed out successfully');
    navigate('/');
  };

  const filteredVideos = videoLinks.filter(video => {
    const problemTitle = getProblemTitle(video.problem_id);
    return problemTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
           video.problem_id.toString().includes(searchQuery);
  });

  // Get problems without videos for quick add
  const problemsWithoutVideos = problems.filter(
    p => !videoLinks.some(v => v.problem_id === p.id)
  ).slice(0, 10);

  // Show loading state while checking auth OR admin status
  if (authLoading || !adminCheckComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Don't render if not authenticated or not admin
  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Youtube className="h-6 w-6 text-red-500" />
              <h1 className="text-xl font-bold text-foreground">Video Manager</h1>
              <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                <Shield className="h-3 w-3" />
                Admin
              </span>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {videoLinks.length} videos • {user.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleSignOut} className="gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Add New Video */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Plus className="h-5 w-5 text-primary" />
            Add Explanation Video
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Problem ID</label>
              <Input
                type="number"
                placeholder="Enter problem ID (e.g., 1)"
                value={newProblemId}
                onChange={(e) => setNewProblemId(e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-muted-foreground mb-2 block">YouTube URL</label>
              <div className="flex gap-2">
                <Input
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={newYoutubeUrl}
                  onChange={(e) => setNewYoutubeUrl(e.target.value)}
                />
                <Button onClick={handleAddVideo} className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Add Suggestions */}
          {problemsWithoutVideos.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-2">Quick add (problems without videos):</p>
              <div className="flex flex-wrap gap-2">
                {problemsWithoutVideos.map(p => (
                  <button
                    key={p.id}
                    onClick={() => setNewProblemId(p.id.toString())}
                    className="px-3 py-1 text-xs rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                  >
                    #{p.id} {p.title.slice(0, 20)}...
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by problem ID or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Video List */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border bg-muted/30">
            <h2 className="font-semibold">Uploaded Videos</h2>
          </div>

          {loading ? (
            <div className="p-8 text-center text-muted-foreground">
              Loading videos...
            </div>
          ) : filteredVideos.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              {searchQuery ? 'No videos found matching your search' : 'No videos uploaded yet. Add your first video above!'}
            </div>
          ) : (
            <div className="divide-y divide-border">
              {filteredVideos.map((video) => (
                <div key={video.id} className="p-4 hover:bg-muted/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <Youtube className="h-6 w-6 text-red-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-primary">#{video.problem_id}</span>
                        <span className="font-medium text-foreground truncate">
                          {getProblemTitle(video.problem_id)}
                        </span>
                      </div>
                      {editingId === video.id ? (
                        <div className="flex items-center gap-2">
                          <Input
                            value={editUrl}
                            onChange={(e) => setEditUrl(e.target.value)}
                            className="h-8 text-sm"
                          />
                          <Button size="sm" variant="ghost" onClick={() => handleUpdateVideo(video.id)}>
                            <Save className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <a
                          href={video.youtube_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary truncate block"
                        >
                          {video.youtube_url}
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => {
                          setEditingId(video.id);
                          setEditUrl(video.youtube_url);
                        }}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleDeleteVideo(video.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default VideoManager;