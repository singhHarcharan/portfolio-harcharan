import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink,
  Code2,
  Briefcase,
  Award,
  Zap
} from "lucide-react";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#hero" className="text-lg font-semibold tracking-tight hover:text-accent transition-colors">
              HS
            </a>
            <div className="flex gap-6 text-sm">
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                Harcharanpreet Singh
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground tracking-tight">
                Software Engineer — Backend • AI Integrations • Full-Stack Execution
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              I build reliable, scalable engineering solutions and thrive in fast-moving teams where ownership matters.
            </p>

            <div className="flex gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('#', '_blank')}
              >
                View Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-muted"
                onClick={() => scrollToSection('projects')}
              >
                See My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-5 h-5 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight">About</h2>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Software Engineer with experience collaborating directly with a co-founder at an early-stage startup. 
                I bring strong expertise in backend engineering, full-stack development, automations, and AI integrations.
              </p>
              <p className="text-lg leading-relaxed">
                I'm comfortable taking ownership of features end-to-end and excel in environments where execution speed 
                and quality matter. Highly suited for small teams that need fast execution, responsibility, and creative problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 border-t border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="w-5 h-5 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            </div>

            <div className="space-y-12">
              {/* Amdocs */}
              <Card className="p-8 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">Software Development Engineer</h3>
                      <p className="text-lg text-muted-foreground">Amdocs</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">2024 – Present</span>
                  </div>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Developed <strong className="text-foreground">TechMate AI</strong>, an internal AI automation system for Microsoft Teams using LangChain, RAG, AutoX LLM, ChromaDB</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Built SharePoint document loaders for enterprise RAG systems</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Developed & optimized backend services using Java & REST APIs</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Integrated Power Automate workflows with Teams for real-time automation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Collaborated with multiple teams to improve microservice performance</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">LangChain</Badge>
                    <Badge variant="secondary">RAG</Badge>
                    <Badge variant="secondary">ChromaDB</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
                    <Badge variant="secondary">Power Automate</Badge>
                  </div>
                </div>
              </Card>

              {/* Upaav */}
              <Card className="p-8 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">Founding Engineer</h3>
                      <p className="text-lg text-muted-foreground">Upaav • Worked closely with Co-Founder</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">2024</span>
                  </div>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Independently built a complete Atlassian Jira plugin (frontend + backend) from scratch</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Designed UI/UX, built backend logic, and implemented Jira work-logging features</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Utilized Forge storage & Jira authentication for secure, session-based interactions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Delivered product iterations directly with the co-founder</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">React.js</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Atlassian Forge</Badge>
                    <Badge variant="secondary">Jira APIs</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Code2 className="w-5 h-5 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* PayPocket */}
              <Card className="p-6 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold tracking-tight group-hover:text-gradient transition-all">
                      PayPocket
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground">
                    Wallet App (Paytm Clone) — Secure wallet app with authentication, money transfer, and MongoDB transaction guarantees.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">JWT</Badge>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('#', '_blank')}>
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('#', '_blank')}>
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Movie Arena */}
              <Card className="p-6 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold tracking-tight group-hover:text-gradient transition-all">
                      Movie Arena
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground">
                    Netflix-Style App — Complete streaming UI with authentication, browsing, and payments.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Redux</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('#', '_blank')}>
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('#', '_blank')}>
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Rain Vine */}
              <Card className="p-6 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-glow group md:col-span-2">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold tracking-tight group-hover:text-gradient transition-all">
                      Rain Vine
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground">
                    Weather Dashboard — Real-time weather application with a clean, responsive UI.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">OpenWeatherMap API</Badge>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('#', '_blank')}>
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('#', '_blank')}>
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-t border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Code2 className="w-5 h-5 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>C++</Badge>
                  <Badge>Java</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>Python</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Backend & Full-Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>REST APIs</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Mongoose</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>React.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Redux</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">AI / Automation</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>LangChain</Badge>
                  <Badge>RAG</Badge>
                  <Badge>ChromaDB</Badge>
                  <Badge>AutoX LLM</Badge>
                  <Badge>CrewAI</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Cloud / DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Docker</Badge>
                  <Badge>Kubernetes</Badge>
                  <Badge>AWS</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>Jira</Badge>
                  <Badge>VS Code</Badge>
                  <Badge>IntelliJ</Badge>
                  <Badge>Postman</Badge>
                </div>
              </div>

              <div className="space-y-4 md:col-span-2">
                <h3 className="text-lg font-semibold text-foreground">Core CS</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>DSA (C++)</Badge>
                  <Badge>OOP</Badge>
                  <Badge>OS</Badge>
                  <Badge>DBMS</Badge>
                  <Badge>CN</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Award className="w-5 h-5 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight">Achievements</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-border bg-muted/50">
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-gradient">1100+</h3>
                  <p className="text-muted-foreground">LeetCode Problems Solved</p>
                  <p className="text-sm text-muted-foreground">Max Rating: 1705+ • Streak: 450+ days</p>
                </div>
              </Card>

              <Card className="p-6 border-border bg-muted/50">
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-gradient">Rank 1855</h3>
                  <p className="text-muted-foreground">Global Rank</p>
                  <p className="text-sm text-muted-foreground">LeetCode Biweekly 151</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Open to full-time roles — immediate joining available.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('mailto:email@example.com')}>
                <Mail className="w-5 h-5" />
                Email
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('tel:+1234567890')}>
                <Phone className="w-5 h-5" />
                Phone
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('https://linkedin.com/in/username', '_blank')}>
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('https://github.com/username', '_blank')}>
                <Github className="w-5 h-5" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('https://leetcode.com/username', '_blank')}>
                <Code2 className="w-5 h-5" />
                LeetCode
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Harcharanpreet Singh. Built with precision and care.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
