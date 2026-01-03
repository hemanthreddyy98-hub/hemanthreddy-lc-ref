-- Create table for storing YouTube video links for problems
CREATE TABLE public.problem_videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  problem_id INTEGER NOT NULL UNIQUE,
  youtube_url TEXT NOT NULL,
  title TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.problem_videos ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (anyone can view videos)
CREATE POLICY "Anyone can view problem videos" 
ON public.problem_videos 
FOR SELECT 
USING (true);

-- Create policy for public insert (for admin functionality - we'll secure this later if needed)
CREATE POLICY "Anyone can insert problem videos" 
ON public.problem_videos 
FOR INSERT 
WITH CHECK (true);

-- Create policy for public update
CREATE POLICY "Anyone can update problem videos" 
ON public.problem_videos 
FOR UPDATE 
USING (true);

-- Create policy for public delete
CREATE POLICY "Anyone can delete problem videos" 
ON public.problem_videos 
FOR DELETE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_problem_videos_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_problem_videos_updated_at
BEFORE UPDATE ON public.problem_videos
FOR EACH ROW
EXECUTE FUNCTION public.update_problem_videos_updated_at();