import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const navigateTo = (page: string, sectionId?: string) => {
    setCurrentPage(page);
    
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 transition-colors duration-300">
      <CustomCursor />
      <Navbar 
        onNavigate={navigateTo} 
        currentPage={currentPage} 
        theme={theme} 
        onToggleTheme={toggleTheme} 
      />
      
      <div className="flex flex-col gap-0">
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <About />
            <Experience />
            <Contact />
          </>
        ) : (
          <div className="pt-24 min-h-screen bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
            <AnimatePresence mode="wait">
              {currentPage === 'skills' && <Skills key="skills" />}
              {currentPage === 'projects' && <Projects key="projects" />}
            </AnimatePresence>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}