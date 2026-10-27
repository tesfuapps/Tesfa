import React from 'react';

export default function Hero() {
  return (
    <section className="pt-28 md:pt-36 pb-14 md:pb-20 border-b border-[var(--color-border)]" id="top">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Meta row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs md:text-sm font-medium text-[var(--color-muted-foreground)] tracking-tight mb-8 md:mb-12 pb-5 border-b border-[var(--color-border)]/60">
          <p className="font-semibold text-[var(--color-foreground)]">
            Graphic Designer &amp; Art Director
          </p>
          <p>Addis Ababa, ET — Working worldwide</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 status-dot-pulse" aria-hidden="true" />
            <span className="text-[var(--color-foreground)]">Available for freelance — Q4 2026 / Q1 2027</span>
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--color-primary)] max-w-4xl leading-[1.1] mb-8">
          Visual identities with{' '}
          <em className="font-serif italic font-normal text-[var(--color-accent-text)]">
            clarity
          </em>
          , character &amp; craft.
        </h1>

        {/* Hero Footer: Intro & CTAs */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end">
          <p className="md:col-span-8 text-base sm:text-lg md:text-xl text-[var(--color-muted-foreground)] leading-relaxed font-light">
            I help studios and founders turn ideas into brands people remember —
            through identity systems, editorial design, and visual strategies that
            earn their place in the world.
          </p>

          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2.5 justify-end">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-5 py-3 bg-[var(--color-primary)] text-[var(--color-on-primary)] font-medium text-xs tracking-tight rounded-sm hover:opacity-90 transition-opacity text-center shadow-xs uppercase font-mono"
            >
              View selected work ↓
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 bg-transparent border border-[var(--color-border)] text-[var(--color-foreground)] font-medium text-xs tracking-tight rounded-sm hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] transition-all text-center uppercase font-mono"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
