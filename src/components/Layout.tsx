import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);
  const navigate = useNavigate();

  return (
    <div className="flex w-full min-h-screen font-sans text-text-main relative selection:bg-primary selection:text-white">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-[70px] bg-white flex items-center justify-between px-6 z-50 border-b border-black/5 shadow-sm">
          <Link to="/" onClick={closeMenu} className="font-bold text-xl tracking-[2px] text-black uppercase font-serif">Tesfaye.</Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black hover:text-primary p-2">
             {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
      </div>

      {/* Overlay for mobile sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity backdrop-blur-sm" onClick={closeMenu}></div>
      )}

      {/* Left Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-[280px] lg:w-[300px] bg-sidebar transform transition-transform duration-300 ease-in-out z-50 flex flex-col overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          
          {/* Top gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>

          <div className="flex flex-col flex-1 px-8 pt-14 pb-8 relative z-10">

            {/* Profile Section */}
            <div className="flex flex-col items-center mb-10">
              <div className="relative mb-5">
                {/* Decorative ring */}
                <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-orange-400 opacity-80"></div>
                <div className="w-[110px] h-[110px] lg:w-[130px] lg:h-[130px] rounded-full overflow-hidden relative border-4 border-white shadow-xl aspect-square">
                  <img 
                    src="/images/projects/Tesfu Tilahun. (2).jpg" 
                    alt="Tesfaye Tilahun" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }} 
                  />
                </div>
                {/* Online dot */}
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full shadow-md"></div>
              </div>

              <h1 className="text-[22px] font-bold text-black text-center mb-1 font-sans tracking-tight">
                <Link to="/" onClick={closeMenu} className="hover:text-primary transition-colors">Tesfaye Tilahun</Link>
              </h1>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-6 bg-gradient-to-r from-transparent to-primary"></div>
                <p className="text-[10px] text-primary text-center tracking-[2px] uppercase font-bold">Graphic Designer</p>
                <div className="h-px w-6 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
              <span className="text-[10px] text-text-muted tracking-widest uppercase font-medium bg-black/5 px-3 py-1 rounded-full">📍 Addis Ababa, Ethiopia</span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent mb-8"></div>

            {/* Navigation */}
            <nav className="flex flex-col gap-1 mb-auto">
              {[
                { label: 'Home', action: () => { closeMenu(); navigate('/'); } },
                { label: 'About', action: () => { closeMenu(); navigate('/'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
                { label: 'Services', action: () => { closeMenu(); navigate('/'); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
                { label: 'Skills', action: () => { closeMenu(); navigate('/'); setTimeout(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
                { label: 'Resume', action: () => { closeMenu(); navigate('/resume'); } },
                { label: 'Work', action: () => { closeMenu(); navigate('/'); setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="group flex items-center gap-3 px-4 py-3 rounded-xl text-[12px] tracking-[1.5px] font-semibold uppercase text-black/60 hover:text-black hover:bg-black/5 transition-all duration-200 text-left w-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent my-6"></div>

            {/* Social Links */}
            <div className="flex justify-center gap-3 mb-6">
              <a href="https://t.me/+CyHwNt_zpbhhYzk0" target="_blank" rel="noreferrer" title="Telegram"
                className="w-9 h-9 rounded-full bg-[#229ED9]/10 hover:bg-[#229ED9] flex items-center justify-center text-[#229ED9] hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 font-bold text-[10px]">
                TG
              </a>
              <a href="https://linkedin.com/in/tesfusha" target="_blank" rel="noreferrer" title="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2] flex items-center justify-center text-[#0A66C2] hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 font-bold text-[10px]">
                IN
              </a>
            </div>

            {/* Footer */}
            <div className="text-[10px] text-text-muted text-center tracking-wide leading-relaxed">
              <p>© {new Date().getFullYear()} Tesfaye Tilahun.<br/>All rights reserved.</p>
            </div>
          </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-[280px] lg:ml-[300px] w-full min-h-screen bg-white pt-[70px] md:pt-0 transition-all duration-300">
          {children}
      </main>
    </div>
  );
}
