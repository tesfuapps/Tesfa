import React from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { projectsData } from '../data/projects';

export default function MoreDesigns() {
  const navigate = useNavigate();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }}
      className="py-24 px-6 md:px-12 lg:px-24"
    >
      <button onClick={() => navigate(-1)} className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[2px] font-bold text-text-muted hover:text-black transition-colors">
        <ArrowRight className="w-4 h-4 rotate-180" />
        Back
      </button>

      <SectionHeading subtitle="Portfolio" title="More Design" />
      <p className="text-text-muted leading-relaxed mb-12 max-w-3xl text-sm md:text-base">
        A deeper dive into the collection of brand identities, logos, and marketing materials I've crafted over the years.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
         {projectsData.slice(6).map((project) => (
            <div key={project.id} className="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-black/5 hover:shadow-2xl transition-all duration-500">
               <div className="aspect-[4/3] w-full overflow-hidden relative z-10 bg-gray-100">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
               </div>
               <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm">
                  <h3 className="text-white font-semibold text-2xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                  <span className="text-white/70 text-[10px] uppercase tracking-[3px] font-bold block mb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.type}</span>
                  <Link to={`/project/${project.id}`} className="w-14 h-14 bg-white text-black hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:scale-110 shadow-xl delay-150">
                     <ArrowRight size={22} className="opacity-80 group-hover:opacity-100" />
                  </Link>
               </div>
            </div>
         ))}
      </div>

      {/* Telegram Social Media Posts CTA */}
      <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        <div className="flex-1 text-center md:text-left">
          <span className="text-[10px] tracking-[4px] uppercase text-blue-600 font-bold mb-3 block">Telegram Channel</span>
          <h3 className="text-2xl font-bold text-black mb-3">Looking for more social media designs?</h3>
          <p className="text-text-muted text-sm max-w-xl font-light leading-relaxed">
            I regularly share my latest graphic design work, social media posts, and marketing campaigns directly on my Telegram channel. Join the community to see my latest creatives.
          </p>
        </div>
        <a 
          href="https://t.me/+CyHwNt_zpbhhYzk0" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#229ED9] text-white text-xs tracking-[2px] uppercase font-bold rounded-full hover:bg-[#229ED9]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
        >
          View Posts on Telegram
          <ArrowRight size={16} />
        </a>
      </div>
    </motion.div>
  );
}
