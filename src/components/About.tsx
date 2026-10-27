import React from 'react';

interface AboutProps {
  onOpenResume: () => void;
}

export default function About({ onOpenResume }: AboutProps) {
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
    <section className="py-14 md:py-20 border-b border-[var(--color-border)]" id="about">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Head */}
        <header className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-xs font-mono font-semibold text-[var(--color-accent-text)] uppercase tracking-wider mb-3">
            <span>03</span>
            <span className="w-8 h-[1px] bg-[var(--color-accent-text)]/40" />
            <span>Profile</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)] mb-3">
            About
          </h2>
          <p className="text-[var(--color-muted-foreground)] text-sm md:text-base">
            Philosophy, background &amp; technical craft
          </p>
        </header>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative border border-[var(--color-border)] p-2 bg-[var(--color-card)] rounded-sm shadow-xs">
              <div className="aspect-[3/4] overflow-hidden bg-[var(--color-muted)]">
                <img
                  src="/images/projects/Tesfu Tilahun. (2).jpg"
                  alt="Tesfaye Tilahun — Graphic Designer & Art Director"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:filter-none transition-all duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-3 text-xs text-[var(--color-muted-foreground)] flex justify-between items-center border-t border-[var(--color-border)] mt-2">
                <span className="font-medium text-[var(--color-foreground)]">Tesfaye Tilahun</span>
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Biography & Metrics Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-[var(--color-primary)] leading-snug">
              I believe good design is quiet confidence. It doesn't shout — it
              structures, clarifies, and endures.
            </p>

            <div className="space-y-5 text-[var(--color-muted-foreground)] text-base md:text-lg font-light leading-relaxed">
              <p>
                For the past four years I've partnered with founders, consumer
                brands, and printing institutions to build identity systems that
                scale — from a single mark to full visual languages across print,
                packaging, and screen.
              </p>
              <p>
                Graduating with a B.Sc. in Information Science from Haramaya University,
                my journey evolved into an obsessive pursuit of visual precision and production
                craft. As Printing Specialist at OLY Technology and former Marketing Manager
                &amp; Co-Founder across Pixel Import &amp; Export and Insta Printing, my approach
                bridges strategic marketing with deep tactile execution — from behavioral consumer
                psychology to press-ready print substrates.
              </p>
            </div>

            {/* Facts Grid */}
            <dl className="grid grid-cols-2 gap-6 pt-6 border-t border-[var(--color-border)]">
              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-wider font-semibold text-[var(--color-muted-foreground)]">
                  Clients
                </dt>
                <dd className="font-display text-base sm:text-lg font-bold text-[var(--color-primary)]">
                  15+ across Ethiopia &amp; Global
                </dd>
              </div>

              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-wider font-semibold text-[var(--color-muted-foreground)]">
                  Experience
                </dt>
                <dd className="font-display text-base sm:text-lg font-bold text-[var(--color-primary)]">
                  4+ Years (OLY Tech, Bright Techno, Insta, Pixel)
                </dd>
              </div>

              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-wider font-semibold text-[var(--color-muted-foreground)]">
                  Education
                </dt>
                <dd className="font-display text-base sm:text-lg font-bold text-[var(--color-primary)]">
                  B.Sc. Information Science (Haramaya)
                </dd>
              </div>

              <div className="flex flex-col gap-1">
                <dt className="text-xs uppercase tracking-wider font-semibold text-[var(--color-muted-foreground)]">
                  Primary Tools
                </dt>
                <dd className="font-display text-base sm:text-lg font-bold text-[var(--color-primary)]">
                  Illustrator, Photoshop, AI Systems
                </dd>
              </div>
            </dl>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="/Tesfaye_Tilahun_CV.pdf"
                download="Tesfaye_Tilahun_CV.pdf"
                onClick={handleDownload}
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-[var(--color-primary)] text-[var(--color-on-primary)] font-medium text-xs uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download CV (PDF)</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 bg-transparent border border-[var(--color-border)] text-[var(--color-foreground)] font-medium text-xs uppercase tracking-wider rounded-sm hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] transition-all cursor-pointer group"
              >
                <span>View Career History</span>
                <svg
                  className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Credentials & Strategic Mastery Grid */}
        <div className="mt-14 pt-10 border-t border-[var(--color-border)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--color-accent-text)] uppercase tracking-wider mb-1">
                <span>Formal Training</span>
                <span className="w-5 h-[1px] bg-[var(--color-accent-text)]/40" />
                <span>Marketing &amp; Behavioral Science</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-primary)]">
                Credentials &amp; Strategic Mastery
              </h3>
            </div>
            <p className="text-xs text-[var(--color-muted-foreground)] max-w-md sm:text-right font-light">
              Grounded in cognitive psychology, choice architecture, and high-conversion campaign systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Behavioral Science in Marketing */}
            <div className="group relative bg-[var(--color-card)] dark:bg-white/[0.03] border border-[var(--color-border)] dark:border-white/10 hover:border-[var(--color-accent-text)]/60 dark:hover:border-white/20 rounded-lg p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-muted)] dark:bg-white/5 text-[var(--color-accent-text)] border border-[var(--color-border)] dark:border-white/10">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6v3h8v-3c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z" />
                      <line x1="9" y1="22" x2="15" y2="22" />
                    </svg>
                    PSYCHOLOGY
                  </span>
                  <span className="text-[10px] font-mono text-[var(--color-muted-foreground)]">01</span>
                </div>

                <h4 className="font-display text-sm sm:text-base font-bold text-[var(--color-primary)] mb-1 group-hover:text-[var(--color-accent-text)] transition-colors leading-snug">
                  Behavioral Science in Marketing
                </h4>

                <p className="text-xs font-medium text-[var(--color-foreground)]/80 mb-3 font-mono">
                  Masterclass Series
                </p>

                <p className="text-xs text-[var(--color-muted-foreground)] leading-relaxed font-light">
                  Cognitive biases, choice architecture, decision framing, loss aversion, and habit formation loops.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--color-border)]/60 dark:border-white/5 flex items-center justify-between text-[11px] text-[var(--color-muted-foreground)]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent-text)]">
                  Cognitive Biases
                </span>
                <span className="text-xs opacity-60 group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>

            {/* Card 2: Facebook Business Manager & Meta Ads */}
            <div className="group relative bg-[var(--color-card)] dark:bg-white/[0.03] border border-[var(--color-border)] dark:border-white/10 hover:border-[var(--color-accent-text)]/60 dark:hover:border-white/20 rounded-lg p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-muted)] dark:bg-white/5 text-[var(--color-accent-text)] border border-[var(--color-border)] dark:border-white/10">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                    PAID ADS
                  </span>
                  <span className="text-[10px] font-mono text-[var(--color-muted-foreground)]">02</span>
                </div>

                <h4 className="font-display text-sm sm:text-base font-bold text-[var(--color-primary)] mb-1 group-hover:text-[var(--color-accent-text)] transition-colors leading-snug">
                  Facebook Business Manager &amp; Meta Ads
                </h4>

                <p className="text-xs font-medium text-[var(--color-foreground)]/80 mb-3 font-mono">
                  Great Learning
                </p>

                <p className="text-xs text-[var(--color-muted-foreground)] leading-relaxed font-light">
                  Paid campaign architecture, audience segmentation, budget optimization, and conversion tracking.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--color-border)]/60 dark:border-white/5 flex items-center justify-between text-[11px] text-[var(--color-muted-foreground)]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent-text)]">
                  Performance ROAS
                </span>
                <span className="text-xs opacity-60 group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>

            {/* Card 3: Fundamentals of Digital Marketing */}
            <div className="group relative bg-[var(--color-card)] dark:bg-white/[0.03] border border-[var(--color-border)] dark:border-white/10 hover:border-[var(--color-accent-text)]/60 dark:hover:border-white/20 rounded-lg p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-muted)] dark:bg-white/5 text-[var(--color-accent-text)] border border-[var(--color-border)] dark:border-white/10">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    DIGITAL STRATEGY
                  </span>
                  <span className="text-[10px] font-mono text-[var(--color-muted-foreground)]">03</span>
                </div>

                <h4 className="font-display text-sm sm:text-base font-bold text-[var(--color-primary)] mb-1 group-hover:text-[var(--color-accent-text)] transition-colors leading-snug">
                  Fundamentals of Digital Marketing
                </h4>

                <p className="text-xs font-medium text-[var(--color-foreground)]/80 mb-3 font-mono">
                  Google Digital Garage
                </p>

                <p className="text-xs text-[var(--color-muted-foreground)] leading-relaxed font-light">
                  Full-funnel digital strategy, SEO, content ecosystem alignment, and web analytics.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--color-border)]/60 dark:border-white/5 flex items-center justify-between text-[11px] text-[var(--color-muted-foreground)]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent-text)]">
                  Google Certified
                </span>
                <span className="text-xs opacity-60 group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>

            {/* Card 4: Social Media Marketing & Copywriting */}
            <div className="group relative bg-[var(--color-card)] dark:bg-white/[0.03] border border-[var(--color-border)] dark:border-white/10 hover:border-[var(--color-accent-text)]/60 dark:hover:border-white/20 rounded-lg p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-muted)] dark:bg-white/5 text-[var(--color-accent-text)] border border-[var(--color-border)] dark:border-white/10">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                    COPYWRITING
                  </span>
                  <span className="text-[10px] font-mono text-[var(--color-muted-foreground)]">04</span>
                </div>

                <h4 className="font-display text-sm sm:text-base font-bold text-[var(--color-primary)] mb-1 group-hover:text-[var(--color-accent-text)] transition-colors leading-snug">
                  Social Media Marketing &amp; Copywriting
                </h4>

                <p className="text-xs font-medium text-[var(--color-foreground)]/80 mb-3 font-mono">
                  Udemy Professional Diploma
                </p>

                <p className="text-xs text-[var(--color-muted-foreground)] leading-relaxed font-light">
                  Persuasive direct-response copywriting, creative direction, video hooks, and organic growth funnels.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--color-border)]/60 dark:border-white/5 flex items-center justify-between text-[11px] text-[var(--color-muted-foreground)]">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent-text)]">
                  Direct Response
                </span>
                <span className="text-xs opacity-60 group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
