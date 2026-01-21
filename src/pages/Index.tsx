import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { showComingSoon } from "@/utils/toast";
import { Navigation } from "@/components/Navigation";
import { ParticleBackground } from "@/components/ParticleBackground";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SkillBar } from "@/components/SkillBar";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code2,
  Briefcase,
  Award,
  Zap,
  BookOpen,
  Calendar,
  ArrowRight,
  GraduationCap,
  Terminal,
  Cpu,
  Database,
  Cloud,
  Layers
} from "lucide-react";

const Index = () => {
  return ( 
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-glow" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Terminal-like intro */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 text-sm font-mono text-muted-foreground"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Available for opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
              >
                <span className="text-gradient-animated">Harcharanpreet Singh</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
              >
                Software Engineer — <span className="text-primary">Backend</span> • <span className="text-accent">AI Integrations</span> • <span className="text-gradient-cyan">Full-Stack</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
              >
                I build reliable, scalable engineering solutions and thrive in fast-moving teams where ownership matters.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-white glow-sm hover:glow transition-all px-8"
                  onClick={() => window.open('https://drive.google.com/file/d/1TkH09NauHMZHKRfaUsKYX-m-aN1ZrTai/view?usp=sharing', '_blank', 'noopener,noreferrer')}
                >
                  View Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-border/50 hover:bg-card/50 hover:border-primary/50 transition-all"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See My Work
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex gap-4 justify-center pt-8"
              >
                {[
                  { icon: Github, href: 'https://github.com/singhHarcharan/', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/harcharanpreet-singh-9a245222a/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:harcharansingh198400@gmail.com', label: 'Email' },
                  { icon: Code2, href: 'https://leetcode.com/u/harcharan_singh_/', label: 'LeetCode' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:glow-sm transition-all"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding relative">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About Me</h2>
            </div>
            
            <Card className="p-6 md:p-8 bg-card/50 border-border/50 hover-lift">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Software engineer with experience working in <span className="text-foreground font-medium">early-stage startups</span> and <span className="text-foreground font-medium">enterprise environments</span>. Strong focus on backend and full-stack development, automations, and AI integrations. Comfortable owning features end-to-end and working in fast-moving teams where clarity is built through execution.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding relative bg-card/30">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Experience</h2>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 space-y-12">
              <div className="timeline-line" />

              {/* Amdocs */}
              <AnimatedSection delay={0.1} className="relative">
                <div className="timeline-dot top-2" />
                <Card className="p-6 md:p-8 bg-card/50 border-border/50 hover-lift hover:border-primary/30 transition-all">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Software Development Engineer</h3>
                        <p className="text-base md:text-lg text-primary">Amdocs</p>
                      </div>
                      <Badge variant="secondary" className="w-fit">2024 – Present</Badge>
                    </div>
                    
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5 text-lg">›</span>
                        <span>Independently developed <strong className="text-foreground">TechMate AI</strong>, an internal AI-powered automation system for Microsoft Teams using LangChain, ChromaDB (RAG) & AutoX LLM, reducing repetitive queries & cutting IT response time by 30%.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5 text-lg">›</span>
                        <span>Integrated Power Automate Flows with Teams to enable real-time query resolution, reducing manual expert intervention by 40%.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5 text-lg">›</span>
                        <span>Built SharePointRAGLoader to process enterprise documents, enabling contextual AI responses.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5 text-lg">›</span>
                        <span>Maintained backend services for Telstra using Java and Spring Boot.</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {['Python', 'LangChain', 'RAG', 'ChromaDB', 'Java', 'REST APIs', 'Power Automate'].map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-0">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              {/* Upaav */}
              <AnimatedSection delay={0.2} className="relative">
                <div className="timeline-dot top-2" />
                <Card className="p-6 md:p-8 bg-card/50 border-border/50 hover-lift hover:border-primary/30 transition-all">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Founding Engineer</h3>
                        <p className="text-base md:text-lg text-primary">Upaav • Worked closely with Co-Founder</p>
                      </div>
                      <Badge variant="secondary" className="w-fit">2024</Badge>
                    </div>
                    
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5 text-lg">›</span>
                        <span>Independently developed an <strong className="text-foreground">Atlassian Jira plugin</strong> end-to-end, reducing operational overhead costs by 20–30%.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5 text-lg">›</span>
                        <span>Designed and built UI with React.js for seamless task visualization and time logging workflows.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5 text-lg">›</span>
                        <span>Developed backend using Node.js and Atlassian Forge storage, achieving 100% secure session handling.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5 text-lg">›</span>
                        <span>Delivered MVP in under 10 weeks, enabling stakeholder demos and early onboarding.</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {['React.js', 'Node.js', 'Atlassian Forge', 'Jira API', 'REST APIs'].map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent border-0">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>

              {/* XcitEducation */}
              <AnimatedSection delay={0.3} className="relative">
                <div className="timeline-dot top-2" />
                <Card className="p-6 md:p-8 bg-card/50 border-border/50 hover-lift hover:border-primary/30 transition-all">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Subject Matter Expert</h3>
                        <p className="text-base md:text-lg text-primary">XcitEducation Worldwide</p>
                      </div>
                      <Badge variant="secondary" className="w-fit">Aug – Sept 2022</Badge>
                    </div>
                    
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5 text-lg">›</span>
                        <span>Mentored <strong className="text-foreground">60+ B.Tech students</strong> in Data Structures & Algorithms with advanced C++ programming guidance.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary mt-1.5 text-lg">›</span>
                        <span>Resolved complex queries for <strong className="text-foreground">80+ students</strong> with strong communication and problem-solving skills.</span>
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {['C++', 'Data Structures', 'Algorithms', 'Mentoring'].map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-muted text-muted-foreground border-0">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding relative">
        <div className="container-custom">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'PayPocket',
                  description: 'Digital Wallet — Full-stack wallet application with JWT-based authentication, atomic money transfers, and real-time balance updates.',
                  tech: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'JWT'],
                  github: 'https://github.com/singhHarcharan/PayPocket',
                  gradient: 'from-blue-500/20 to-cyan-500/20',
                },
                {
                  title: 'Movie Arena',
                  description: 'A modern streaming platform built with React, Redux & Firebase. Browse, search, and discover movies with an intuitive interface.',
                  tech: ['React', 'Redux', 'Firebase', 'Stripe'],
                  github: 'https://github.com/singhHarcharan/Movie-Arena',
                  gradient: 'from-purple-500/20 to-pink-500/20',
                },
                {
                  title: 'TripCraft AI',
                  description: 'AI-powered travel planner using LLMs and RAG. Get personalized trip recommendations and smart itinerary generation.',
                  tech: ['LLM', 'RAG', 'Python', 'React', 'OpenAI'],
                  github: 'https://github.com/singhHarcharan/TripCraft-AI.git',
                  gradient: 'from-green-500/20 to-emerald-500/20',
                },
                {
                  title: 'Rain Vine',
                  description: 'A sleek weather app built with React. Get real-time weather updates with dynamic backgrounds that change with temperature.',
                  tech: ['React', 'OpenWeatherMap API'],
                  github: 'https://github.com/singhHarcharan/Rain-Vine',
                  gradient: 'from-orange-500/20 to-yellow-500/20',
                },
              ].map((project, index) => (
                <AnimatedSection key={project.title} delay={index * 0.1}>
                  <Card className={`group p-6 bg-gradient-to-br ${project.gradient} border-border/50 hover-lift hover:border-primary/30 transition-all h-full`}>
                    <div className="space-y-4 h-full flex flex-col">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold tracking-tight group-hover:text-gradient transition-all">
                          {project.title}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      
                      <p className="text-muted-foreground flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                          <Badge key={tech} variant="secondary" className="bg-background/50 text-foreground/80 border border-border/50">{tech}</Badge>
                        ))}
                      </div>

                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-2 w-fit mt-auto border-border/50 hover:border-primary/50 hover:bg-primary/10" 
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding relative bg-card/30">
        <div className="container-custom">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 rounded-lg bg-primary/10">
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Skills & Technologies</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Terminal,
                  title: 'Languages',
                  skills: ['C++', 'Java', 'JavaScript', 'Python', 'TypeScript'],
                },
                {
                  icon: Cpu,
                  title: 'Libraries & Frameworks',
                  skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'LangChain', 'CrewAI'],
                },
                {
                  icon: Database,
                  title: 'Databases',
                  skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'ChromaDB', 'Neon', 'Aiven'],
                },
                {
                  icon: Cloud,
                  title: 'Cloud & DevOps',
                  skills: ['Docker', 'Kubernetes', 'AWS', 'Cloudflare Workers'],
                },
                {
                  icon: Layers,
                  title: 'Tools & APIs',
                  skills: ['Git', 'REST APIs', 'Prisma ORM', 'JWT', 'Jira', 'Postman'],
                },
                {
                  icon: GraduationCap,
                  title: 'Core CS',
                  skills: ['DSA', 'System Design', 'OOP', 'DBMS', 'OS', 'CN'],
                },
              ].map((category, index) => (
                <AnimatedSection key={category.title} delay={index * 0.1}>
                  <Card className="p-6 bg-card/50 border-border/50 hover-lift hover:border-primary/30 transition-all h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <category.icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="bg-muted/50 text-foreground/80 border border-border/30 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            {/* Skill Bars */}
            <AnimatedSection delay={0.3} className="mt-12">
              <Card className="p-6 md:p-8 bg-card/50 border-border/50">
                <h3 className="text-lg font-semibold mb-6">Proficiency Levels</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <SkillBar name="Backend Development" level={90} delay={100} />
                  <SkillBar name="React & Frontend" level={85} delay={200} />
                  <SkillBar name="AI & LLM Integration" level={80} delay={300} />
                  <SkillBar name="System Design" level={75} delay={400} />
                  <SkillBar name="DevOps & Cloud" level={70} delay={500} />
                  <SkillBar name="Data Structures & Algorithms" level={92} delay={600} />
                </div>
              </Card>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="section-padding relative">
        <div className="container-custom">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Tech Blogs</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  category: 'AI & LLMs',
                  title: 'Building Production-Ready RAG Systems',
                  description: 'A deep dive into implementing retrieval-augmented generation systems at scale, covering vector databases and embedding strategies.',
                  readTime: '5 min read',
                },
                {
                  category: 'Backend',
                  title: 'Microservices Architecture Best Practices',
                  description: 'Lessons learned from building and scaling microservices in production, including service communication and monitoring.',
                  readTime: '8 min read',
                },
                {
                  category: 'DevOps',
                  title: 'Docker & Kubernetes in Practice',
                  description: 'A practical guide to containerization and orchestration, from local development to production deployment.',
                  readTime: '6 min read',
                },
                {
                  category: 'Full-Stack',
                  title: 'React Performance Optimization',
                  description: 'Advanced techniques for optimizing React applications, including memoization, lazy loading, and code splitting.',
                  readTime: '7 min read',
                },
              ].map((post, index) => (
                <AnimatedSection key={post.title} delay={index * 0.1}>
                  <Card 
                    className="group p-6 bg-card/50 border-border/50 hover-lift hover:border-primary/30 transition-all cursor-pointer h-full"
                    onClick={() => showComingSoon("Blog post coming soon!")}
                  >
                    <div className="space-y-4 h-full flex flex-col">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-0">{post.category}</Badge>
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                      </div>
                      
                      <h3 className="text-lg font-semibold tracking-tight group-hover:text-gradient transition-all">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm flex-grow">
                        {post.description}
                      </p>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding relative bg-card/30">
        <div className="container-custom">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Achievements</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <AnimatedSection delay={0.1}>
                <Card className="p-6 md:p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-border/50 hover-lift">
                  <div className="space-y-2">
                    <h3 className="text-4xl md:text-5xl font-bold text-gradient">1100+</h3>
                    <p className="text-lg text-foreground">LeetCode Problems Solved</p>
                    <p className="text-sm text-muted-foreground">Max Rating: 1705+ • Streak: 450+ days</p>
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card className="p-6 md:p-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-border/50 hover-lift">
                  <div className="space-y-2">
                    <h3 className="text-4xl md:text-5xl font-bold text-gradient">Rank 1855</h3>
                    <p className="text-lg text-foreground">Global Rank</p>
                    <p className="text-sm text-muted-foreground">LeetCode Biweekly 151</p>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container-custom relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Open to full-time roles — immediate joining available.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { icon: Mail, label: 'Email', href: 'mailto:harcharansingh198400@gmail.com' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/harcharanpreet-singh-9a245222a/' },
                { icon: Github, label: 'GitHub', href: 'https://github.com/singhHarcharan/' },
                { icon: Code2, label: 'LeetCode', href: 'https://leetcode.com/u/harcharan_singh_/' },
              ].map(({ icon: Icon, label, href }) => (
                <Button 
                  key={label}
                  variant="outline" 
                  size="lg" 
                  className="gap-2 border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:glow-sm transition-all" 
                  onClick={() => window.open(href, label === 'Email' ? '_self' : '_blank')}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 relative z-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Harcharanpreet Singh. Built with precision and care.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Designed with</span>
              <span className="text-red-500">❤</span>
              <span>using React & Tailwind</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
