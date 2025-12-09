import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, MapPin, Terminal, Cpu, Code2, Zap, GraduationCap, Briefcase, Globe } from 'lucide-react';

const About: React.FC = () => {
  const [showResumeMenu, setShowResumeMenu] = useState(false);
  return (
    <section id="about" className="py-24 px-6 md:px-8 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Main Card Container */}
        <motion.div
          {...({
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          } as any)}
          className="bg-white dark:bg-[#0c0a09] rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col lg:flex-row min-h-[800px]"
        >

          {/* Left Column: Profile & Quick Info */}
          <div className="w-full lg:w-[35%] bg-stone-100 dark:bg-[#110f0e] p-8 md:p-12 flex flex-col border-b lg:border-b-0 lg:border-r border-stone-200 dark:border-stone-800 relative">

            {/* Profile Image with subtle animation */}
            <div className="mb-8 relative flex justify-center md:justify-start group">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 md:left-24 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -z-10 group-hover:bg-purple-500/30 transition-colors duration-500" />

              <motion.div
                className="w-40 h-40 md:w-48 md:h-48 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white dark:border-stone-800 relative z-10 bg-stone-200 dark:bg-stone-800"
                {...({
                  initial: { scale: 0.9, opacity: 0 },
                  whileInView: { scale: 1, opacity: 1 },
                  viewport: { once: true },
                  transition: { type: "spring", stiffness: 200, damping: 20 },
                  whileHover: { y: -5, scale: 1.05 }
                } as any)}
              >
                <img
                  src="https://avatars.githubusercontent.com/u/146008508?v=4"
                  alt="Yashwant K"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            </div>

            {/* Name & Role */}
            <div className="mb-6">
              <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2">
                Yashwant K
              </h2>
              <p className="text-stone-500 dark:text-stone-400 font-medium mb-3 flex items-center gap-2">
                @Yashwant00CR7 <span className="w-1 h-1 rounded-full bg-stone-400" /> India
              </p>
              <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold tracking-wide uppercase border border-purple-200 dark:border-purple-800">
                AI Engineer
              </div>
            </div>

            {/* Bio */}
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-8">
              Building the future of AI with a focus on autonomous agents and computer vision. Transforming complex data into actionable intelligence.
            </p>

            {/* Quick Info Grid */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-500 group-hover:text-purple-500 group-hover:border-purple-200 dark:group-hover:border-purple-800 transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Location</div>
                  <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">Coimbatore, India</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-500 group-hover:text-cyan-500 group-hover:border-cyan-200 dark:group-hover:border-cyan-800 transition-colors">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Education</div>
                  <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">B.E. CSE (2027)</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-500 group-hover:text-emerald-500 group-hover:border-emerald-200 dark:group-hover:border-emerald-800 transition-colors">
                  <Briefcase size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-400 font-bold">Experience</div>
                  <div className="text-sm font-semibold text-stone-700 dark:text-stone-300">Hackathons & Projects</div>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills - replacing empty space */}
            <div className="mb-auto">
              <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Zap size={12} /> Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'PyTorch', 'TensorFlow', 'React', 'FastAPI', 'Docker', 'Google ADK'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white dark:bg-stone-800 rounded-lg text-xs font-semibold text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:border-purple-300 dark:hover:border-purple-700 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Stats - Expertise In */}
            <div className="mt-12 lg:mt-auto pt-8 border-t border-stone-200 dark:border-stone-800">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Globe size={12} /> Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {['Generative AI', 'Agentic Systems', 'Computer Vision', 'System Design'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-stone-200 dark:bg-stone-800/50 rounded-md text-xs font-medium text-stone-600 dark:text-stone-400 border border-stone-300 dark:border-stone-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Main Content */}
          <div className="w-full lg:w-[65%] bg-white dark:bg-[#0c0a09] p-8 md:p-12 lg:p-16 flex flex-col relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16 relative z-10">
              <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400 text-sm font-medium">
                <MapPin size={16} />
                Coimbatore, India
              </div>

              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-wide uppercase">
                  Available for work
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="mb-12 relative z-20">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-stone-900 dark:text-stone-100 mb-10">
                Where <span className="inline-block bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent font-bold">Innovation</span> Meets Intelligence in AI.
              </h1>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-bold text-sm tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  Get in touch
                </a>
                <div className="relative">
                  <button
                    onClick={() => setShowResumeMenu(!showResumeMenu)}
                    className="px-8 py-4 rounded-full bg-transparent border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 font-bold text-sm tracking-wide hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors flex items-center gap-2"
                  >
                    <FileText size={16} />
                    Download CV
                  </button>

                  <AnimatePresence>
                    {showResumeMenu && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setShowResumeMenu(false)} />
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-[#110f0e] rounded-xl shadow-xl border border-stone-200 dark:border-stone-800 overflow-hidden z-50 py-1"
                        >
                          <div className="px-4 py-2 text-xs font-bold text-stone-400 uppercase tracking-wider border-b border-stone-100 dark:border-stone-800/50 mb-1">
                            Select Version
                          </div>
                          <a
                            href="/resume/Yashwant_Resume.pdf"
                            target="_blank"
                            className="block px-4 py-3 hover:bg-stone-50 dark:hover:bg-stone-800 text-sm font-bold text-stone-700 dark:text-stone-300 flex items-center justify-between group"
                          >
                            1 Page Resume
                            <span className="text-stone-400 group-hover:text-purple-500 transition-colors">
                              <FileText size={14} />
                            </span>
                          </a>
                          <a
                            href="/resume/Yashwant_4_Page_Resume.pdf"
                            target="_blank"
                            className="block px-4 py-3 hover:bg-stone-50 dark:hover:bg-stone-800 text-sm font-bold text-stone-700 dark:text-stone-300 flex items-center justify-between group"
                          >
                            4 Page Resume
                            <span className="text-stone-400 group-hover:text-purple-500 transition-colors">
                              <FileText size={14} />
                            </span>
                          </a>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Links Row */}
            <div className="flex flex-wrap items-center gap-4 pb-12 mb-12 border-b border-stone-100 dark:border-stone-800 text-sm font-medium relative z-10">
              <span className="text-stone-400 dark:text-stone-600 whitespace-nowrap mr-2">Find me on</span>

              <a
                href="https://github.com/Yashwant00CR7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-800 hover:border-purple-300 dark:hover:border-purple-700 hover:text-purple-700 dark:hover:text-purple-400 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform" />
                <span>Github</span>
              </a>

              <a
                href="https://www.linkedin.com/in/yashwant-k-935aa0292/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-800 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                <span>Linkedin</span>
              </a>

              <a
                href="mailto:yashwantk0305@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-800 hover:border-emerald-300 dark:hover:border-emerald-700 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>Email</span>
              </a>
            </div>

            {/* Bio Paragraphs & Visual Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start relative z-10">
              {/* Left Side: Bio Text */}
              <div className="space-y-6 text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
                <p>
                  With a specialized focus on <strong className="text-stone-900 dark:text-stone-200 font-semibold">Generative AI and Agentic Systems</strong>, I create intelligent digital solutions that bridge the gap between complex algorithms and practical utility.
                </p>
                <p>
                  I approach every challenge with a research-driven mindset, leveraging tools like <span className="text-stone-900 dark:text-stone-200">Google ADK</span> and <span className="text-stone-900 dark:text-stone-200">LangChain</span> to build autonomous agents that solve real-world problems. My work is defined by a commitment to clean system design and optimized performance.
                </p>
                <p>
                  From developing multi-agent architectures to fine-tuning LLMs, I design with purpose and a dedication to pushing the boundaries of what machine learning can achieve.
                </p>
              </div>

              {/* Right Side: Code Editor / Tech Visual */}
              <div className="w-full hidden xl:block pl-4">
                <motion.div
                  {...({
                    initial: { opacity: 0, scale: 0.95 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: true },
                    transition: { delay: 0.2 }
                  } as any)}
                  className="rounded-xl bg-[#1e1e1e] border border-stone-800 shadow-2xl overflow-hidden group hover:border-stone-700 transition-colors duration-300"
                >
                  {/* Window Title Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-stone-800">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
                      <Terminal size={12} />
                      <span>dev_profile.py</span>
                    </div>
                    <div className="w-8" /> {/* Spacer */}
                  </div>

                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-stone-300">
                    <div className="mb-4">
                      <span className="text-[#c586c0]">class</span> <span className="text-[#4ec9b0]">AI Engineer</span>:
                    </div>
                    <div className="pl-6 mb-2">
                      <span className="text-[#569cd6]">def</span> <span className="text-[#dcdcaa]">__init__</span>(<span className="text-[#9cdcfe]">self</span>):
                    </div>
                    <div className="pl-12 mb-2">
                      <span className="text-[#9cdcfe]">self</span>.name = <span className="text-[#ce9178]">'Yashwant K'</span>
                    </div>
                    <div className="pl-12 mb-2">
                      <span className="text-[#9cdcfe]">self</span>.stack = [
                    </div>
                    <div className="pl-16 text-[#ce9178]">
                      'Generative AI',<br />
                      'Multi-Agent Systems',<br />
                      'Google ADK',<br />
                      'Computer Vision'<br />
                    </div>
                    <div className="pl-12 mb-4">
                      ]
                    </div>
                    <div className="pl-6 mb-2">
                      <span className="text-[#569cd6]">def</span> <span className="text-[#dcdcaa]">current_focus</span>(<span className="text-[#9cdcfe]">self</span>):
                    </div>
                    <div className="pl-12">
                      <span className="text-[#c586c0]">return</span> <span className="text-[#ce9178]">'Building Scalable Autonomous Agents'</span>
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="px-4 py-2 bg-[#007acc] text-white text-xs font-mono flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Code2 size={12} />
                      <span>Python 3.11</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Ln 14, Col 52</span>
                      <span>UTF-8</span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Stats */}
                <motion.div
                  {...({
                    initial: { opacity: 0, x: 20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { delay: 0.4 }
                  } as any)}
                  className="mt-6 flex gap-4"
                >
                  <div className="flex-1 bg-stone-50 dark:bg-stone-800/50 p-4 rounded-xl border border-stone-200 dark:border-stone-800 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400 font-bold uppercase tracking-wider">Systems</div>
                      <div className="text-sm font-bold text-stone-900 dark:text-stone-100">Optimized</div>
                    </div>
                  </div>
                  <div className="flex-1 bg-stone-50 dark:bg-stone-800/50 p-4 rounded-xl border border-stone-200 dark:border-stone-800 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-400">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] text-stone-500 dark:text-stone-400 font-bold uppercase tracking-wider">Agents</div>
                      <div className="text-sm font-bold text-stone-900 dark:text-stone-100">Deployed</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-6 right-6 flex gap-4 opacity-20 grayscale">
              {/* Icons or patterns can go here if needed, keeping it clean for now */}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;