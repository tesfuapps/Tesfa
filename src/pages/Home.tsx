import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Monitor, PenTool, Megaphone, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { projectsData } from '../data/projects';

export default function Home() {
  const highlights = [
    "/images/projects/Maya Custom.jpg",
    "/images/projects/Sinan Decor.jpg",
    "/images/projects/Guadegaye.jpg",
    "/images/projects/Et SparkUp.jpg"
  ];
  const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlightIndex((prev) => (prev + 1) % highlights.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6 md:px-12 overflow-hidden bg-white">
        {/* Abstract background blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-purple-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-amber-50 to-orange-50 rounded-full blur-3xl opacity-60"></div>
        
        <div className="relative z-10 w-full max-w-4xl text-center md:text-left flex flex-col md:flex-row items-center gap-12">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="flex-1"
           >
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-6 tracking-tight font-sans leading-tight">
               Crafting <br className="hidden md:block"/> 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital</span> <br className="hidden md:block"/>
               Identities
             </h1>
             <p className="text-lg md:text-xl lg:text-2xl text-text-muted mb-10 font-light max-w-xl leading-relaxed mx-auto md:mx-0">
                Hi, I'm <span className="font-semibold text-black">Tesfaye</span>. I specialize in visually striking designs & strategic marketing that elevates brands.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-black text-white text-xs tracking-[2px] uppercase font-bold rounded-full hover:bg-black/80 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                 View Portfolio
               </button>
               <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-transparent border border-black/20 text-black text-xs tracking-[2px] uppercase font-bold rounded-full hover:border-black transition-all">
                 Let's Talk
               </button>
             </div>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="hidden md:block flex-1 relative"
           >
             <div className="aspect-square w-full max-w-[400px] mx-auto rounded-3xl overflow-hidden glass-card p-4 rotate-3 hover:rotate-0 transition-transform duration-500 relative">
               <AnimatePresence mode="wait">
                 <motion.img 
                   key={currentHighlightIndex}
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.05 }}
                   transition={{ duration: 0.8 }}
                   src={highlights[currentHighlightIndex]} 
                   alt="Design Highlight" 
                   className="w-full h-full object-cover rounded-2xl shadow-sm" 
                 />
               </AnimatePresence>
             </div>
           </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 px-6 md:px-12 lg:px-24 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-purple-50 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none"></div>
         <div className="relative z-10">
           <SectionHeading subtitle="About Me" title="Who Am I?" />
           <div className="flex flex-col lg:flex-row gap-12 items-start">
             <div className="flex-1">
               <p className="text-text-muted leading-relaxed mb-8 max-w-2xl text-base">
                 <strong className="text-black font-semibold">I'm Tesfaye Tilahun,</strong> a graduate of Haramaya University's B.Sc. in Information Science. My journey with computers began in fifth grade. During the pandemic, I honed my graphic skills from home — growing from tinkering on my phone to a full freelance career. Moving from Technical Officer to Marketing Manager at Pixel Import & Export, I sharpened my communication skills and deepened my industry understanding.
               </p>
               <div className="flex flex-wrap gap-3">
                 {['Adobe Illustrator', 'Photoshop', 'Brand Identity', 'Social Media', 'Marketing'].map(tag => (
                   <span key={tag} className="px-4 py-2 text-[11px] font-bold uppercase tracking-widest bg-black text-white rounded-full">{tag}</span>
                 ))}
               </div>
             </div>
             <div className="grid grid-cols-2 gap-4 w-full lg:w-auto lg:min-w-[320px]">
               {[
                 { num: '3+', label: 'Years Experience', color: 'from-blue-500 to-blue-700' },
                 { num: '15+', label: 'Projects Done', color: 'from-purple-500 to-purple-700' },
                 { num: '10+', label: 'Happy Clients', color: 'from-orange-400 to-orange-600' },
                 { num: '100%', label: 'Passion', color: 'from-green-400 to-green-600' },
               ].map(stat => (
                 <div key={stat.label} className={`bg-gradient-to-br ${stat.color} text-white rounded-2xl p-6 text-center shadow-lg hover:-translate-y-1 transition-transform duration-300`}>
                   <div className="text-3xl font-black mb-1">{stat.num}</div>
                   <div className="text-[10px] uppercase tracking-widest opacity-90 font-semibold">{stat.label}</div>
                 </div>
               ))}
             </div>
           </div>
         </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-28 px-6 md:px-12 lg:px-24 bg-bg-alt relative overflow-hidden">
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '28px 28px' }}></div>
         <div className="relative z-10">
           <SectionHeading subtitle="What I Do" title="My Expertise" />
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { icon: <Monitor strokeWidth={1.5} size={28}/>, title: 'Branding', desc: 'Visual identities that connect with people and set brands apart from the competition.', color: '#2fa499', gradient: 'from-teal-400 to-teal-600' },
               { icon: <PenTool strokeWidth={1.5} size={28}/>, title: 'Logo Design', desc: 'Minimalist and modern logo crafting representing your brand\'s core values seamlessly.', color: '#f9bf3f', gradient: 'from-amber-400 to-amber-600' },
               { icon: <Megaphone strokeWidth={1.5} size={28}/>, title: 'Social Media', desc: 'Digital marketing and strategic online presence to grow your audience exponentially.', color: '#a84cb8', gradient: 'from-purple-400 to-purple-700' },
             ].map((s, i) => (
               <motion.div
                 key={s.title}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
               >
                 <div className={`w-16 h-16 bg-gradient-to-br ${s.gradient} text-white flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg`}>
                   {s.icon}
                 </div>
                 <h3 className="font-bold text-black mb-3 text-lg">{s.title}</h3>
                 <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
                 <div className="mt-6 w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-16" style={{backgroundColor: s.color}}></div>
               </motion.div>
             ))}
           </div>
         </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 px-6 md:px-12 lg:px-24 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-gradient-to-br from-amber-50 to-transparent rounded-full blur-3xl opacity-80 pointer-events-none"></div>
         <div className="relative z-10">
           <SectionHeading subtitle="My Specialty" title="My Skills" />

           {/* Skill Cards Grid */}
           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mb-14">
             {[
               { label: 'Graphic Design', icon: '🎨', color: 'from-blue-500 to-blue-700', desc: 'Logos, branding & visual identities' },
               { label: 'Social Media Management', icon: '📱', color: 'from-purple-500 to-purple-700', desc: 'Strategy, content & growth' },
               { label: 'Competitive Analysis', icon: '📊', color: 'from-teal-500 to-teal-700', desc: 'Market research & insights' },
               { label: 'Content & Copywriting', icon: '✍️', color: 'from-pink-500 to-pink-700', desc: 'Engaging copy that converts' },
               { label: 'Marketing Plan', icon: '🗺️', color: 'from-orange-500 to-orange-700', desc: 'Full-cycle marketing roadmaps' },
               { label: 'Marketing Strategy', icon: '🚀', color: 'from-red-500 to-red-700', desc: 'Data-driven brand strategy' },
               { label: 'ERP & System Solutions', icon: '⚙️', color: 'from-gray-600 to-gray-800', desc: 'Business systems & operations' },
               { label: 'Brand Identity', icon: '💡', color: 'from-amber-500 to-amber-700', desc: 'Cohesive visual brand systems' },
             ].map((skill, i) => (
               <motion.div
                 key={skill.label}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: i * 0.07 }}
                 className="group bg-white border border-black/5 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
               >
                 <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                   {skill.icon}
                 </div>
                 <h4 className="font-bold text-black text-sm mb-1 leading-snug">{skill.label}</h4>
                 <p className="text-text-muted text-[11px] leading-relaxed">{skill.desc}</p>
               </motion.div>
             ))}
           </div>

           {/* Tools I Use */}
           <div className="mb-14">
             <h3 className="text-[10px] uppercase tracking-[4px] font-bold text-text-muted mb-5">Tools I Use</h3>
             <div className="flex flex-wrap gap-4">
               {/* Adobe Photoshop */}
               <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border font-semibold text-sm shadow-sm hover:-translate-y-1 transition-transform duration-200" style={{backgroundColor:'#31A8FF15', borderColor:'#31A8FF40', color:'#31A8FF'}}>
                 <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#31A8FF"><path d="M11.96.43C5.36.43 0 5.789 0 12.39c0 6.6 5.36 11.96 11.96 11.96 6.6 0 11.96-5.36 11.96-11.96C23.92 5.79 18.56.43 11.96.43zm.04 1.96c5.55 0 10 4.45 10 10s-4.45 10-10 10S2 17.95 2 12.39c0-5.554 4.45-10 10-10zM8.5 7.8h5.3c2 0 3 1.2 3 3 0 1.8-1 3-3 3h-3.3v2.6H8.5V7.8zm2 1.6v2.8h3c1.1 0 1.5-.6 1.5-1.4s-.4-1.4-1.5-1.4h-3z"/></svg>
                 Adobe Photoshop
               </div>
               {/* Adobe Illustrator */}
               <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border font-semibold text-sm shadow-sm hover:-translate-y-1 transition-transform duration-200" style={{backgroundColor:'#FF9A0015', borderColor:'#FF9A0040', color:'#FF9A00'}}>
                 <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF9A00"><path d="M11.96.43C5.36.43 0 5.789 0 12.39c0 6.6 5.36 11.96 11.96 11.96 6.6 0 11.96-5.36 11.96-11.96C23.92 5.79 18.56.43 11.96.43zm.04 1.96c5.55 0 10 4.45 10 10s-4.45 10-10 10S2 17.95 2 12.39c0-5.554 4.45-10 10-10zm-1.24 5.46L7.5 16.39h1.94l.73-2.1h3.66l.73 2.1h1.94L13.2 7.85h-2.44zm1.24 1.5l1.4 4.02h-2.8l1.4-4.02z"/></svg>
                 Adobe Illustrator
               </div>
               {/* Canva */}
               <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border font-semibold text-sm shadow-sm hover:-translate-y-1 transition-transform duration-200" style={{backgroundColor:'#00C4CC15', borderColor:'#00C4CC40', color:'#00C4CC'}}>
                 <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#00C4CC"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.93 15.555c-.39.738-1.188 1.245-2.168 1.245-1.3 0-2.155-.832-2.155-2.1 0-1.248.87-2.135 2.115-2.135.927 0 1.71.496 2.073 1.2l1.44-.81C17.63 11.7 16.24 10.8 14.76 10.8c-2.1 0-3.735 1.59-3.735 3.9 0 2.295 1.635 3.9 3.75 3.9 1.485 0 2.88-.9 3.48-2.235l-1.325-.81zM9.255 10.98H7.545L5.07 17.82h1.77l.435-1.32h2.535l.435 1.32h1.77L9.255 10.98zm-1.59 4.275l.87-2.7.87 2.7H7.665z"/></svg>
                 Canva
               </div>
               {/* AI Tools */}
               <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border font-semibold text-sm shadow-sm hover:-translate-y-1 transition-transform duration-200" style={{backgroundColor:'#8B5CF615', borderColor:'#8B5CF640', color:'#8B5CF6'}}>
                 <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#8B5CF6"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.05 14.518A4.5 4.5 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.768 2.75a4.5 4.5 0 0 1-.67 8.117v-5.678a.79.79 0 0 0-.392-.638zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.765-2.744a4.5 4.5 0 0 1 6.678 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057v-5.57a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 9.47a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
                 AI Tools
               </div>
             </div>
           </div>

           {/* View Full Resume */}
           <div className="mt-8">
             <Link to="/resume" className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-xs tracking-[2px] uppercase font-bold rounded-full hover:bg-black/80 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group">
               View Full Resume
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </Link>
           </div>
         </div>
      </section>
      {/* Work / Portfolio Section */}
      <section id="work" className="py-28 px-6 md:px-12 lg:px-24 bg-bg-alt relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
         <div className="relative z-10">
         <SectionHeading subtitle="My Work" title="Recent Work" />
         
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 6).map((project) => (
               <div key={project.id} className="group relative overflow-hidden bg-white rounded-2xl shadow-sm border border-black/5 hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[4/3] w-full overflow-hidden relative z-10 bg-gray-100">
                     <img 
                       src={project.thumbnail} 
                       alt={project.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                     />
                  </div>
                  {/* Overlay on hover */}
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

         <div className="mt-16 flex justify-center">
            <Link to="/more-designs" className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-xs tracking-[2px] uppercase font-bold rounded-full hover:bg-black/80 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group">
               View All Designs
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
         </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-28 px-6 md:px-12 lg:px-24 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)'}}>
         {/* Glowing orbs */}
         <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
         <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-3xl mx-auto text-center"
         >
            <span className="inline-block text-[10px] tracking-[5px] uppercase font-bold text-white/50 mb-6">Let's Connect</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
               Ready to Build <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Something Great?</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-12 text-base md:text-lg font-light">
               I'm currently available for freelance projects. Whether you need a fresh brand identity, a striking logo, or a full digital marketing strategy — let's make it happen.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
                <a href="tel:0933664300" className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm min-w-0">
                   <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                      <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse block"></span>
                   </div>
                   <div className="min-w-0 flex-1">
                      <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Call Me</div>
                      <div className="text-white font-bold text-base md:text-lg truncate">0933 664 300</div>
                   </div>
                </a>
                <a href="mailto:tesfutilahun33@gmail.com" className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm min-w-0">
                   <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center flex-shrink-0">
                      <Megaphone className="w-5 h-5 text-blue-400" />
                   </div>
                   <div className="min-w-0 flex-1">
                      <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Email Me</div>
                      <div className="text-white font-bold text-xs md:text-sm truncate" title="tesfutilahun33@gmail.com">tesfutilahun33@gmail.com</div>
                   </div>
                </a>
                <a href="https://t.me/tesfusha" target="_blank" rel="noreferrer" className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-2xl p-5 transition-all duration-300 backdrop-blur-sm min-w-0">
                   <div className="w-12 h-12 rounded-full bg-[#229ED9]/20 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#229ED9]" fill="currentColor">
                         <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.61l-1.92 9.07c-.14.63-.52.79-1.05.49l-2.93-2.16-1.41 1.36c-.16.16-.29.29-.6.29l.21-2.98 5.43-4.91c.24-.21-.05-.33-.37-.12l-6.72 4.23-2.89-.9c-.63-.2-1.07-.63.04-1.09l11.27-4.35c.52-.19.98.12.78.96z"/>
                      </svg>
                   </div>
                   <div className="min-w-0 flex-1">
                      <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Telegram DM</div>
                      <div className="text-white font-bold text-base md:text-lg truncate">@tesfusha</div>
                   </div>
                </a>
             </div>

            <a href="https://t.me/tesfusha" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xs tracking-[2px] uppercase font-bold rounded-full hover:opacity-90 transition-all shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] hover:-translate-y-1 group">
                Start a Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </a>
         </motion.div>
      </section>
    </>
  );
}
