import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string, section?: string) => void;
  currentPage: string;
  theme: string;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (page: string, section?: string) => {
    onNavigate(page, section);
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'About', action: () => handleNavClick('home', 'about') },
    { name: 'Skills', action: () => handleNavClick('skills') },
    { name: 'Projects', action: () => handleNavClick('projects') },
    { name: 'Journey', action: () => handleNavClick('home', 'experience') },
    { name: 'Contact', action: () => handleNavClick('home', 'contact') },
  ];

  // Only show background if scrolled or not home, AND menu is NOT open.
  // When menu is open, we want the overlay to provide the background.
  const isDarkNav = (scrolled || currentPage !== 'home') && !isOpen;

  return (
    <>
      <motion.nav
        {...({
          initial: { y: -100 },
          animate: { y: 0 },
          transition: { duration: 0.5 }
        } as any)}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkNav
          ? 'backdrop-blur-md bg-stone-50/80 dark:bg-stone-950/80 border-b border-stone-200 dark:border-stone-800 shadow-soft py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home', 'home')}
            className="font-serif text-2xl font-bold tracking-tight z-50 relative cursor-scale group flex items-center"
          >
            <span className="text-stone-900 dark:text-stone-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 transition-all duration-300">Achu</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = (currentPage === 'home' && link.name === 'About' && false) || // Logic placeholder
                (currentPage === 'skills' && link.name === 'Skills') ||
                (currentPage === 'projects' && link.name === 'Projects');

              return (
                <button
                  key={link.name}
                  onClick={link.action}
                  className={`text-sm font-medium transition-colors relative group cursor-scale ${isActive ? 'text-stone-900 dark:text-stone-100' : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100'
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </button>
              );
            })}

            <div className="h-6 w-px bg-stone-300 dark:bg-stone-700 mx-2" />

            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all cursor-scale"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <div className="flex gap-4">
              <a href="https://github.com/Yashwant00CR7" target="_blank" rel="noopener noreferrer" className="text-stone-600 dark:text-stone-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-scale" aria-label="GitHub"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/yashwant-k-935aa0292/" target="_blank" rel="noopener noreferrer" className="text-stone-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-scale" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="mailto:yashwantk0305@gmail.com" className="text-stone-600 dark:text-stone-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-scale" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full text-stone-600 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="relative p-2 text-stone-900 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              {...({
                initial: { opacity: 0, y: "-100%" },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: "-100%" },
                transition: { type: "spring", bounce: 0, duration: 0.4 }
              } as any)}
              className="fixed inset-0 bg-stone-50 dark:bg-stone-950 z-40 flex flex-col items-center justify-center md:hidden"
            >
              <div className="flex flex-col items-center gap-8 text-xl font-serif text-stone-900 dark:text-stone-100">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <div className="flex gap-8 mt-8">
                  <a href="https://github.com/Yashwant00CR7" target="_blank" rel="noopener noreferrer" className="p-2 text-stone-900 dark:text-stone-100 hover:text-purple-600 dark:hover:text-purple-400"><Github size={28} /></a>
                  <a href="https://www.linkedin.com/in/yashwant-k-935aa0292/" target="_blank" rel="noopener noreferrer" className="p-2 text-stone-900 dark:text-stone-100 hover:text-blue-600 dark:hover:text-blue-400"><Linkedin size={28} /></a>
                  <a href="mailto:yashwantk0305@gmail.com" className="p-2 text-stone-900 dark:text-stone-100 hover:text-emerald-600 dark:hover:text-emerald-400"><Mail size={28} /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;