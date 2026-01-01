import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  MessageSquare, 
  Sparkles, 
  Loader2,
  Code,
  Users,
  Layers,
  ChevronRight,
  Target,
  Lightbulb,
  Zap
} from 'lucide-react';

interface InterviewQuestion {
  question: string;
  category: string;
  difficulty: string;
  starAnswer: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
}

export default function InterviewTranslator() {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<InterviewQuestion[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const [projectInfo, setProjectInfo] = useState({
    name: '',
    description: '',
    technologies: '',
    role: '',
    challenges: '',
    impact: '',
    teamSize: '',
    duration: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setProjectInfo(prev => ({ ...prev, [field]: value }));
  };

  const generateQuestions = async () => {
    if (!projectInfo.name || !projectInfo.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least the project name and description.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-career', {
        body: {
          type: 'interview-questions',
          data: projectInfo
        }
      });

      if (error) throw error;

      const questions = data.data?.questions || data.data || [];
      setGeneratedQuestions(Array.isArray(questions) ? questions : []);
      
      toast({
        title: "Questions Generated!",
        description: `Generated ${questions.length || 30}+ interview questions from your project.`,
      });
    } catch (error: any) {
      console.error('Error generating questions:', error);
      toast({
        title: "Generation Failed",
        description: error.message || "Failed to generate questions. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const categories = ['all', 'technical', 'behavioral', 'system-design'];
  const filteredQuestions = selectedCategory === 'all' 
    ? generatedQuestions 
    : generatedQuestions.filter(q => q.category?.toLowerCase() === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category?.toLowerCase()) {
      case 'technical': return Code;
      case 'behavioral': return Users;
      case 'system-design': return Layers;
      default: return MessageSquare;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case 'easy': return 'bg-success/20 text-success';
      case 'medium': return 'bg-warning/20 text-warning';
      case 'hard': return 'bg-destructive/20 text-destructive';
      default: return 'bg-primary/20 text-primary';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold">Project-to-Interview Translator</h1>
              <p className="text-muted-foreground">Turn your projects into 30+ interview questions with STAR answers</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Input Form - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Project Name *</Label>
                  <Input 
                    placeholder="E-commerce Platform"
                    value={projectInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="input-field"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Project Description *</Label>
                  <Textarea 
                    placeholder="Describe your project in detail - what it does, the problem it solves, key features..."
                    value={projectInfo.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="input-field min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Technologies Used</Label>
                  <Input 
                    placeholder="React, Node.js, PostgreSQL, Redis, Docker"
                    value={projectInfo.technologies}
                    onChange={(e) => handleInputChange('technologies', e.target.value)}
                    className="input-field"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Your Role</Label>
                  <Input 
                    placeholder="Lead Backend Developer"
                    value={projectInfo.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    className="input-field"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Team Size</Label>
                    <Input 
                      placeholder="5 engineers"
                      value={projectInfo.teamSize}
                      onChange={(e) => handleInputChange('teamSize', e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Duration</Label>
                    <Input 
                      placeholder="6 months"
                      value={projectInfo.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Challenges Faced</Label>
                  <Textarea 
                    placeholder="Describe technical challenges, bottlenecks, or problems you had to solve..."
                    value={projectInfo.challenges}
                    onChange={(e) => handleInputChange('challenges', e.target.value)}
                    className="input-field min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Impact & Results</Label>
                  <Textarea 
                    placeholder="Metrics, improvements, business impact (e.g., reduced load time by 50%, increased conversion by 25%)"
                    value={projectInfo.impact}
                    onChange={(e) => handleInputChange('impact', e.target.value)}
                    className="input-field min-h-[80px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={generateQuestions}
              disabled={isGenerating}
              className="w-full btn-primary py-6 text-lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Generating Questions...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Generate 30+ Interview Questions
                </>
              )}
            </Button>

            {/* Tips */}
            <Card className="glass-card bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm mb-1">Pro Tip</p>
                    <p className="text-xs text-muted-foreground">
                      The more detail you provide about challenges and impact, the better STAR answers you'll get!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Questions - 3 columns */}
          <div className="lg:col-span-3">
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between flex-wrap gap-4">
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Interview Questions
                  {generatedQuestions.length > 0 && (
                    <Badge variant="secondary">{generatedQuestions.length}</Badge>
                  )}
                </CardTitle>
                
                {generatedQuestions.length > 0 && (
                  <div className="flex items-center gap-2">
                    {categories.map(cat => (
                      <Button
                        key={cat}
                        variant={selectedCategory === cat ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(cat)}
                        className="capitalize rounded-lg text-xs"
                      >
                        {cat}
                      </Button>
                    ))}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                {generatedQuestions.length > 0 ? (
                  <div className="max-h-[700px] overflow-y-auto pr-2 space-y-3">
                    <Accordion type="single" collapsible className="space-y-2">
                      {filteredQuestions.map((q, index) => {
                        const Icon = getCategoryIcon(q.category);
                        return (
                          <AccordionItem 
                            key={index} 
                            value={`item-${index}`}
                            className="border border-border/50 rounded-xl px-4 data-[state=open]:bg-secondary/30"
                          >
                            <AccordionTrigger className="hover:no-underline py-4">
                              <div className="flex items-start gap-3 text-left">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Icon className="h-4 w-4 text-primary" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-sm pr-4">{q.question}</p>
                                  <div className="flex items-center gap-2 mt-2">
                                    <Badge variant="outline" className="text-xs capitalize">
                                      {q.category}
                                    </Badge>
                                    <Badge className={`text-xs capitalize ${getDifficultyColor(q.difficulty)}`}>
                                      {q.difficulty}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4">
                              <div className="ml-11 space-y-3">
                                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                                  STAR Answer Framework
                                </p>
                                <div className="grid gap-3">
                                  {q.starAnswer && (
                                    <>
                                      <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                        <p className="text-xs font-semibold text-blue-500 mb-1">Situation</p>
                                        <p className="text-sm text-muted-foreground">{q.starAnswer.situation}</p>
                                      </div>
                                      <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                                        <p className="text-xs font-semibold text-green-500 mb-1">Task</p>
                                        <p className="text-sm text-muted-foreground">{q.starAnswer.task}</p>
                                      </div>
                                      <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                                        <p className="text-xs font-semibold text-orange-500 mb-1">Action</p>
                                        <p className="text-sm text-muted-foreground">{q.starAnswer.action}</p>
                                      </div>
                                      <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                                        <p className="text-xs font-semibold text-purple-500 mb-1">Result</p>
                                        <p className="text-sm text-muted-foreground">{q.starAnswer.result}</p>
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        );
                      })}
                    </Accordion>
                  </div>
                ) : (
                  <div className="h-[400px] flex flex-col items-center justify-center text-muted-foreground">
                    <MessageSquare className="h-16 w-16 mb-4 opacity-20" />
                    <p>Enter your project details</p>
                    <p className="text-sm">to generate personalized interview questions</p>
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
