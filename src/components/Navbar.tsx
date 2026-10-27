import React, { useState, useEffect } from 'react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ theme, toggleTheme, onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      const response = await fetch('/Tesfaye_Tilahun_CV.pdf');
      if (!response.ok) throw new Error('Failed to fetch PDF file');
      const blob = await response.blob();
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Tesfaye_Tilahun_CV.pdf';
      link.setAttribute('download', 'Tesfaye_Tilahun_CV.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(url), 60000);
    } catch {
      const link = document.createElement('a');
      link.href = '/Tesfaye_Tilahun_CV.pdf';
      link.download = 'Tesfaye_Tilahun_CV.pdf';
      link.setAttribute('download', 'Tesfaye_Tilahun_CV.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-background)]/90 backdrop-blur-md border-b border-[var(--color-border)] py-4 shadow-xs'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="font-display text-xl md:text-2xl font-bold tracking-tight text-[var(--color-primary)] hover:opacity-80 transition-opacity flex items-center"
        >
          Tesfaye Tilahun
          <span className="text-[var(--color-accent)] font-black text-2xl leading-none ml-0.5">.</span>
        </a>

        {/* Actions & Navigation */}
        <div className="flex items-center gap-6">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--color-accent)] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onOpenResume}
              className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-sm border border-[var(--color-border)] hover:border-[var(--color-primary)] cursor-pointer"
            >
              CV / Resume
            </button>
            <a
              href="/Tesfaye_Tilahun_CV.pdf"
              download="Tesfaye_Tilahun_CV.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-sm bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
              title="Download Tesfaye Tilahun CV as PDF"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </a>
          </nav>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              /* Sun icon for dark mode */
              <svg
                className="w-4 h-4 text-amber-400"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              /* Moon icon for light mode */
              <svg
                className="w-4 h-4 text-slate-700"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border border-[var(--color-border)] rounded-sm text-[var(--color-foreground)]"
          >
            <span
              className={`w-5 h-[1.5px] bg-current transition-transform duration-200 ${
                mobileMenuOpen ? 'translate-y-[4.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`w-5 h-[1.5px] bg-current transition-transform duration-200 ${
                mobileMenuOpen ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-background)] border-b border-[var(--color-border)] px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors py-2 border-b border-[var(--color-border)]/50"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-left py-2 text-[var(--color-accent)] font-semibold uppercase tracking-wider text-xs"
            >
              View Full CV / Resume →
            </button>
            <a
              href="/Tesfaye_Tilahun_CV.pdf"
              download="Tesfaye_Tilahun_CV.pdf"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleDownload(e);
              }}
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm bg-[var(--color-primary)] text-[var(--color-on-primary)] font-semibold uppercase tracking-wider text-xs shadow-xs cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV (PDF)</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
