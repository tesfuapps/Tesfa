import React from 'react';

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'Brand Identity',
      desc: 'Logos, comprehensive visual systems, color theory, and guidelines that stay coherent as you grow — from initial naming support to complete brand identity books.',
    },
    {
      num: '02',
      title: 'Logo Design & Typography',
      desc: 'Custom marks, monograms, and typographic letterforms engineered with mathematical balance, high contrast, and distinctive character that scales down to mobile app icons.',
    },
    {
      num: '03',
      title: 'Packaging & Merchandise',
      desc: 'Surface design, apparel graphics, product packaging, custom dielines, and press-ready artwork supervision ensuring flawless physical reproduction.',
    },
    {
      num: '04',
      title: 'Digital & Social Media Design',
      desc: 'Web assets, Telegram channel & bot aesthetics, marketing collateral, and high-impact social media design systems built to drive audience engagement.',
    },
    {
      num: '05',
      title: 'Art Direction & Marketing Strategy',
      desc: 'Commercial visual direction, campaign conceptualization, and behavioral marketing strategies that leverage consumer psychology to turn aesthetic presentation into measurable business revenue.',
    },
  ];

  return (
    <section className="py-14 md:py-20 border-b border-[var(--color-border)]" id="services">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Head */}
        <header className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-xs font-mono font-semibold text-[var(--color-accent-text)] uppercase tracking-wider mb-3">
            <span>04</span>
            <span className="w-8 h-[1px] bg-[var(--color-accent-text)]/40" />
            <span>Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)] mb-3">
            Services
          </h2>
          <p className="text-[var(--color-muted-foreground)] text-sm md:text-base">
            How I can partner with your brand
          </p>
        </header>

        {/* Numbered Services List */}
        <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {services.map((service) => (
            <div
              key={service.num}
              className="py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline group hover:bg-[var(--color-muted)]/40 transition-colors px-2 md:px-4 rounded-sm"
            >
              <span className="md:col-span-2 font-mono text-xs md:text-sm text-[var(--color-muted-foreground)] group-hover:text-[var(--color-accent-text)] transition-colors">
                {service.num}
              </span>

              <h3 className="md:col-span-4 font-display text-2xl md:text-3xl font-bold text-[var(--color-primary)] tracking-tight">
                {service.title}
              </h3>

              <p className="md:col-span-6 text-sm md:text-base text-[var(--color-muted-foreground)] leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
