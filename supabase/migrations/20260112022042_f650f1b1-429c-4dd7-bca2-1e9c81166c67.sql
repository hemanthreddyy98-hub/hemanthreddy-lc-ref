-- Create function to update timestamps (if not exists)
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create problems table for storing coding problems
CREATE TABLE public.problems (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
  topic TEXT NOT NULL,
  sub_topic TEXT NOT NULL,
  companies TEXT[] DEFAULT '{}',
  acceptance DECIMAL(5,2) DEFAULT 0,
  frequency DECIMAL(5,2) DEFAULT 0,
  is_premium BOOLEAN DEFAULT false,
  url TEXT NOT NULL,
  time_complexity TEXT DEFAULT 'O(n)',
  space_complexity TEXT DEFAULT 'O(1)',
  approach TEXT,
  platform TEXT NOT NULL CHECK (platform IN ('leetcode', 'hackerrank', 'gfg', 'codechef', 'codeforces')),
  platform_id TEXT,
  rating INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.problems ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view problems" 
ON public.problems 
FOR SELECT 
USING (true);

CREATE POLICY "Only admins can insert problems" 
ON public.problems 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update problems" 
ON public.problems 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete problems" 
ON public.problems 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_problems_updated_at
BEFORE UPDATE ON public.problems
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();