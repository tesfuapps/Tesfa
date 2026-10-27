import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'tesfutilahun33@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socialLinks = [
    {
      name: 'Telegram DM',
      handle: '@tesfusha',
      url: 'https://t.me/tesfusha',
    },
    {
      name: 'Telegram Channel',
      handle: 'Design & Updates',
      url: 'https://t.me/+CyHwNt_zpbhhYzk0',
    },
    {
      name: 'Direct Call',
      handle: '+251 933 664 300',
      url: 'tel:0933664300',
    },
    {
      name: 'LinkedIn',
      handle: 'in/tesfusha',
      url: 'https://linkedin.com/in/tesfusha',
    },
  ];

  return (
    <section className="py-14 md:py-20 border-b border-[var(--color-border)]" id="contact">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Head */}
        <header className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 text-xs font-mono font-semibold text-[var(--color-accent-text)] uppercase tracking-wider mb-3">
            <span>05</span>
            <span className="w-8 h-[1px] bg-[var(--color-accent-text)]/40" />
            <span>Inquiries</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)] mb-3">
            Contact
          </h2>
          <p className="text-[var(--color-muted-foreground)] text-sm md:text-base">
            Start a project
          </p>
        </header>

        {/* Contact Body */}
        <div className="flex flex-col gap-8 max-w-4xl">
          <p className="font-display text-2xl sm:text-3xl font-medium text-[var(--color-muted-foreground)]">
            Have a project in mind?
          </p>

          {/* Interactive Large Email with Copy */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${email}`}
              className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] hover:text-[var(--color-accent-text)] transition-colors underline decoration-1 underline-offset-8 break-all"
            >
              {email}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-3.5 py-1.5 text-xs font-mono font-semibold tracking-wide uppercase border border-[var(--color-border)] rounded-full hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] transition-all cursor-pointer"
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>

          <p className="text-sm md:text-base text-[var(--color-muted-foreground)] pt-4 font-light max-w-2xl">
            Currently booking new projects for Q4 2026 / Q1 2027. Typical brand identity and design engagements run 2–6 weeks. Direct responses within 24 hours.
          </p>

          {/* Social / Direct Contacts List */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 border border-[var(--color-border)] rounded-sm bg-[var(--color-card)] hover:border-[var(--color-primary)] hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[var(--color-muted-foreground)] uppercase">
                    {item.name}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-[var(--color-muted-foreground)] group-hover:text-[var(--color-foreground)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
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
                </div>
                <span className="font-display font-semibold text-sm md:text-base text-[var(--color-primary)]">
                  {item.handle}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
