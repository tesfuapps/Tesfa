import React from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type?: string;
  isCurrent?: boolean;
  summary: string;
  bullets?: string[];
  skills: string[];
}

interface ExperienceProps {
  onOpenResume?: () => void;
}

export default function Experience({ onOpenResume }: ExperienceProps) {
  const experiences: ExperienceItem[] = [
    {
      company: 'OLY Technology',
      role: 'Printing Specialist',
      period: 'June 2026 – Present',
      location: 'Addis Ababa, Ethiopia',
      type: 'On-site',
      isCurrent: true,
      summary:
        'Leading high-precision technical print operations, bridging digital brand systems with physical manufacturing excellence.',
      bullets: [
        'Supervising industrial print machinery, color calibration, and press-ready dielines for commercial packaging.',
        'Enforcing stringent quality assurance across specialty paper stocks, corrugated substrates, and textiles.',
        'Optimizing production workflows to reduce setup turnaround times while maintaining zero color-drift across repeat print runs.'
      ],
      skills: ['Printing Operations', 'Packaging QA', 'Color Consistency', 'Substrate Engineering']
    },
    {
      company: 'Bright Techno Tonic plc',
      role: 'Junior Marketing Manager & Graphics Designer',
      period: 'October 2025 – December 2025',
      location: 'Addis Ababa, Ethiopia',
      type: 'Full-time',
      summary:
        'Spearheaded multi-channel visual communication and growth acquisition campaigns across flagship educational tech products.',
      bullets: [
        'Engineered brand visual guidelines and marketing collateral for E-Tutor City and E-ExamPrepCity platforms.',
        'Executed SEO alignment and digital performance funnels to expand student and institutional user acquisition.',
        'Designed high-converting paid social ads, conversion landing pages, and promotional motion assets.'
      ],
      skills: ['Brand Positioning', 'Visual Communication', 'User Acquisition', 'SEO & Performance']
    },
    {
      company: 'Insta Printing',
      role: 'Co-Founder & Operations Manager',
      period: 'June 2024 – August 2025',
      location: 'Addis Ababa, Ethiopia',
      type: 'Hybrid',
      summary:
        'Co-founded, capitalized, and scaled a modern Direct-to-Film (DTF) apparel printing and custom merchandise studio in Addis Ababa.',
      bullets: [
        'Built brand market authority from scratch via transparent behind-the-scenes TikTok storytelling that educated customers on DTF print durability.',
        'Designed and operated end-to-end shop fulfillment pipelines, guaranteeing same-day dispatch for corporate and streetwear clients.',
        'Managed vendor relations, premium heat-transfer film sourcing, and client contract negotiations.'
      ],
      skills: ['Studio Co-Founder', 'DTF Print Technology', 'TikTok Storytelling', 'Shop Operations']
    },
    {
      company: 'Pixel Import & Export (Xshop)',
      role: 'Marketing Manager',
      period: 'February 2022 – June 2024 · 2 yrs 5 mos',
      location: 'Addis Ababa, Ethiopia',
      type: 'Full-time',
      summary:
        'Promoted from Assistant Marketing Manager & Technical Officer to head all digital marketing strategy, wholesale B2B acquisition, and media pipelines.',
      bullets: [
        'Formulated YouTube and TikTok video production pipelines featuring technical hardware breakdowns that generated massive organic buyer trust.',
        'Engineered structured B2B outreach workflows targeting retail partners, schools, and enterprise equipment buyers.',
        'Awarded Employee of the Month (November 2022) for exceptional customer acquisition and operational excellence.'
      ],
      skills: ['B2B Outreach', 'Video Direction', 'Employee of the Month', 'CRM Systems']
    },
    {
      company: 'Freelance Strategic Consultancies',
      role: 'Marketing Strategist & Campaign Lead',
      period: '2024 – Present',
      location: 'Addis Ababa & Remote',
      type: 'Advisory / Contract',
      summary:
        'Providing high-impact brand positioning, full-funnel marketing strategies, and content roadmaps for leading regional brands.',
      bullets: [
        'Terara Printers: Designed full-funnel marketing strategy pairing localized TikTok video scripts with targeted Meta B2B lead-generation ads.',
        'Luxurious Events: Guided digital presence launch, social media branding, and premium VIP client acquisition campaigns.'
      ],
      skills: ['Full-Funnel Strategy', 'Meta Ads', 'TikTok Scripting', 'Campaign Architecture']
    }
  ];

  return (
    <section className="py-14 md:py-20 border-b border-[var(--color-border)]" id="experience">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Head */}
        <header className="mb-10 md:mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-[var(--color-accent-text)] uppercase tracking-wider mb-2">
              <span>02</span>
              <span className="w-6 h-[1px] bg-[var(--color-accent-text)]/40" />
              <span>Career &amp; Leadership</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-primary)]">
              Professional Experience
            </h2>
            <p className="text-[var(--color-muted-foreground)] text-sm md:text-base mt-1">
              Track record across print manufacturing, digital marketing management &amp; brand studios
            </p>
          </div>

          {onOpenResume && (
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider rounded-sm border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)] transition-all cursor-pointer w-fit"
            >
              <span>View Full History</span>
              <span className="text-[var(--color-accent-text)]">↗</span>
            </button>
          )}
        </header>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[var(--color-border)] dark:border-white/10 ml-3 sm:ml-4 space-y-10 md:space-y-12">
          {experiences.map((exp, index) => {
            return (
              <div key={exp.company} className="relative pl-6 sm:pl-8 md:pl-10 group">
                {/* Timeline Node Indicator */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--color-background)] border-2 border-[var(--color-accent)] transition-transform duration-200 group-hover:scale-125" />

                {/* Card Container */}
                <div className="p-5 sm:p-6 md:p-8 bg-[var(--color-card)] dark:bg-white/[0.02] border border-[var(--color-border)] dark:border-white/10 hover:border-[var(--color-accent-text)]/50 dark:hover:border-white/20 rounded-lg transition-all duration-300 hover:shadow-lg">
                  {/* Header Row: Company, Role, Period, Location */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4 border-b border-[var(--color-border)]/70 dark:border-white/5 pb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--color-primary)]">
                          {exp.company}
                        </h3>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase font-bold tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      <p className="font-display text-sm sm:text-base font-semibold text-[var(--color-accent-text)]">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-1 rounded-sm bg-[var(--color-muted)] text-[var(--color-foreground)] border border-[var(--color-border)]/60">
                        {exp.period}
                      </span>
                      <span className="px-2.5 py-1 rounded-sm bg-transparent border border-[var(--color-border)]/60 text-[var(--color-muted-foreground)]">
                        {exp.location} {exp.type && `· ${exp.type}`}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-[var(--color-foreground)] leading-relaxed mb-4 font-normal">
                    {exp.summary}
                  </p>

                  {/* Bullets */}
                  {exp.bullets && exp.bullets.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {exp.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-muted-foreground)] leading-relaxed font-light"
                        >
                          <span className="text-[var(--color-accent-text)] font-bold mt-1 text-xs">
                            ▪
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills / Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[var(--color-border)]/50 dark:border-white/5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[var(--color-muted-foreground)] bg-[var(--color-muted)]/80 dark:bg-white/5 border border-[var(--color-border)]/60 dark:border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
