import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { showComingSoon } from "@/utils/toast";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink,
  Code2,
  Briefcase,
  Award,
  Zap,
  BookOpen,
  Calendar,
  ArrowRight
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
              <button onClick={() => scrollToSection('blogs')} className="text-muted-foreground hover:text-foreground transition-colors">
                Blogs
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gradient">
                  Harcharanpreet Singh
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-foreground/80 tracking-tight">
                Software Engineer — Backend • AI Integrations • Full-Stack Execution
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I build reliable, scalable engineering solutions and thrive in fast-moving teams where ownership matters.
            </p>

            <div className="flex gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all"
                onClick={() => window.open('https://drive.google.com/file/d/1TkH09NauHMZHKRfaUsKYX-m-aN1ZrTai/view?usp=sharing', '_blank', 'noopener,noreferrer')}
              >
                View Resume
              </Button>
              {/* <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-muted/50"
                onClick={() => scrollToSection('projects')}
              >
                See My Work
              </Button> */}
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
                Software engineer with experience working in early-stage startups and enterprise environments. Strong focus on backend and full-stack development, automations, and AI integrations. Comfortable owning features end-to-end and working in fast-moving teams where clarity is built through execution.
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
              <Card className="p-8 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow bg-card">
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
                      <span>Independently developed <strong className="text-foreground">TechMate AI</strong>, an internal AI-powered automation system for Microsoft Teams using LangChain, ChromaDB (RAG) & AutoX LLM, reducing repetitive queries & cutting IT response time by 30%.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Integrated Power Automate Flows with Teams to enable real-time query resolution, reducing manual expert intervention by 40% and improving query turnaround time.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Built SharePointRAGLoader to process enterprise documents, enabling contextual AI responses and decreasing manual document lookup time by 50%.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Maintained backend services for Telstra, a major telecom client, using Java and Spring Boot.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Modified and enhanced existing RESTful APIs, contributing to backend service improvements & system efficiency.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Collaborated with cross-functional teams to integrate backend solutions with frontend & third-party services.</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">Python</Badge>
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
              <Card className="p-8 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow bg-card">
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
                      <span>Independently developed an <strong className="text-foreground">Atlassian Jira plugin</strong> end-to-end, reducing operational overhead costs by 20–30%</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Designed and built UI with React.js for seamless task visualization and time logging workflows</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Developed backend using Node.js and Atlassian Forge storage, achieving 100% secure session handling by leveraging native site authentication without separate auth layer</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Implemented key features including work logging in hours/minutes, a dynamic calendar interface, and real-time ticket displays based on user activity data pulled from Jira</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Delivered MVP in under 10 weeks, enabling stakeholder demos, early onboarding, & shaping product roadmap</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">React.js</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Atlassian Forge</Badge>
                    <Badge variant="secondary">Jira API</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
                    <Badge variant="secondary">UI/UX Design</Badge>
                  </div>
                </div>
              </Card>

              {/* XcitEducation */}
              <Card className="p-8 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow bg-card">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">Subject Matter Expert</h3>
                      <p className="text-lg text-muted-foreground">XcitEducation Worldwide</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Aug 2022 – Sept 2022</span>
                  </div>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Mentored <strong className="text-foreground">60+ B.Tech students</strong> in Data Structures & Algorithms, providing advanced C++ programming guidance</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent mt-1.5">•</span>
                      <span>Resolved complex queries for <strong className="text-foreground">80+ students</strong>, leveraging strong communication and problem-solving skills to drive learning outcomes</span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">Data Structures</Badge>
                    <Badge variant="secondary">Algorithms</Badge>
                    <Badge variant="secondary">Mentoring</Badge>
                    <Badge variant="secondary">Technical Training</Badge>
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
              <Card className="p-6 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group bg-card">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold tracking-tight group-hover:text-gradient transition-all">
                      PayPocket
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground">
                    Digital Wallet — Full-stack wallet application with JWT-based authentication, atomic money transfers, and real-time balance updates.
                  </p>
                  {/* <p className="text-muted-foreground">
                    Wallet App (Paytm Clone) — Secure wallet app with authentication, money transfer, and MongoDB transaction guarantees.
                  </p> */}

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Express</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">JWT</Badge>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://github.com/singhHarcharan/PayPocket', '_blank')}>
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    {/* <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('#', '_blank')}>
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </Button> */}
                  </div>
                </div>
              </Card>

              {/* Movie Arena */}
              <Card className="p-6 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group bg-card">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold tracking-tight group-hover:text-gradient transition-all">
                      Movie Arena
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground">
                      A modern streaming platform built with React, Redux & Firebase. Browse, search, and discover movies with an intuitive interface. Features user authentication, responsive design, and real-time updates. Deployed on Firebase.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Redux</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Stripe</Badge>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://github.com/singhHarcharan/Movie-Arena', '_blank')}>
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    {/* <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('#', '_blank')}>
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </Button> */}
                  </div>
                </div>
              </Card>

              {/* TripCraft AI */}
              <Card className="p-6 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group bg-card">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold tracking-tight group-hover:text-gradient transition-all">
                      TripCraft AI
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground">
                    AI-powered travel planner using LLMs and RAG. Get personalized trip recommendations, weather-optimized scheduling, and smart itinerary generation.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">LLM</Badge>
                    <Badge variant="secondary">RAG</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">OpenAI</Badge>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://github.com/singhHarcharan/TripCraft-AI.git', '_blank')}>
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Rain Vine */}
              <Card className="p-6 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group bg-card">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold tracking-tight group-hover:text-gradient transition-all">
                      Rain Vine
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  
                  <p className="text-muted-foreground">
                      A sleek weather app built with React. Get real-time weather updates for any city with a clean, responsive interface. Features dynamic backgrounds that change with the temperature. Built with React and OpenWeatherMap API.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">OpenWeatherMap API</Badge>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('https://github.com/singhHarcharan/Rain-Vine', '_blank')}>
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    {/* <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open('#', '_blank')}>
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </Button> */}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="py-24 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <BookOpen className="w-5 h-5 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight">Tech Blogs</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Blog Post 1 */}
              <Card 
                className="p-6 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group bg-card cursor-pointer"
                onClick={() => showComingSoon("Blog post coming soon!")}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="mb-2">AI & LLMs</Badge>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-gradient transition-all">
                    Building Production-Ready RAG Systems
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-3">
                    A deep dive into implementing retrieval-augmented generation systems at scale, covering vector databases, embedding strategies, and real-world challenges.
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">5 min read</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Card>

              {/* Blog Post 2 */}
              <Card 
                className="p-6 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group bg-card cursor-pointer"
                onClick={() => showComingSoon("Blog post coming soon!")}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="mb-2">Backend</Badge>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-gradient transition-all">
                    Microservices Architecture Best Practices
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-3">
                    Lessons learned from building and scaling microservices in production, including service communication, data consistency, and monitoring strategies.
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">8 min read</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Card>

              {/* Blog Post 3 */}
              <Card 
                className="p-6 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group bg-card cursor-pointer"
                onClick={() => showComingSoon("Blog post coming soon!")}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="mb-2">DevOps</Badge>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-gradient transition-all">
                    Docker & Kubernetes in Practice
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-3">
                    A practical guide to containerization and orchestration, from local development to production deployment with real-world examples.
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">6 min read</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Card>

              {/* Blog Post 4 */}
              <Card 
                className="p-6 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow group bg-card cursor-pointer"
                onClick={() => showComingSoon("Blog post coming soon!")}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="mb-2">Full-Stack</Badge>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-gradient transition-all">
                    React Performance Optimization
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-3">
                    Advanced techniques for optimizing React applications, including memoization, lazy loading, code splitting, and rendering optimization strategies.
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">7 min read</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
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
                  <Badge>TypeScript</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Libraries & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>React.js</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Prisma ORM</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Hono</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>JWT</Badge>
                  <Badge>ZOD</Badge>
                  <Badge>Langchain</Badge>
                  <Badge>CrewAI</Badge>
                  <Badge>REST APIs</Badge>
                  <Badge>Mongoose</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>MongoDB</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Firebase</Badge>
                  <Badge>Aiven</Badge>
                  <Badge>Neon</Badge>
                  <Badge>ChromaDB</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Core CS</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Data Structures & Algorithms</Badge>
                  <Badge>Object-Oriented Programming</Badge>
                  <Badge>Database Management</Badge>
                  <Badge>System Design</Badge>
                  <Badge>Computer Networks</Badge>
                  <Badge>Operating Systems</Badge>
                  <Badge>Distributed Systems</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Cloud / DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Docker</Badge>
                  <Badge>Kubernetes</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Cloudflare Workers</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Core CS</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Data Structures</Badge>
                  <Badge>Algorithms</Badge>
                  <Badge>Operating Systems</Badge>
                  <Badge>Database Management</Badge>
                  <Badge>Computer Networks</Badge>
                  <Badge>Object-Oriented Programming</Badge>
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
              <Card className="p-6 border-border bg-gradient-soft/50 hover:shadow-glow transition-all">
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-gradient">1100+</h3>
                  <p className="text-muted-foreground">LeetCode Problems Solved</p>
                  <p className="text-sm text-muted-foreground">Max Rating: 1705+ • Streak: 450+ days</p>
                </div>
              </Card>

              <Card className="p-6 border-border bg-gradient-soft/50 hover:shadow-glow transition-all">
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
              <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('mailto:harcharansingh198400@gmail.com')}>
                <Mail className="w-5 h-5" />
                Email
              </Button>
              {/* <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('tel:+916283343351')}>
                <Phone className="w-5 h-5" />
                Phone
              </Button> */}
              <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('https://www.linkedin.com/in/harcharanpreet-singh-9a245222a/', '_blank')}>
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('https://github.com/singhHarcharan/', '_blank')}>
                <Github className="w-5 h-5" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('https://leetcode.com/u/harcharan_singh_/', '_blank')}>
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
