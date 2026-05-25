import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function ResumePage() {
  const navigate = useNavigate();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }}
      className="py-24 px-6 md:px-12 lg:px-24 bg-bg-alt min-h-screen"
    >
      <button onClick={() => navigate(-1)} className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[2px] font-bold text-text-muted hover:text-black transition-colors">
        <ArrowRight className="w-4 h-4 rotate-180" />
        Back
      </button>

      <SectionHeading subtitle="Experience" title="Work Experience" />
      
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#e6e6e6] max-w-4xl">
         {[
           {
             color: '#3b82f6',
             title: 'Marketing & Digital Operations Manager',
             subtitle: 'Terara Printers',
             year: 'Jan 2026 - Present',
             desc: '',
             bullets: [
               'Set up and managed all company social media channels.',
               'Coordinated website development and online branding.',
               'Designed and implemented marketing plans and promotional strategies.',
               'Oversaw digital communication and business positioning.'
             ]
           },
           {color: '#2c98f0', title: 'Junior Marketing Manager', subtitle: 'Bright Techno Tonic ®', year: 'Oct 2025 - Dec 2025', desc: 'Leading marketing operations and crafting visual assets.'},
           {color: '#ec5453', title: 'Co-Founder', subtitle: 'Insta Printing', year: 'Jun 2024 - Aug 2025', desc: 'Managed operational activities and maintained high-quality printing output.'},
           {color: '#f9bf3f', title: 'Marketing Manager', subtitle: 'Pixel Import and Export / Xshop', year: 'Aug 2022 - Jun 2024', desc: 'Directed the marketing journey and improved social media presence to reach more people.'},
           {color: '#a84cb8', title: 'Assistant Marketing Manager', subtitle: 'Pixel Import and Export / Xshop', year: 'Jun 2022 - Aug 2022', desc: 'First time stepping into a marketing role, which helped me kickstart my career in the industry.'},
           {color: '#2fa499', title: 'Technical Officer', subtitle: 'Pixel Import and Export / Xshop', year: 'Feb 2022 - Jun 2022', desc: 'Provided product training and technical support to customers. Learned how to communicate, train others, and understand industry needs.'},
         ].map((exp, i) => (
            <div key={i} className="mb-12 relative w-full">
               <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full text-white flex items-center justify-center absolute -left-[29px] sm:-left-[33px] md:-left-[50px] top-0 border-4 border-white shadow-md z-10`} style={{backgroundColor: exp.color}}>
                  <Briefcase size={18} />
               </div>
               <div className="glass-card p-6 md:p-8 rounded-2xl shadow-sm relative ml-2 md:ml-4 border border-black/5 group-hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-black flex flex-col md:flex-row md:items-center md:gap-4">
                    {exp.title}
                    <span className="text-text-muted text-[13px] font-bold opacity-70 mt-1 md:mt-0">{exp.year}</span>
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest font-bold mb-4 block" style={{color: exp.color}}>{exp.subtitle}</span>
                  {exp.desc && <p className="text-text-muted leading-relaxed text-sm">{exp.desc}</p>}
                  {exp.bullets && (
                    <div className="flex flex-col gap-3 mt-4">
                      {exp.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{backgroundColor: exp.color}}></div>
                          <span className="text-sm text-text-muted leading-relaxed">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
               </div>
            </div>
         ))}
      </div>

      <div className="mt-24">
      <SectionHeading subtitle="Education" title="Education" />
      
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#e6e6e6] max-w-4xl">
         {[
            {color: '#a84cb8', title: "Bachelor's Degree, Information Science", subtitle: 'Haramaya University', year: '2018 - 2021', desc: "Information Science is the science and practice dealing with the effective collection, storage, retrieval, and use of information. Sure, I did study IS, but my true passion lies in graphics. That's why I'm currently pursuing a career in the field of graphics."},
            {color: '#2fa499', title: 'Certifications', subtitle: 'Online Courses & Seminars', year: 'Earned', desc: '', bullets: ["Facebook Business Manager", "Master Adobe Illustrator", "Team Building & Teamwork for Business", "Professional Diploma in Social Media Marketing & Copywriting"]},
            {color: '#f9bf3f', title: 'Honors & Awards', subtitle: 'Recognition', year: 'Awarded', desc: ""},
         ].map((edu, i) => (
            <div key={i} className="mb-12 relative w-full">
               <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full text-white flex items-center justify-center absolute -left-[29px] sm:-left-[33px] md:-left-[50px] top-0 border-4 border-white shadow-md z-10`} style={{backgroundColor: edu.color}}>
                  <GraduationCap size={18} />
               </div>
               <div className="glass-card p-6 md:p-8 rounded-2xl shadow-sm relative ml-2 md:ml-4 border border-black/5 group-hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 text-black flex flex-col md:flex-row md:items-center md:gap-4">
                    {edu.title}
                    <span className="text-text-muted text-[13px] font-bold opacity-70 mt-1 md:mt-0">{edu.year}</span>
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest font-bold mb-4 block" style={{color: edu.color}}>{edu.subtitle}</span>
                  {edu.desc && <p className="text-text-muted leading-relaxed text-sm">{edu.desc}</p>}
                  {edu.bullets && (
                    <div className="flex flex-col gap-3 mt-2">
                      {edu.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: edu.color}}></div>
                          <span className="text-sm font-bold text-black/80">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
               </div>
            </div>
         ))}
      </div>
      </div>
    </motion.div>
  );
}
