import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiter (per user, per minute)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 10; // max requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(userId: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(userId);
  
  if (!userLimit || now > userLimit.resetAt) {
    rateLimitMap.set(userId, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  userLimit.count++;
  return true;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get authorization header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Missing authorization header" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify the JWT token
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
    
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error("Missing Supabase configuration");
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
      global: {
        headers: { Authorization: authHeader },
      },
    });

    // Get the authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      console.error("Auth error:", authError);
      return new Response(
        JSON.stringify({ error: "Invalid or expired authentication token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Apply rate limiting per user
    if (!checkRateLimit(user.id)) {
      console.log(`Rate limit exceeded for user: ${user.id}`);
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Please wait a minute before trying again." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { type, data } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    let systemPrompt = "";
    let userPrompt = "";

    switch (type) {
      case "resume":
        systemPrompt = `You are an expert resume writer and career coach. Create professional, ATS-friendly resumes that highlight achievements and use strong action verbs. Format the output as a structured JSON with sections: personalInfo, summary, experience, education, skills, certifications, projects. Each experience item should have: company, title, duration, location, achievements (array of bullet points with metrics when possible).`;
        userPrompt = `Create a professional resume based on this information:\n${JSON.stringify(data)}`;
        break;

      case "portfolio":
        systemPrompt = `You are a professional portfolio writer and personal branding expert. Create compelling portfolio content that showcases projects effectively. Output structured JSON with: bio, headline, skills, projects (each with: title, description, technologies, impact, liveUrl, githubUrl placeholders).`;
        userPrompt = `Create portfolio content based on this information:\n${JSON.stringify(data)}`;
        break;

      case "interview-questions":
        systemPrompt = `You are an expert technical interviewer and career coach. Generate 30 insightful interview questions from the given project, covering: technical implementation, architecture decisions, challenges faced, trade-offs made, scalability, team collaboration. For each question, provide a STAR-format answer template. Output JSON with array of objects containing: question, category (technical/behavioral/system-design), difficulty, starAnswer (with situation, task, action, result fields).`;
        userPrompt = `Generate interview questions and STAR answers from this project:\n${JSON.stringify(data)}`;
        break;

      case "improve-resume":
        systemPrompt = `You are an expert resume reviewer. Analyze the resume and provide specific, actionable improvements. Focus on: quantifying achievements, stronger action verbs, ATS optimization, removing weak phrases. Output JSON with: score (0-100), improvements (array of {section, issue, suggestion}), rewrittenSections.`;
        userPrompt = `Review and improve this resume:\n${JSON.stringify(data)}`;
        break;

      case "project-explanation":
        systemPrompt = `You are a technical communication expert. Create clear, impressive project explanations suitable for interviews. Include: architecture overview, key technical decisions, challenges and solutions, metrics/impact. Output JSON with: elevator_pitch, detailed_explanation, technical_deep_dive, why_it_matters.`;
        userPrompt = `Create interview-ready explanation for this project:\n${JSON.stringify(data)}`;
        break;

      default:
        throw new Error(`Unknown type: ${type}`);
    }

    console.log(`Processing ${type} request for user: ${user.id}`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const result = await response.json();
    const content = result.choices?.[0]?.message?.content;

    // Try to parse as JSON, fallback to raw content
    let parsedContent;
    try {
      // Remove markdown code blocks if present
      const cleanContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      parsedContent = JSON.parse(cleanContent);
    } catch {
      parsedContent = { raw: content };
    }

    console.log(`Successfully processed ${type} request for user: ${user.id}`);

    return new Response(
      JSON.stringify({ success: true, data: parsedContent }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error: unknown) {
    console.error("Error in ai-career function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});