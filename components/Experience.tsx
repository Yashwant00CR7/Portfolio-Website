import React from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';

const hackathons = [
  {
    year: "2025",
    title: "Google Tunix Hackathon",
    role: "Participant",
    description: "Enhanced LLM transparency using Google's JAX-native library. Engineered a Reinforcement Learning pipeline (GRPO) on Cloud TPUs to generate explicit reasoning traces for Gemma models.",
    link: ""
  },
  {
    year: "2025",
    title: "SIH (Smart India Hackathon)",
    role: "Finalist",
    description: "Collaborated on an AI-Driven Unified Data Platform for Oceanographic insights to assist fishermen and protect coral reefs.",
    link: "https://youtu.be/zWe9s7wuJYQ"
  },
  {
    year: "2025",
    title: "Vercel AI Gateway Hackathon",
    role: "Developer",
    description: "Developed 'Among AI', a game-like interface to identify less performant AI models, gamifying model evaluation.",
    link: ""
  }
];

const education = [
  {
    period: "2023 - 2027",
    institution: "Sri Shakthi Institute of Engineering and Technology",
    degree: "B.E. Computer Science Engineering",
    details: "Specializing in AI/ML and Computer Science fundamentals. Active contributor to technical events."
  },
  {
    period: "Completed",
    institution: "Amrita Vidyalayam Nallampalaym",
    degree: "Higher Secondary Certificate",
    details: "Computer Science - Maths stream | 84.3%"
  }
];

const certifications = [
  "Computer Vision using Azure - Coursera (Sep 2025)",
  "HashGraph Developer Course - Hedera (Nov 2024)",
  "Intro to Machine Learning (Sep 2024)",
  "Intro to Deep Learning - Coursera (Aug 2024)"
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-stone-50 dark:bg-stone-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="mb-12 text-center"
        >
          <span className="text-sm font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-4 block">
            The Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
            Professional Timeline
          </h2>
        </motion.div>

        {/* Certifications Section - Moved to Top */}
        <div className="mb-20">
          <motion.h3 
            {...({
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true }
            } as any)}
            className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-6 flex items-center gap-3 justify-center md:justify-start"
          >
            <span className="w-8 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></span> Certifications
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                {...({
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: index * 0.05 }
                } as any)}
                className="bg-white dark:bg-stone-900 p-5 rounded-xl border border-stone-100 dark:border-stone-800 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex flex-col h-full justify-between">
                  <span className="text-sm font-semibold text-stone-700 dark:text-stone-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {cert}
                  </span>
                  <div className="w-8 h-0.5 bg-emerald-200 dark:bg-emerald-800 mt-4 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Hackathons Column */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span> Hackathons
            </h3>
            {/* Gradient Line Container */}
            <div className="relative border-l-2 border-transparent space-y-8 pl-8 ml-3">
              <div className="absolute top-0 bottom-0 left-[-2px] w-0.5 bg-gradient-to-b from-purple-200 via-indigo-300 to-stone-200 dark:from-purple-900 dark:via-indigo-900 dark:to-stone-800"></div>
              
              {hackathons.map((item, index) => (
                <motion.div
                  key={index}
                  {...({
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1 }
                  } as any)}
                  className="relative group"
                >
                  <span className="absolute -left-[41px] top-1.5 w-5 h-5 bg-white dark:bg-stone-900 rounded-full border-4 border-purple-400 dark:border-purple-600 shadow-sm group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1 block">
                    {item.year}
                  </span>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h4>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-stone-400 hover:text-red-500 transition-colors"
                        title="Watch Video"
                      >
                        <Youtube size={18} />
                      </a>
                    )}
                  </div>
                  <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-2">{item.role}</p>
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span> Education
            </h3>
            <div className="relative border-l-2 border-transparent space-y-12 pl-8 ml-3 mb-12">
              <div className="absolute top-0 bottom-0 left-[-2px] w-0.5 bg-gradient-to-b from-cyan-200 via-blue-300 to-stone-200 dark:from-cyan-900 dark:via-blue-900 dark:to-stone-800"></div>
              
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  {...({
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1 }
                  } as any)}
                  className="relative group"
                >
                  <span className="absolute -left-[41px] top-1.5 w-5 h-5 bg-stone-900 dark:bg-stone-100 rounded-full border-4 border-cyan-100 dark:border-cyan-900 shadow-sm group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1 block">
                    {item.period}
                  </span>
                  <h4 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">{item.institution}</h4>
                  <p className="text-sm font-medium text-stone-800 dark:text-stone-300 mb-2">{item.degree}</p>
                  <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                    {item.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;