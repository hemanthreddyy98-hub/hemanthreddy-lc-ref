import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface VideoEntry {
  problem_id: number;
  youtube_url: string;
  title: string | null;
}

interface VideoMap {
  byId: { [problemId: number]: string };
  byTitle: { [title: string]: string };
}

export const useProblemVideos = () => {
  const [videoMap, setVideoMap] = useState<VideoMap>({ byId: {}, byTitle: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data, error } = await supabase
          .from('problem_videos')
          .select('problem_id, youtube_url, title');

        if (error) throw error;

        const byId: { [problemId: number]: string } = {};
        const byTitle: { [title: string]: string } = {};
        
        data?.forEach((item: VideoEntry) => {
          byId[item.problem_id] = item.youtube_url;
          // Also map by title (normalized) for static problem matching
          if (item.title) {
            byTitle[item.title.toLowerCase().trim()] = item.youtube_url;
          }
        });
        
        setVideoMap({ byId, byTitle });
      } catch (error) {
        console.error('Error fetching video links:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();

    // Subscribe to realtime updates
    const channel = supabase
      .channel('problem_videos_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'problem_videos'
        },
        () => {
          fetchVideos();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Get video URL by problem ID or by title (for static problems)
  const getVideoUrl = (problemId: number, title?: string): string | undefined => {
    // First try by ID
    if (videoMap.byId[problemId]) {
      return videoMap.byId[problemId];
    }
    // Then try by title
    if (title) {
      return videoMap.byTitle[title.toLowerCase().trim()];
    }
    return undefined;
  };

  return { videoMap, loading, getVideoUrl };
};
