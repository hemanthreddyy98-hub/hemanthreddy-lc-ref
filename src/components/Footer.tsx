import { Github, Linkedin, ExternalLink, Code2, Trophy } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Developer Profile Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Trophy className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-foreground">Developed by Hemanth Reddy</h3>
              <p className="text-sm text-primary font-medium">Created by someone who solved 10,000+ LeetCode problems</p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href="https://github.com/hemanthreddyy98-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/reddyhemanth694"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/reddyhemanth694/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <Code2 className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">LeetCode</span>
            </a>
          </div>

          {/* Contact Message */}
          <p className="mt-6 text-muted-foreground text-sm">
            Any doubts? Feel free to reach out through{' '}
            <a
              href="https://www.linkedin.com/in/reddyhemanth694"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border/50 pt-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-lg">LeetCode Problem Index</span>
            </div>
            <p className="text-muted-foreground text-sm">
              A comprehensive collection of all LeetCode problems organized by topic and sub-topic.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  LeetCode
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hemanthreddyy98-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://neetcode.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  NeetCode
                </a>
              </li>
              <li>
                <a
                  href="https://takeuforward.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  TakeUForward
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Developed with passion by <span className="text-primary font-medium">Hemanth Reddy</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LeetCode Problem Index. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
