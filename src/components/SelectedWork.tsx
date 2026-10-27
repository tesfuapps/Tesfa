import React, { useState } from 'react';
import { Project, projectsData } from '../data/projects';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export default function SelectedWork({ onSelectProject }: SelectedWorkProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'branding', label: 'Branding' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'digital', label: 'Digital' },
    { id: 'logo', label: 'Logo Design' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(8);
  };

  return (
    <section className="py-14 md:py-20 border-b border-[var(--color-border)]" id="work">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Head: Concise & Minimal */}
        <header className="mb-8 md:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-[var(--color-accent-text)] uppercase tracking-wider mb-2">
              <span>01</span>
              <span className="w-6 h-[1px] bg-[var(--color-accent-text)]/40" />
              <span>Selected Work</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-primary)]">
              Featured Portfolio
            </h2>
          </div>

          {/* Category Filter Pills (Compact) */}
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter projects">
            {categories.map((cat) => {
              const count = cat.id === 'all'
                ? projectsData.length
                : projectsData.filter((p) => p.category === cat.id).length;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  aria-pressed={isActive}
                  className={`px-3 py-1 text-xs rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[var(--color-primary)] text-[var(--color-on-primary)] font-medium shadow-xs'
                      : 'bg-[var(--color-muted)] text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-border)]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono opacity-70 ${isActive ? 'text-[var(--color-on-primary)]' : ''}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </header>

        {/* Compact 4-Column Grid: Small, attractive, gallery-proportional */}
        {filteredProjects.length === 0 ? (
          <div className="py-12 text-center border border-dashed border-[var(--color-border)] rounded-lg bg-[var(--color-card)]">
            <p className="text-[var(--color-muted-foreground)] text-xs">
              No projects found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {displayedProjects.map((project, index) => {
              const displayIndex = String(index + 1).padStart(2, '0');

              return (
                <article
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer bg-[var(--color-card)] border border-[var(--color-border)] dark:border-white/10 hover:border-[var(--color-accent-text)]/50 dark:hover:border-white/25 rounded-lg p-2.5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Thumbnail Container: Aspect 4/3 ratio for high-res mockups */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-muted)] rounded-md border border-[var(--color-border)]/50 dark:border-white/10">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    {/* Subtle Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="px-2.5 py-1 text-[11px] font-medium bg-white text-black rounded-full shadow-md transform scale-95 group-hover:scale-100 transition-transform">
                        View Details →
                      </span>
                    </div>

                    {/* Tag Pill Badge (BRANDING, PACKAGING, DIGITAL, LOGO) */}
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-mono uppercase font-semibold tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-background)]/90 dark:bg-black/75 backdrop-blur-md text-[var(--color-foreground)] border border-[var(--color-border)]/70 dark:border-white/10 shadow-xs pointer-events-none">
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Clean, Compact Meta */}
                  <div className="pt-2.5 pb-1 px-1 flex flex-col justify-between flex-1 gap-1">
                    <div className="flex items-center justify-between gap-1.5">
                      <h3 className="font-display text-xs sm:text-sm font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent-text)] transition-colors truncate">
                        {project.title}
                      </h3>
                      <span className="font-mono text-[10px] text-[var(--color-muted-foreground)] shrink-0">
                        #{displayIndex}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[var(--color-muted-foreground)]">
                      <span className="truncate pr-1 font-light">{project.type}</span>
                      <span className="shrink-0 font-mono text-[10px] opacity-75">{project.year}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* View All / Show Less Toggle Button */}
        {filteredProjects.length > 8 && (
          <div className="mt-8 text-center">
            {visibleCount < filteredProjects.length ? (
              <button
                type="button"
                onClick={() => setVisibleCount(filteredProjects.length)}
                className="inline-flex items-center gap-1.5 px-5 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-foreground)] font-medium text-xs rounded-full hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] transition-all cursor-pointer shadow-2xs group"
              >
                <span>View all {filteredProjects.length} projects</span>
                <span className="text-[11px] font-mono text-[var(--color-accent-text)]">↓</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setVisibleCount(8)}
                className="inline-flex items-center gap-1.5 px-5 py-2 bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-muted-foreground)] font-medium text-xs rounded-full hover:text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] transition-all cursor-pointer shadow-2xs"
              >
                <span>Show less</span>
                <span className="text-[11px] font-mono">↑</span>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
