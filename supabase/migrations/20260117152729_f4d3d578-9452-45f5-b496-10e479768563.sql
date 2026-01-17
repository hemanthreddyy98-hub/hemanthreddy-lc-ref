-- Add company_years column to store which year each company asked the question
-- Format: {"Google": [2023, 2024], "Amazon": [2022, 2023]}
ALTER TABLE public.problems 
ADD COLUMN company_years jsonb DEFAULT '{}'::jsonb;

-- Add an index for efficient querying
CREATE INDEX idx_problems_company_years ON public.problems USING GIN (company_years);

-- Add comment for documentation
COMMENT ON COLUMN public.problems.company_years IS 'JSON object mapping company names to arrays of years when they asked this question';