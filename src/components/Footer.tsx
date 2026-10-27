import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[var(--color-background)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[var(--color-muted-foreground)]">
        <p>
          © {new Date().getFullYear()} Tesfaye Tilahun. Designed &amp; built in Addis Ababa.
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 hover:text-[var(--color-foreground)] transition-colors cursor-pointer group py-1"
        >
          <span>Back to top</span>
          <svg
            className="w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
