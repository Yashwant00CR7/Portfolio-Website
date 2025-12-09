import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string, section?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleViewWork = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('projects');
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative bg-stone-50 dark:bg-stone-950 transition-colors duration-300 overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-[80px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-[80px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Intro Badge */}
          <motion.div 
            {...({
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 }
            } as any)}
            className="mb-8"
          >
            <span className="px-4 py-2 rounded-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm text-sm font-medium text-stone-600 dark:text-stone-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new projects
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            {...({
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.1 }
            } as any)}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-stone-900 dark:text-stone-100 tracking-tight mb-8"
          >
            Yashwant K.
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.p 
            {...({
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 }
            } as any)}
            className="text-xl md:text-2xl lg:text-3xl text-stone-600 dark:text-stone-400 max-w-4xl mx-auto leading-relaxed font-light mb-12"
          >
            Machine Learning Engineer specializing in <span className="text-stone-900 dark:text-stone-200 font-medium">Generative AI</span>, <span className="text-stone-900 dark:text-stone-200 font-medium">Agentic Systems</span>, and Scalable Architecture.
          </motion.p>

          {/* Buttons & Socials */}
          <motion.div 
            {...({
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.3 }
            } as any)}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <button 
              onClick={handleViewWork}
              className="px-8 py-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
            >
              Explore Portfolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm border border-stone-200 dark:border-stone-800">
               <a href="https://github.com/Yashwant00CR7" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors p-1">
                 <Github size={22} />
               </a>
               <div className="w-px h-5 bg-stone-300 dark:bg-stone-700" />
               <a href="https://www.linkedin.com/in/yashwant-k-935aa0292/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors p-1">
                 <Linkedin size={22} />
               </a>
               <div className="w-px h-5 bg-stone-300 dark:bg-stone-700" />
               <a href="mailto:yashwantk0305@gmail.com" className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors p-1">
                 <Mail size={22} />
               </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        {...({
          initial: { opacity: 0 },
          animate: { opacity: 1, y: [0, 10, 0] },
          transition: { delay: 1, duration: 2, repeat: Infinity }
        } as any)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-stone-400 dark:text-stone-600"
      >
        <ChevronDown size={32} />
      </motion.div>

    </section>
  );
};

export default Hero;