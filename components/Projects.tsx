import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Youtube, Play, X, Zap, Layers, Eye, ArrowUpRight, Check, BookOpen } from 'lucide-react';
import { projects, Project } from '../data/projects';

const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f5f5f4'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='24' fill='%2378716c' text-anchor='middle' dy='.3em'%3EProject Image%3C/text%3E%3C/svg%3E";

const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

interface ProjectsProps {
  onOpenCaseStudy?: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleImgError = (id: string) => {
    setImgErrors(prev => {
      if (prev[id]) return prev;
      return { ...prev, [id]: true };
    });
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <motion.section
      {...({
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
      } as any)}
      className="pb-32 px-6 min-h-screen bg-stone-50 dark:bg-stone-950 transition-colors duration-300 relative overflow-hidden"

    >
      {/* Ambient Background - Matches Hero/Skills */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          {...({
            initial: { opacity: 1, y: 0 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 }
          } as any)}
          className="mb-20 pt-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px bg-stone-900 dark:bg-stone-100 w-12 block"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-stone-900 dark:text-stone-100 uppercase">
              Selected Work
            </span>
          </div>
          <h2 className="font-serif text-6xl md:text-8xl font-bold text-stone-900 dark:text-stone-100 mb-8 tracking-tight">
            Case Studies
          </h2>
          <p className="max-w-2xl text-xl text-stone-600 dark:text-stone-400 leading-relaxed font-light">
            Technical deep dives into my work with autonomous agents, computer vision pipelines, and full-stack engineering.
          </p>
        </motion.div>

        {/* Projects Grid - Redesigned Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => {
            const ytId = getYouTubeId(project.links.demo);
            const hasVideo = !!ytId;
            const isError = imgErrors[`grid-${index}`];
            const mainImage = isError
              ? PLACEHOLDER_IMAGE
              : project.image;

            return (
              <motion.div
                key={index}
                {...({
                  initial: { opacity: 1, y: 0 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: index * 0.1 },
                  whileHover: { y: -10 }
                } as any)}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group cursor-pointer flex flex-col h-full bg-white dark:bg-[#0c0a09] border border-stone-200 dark:border-stone-800 rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-500"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] bg-stone-100 dark:bg-stone-800 mb-6 border border-stone-100 dark:border-stone-800/50">
                  <motion.img
                    src={mainImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-contain bg-stone-100 dark:bg-stone-900 transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={() => handleImgError(`grid-${index}`)}
                  />

                  {/* Overlay & Icons */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-12 h-12 bg-white dark:bg-stone-900 rounded-full flex items-center justify-center shadow-lg border border-stone-200 dark:border-stone-700">
                      <ArrowUpRight className="text-stone-900 dark:text-stone-100" size={20} />
                    </div>
                  </div>

                  {hasVideo && (
                    <div className={`absolute bottom-4 left-4 z-10 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                      <Play className="fill-white text-white ml-0.5" size={14} />
                    </div>
                  )}

                  {/* Video Preview on Hover */}
                  {hasVideo && hoveredIndex === index && (
                    <div className="absolute inset-0 z-20 pointer-events-none bg-stone-100 dark:bg-stone-800">
                      <iframe
                        key={ytId}
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${ytId}&rel=0&playsinline=1&enablejsapi=1&showinfo=0`}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="px-4 pb-4 flex flex-col flex-1">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-50 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-6 line-clamp-3 font-light">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Modal - Aligned with editorial theme */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            {...({
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
              exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }
            } as any)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-stone-100/90 dark:bg-stone-950/90 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              {...({
                initial: { opacity: 0, scale: 0.9, y: 40 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.95, y: 20 },
                transition: { type: "spring", damping: 25, stiffness: 260, mass: 0.8 }
              } as any)}
              className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-[#0c0a09] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-stone-200 dark:border-stone-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2.5 bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              <div className="overflow-y-auto no-scrollbar flex-1">
                {/* Modal Header */}
                <div ref={videoRef} className="relative aspect-video w-full bg-stone-100 dark:bg-stone-800">
                  {getYouTubeId(selectedProject.links.demo) ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${getYouTubeId(selectedProject.links.demo)}?autoplay=1&mute=1&loop=1&playlist=${getYouTubeId(selectedProject.links.demo)}&rel=0&modestbranding=1&playsinline=1`}
                      title={selectedProject.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={imgErrors[`modal-${selectedProject.title}`] ? PLACEHOLDER_IMAGE : selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-contain bg-stone-100 dark:bg-stone-900"
                        onError={() => handleImgError(`modal-${selectedProject.title}`)}
                      />
                      {/* Gradient to blend text */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full pointer-events-none">
                        <div className="flex flex-wrap gap-3 mb-4">
                          {selectedProject.tags.map(tag => (
                            <span key={tag} className="text-xs font-bold px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white backdrop-blur-md cursor-default">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white shadow-sm leading-tight">
                          {selectedProject.title}
                        </h2>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-8 md:p-12">
                  {getYouTubeId(selectedProject.links.demo) && (
                    <div className="mb-12">
                      <div className="flex flex-wrap gap-3 mb-4">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="text-xs font-bold px-4 py-1.5 rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 dark:text-stone-100 leading-tight">
                        {selectedProject.title}
                      </h2>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                      {/* Project Overview */}
                      <div>
                        <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-8 flex items-center gap-3 font-serif">
                          <span className="p-2.5 bg-purple-100 dark:bg-purple-900/20 rounded-xl text-purple-600 dark:text-purple-400 ring-1 ring-purple-200 dark:ring-purple-800/30">
                            <Layers size={24} strokeWidth={1.5} />
                          </span>
                          Project Overview
                        </h3>
                        <p className="text-stone-600 dark:text-stone-300 text-lg leading-relaxed whitespace-pre-line font-light pl-4 border-l-2 border-stone-200 dark:border-stone-800 ml-1">
                          {selectedProject.longDescription || selectedProject.description}
                        </p>
                      </div>

                      {/* Features - Enhanced Cards */}
                      {selectedProject.features && selectedProject.features.length > 0 && (
                        <div>
                          <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-8 flex items-center gap-3 font-serif">
                            <span className="p-2.5 bg-amber-100 dark:bg-amber-900/20 rounded-xl text-amber-600 dark:text-amber-400 ring-1 ring-amber-200 dark:ring-amber-800/30">
                              <Zap size={24} strokeWidth={1.5} />
                            </span>
                            Key Highlights
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedProject.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 1, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-4 p-5 rounded-2xl bg-stone-50 dark:bg-stone-900/40 border border-stone-100 dark:border-stone-800 hover:border-amber-200 dark:hover:border-amber-800/50 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-all duration-300 group"
                              >
                                <div className="mt-1 p-1.5 bg-white dark:bg-stone-800 rounded-lg text-amber-500 shadow-sm ring-1 ring-stone-100 dark:ring-stone-700 group-hover:text-amber-600 group-hover:scale-110 transition-all duration-300">
                                  <Check size={14} strokeWidth={3} />
                                </div>
                                <span className="text-stone-700 dark:text-stone-300 font-medium text-lg leading-snug">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Gallery - Window Styling */}
                      {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                        <div className="border-t border-stone-200 dark:border-stone-800 pt-12">
                          <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-10 flex items-center gap-3 font-serif">
                            <span className="p-2.5 bg-cyan-100 dark:bg-cyan-900/20 rounded-xl text-cyan-600 dark:text-cyan-400 ring-1 ring-cyan-200 dark:ring-cyan-800/30">
                              <Eye size={24} strokeWidth={1.5} />
                            </span>
                            Visual Gallery
                          </h3>
                          <div className="grid grid-cols-1 gap-12">
                            {selectedProject.gallery.map((img, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 1, scale: 1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-2xl bg-stone-900"
                              >
                                {/* Window Chrome */}
                                <div className="h-10 bg-stone-100 dark:bg-[#1c1917] border-b border-stone-200 dark:border-stone-800 flex items-center px-4 gap-2">
                                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                  <div className="ml-4 px-3 py-1 rounded-md bg-stone-200 dark:bg-stone-800 text-[10px] text-stone-500 font-mono w-full max-w-[200px] truncate opacity-50">
                                    localhost:3000/preview/screen-{idx + 1}
                                  </div>
                                </div>

                                <div className="relative h-[500px] bg-stone-100 dark:bg-stone-900">
                                  <img
                                    src={imgErrors[`gallery-${idx}`] ? PLACEHOLDER_IMAGE : img}
                                    alt={`Screenshot ${idx + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                                    onError={() => handleImgError(`gallery-${idx}`)}
                                  />
                                  {/* Subtle overlay */}
                                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-300 pointer-events-none" />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-8">
                      <div className="bg-stone-50 dark:bg-stone-900/50 rounded-[2rem] p-8 border border-stone-200 dark:border-stone-800 sticky top-6">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-6 pb-2 border-b border-stone-200 dark:border-stone-700">
                          Links
                        </h3>
                        <div className="space-y-4">
                          {/* CASE STUDY BUTTON - Integrated here for visibility in sidebar */}
                          {selectedProject.caseStudy && onOpenCaseStudy && (
                            <button
                              onClick={() => {
                                onOpenCaseStudy(selectedProject);
                                setSelectedProject(null); // Close modal
                              }}
                              className="flex items-center justify-center gap-2 w-full py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 hover:shadow-lg hover:scale-105 transition-all mb-4"
                            >
                              <BookOpen size={20} />
                              Read Case Study
                            </button>
                          )}

                          <a
                            href={selectedProject.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-4 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-xl font-bold hover:shadow-lg transition-all"
                          >
                            <Github size={20} /> View Source Code
                          </a>
                          {selectedProject.links.demo && selectedProject.links.demo !== "#" && (
                            getYouTubeId(selectedProject.links.demo) ? (
                              <button
                                onClick={() => videoRef.current?.scrollIntoView({ behavior: 'smooth' })}
                                className="flex items-center justify-center gap-2 w-full py-4 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700 rounded-xl font-bold hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
                              >
                                <Youtube size={20} className="text-red-600" />
                                Watch Demo
                              </button>
                            ) : (
                              <a
                                href={selectedProject.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700 rounded-xl font-bold hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
                              >
                                <ExternalLink size={20} />
                                Live Preview
                              </a>
                            )
                          )}
                        </div>

                        <div className="mt-10">
                          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-4 pb-2 border-b border-stone-200 dark:border-stone-700">
                            Technology
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map(tag => (
                              <span key={tag} className="text-xs font-medium text-stone-600 dark:text-stone-400 bg-white dark:bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700 cursor-default">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;