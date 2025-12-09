import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 pt-20 pb-10 px-6 border-t border-stone-800 text-stone-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-6">
          <a href="#" className="font-serif text-2xl font-bold text-stone-100 tracking-tight">
            Yashwant K.
          </a>
          <p className="max-w-md text-lg leading-relaxed text-stone-500">
            Crafting intelligent digital experiences with a focus on autonomous agents, computer vision, and scalable full-stack architectures.
          </p>
          <div className="flex gap-4">
            <SocialLink href="https://github.com/Yashwant00CR7" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/yashwant-k-935aa0292/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="mailto:yashwantk0305@gmail.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-stone-100 mb-6 tracking-wide uppercase text-sm">Navigation</h3>
          <ul className="space-y-4">
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#skills">Skills</FooterLink>
            <FooterLink href="#projects">Work</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </ul>
        </div>

        {/* Services / Connect */}
        <div>
          <h3 className="font-bold text-stone-100 mb-6 tracking-wide uppercase text-sm">Expertise</h3>
          <ul className="space-y-4">
            <li className="text-stone-500 hover:text-stone-300 transition-colors cursor-default">AI Engineering</li>
            <li className="text-stone-500 hover:text-stone-300 transition-colors cursor-default">Computer Vision</li>
            <li className="text-stone-500 hover:text-stone-300 transition-colors cursor-default">Full Stack Dev</li>
            <li className="text-stone-500 hover:text-stone-300 transition-colors cursor-default">IoT Systems</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-stone-600 text-sm">
          &copy; {new Date().getFullYear()} Yashwant K. All rights reserved.
        </p>

        {/* <div className="flex items-center gap-2 text-sm text-stone-600">
          <span>Made with</span>
          <Heart size={14} className="text-red-900 fill-red-900 animate-pulse" />
          <span>in India</span>
        </div> */}

        <button
          onClick={scrollToTop}
          className="p-3 bg-stone-900 rounded-full hover:bg-stone-800 transition-colors border border-stone-800 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-stone-500 group-hover:text-stone-300 transition-colors" />
        </button>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-lg bg-stone-900 border border-stone-800 hover:bg-stone-800 hover:border-stone-700 text-stone-400 hover:text-stone-100 transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-stone-500 hover:text-purple-400 transition-colors flex items-center gap-2 group"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-stone-800 group-hover:bg-purple-500 transition-colors" />
      {children}
    </a>
  </li>
);

export default Footer;