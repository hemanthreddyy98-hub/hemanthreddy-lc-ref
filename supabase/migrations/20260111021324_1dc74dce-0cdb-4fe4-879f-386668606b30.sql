-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can delete problem videos" ON public.problem_videos;
DROP POLICY IF EXISTS "Anyone can insert problem videos" ON public.problem_videos;
DROP POLICY IF EXISTS "Anyone can update problem videos" ON public.problem_videos;
DROP POLICY IF EXISTS "Anyone can view problem videos" ON public.problem_videos;

-- Create new secure policies
-- Everyone can view videos (public read access for educational content)
CREATE POLICY "Anyone can view problem videos"
ON public.problem_videos
FOR SELECT
USING (true);

-- Only authenticated users can insert videos
CREATE POLICY "Authenticated users can insert problem videos"
ON public.problem_videos
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Only authenticated users can update videos
CREATE POLICY "Authenticated users can update problem videos"
ON public.problem_videos
FOR UPDATE
TO authenticated
USING (true);

-- Only authenticated users can delete videos
CREATE POLICY "Authenticated users can delete problem videos"
ON public.problem_videos
FOR DELETE
TO authenticated
USING (true);