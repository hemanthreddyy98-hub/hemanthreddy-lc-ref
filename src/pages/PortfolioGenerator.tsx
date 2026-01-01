import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  Briefcase, 
  Sparkles, 
  Loader2, 
  Plus,
  Trash2,
  ExternalLink,
  Github,
  Globe,
  Copy,
  Check
} from 'lucide-react';

interface Project {
  name: string;
  description: string;
  technologies: string;
  liveUrl: string;
  githubUrl: string;
}

export default function PortfolioGenerator() {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPortfolio, setGeneratedPortfolio] = useState<any>(null);
  const [copied, setCopied] = useState(false);
  
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    title: '',
    bio: '',
    email: '',
    github: '',
    linkedin: '',
  });
  
  const [projects, setProjects] = useState<Project[]>([
    { name: '', description: '', technologies: '', liveUrl: '', githubUrl: '' }
  ]);

  const handlePersonalChange = (field: string, value: string) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }));
  };

  const addProject = () => {
    setProjects(prev => [...prev, { name: '', description: '', technologies: '', liveUrl: '', githubUrl: '' }]);
  };

  const updateProject = (index: number, field: keyof Project, value: string) => {
    setProjects(prev => prev.map((proj, i) => 
      i === index ? { ...proj, [field]: value } : proj
    ));
  };

  const removeProject = (index: number) => {
    if (projects.length > 1) {
      setProjects(prev => prev.filter((_, i) => i !== index));
    }
  };

  const generatePortfolio = async () => {
    if (!personalInfo.name) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least your name.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-career', {
        body: {
          type: 'portfolio',
          data: {
            personalInfo,
            projects: projects.filter(p => p.name || p.description),
          }
        }
      });

      if (error) throw error;

      setGeneratedPortfolio(data.data);
      toast({
        title: "Portfolio Generated!",
        description: "Your AI-powered portfolio content is ready.",
      });
    } catch (error: any) {
      console.error('Error generating portfolio:', error);
      toast({
        title: "Generation Failed",
        description: error.message || "Failed to generate portfolio. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    if (generatedPortfolio) {
      await navigator.clipboard.writeText(JSON.stringify(generatedPortfolio, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copied!",
        description: "Portfolio content copied to clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold">Portfolio Generator</h1>
              <p className="text-muted-foreground">Create stunning portfolio content with AI</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="space-y-6">
            {/* Personal Info */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name *</Label>
                    <Input 
                      placeholder="John Doe"
                      value={personalInfo.name}
                      onChange={(e) => handlePersonalChange('name', e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Professional Title</Label>
                    <Input 
                      placeholder="Full Stack Developer"
                      value={personalInfo.title}
                      onChange={(e) => handlePersonalChange('title', e.target.value)}
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Bio / About You</Label>
                  <Textarea 
                    placeholder="Tell us about yourself, your passion, and what drives you..."
                    value={personalInfo.bio}
                    onChange={(e) => handlePersonalChange('bio', e.target.value)}
                    className="input-field min-h-[100px]"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input 
                      placeholder="john@example.com"
                      value={personalInfo.email}
                      onChange={(e) => handlePersonalChange('email', e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>GitHub</Label>
                    <Input 
                      placeholder="github.com/johndoe"
                      value={personalInfo.github}
                      onChange={(e) => handlePersonalChange('github', e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>LinkedIn</Label>
                    <Input 
                      placeholder="linkedin.com/in/johndoe"
                      value={personalInfo.linkedin}
                      onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
                      className="input-field"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-semibold">Your Projects</h3>
              {projects.map((project, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-lg">Project {index + 1}</CardTitle>
                    {projects.length > 1 && (
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeProject(index)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Project Name</Label>
                      <Input 
                        placeholder="E-commerce Platform"
                        value={project.name}
                        onChange={(e) => updateProject(index, 'name', e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea 
                        placeholder="Describe what this project does, the problem it solves, and your role..."
                        value={project.description}
                        onChange={(e) => updateProject(index, 'description', e.target.value)}
                        className="input-field min-h-[80px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Technologies Used</Label>
                      <Input 
                        placeholder="React, Node.js, PostgreSQL, AWS"
                        value={project.technologies}
                        onChange={(e) => updateProject(index, 'technologies', e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Live URL</Label>
                        <Input 
                          placeholder="https://myproject.com"
                          value={project.liveUrl}
                          onChange={(e) => updateProject(index, 'liveUrl', e.target.value)}
                          className="input-field"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>GitHub URL</Label>
                        <Input 
                          placeholder="https://github.com/..."
                          value={project.githubUrl}
                          onChange={(e) => updateProject(index, 'githubUrl', e.target.value)}
                          className="input-field"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button 
                variant="outline" 
                onClick={addProject}
                className="w-full rounded-xl"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            </div>

            <Button 
              onClick={generatePortfolio}
              disabled={isGenerating}
              className="w-full btn-primary py-6 text-lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Generating Portfolio...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Generate AI Portfolio
                </>
              )}
            </Button>
          </div>

          {/* Preview */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Portfolio Preview</CardTitle>
                {generatedPortfolio && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={copyToClipboard}
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied ? 'Copied!' : 'Copy JSON'}
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                {generatedPortfolio ? (
                  <div className="bg-card rounded-xl overflow-hidden max-h-[600px] overflow-y-auto">
                    {/* Hero Section */}
                    <div className="p-8 gradient-bg text-center">
                      <h2 className="font-display text-3xl font-bold text-primary-foreground mb-2">
                        {generatedPortfolio.headline || personalInfo.name}
                      </h2>
                      <p className="text-primary-foreground/80">
                        {personalInfo.title || 'Developer'}
                      </p>
                    </div>
                    
                    {/* Bio */}
                    <div className="p-6 border-b border-border">
                      <h3 className="font-semibold mb-2">About</h3>
                      <p className="text-muted-foreground text-sm">
                        {generatedPortfolio.bio || personalInfo.bio}
                      </p>
                    </div>

                    {/* Skills */}
                    {generatedPortfolio.skills && (
                      <div className="p-6 border-b border-border">
                        <h3 className="font-semibold mb-3">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {(Array.isArray(generatedPortfolio.skills) 
                            ? generatedPortfolio.skills 
                            : generatedPortfolio.skills.split(',')
                          ).map((skill: string, i: number) => (
                            <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                              {skill.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Projects */}
                    {generatedPortfolio.projects?.length > 0 && (
                      <div className="p-6">
                        <h3 className="font-semibold mb-4">Projects</h3>
                        <div className="space-y-4">
                          {generatedPortfolio.projects.map((proj: any, i: number) => (
                            <div key={i} className="p-4 bg-secondary/50 rounded-xl">
                              <h4 className="font-medium mb-1">{proj.title || proj.name}</h4>
                              <p className="text-muted-foreground text-xs mb-3">
                                {proj.description}
                              </p>
                              <div className="flex items-center gap-3">
                                <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
                                  <Globe className="h-3 w-3" />
                                  Live
                                </Button>
                                <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
                                  <Github className="h-3 w-3" />
                                  Code
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-[400px] flex flex-col items-center justify-center text-muted-foreground">
                    <Briefcase className="h-16 w-16 mb-4 opacity-20" />
                    <p>Fill in your details and click generate</p>
                    <p className="text-sm">to see your AI-powered portfolio</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
