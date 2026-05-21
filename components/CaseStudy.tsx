import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Code, Award, ExternalLink, Github, Youtube } from 'lucide-react';
import { Project } from '../data/projects';

interface CaseStudyProps {
    project: Project;
    onBack: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ project, onBack }) => {
    const { caseStudy } = project;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!caseStudy) {
        return (
            <div className="min-h-screen flex items-center justify-center text-stone-500">
                Case Study not available.
                <button onClick={onBack} className="ml-4 underline">Go Back</button>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 pt-20 pb-20"
        >

            {/* Navigation */}
            <div className="max-w-4xl mx-auto px-6 mb-8">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </button>
            </div>

            {/* Hero Section */}
            <div className="max-w-4xl mx-auto px-6 mb-16">
                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold tracking-wider uppercase mb-6"
                >
                    Case Study
                </motion.span>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="font-serif text-4xl md:text-6xl font-bold mb-6 text-stone-900 dark:text-stone-100 leading-tight"
                >
                    {project.title}
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 leading-relaxed font-light mb-10"
                >
                    {project.description}
                </motion.p>

                {/* Meta Grid */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-stone-200 dark:border-stone-800 py-8 mb-12"
                >
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Role</span>
                        <span className="font-medium">{caseStudy.role}</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Timeline</span>
                        <span className="font-medium">{caseStudy.timeline}</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Focus</span>
                        <span className="font-medium">Agents & CV</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Links</span>
                        <div className="flex gap-3">
                            {project.links.repo && <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500"><Github size={20} /></a>}
                            {project.links.demo && <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><Youtube size={20} /></a>}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="rounded-2xl overflow-hidden aspect-video shadow-2xl mb-20"
                >
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain bg-stone-100 dark:bg-stone-900" />
                </motion.div>
            </div>

            {/* Content Body */}
            <div className="max-w-3xl mx-auto px-6 space-y-24">

                {/* Challenge */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400">
                            <Award size={24} />
                        </div>
                        <h2 className="text-3xl font-bold font-serif">The Challenge</h2>
                    </div>
                    <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed whitespace-pre-line">
                        {caseStudy.problem}
                    </p>
                </section>

                {/* Solution */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                            <Code size={24} />
                        </div>
                        <h2 className="text-3xl font-bold font-serif">The Solution</h2>
                    </div>
                    <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed whitespace-pre-line">
                        {caseStudy.solution}
                    </p>
                </section>

                {/* Process / Tech Depth */}
                <section className="bg-stone-100 dark:bg-stone-900/50 p-8 rounded-2xl border border-stone-200 dark:border-stone-800">
                    <h3 className="text-2xl font-bold font-serif mb-6">Technical Implementation</h3>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed whitespace-pre-line font-mono text-sm">
                        {caseStudy.process}
                    </p>
                </section>

                {/* Challenges & Learnings */}
                <div className="grid md:grid-cols-2 gap-12">
                    <section>
                        <h3 className="text-xl font-bold mb-4">Key Challenges</h3>
                        <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                            {caseStudy.challenges}
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold mb-4">Learnings</h3>
                        <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                            {caseStudy.learnings}
                        </p>
                    </section>
                </div>

            </div>

            {/* Footer Navigation */}
            <div className="max-w-4xl mx-auto px-6 mt-24 pt-12 border-t border-stone-200 dark:border-stone-800 flex justify-between items-center">
                <button onClick={onBack} className="text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 font-medium">
                    ← Back to Projects
                </button>
            </div>

        </motion.div>
    );
};

export default CaseStudy;
