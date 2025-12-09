import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Generative AI & Agents",
    color: "purple",
    skills: ["Multi-Agent Systems", "Google ADK", "LangChain", "RAG", "Gemini APIs"]
  },
  {
    title: "Machine Learning",
    color: "indigo",
    skills: ["Scikit-learn", "YOLO (Computer Vision)", "NLP", "Pandas", "NumPy"]
  },
  {
    title: "Programming & Web",
    color: "cyan",
    skills: ["Python", "Flutter (Dart)", "AsyncIO", "Streamlit", "Flask"]
  },
  {
    title: "Databases",
    color: "emerald",
    skills: ["Pinecone (Vector DB)", "MongoDB", "SQLite", "Firebase"]
  },
  {
    title: "Tools & Cloud",
    color: "orange",
    skills: ["Google Cloud Platform", "Crawl4AI", "Git/GitHub", "System Design"]
  }
];

const getBorderColor = (color: string) => {
  switch (color) {
    case 'purple': return 'group-hover:border-purple-200 dark:group-hover:border-purple-800 group-hover:shadow-purple-100 dark:group-hover:shadow-purple-900/20';
    case 'indigo': return 'group-hover:border-indigo-200 dark:group-hover:border-indigo-800 group-hover:shadow-indigo-100 dark:group-hover:shadow-indigo-900/20';
    case 'cyan': return 'group-hover:border-cyan-200 dark:group-hover:border-cyan-800 group-hover:shadow-cyan-100 dark:group-hover:shadow-cyan-900/20';
    case 'emerald': return 'group-hover:border-emerald-200 dark:group-hover:border-emerald-800 group-hover:shadow-emerald-100 dark:group-hover:shadow-emerald-900/20';
    case 'orange': return 'group-hover:border-orange-200 dark:group-hover:border-orange-800 group-hover:shadow-orange-100 dark:group-hover:shadow-orange-900/20';
    default: return 'group-hover:border-stone-200 dark:group-hover:border-stone-700';
  }
};

const getTextColor = (color: string) => {
    switch (color) {
    case 'purple': return 'text-purple-700 dark:text-purple-400';
    case 'indigo': return 'text-indigo-700 dark:text-indigo-400';
    case 'cyan': return 'text-cyan-700 dark:text-cyan-400';
    case 'emerald': return 'text-emerald-700 dark:text-emerald-400';
    case 'orange': return 'text-orange-700 dark:text-orange-400';
    default: return 'text-stone-700 dark:text-stone-300';
  }
}

const getTagHoverClass = (color: string) => {
  switch (color) {
    case 'purple': return 'hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-200 dark:hover:border-purple-800 hover:text-purple-700 dark:hover:text-purple-300';
    case 'indigo': return 'hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:border-indigo-200 dark:hover:border-indigo-800 hover:text-indigo-700 dark:hover:text-indigo-300';
    case 'cyan': return 'hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-200 dark:hover:border-cyan-800 hover:text-cyan-700 dark:hover:text-cyan-300';
    case 'emerald': return 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:border-emerald-200 dark:hover:border-emerald-800 hover:text-emerald-700 dark:hover:text-emerald-300';
    case 'orange': return 'hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-200 dark:hover:border-orange-800 hover:text-orange-700 dark:hover:text-orange-300';
    default: return 'hover:bg-stone-100 dark:hover:bg-stone-800';
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-stone-50 dark:bg-stone-950 min-h-screen relative overflow-hidden transition-colors duration-300">
        {/* Animated Background blobs for flavor - Responsive sizing */}
      <div className="absolute top-20 right-0 w-64 h-64 md:w-[600px] md:h-[600px] bg-indigo-200/40 dark:bg-indigo-900/10 rounded-full blur-3xl -z-10 pointer-events-none animate-blob" />
      <div className="absolute bottom-20 left-0 w-64 h-64 md:w-[600px] md:h-[600px] bg-cyan-200/40 dark:bg-cyan-900/10 rounded-full blur-3xl -z-10 pointer-events-none animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-[400px] md:h-[400px] bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl -z-10 pointer-events-none animate-blob animation-delay-4000" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
           {...({
             initial: { opacity: 0, y: 20 },
             whileInView: { opacity: 1, y: 0 },
             viewport: { once: true }
           } as any)}
           className="mb-16 text-center"
        >
          <span className="text-sm font-bold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-4 block">
            The Toolbox
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-6">
            Skills & Technologies
          </h2>
          <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-400">
            A comprehensive look at the languages, frameworks, and tools I use to build intelligent systems and applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              {...({
                custom: catIndex,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true },
                variants: {
                  hidden: { opacity: 0, y: 20 },
                  visible: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                      duration: 0.5,
                      when: "beforeChildren"
                    }
                  })
                },
                whileHover: { y: -5 }
              } as any)}
              className={`bg-white dark:bg-stone-900 p-8 rounded-2xl shadow-soft border border-stone-100 dark:border-stone-800 hover:shadow-medium transition-all duration-300 flex flex-col group ${getBorderColor(category.color)}`}
            >
              <h3 className={`font-serif text-xl font-bold ${getTextColor(category.color)} mb-6 border-b border-stone-100 dark:border-stone-800 pb-4`}>
                {category.title}
              </h3>
              
              <motion.div 
                className="flex flex-wrap gap-3 perspective-1000"
                {...({
                  variants: {
                    visible: {
                        transition: {
                            staggerChildren: 0.05
                        }
                    }
                  }
                } as any)}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    {...({
                      variants: {
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { 
                            opacity: 1, 
                            scale: 1,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                        }
                      },
                      whileHover: { 
                        scale: 1.05, 
                        y: -3,
                        transition: { duration: 0.2 }
                      }
                    } as any)}
                    className={`px-4 py-2 bg-stone-50 dark:bg-stone-800 text-sm text-stone-700 dark:text-stone-300 font-medium rounded-lg border border-stone-200 dark:border-stone-700 cursor-default inline-block relative transition-all duration-300 ${getTagHoverClass(category.color)}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;