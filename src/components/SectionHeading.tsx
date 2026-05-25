import React from 'react';

const SectionHeading = ({ subtitle, title }: { subtitle: string, title?: string }) => (
  <div className="mb-12">
    <span className="text-[10px] tracking-[5px] uppercase text-text-muted mb-4 block font-medium">{subtitle}</span>
    {title && <h2 className="text-2xl md:text-[30px] font-medium tracking-wide text-black uppercase">{title}</h2>}
  </div>
);

export default SectionHeading;
