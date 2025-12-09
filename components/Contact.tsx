import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-stone-900 via-slate-900 to-indigo-950 text-stone-50 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true }
          } as any)}
          className="text-center mb-12"
        >
          <span className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-stone-400">
            Let's build something together.
          </h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto mb-8">
            Currently open for opportunities in AI Engineering and Full Stack Development. Drop me a line, and let's discuss your next project.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-12 mb-12">
             <a href="mailto:yashwantk0305@gmail.com" className="flex items-center justify-center gap-2 text-stone-300 hover:text-cyan-300 transition-colors">
                <Mail size={18} />
                <span>yashwantk0305@gmail.com</span>
             </a>
             <div className="flex items-center justify-center gap-2 text-stone-300 hover:text-purple-300 transition-colors">
                <Phone size={18} />
                <span>+91 9342877060</span>
             </div>
             <div className="flex items-center justify-center gap-2 text-stone-300 hover:text-emerald-300 transition-colors">
                <MapPin size={18} />
                <span>Coimbatore, India</span>
             </div>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
             <a href="https://github.com/Yashwant00CR7" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full text-stone-300 hover:bg-white/20 hover:text-white hover:scale-110 transition-all backdrop-blur-sm border border-white/5">
                <Github size={24} />
             </a>
             <a href="https://www.linkedin.com/in/yashwant-k-935aa0292/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full text-stone-300 hover:bg-white/20 hover:text-white hover:scale-110 transition-all backdrop-blur-sm border border-white/5">
                <Linkedin size={24} />
             </a>
          </div>
        </motion.div>

        <motion.form
          {...({
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true }
          } as any)}
          className="bg-white/5 p-8 md:p-12 rounded-2xl shadow-deep backdrop-blur-md border border-white/10 max-w-2xl mx-auto relative overflow-hidden"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Form subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="relative group">
              <input 
                type="text" 
                id="name" 
                placeholder=" "
                className="block w-full px-4 py-4 text-stone-100 bg-stone-900/50 border border-stone-700 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 peer transition-all group-hover:bg-stone-900/70"
              />
              <label 
                htmlFor="name" 
                className="absolute text-stone-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 pointer-events-none peer-focus:text-cyan-400"
              >
                Your Name
              </label>
            </div>

            <div className="relative group">
              <input 
                type="email" 
                id="email" 
                placeholder=" "
                className="block w-full px-4 py-4 text-stone-100 bg-stone-900/50 border border-stone-700 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 peer transition-all group-hover:bg-stone-900/70"
              />
              <label 
                htmlFor="email" 
                className="absolute text-stone-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 pointer-events-none peer-focus:text-purple-400"
              >
                Email Address
              </label>
            </div>

            <div className="relative group">
              <textarea 
                id="message" 
                rows={4}
                placeholder=" "
                className="block w-full px-4 py-4 text-stone-100 bg-stone-900/50 border border-stone-700 rounded-lg focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 peer transition-all resize-none group-hover:bg-stone-900/70"
              />
              <label 
                htmlFor="message" 
                className="absolute text-stone-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3 pointer-events-none peer-focus:text-emerald-400"
              >
                Message
              </label>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:shadow-glow hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-scale transform hover:-translate-y-1"
            >
              Send Message
              <Send size={18} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;