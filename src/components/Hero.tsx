import { useTypingEffect } from '@/hooks/useTypingEffect';
import { personalInfo } from '@/data/resume';
import { ComponentProps } from 'react';

// Floating tech icons for visual appeal
const FloatingIcons = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Tech icons floating around */}
    <div className="absolute top-20 left-[10%] animate-float opacity-20 text-4xl" style={{ animationDelay: '0s' }}>
      ☕
    </div>
    <div className="absolute top-40 right-[15%] animate-float opacity-20 text-3xl" style={{ animationDelay: '1s' }}>
      ⚛️
    </div>
    <div className="absolute bottom-40 left-[20%] animate-float opacity-20 text-3xl" style={{ animationDelay: '2s' }}>
      🗄️
    </div>
    <div className="absolute bottom-32 right-[25%] animate-float opacity-20 text-3xl" style={{ animationDelay: '0.5s' }}>
      🔗
    </div>
    <div className="absolute top-32 left-[25%] animate-float opacity-10 text-5xl font-mono text-[var(--accent-primary)]" style={{ animationDelay: '1.5s' }}>
      {"{ }"}
    </div>
    <div className="absolute bottom-20 right-[15%] animate-float opacity-20 text-4xl" style={{ animationDelay: '1.2s' }}>
      🚀
    </div>
  </div>
);

interface IconProps extends ComponentProps<'svg'> {
  className?: string;
}

const GithubIcon = ({ className = 'w-5 h-5', ...props }: IconProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = ({ className = 'w-5 h-5', ...props }: IconProps) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const MailIcon = ({ className = 'w-5 h-5', ...props }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const DownloadIcon = ({ className = 'w-5 h-5', ...props }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ArrowDownIcon = ({ className = 'w-6 h-6', ...props }: IconProps) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

export default function Hero() {
  const { displayText } = useTypingEffect('Software Developer', 100, 50, 2000);

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 overflow-hidden"
    >
      <FloatingIcons />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="relative mb-12 sm:mb-16">
          {/* Animated background elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[var(--accent-primary)]/10 blur-3xl animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[var(--text-primary)]">
          {personalInfo.name}
        </h1>
        
        <div className="text-2xl sm:text-3xl md:text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mb-6 h-10">
          {displayText}
          <span className="animate-pulse">|</span>
        </div>
        
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
          {personalInfo.about}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href={personalInfo.social.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors border border-[var(--border-color)] shadow-md hover:shadow-lg hover:shadow-[var(--accent-primary)]/10"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="mr-2" />
            GitHub
          </a>
          <a 
            href={personalInfo.social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary-dark)] transition-colors shadow-md hover:shadow-lg hover:shadow-[var(--accent-primary)]/20"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="mr-2" />
            LinkedIn
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center px-6 py-3 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-card-hover)] transition-colors border border-[var(--border-color)] shadow-md hover:shadow-lg hover:shadow-[var(--accent-secondary)]/10"
            aria-label="Send Email"
          >
            <MailIcon className="mr-2" />
            Contact Me
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a 
            href="#experience" 
            className="inline-flex flex-col items-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            aria-label="Scroll to Experience"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDownIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
