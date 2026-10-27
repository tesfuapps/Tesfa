import React, { useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const isPrintingRef = React.useRef(false);

  if (!isOpen) return null;

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
      // Wait 60s before revoking so Chrome download manager has ample time to write the file
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

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isPrintingRef.current) return;
    isPrintingRef.current = true;
    window.print();
    setTimeout(() => {
      isPrintingRef.current = false;
    }, 1500);
  };

  const experiences = [
    {
      role: 'Printing Specialist',
      company: 'OLY Technology',
      period: '2026 – Present',
      bullets: [
        'Bridging strategic brand marketing with precision tactile execution across modern print machinery.',
        'Supervising high-fidelity color consistency, print dielines, and specialty substrates.',
      ],
    },
    {
      role: 'Junior Marketing Manager',
      company: 'Bright Techno Tonic ®',
      period: 'Oct 2025 – Dec 2025',
      bullets: [
        'Directed visual identity assets and guided digital marketing outreach initiatives.',
      ],
    },
    {
      role: 'Co-Founder',
      company: 'Insta Printing',
      period: 'Jun 2024 – Aug 2025',
      bullets: [
        'Co-founded and managed print operations, ensuring color fidelity and high-standard print finishes.',
        'Partnered with corporate clients for customized apparel, packaging, and brand merchandise.',
      ],
    },
    {
      role: 'Marketing Manager',
      company: 'Pixel Import & Export / Xshop',
      period: 'Aug 2022 – Jun 2024',
      bullets: [
        'Directed brand marketing strategy and expanded digital presence across multi-platform funnels.',
        'Crafted promotional campaigns, print packaging, and retail marketing materials.',
      ],
    },
    {
      role: 'Assistant Marketing Manager & Technical Officer',
      company: 'Pixel Import & Export / Xshop',
      period: 'Feb 2022 – Aug 2022',
      bullets: [
        'Conducted customer technical support, product training, and visual presentation workflows.',
      ],
    },
  ];

  const certifications = [
    'Master Adobe Illustrator',
    'Professional Diploma in Social Media Marketing & Copywriting',
    'Facebook Business Manager',
    'Team Building & Teamwork for Business',
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="cv-modal-content bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-foreground)] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="no-print sticky top-0 z-10 bg-[var(--color-card)]/95 backdrop-blur-md px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent-text)] font-semibold">
              Curriculum Vitae
            </span>
            <span className="text-xs text-[var(--color-muted-foreground)]">· Tesfaye Tilahun</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Tesfaye_Tilahun_CV.pdf"
              download="Tesfaye_Tilahun_CV.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
              title="Download CV as PDF"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download PDF</span>
            </a>

            <a
              href="/Tesfaye_Tilahun_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-sm border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] transition-all cursor-pointer"
              title="View PDF in new tab"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>Open</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume modal"
              className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] transition-all cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-12">
          {/* Header summary */}
          <div className="border-b border-[var(--color-border)] pb-8">
            <h2 id="resume-title" className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-2">
              Career &amp; Experience
            </h2>
            <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
              Addis Ababa, Ethiopia · +251 933 664 300 · tesfutilahun33@gmail.com
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-text)] font-semibold">
              Professional Experience
            </h3>

            <div className="space-y-8 divide-y divide-[var(--color-border)]">
              {experiences.map((exp, idx) => (
                <div key={idx} className={idx > 0 ? 'pt-6' : ''}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="font-display text-lg sm:text-xl font-bold text-[var(--color-primary)]">
                      {exp.role}
                    </h4>
                    <span className="font-mono text-xs text-[var(--color-muted-foreground)]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[var(--color-accent-text)] mb-3">
                    {exp.company}
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--color-muted-foreground)] font-light list-disc list-inside">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[var(--color-border)] pt-8">
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-text)] font-semibold">
                Education
              </h3>
              <div>
                <h4 className="font-display text-base font-bold text-[var(--color-primary)]">
                  B.Sc. in Information Science
                </h4>
                <p className="text-xs text-[var(--color-muted-foreground)]">
                  Haramaya University · 2018–2021
                </p>
                <p className="text-xs text-[var(--color-muted-foreground)] mt-2 font-light leading-relaxed">
                  Focus on information architecture, data retrieval systems, and digital communication.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent-text)] font-semibold">
                Certifications
              </h3>
              <ul className="space-y-2 text-xs text-[var(--color-muted-foreground)] font-light">
                {certifications.map((c, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="no-print border-t border-[var(--color-border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href="/Tesfaye_Tilahun_CV.pdf"
                download="Tesfaye_Tilahun_CV.pdf"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-primary)] text-[var(--color-on-primary)] text-xs font-semibold uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download CV (PDF)</span>
              </a>
              <a
                href="/Tesfaye_Tilahun_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] text-xs font-medium rounded-sm transition-all cursor-pointer"
                title="Open PDF in new tab"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span>Open in Tab</span>
              </a>
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] text-xs font-medium rounded-sm transition-all cursor-pointer"
                title="Print or Save as PDF"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                <span>Print</span>
              </button>
            </div>

            <a
              href="mailto:tesfutilahun33@gmail.com?subject=Portfolio%20Inquiry%20-%20Tesfaye%20Tilahun"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all"
            >
              Contact Directly →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
