import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface VideoMap {
  [problemId: number]: string;
}

export const useProblemVideos = () => {
  const [videoMap, setVideoMap] = useState<VideoMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data, error } = await supabase
          .from('problem_videos')
          .select('problem_id, youtube_url');

        if (error) throw error;

        const map: VideoMap = {};
        data?.forEach((item) => {
          map[item.problem_id] = item.youtube_url;
        });
        setVideoMap(map);
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

  const getVideoUrl = (problemId: number): string | undefined => {
    return videoMap[problemId];
  };

  return { videoMap, loading, getVideoUrl };
};
