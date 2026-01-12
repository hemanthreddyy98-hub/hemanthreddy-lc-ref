import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import ResumeBuilder from "./pages/ResumeBuilder";
import PortfolioGenerator from "./pages/PortfolioGenerator";
import InterviewTranslator from "./pages/InterviewTranslator";
import VideoManager from "./pages/VideoManager";
import ProblemManager from "./pages/ProblemManager";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/resume" element={<ResumeBuilder />} />
              <Route path="/portfolio" element={<PortfolioGenerator />} />
              <Route path="/interview" element={<InterviewTranslator />} />
              <Route path="/video-manager" element={<VideoManager />} />
              <Route path="/problem-manager" element={<ProblemManager />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
