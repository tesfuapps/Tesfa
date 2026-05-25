import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, PenTool, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 px-6">
        <div className="text-center">
          <h2 className="text-2xl mb-4 font-medium">Project not found</h2>
          <button onClick={() => navigate(-1)} className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors border-b border-black pb-1">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Use the defined gallery, or fallback to the thumbnail if gallery is missing/empty
  const gallery = project.gallery?.length > 0 ? project.gallery : [project.thumbnail];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }}
      className="py-24 px-6 md:px-12 lg:px-24"
    >
      <button onClick={() => navigate(-1)} className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[2px] font-bold text-text-muted hover:text-black transition-colors">
        <ArrowRight className="w-4 h-4 rotate-180" />
        Back to Portfolio
      </button>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Carousel / Photo Gallery */}
        <div className={`aspect-square bg-gray-100 rounded-2xl flex flex-col items-center justify-center shadow-sm border border-black/5 relative overflow-hidden group w-full`}>
          <img 
            src={gallery[currentImageIndex]} 
            alt={`${project.title} Image ${currentImageIndex + 1}`} 
            className="w-full h-full object-cover transition-opacity duration-300"
          />

          {gallery.length > 1 && (
            <>
              <button 
                onClick={prevImage} 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-black rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-black rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-white/50 backdrop-blur-sm px-3 py-2 rounded-full">
                {gallery.map((_: any, idx: number) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-primary w-4' : 'bg-black/40 hover:bg-black w-2'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="space-y-10">
          <div>
            <p className="text-[10px] uppercase tracking-[3px] font-bold text-primary mb-4">{project.type}</p>
            <h1 className="text-4xl md:text-5xl font-medium mb-6 text-black">{project.title}</h1>
            <p className="text-xl font-medium leading-relaxed text-black mb-6">
              {project.description}
            </p>
            <div className="text-base leading-relaxed text-text-muted font-light space-y-4">
              {((project as any).fullDescription || "Additional details about this project are currently being updated. Please check back later for more comprehensive information regarding the design process, challenges faced, and the final outcomes delivered.").split('\n\n').map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-black/5">
            <div className="bg-bg-alt p-6 rounded shadow-sm border border-black/5 flex flex-col h-full">
              <h4 className="text-[11px] flex items-center gap-2 uppercase tracking-[2px] font-bold mb-4 text-black">
                <PenTool size={14} className="text-primary"/>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-white shadow-sm border border-black/5 text-[10px] font-bold text-text-muted hover:text-primary transition-colors uppercase tracking-wider rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-bg-alt p-6 rounded shadow-sm border border-black/5 flex flex-col h-full">
              <h4 className="text-[11px] flex items-center gap-2 uppercase tracking-[2px] font-bold mb-4 text-black">
                <ExternalLink size={14} className="text-primary"/>
                Live Preview
              </h4>
              <p className="text-xs text-text-muted mb-6 font-light leading-relaxed">
                See the project in action or explore the full case study on our live site.
              </p>
              <a href={project.link} className="inline-flex items-center justify-between w-full p-4 bg-white text-black hover:bg-primary shadow-sm border border-black/5 hover:text-white transition-all text-[11px] group uppercase tracking-[2px] font-bold rounded mt-auto">
                View Project
                <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
