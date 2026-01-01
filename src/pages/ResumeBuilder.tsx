import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  FileText, 
  Sparkles, 
  Download, 
  Loader2, 
  User, 
  Briefcase, 
  GraduationCap, 
  Code,
  Plus,
  Trash2
} from 'lucide-react';

interface Experience {
  company: string;
  title: string;
  duration: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  year: string;
}

export default function ResumeBuilder() {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResume, setGeneratedResume] = useState<any>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    summary: '',
    skills: '',
  });
  
  const [experiences, setExperiences] = useState<Experience[]>([
    { company: '', title: '', duration: '', description: '' }
  ]);
  
  const [education, setEducation] = useState<Education[]>([
    { institution: '', degree: '', year: '' }
  ]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addExperience = () => {
    setExperiences(prev => [...prev, { company: '', title: '', duration: '', description: '' }]);
  };

  const updateExperience = (index: number, field: keyof Experience, value: string) => {
    setExperiences(prev => prev.map((exp, i) => 
      i === index ? { ...exp, [field]: value } : exp
    ));
  };

  const removeExperience = (index: number) => {
    if (experiences.length > 1) {
      setExperiences(prev => prev.filter((_, i) => i !== index));
    }
  };

  const addEducation = () => {
    setEducation(prev => [...prev, { institution: '', degree: '', year: '' }]);
  };

  const updateEducation = (index: number, field: keyof Education, value: string) => {
    setEducation(prev => prev.map((edu, i) => 
      i === index ? { ...edu, [field]: value } : edu
    ));
  };

  const removeEducation = (index: number) => {
    if (education.length > 1) {
      setEducation(prev => prev.filter((_, i) => i !== index));
    }
  };

  const generateResume = async () => {
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in at least your name and email.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-career', {
        body: {
          type: 'resume',
          data: {
            personalInfo: formData,
            experiences: experiences.filter(e => e.company || e.title),
            education: education.filter(e => e.institution || e.degree),
          }
        }
      });

      if (error) throw error;

      setGeneratedResume(data.data);
      toast({
        title: "Resume Generated!",
        description: "Your AI-powered resume is ready.",
      });
    } catch (error: any) {
      console.error('Error generating resume:', error);
      toast({
        title: "Generation Failed",
        description: error.message || "Failed to generate resume. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold">AI Resume Builder</h1>
              <p className="text-muted-foreground">Create ATS-optimized resumes in minutes</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="space-y-6">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal" className="gap-1">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Personal</span>
                </TabsTrigger>
                <TabsTrigger value="experience" className="gap-1">
                  <Briefcase className="h-4 w-4" />
                  <span className="hidden sm:inline">Experience</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="gap-1">
                  <GraduationCap className="h-4 w-4" />
                  <span className="hidden sm:inline">Education</span>
                </TabsTrigger>
                <TabsTrigger value="skills" className="gap-1">
                  <Code className="h-4 w-4" />
                  <span className="hidden sm:inline">Skills</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4 mt-4">
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
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="input-field"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Email *</Label>
                        <Input 
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Phone</Label>
                        <Input 
                          placeholder="+1 234 567 8900"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="input-field"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Location</Label>
                        <Input 
                          placeholder="San Francisco, CA"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>LinkedIn URL</Label>
                      <Input 
                        placeholder="linkedin.com/in/johndoe"
                        value={formData.linkedin}
                        onChange={(e) => handleInputChange('linkedin', e.target.value)}
                        className="input-field"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Professional Summary</Label>
                      <Textarea 
                        placeholder="Brief description of your professional background and career goals..."
                        value={formData.summary}
                        onChange={(e) => handleInputChange('summary', e.target.value)}
                        className="input-field min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="space-y-4 mt-4">
                {experiences.map((exp, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-lg">Experience {index + 1}</CardTitle>
                      {experiences.length > 1 && (
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeExperience(index)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Company</Label>
                          <Input 
                            placeholder="Google"
                            value={exp.company}
                            onChange={(e) => updateExperience(index, 'company', e.target.value)}
                            className="input-field"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Job Title</Label>
                          <Input 
                            placeholder="Senior Software Engineer"
                            value={exp.title}
                            onChange={(e) => updateExperience(index, 'title', e.target.value)}
                            className="input-field"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Duration</Label>
                        <Input 
                          placeholder="Jan 2020 - Present"
                          value={exp.duration}
                          onChange={(e) => updateExperience(index, 'duration', e.target.value)}
                          className="input-field"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Description & Achievements</Label>
                        <Textarea 
                          placeholder="Describe your responsibilities and key achievements..."
                          value={exp.description}
                          onChange={(e) => updateExperience(index, 'description', e.target.value)}
                          className="input-field min-h-[100px]"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button 
                  variant="outline" 
                  onClick={addExperience}
                  className="w-full rounded-xl"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Experience
                </Button>
              </TabsContent>

              <TabsContent value="education" className="space-y-4 mt-4">
                {education.map((edu, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-lg">Education {index + 1}</CardTitle>
                      {education.length > 1 && (
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeEducation(index)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Institution</Label>
                        <Input 
                          placeholder="Stanford University"
                          value={edu.institution}
                          onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                          className="input-field"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Degree</Label>
                          <Input 
                            placeholder="B.S. Computer Science"
                            value={edu.degree}
                            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                            className="input-field"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Year</Label>
                          <Input 
                            placeholder="2020"
                            value={edu.year}
                            onChange={(e) => updateEducation(index, 'year', e.target.value)}
                            className="input-field"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                <Button 
                  variant="outline" 
                  onClick={addEducation}
                  className="w-full rounded-xl"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Education
                </Button>
              </TabsContent>

              <TabsContent value="skills" className="mt-4">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Skills & Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label>Skills (comma separated)</Label>
                      <Textarea 
                        placeholder="JavaScript, React, Node.js, Python, AWS, Docker, Kubernetes, PostgreSQL, MongoDB..."
                        value={formData.skills}
                        onChange={(e) => handleInputChange('skills', e.target.value)}
                        className="input-field min-h-[150px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Button 
              onClick={generateResume}
              disabled={isGenerating}
              className="w-full btn-primary py-6 text-lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Generating Resume...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Generate AI Resume
                </>
              )}
            </Button>
          </div>

          {/* Preview */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Resume Preview</CardTitle>
                {generatedResume && (
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export PDF
                  </Button>
                )}
              </CardHeader>
              <CardContent>
                {generatedResume ? (
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-sm space-y-4 max-h-[600px] overflow-y-auto">
                    {/* Personal Info */}
                    <div className="text-center border-b border-border pb-4">
                      <h2 className="font-display text-2xl font-bold text-foreground">
                        {generatedResume.personalInfo?.name || formData.name}
                      </h2>
                      <p className="text-muted-foreground">
                        {generatedResume.personalInfo?.email || formData.email}
                        {formData.phone && ` • ${formData.phone}`}
                        {formData.location && ` • ${formData.location}`}
                      </p>
                    </div>

                    {/* Summary */}
                    {generatedResume.summary && (
                      <div>
                        <h3 className="font-semibold text-primary mb-2">PROFESSIONAL SUMMARY</h3>
                        <p className="text-muted-foreground">{generatedResume.summary}</p>
                      </div>
                    )}

                    {/* Experience */}
                    {generatedResume.experience?.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-primary mb-2">EXPERIENCE</h3>
                        {generatedResume.experience.map((exp: any, i: number) => (
                          <div key={i} className="mb-3">
                            <div className="flex justify-between">
                              <span className="font-medium">{exp.title}</span>
                              <span className="text-muted-foreground text-xs">{exp.duration}</span>
                            </div>
                            <p className="text-muted-foreground text-xs">{exp.company}</p>
                            {exp.achievements?.map((a: string, j: number) => (
                              <p key={j} className="text-xs mt-1">• {a}</p>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skills */}
                    {generatedResume.skills && (
                      <div>
                        <h3 className="font-semibold text-primary mb-2">SKILLS</h3>
                        <p className="text-muted-foreground">
                          {Array.isArray(generatedResume.skills) 
                            ? generatedResume.skills.join(' • ') 
                            : generatedResume.skills}
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="h-[400px] flex flex-col items-center justify-center text-muted-foreground">
                    <FileText className="h-16 w-16 mb-4 opacity-20" />
                    <p>Fill in your details and click generate</p>
                    <p className="text-sm">to see your AI-powered resume</p>
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
