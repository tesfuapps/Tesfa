import React, { useEffect } from 'react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-foreground)] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="sticky top-0 z-10 bg-[var(--color-card)]/95 backdrop-blur-md px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs font-mono text-[var(--color-muted-foreground)]">
            <span className="uppercase tracking-wider">{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] transition-all cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-12 space-y-8">
          {/* Main Visual */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[var(--color-muted)] border border-[var(--color-border)] rounded-sm">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-contain sm:object-cover"
            />
          </div>

          {/* Details Header */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent-text)] font-semibold">
              {project.type}
            </p>
            <h2 id="modal-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-foreground)] font-medium leading-relaxed pt-2">
              {project.description}
            </p>
          </div>

          {/* Case Study Full Narrative */}
          <div className="space-y-4 text-sm sm:text-base text-[var(--color-muted-foreground)] leading-relaxed font-light border-t border-[var(--color-border)] pt-6">
            {project.fullDescription.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Strategy Case Study Structured Breakdown */}
          {(project.category === 'strategy' || project.challenge) && (
            <div className="border-t border-[var(--color-border)] pt-8 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[var(--color-accent-text)] uppercase tracking-wider">
                <span>Strategic Framework</span>
                <span className="w-5 h-[1px] bg-[var(--color-accent-text)]/40" />
                <span>Executive Case Breakdown</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. The Business Challenge */}
                {project.challenge && (
                  <div className="p-5 bg-[var(--color-muted)]/50 dark:bg-white/[0.03] border border-[var(--color-border)] dark:border-white/10 rounded-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-rose-500/90 dark:text-rose-400 uppercase tracking-wider">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        The Business Challenge
                      </div>
                      <p className="text-sm text-[var(--color-foreground)] leading-relaxed font-light">
                        {project.challenge}
                      </p>
                    </div>
                  </div>
                )}

                {/* 2. Strategic & Behavioral Approach */}
                {project.strategy && (
                  <div className="p-5 bg-[var(--color-muted)]/50 dark:bg-white/[0.03] border border-[var(--color-border)] dark:border-white/10 rounded-lg flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs font-mono font-semibold text-[var(--color-accent-text)] uppercase tracking-wider">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        Strategic &amp; Behavioral Approach
                      </div>
                      <p className="text-sm text-[var(--color-foreground)] leading-relaxed font-light">
                        {project.strategy}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Key Execution Steps & Creative Deliverables */}
              {project.deliverables && project.deliverables.length > 0 && (
                <div className="p-5 bg-[var(--color-muted)]/30 dark:bg-white/[0.02] border border-[var(--color-border)] dark:border-white/10 rounded-lg">
                  <p className="text-xs font-mono font-semibold text-[var(--color-foreground)] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Key Execution Steps &amp; Creative Deliverables
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 bg-[var(--color-card)] dark:bg-black/40 border border-[var(--color-border)]/70 dark:border-white/10 rounded-md"
                      >
                        <span className="font-mono text-[10px] text-[var(--color-accent-text)] font-semibold mt-0.5">
                          0{idx + 1}
                        </span>
                        <span className="text-xs text-[var(--color-foreground)] font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Technologies & Metadata */}
          <div className="border-t border-[var(--color-border)] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted-foreground)] mb-2 font-semibold">
                Tools &amp; Disciplines
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[var(--color-muted)] text-[var(--color-foreground)] text-xs font-mono rounded-full border border-[var(--color-border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.actionCta && (
                <a
                  href={project.actionCta.url || '#contact'}
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[var(--color-accent-text)] text-black text-xs font-semibold tracking-wide uppercase rounded-sm hover:opacity-90 transition-opacity whitespace-nowrap shadow-xs cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span>{project.actionCta.label} →</span>
                </a>
              )}

              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center justify-center px-5 py-3 bg-[var(--color-primary)] text-[var(--color-on-primary)] text-xs font-semibold tracking-wide uppercase rounded-sm hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Start Similar Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
