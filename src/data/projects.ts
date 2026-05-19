import React from 'react';

export interface Project {
  id: string;
  title: string;
  type: string;
  bg: string;
  /** Primary image for the portfolio grid */
  thumbnail: string;
  /** Array of images for the project details carousel */
  gallery: string[];
  description: string;
  fullDescription: string;
  technologies: string[];
  link: string;
}

export const projectsData: Project[] = [
  {
    id: "guadegnaye",
    title: "Guadegnaye",
    type: "Telegram Bot Logo",
    bg: "bg-white",
    thumbnail: "/images/projects/Guadegaye.jpg",
    gallery: [
      "/images/projects/Guadegaye.jpg"
    ],
    description: "Guadegnaye is a Telegram bot with a minimalist, modern logo designed to clearly express the brand's personality and purpose.",
    fullDescription: "Guadegnaye was conceptualized as a Telegram bot to aid users in finding and connecting with friends ('Guadegnaye' translates to 'My Friend' in Amharic). The logo design process involved exploring clean, typographic concepts that scale well in small avatar formats.\n\nWe settled on a bold 'GD' monogram that feels both tech-forward and friendly. The visual identity extends beyond the logo, incorporating a vibrant yet professional color palette to convey trustworthiness and ease of use.",
    technologies: ["Illustrator", "Photoshop", "Branding"],
    link: "#"
  },
  {
    id: "yenewish",
    title: "YeneWish",
    type: "Brand Monogram",
    bg: "bg-[#FAF5E6]",
    thumbnail: "/images/projects/Yene Wish.jpg",
    gallery: [
      "/images/projects/Yene Wish.jpg"
    ],
    description: "The logo showcases a matte gold monogram of 'Y' and 'W' on a cream background, with the brand name 'YeneWish' in bold dark brown sans-serif font below.",
    fullDescription: "YeneWish required a mark of elegance and sophistication. The objective was to create a monogram that feels timeless and luxurious, suitable for a high-end service or product line.\n\nThe interlocking 'Y' and 'W' characters were carefully kerned and customized to create a seamless interplay of shapes. The matte gold on a cream background establishes a premium feel, while the sturdy sans-serif wordmark provides a grounding balance.",
    technologies: ["Illustrator", "Typography", "Visual Identity"],
    link: "#"
  },
  {
    id: "et-sparkup",
    title: "Et-SparkUp",
    type: "Marketing Agency",
    bg: "bg-white",
    thumbnail: "/images/projects/Et SparkUp.jpg",
    gallery: [
      "/images/projects/Et SparkUp.jpg"
    ],
    description: "A dynamic logo features an upward arrow and a bright orange lightning bolt, symbolizing growth and activation. Bold typography emphasizes the brand's commitment to professional, high-energy marketing results.",
    fullDescription: "Et-SparkUp is a marketing agency focused on rapid growth and high-impact campaigns. The branding needed to reflect speed, energy, and results.\n\nThe lightning bolt is a universal symbol for energy, but by pairing it with a sharp, modern typographic layout, it avoids feeling cliché. The contrast between deep blue and vibrant orange ensures high visibility and memorable brand recall across all digital touchpoints.",
    technologies: ["Illustrator", "Logo Design", "Branding"],
    link: "#"
  },
  {
    id: "goody",
    title: "Goody",
    type: "Apparel Logo",
    bg: "bg-white",
    thumbnail: "/images/projects/Goody Tshirt.jpg",
    gallery: [
      "/images/projects/Goody Tshirt.jpg"
    ],
    description: "Playful, cheerful, and highly memorable, perfectly suited for a brand focused on apparel like T-shirts, suggesting a fun and casual aesthetic.",
    fullDescription: "Goody is an apparel brand focused on fun, casual, and colorful T-shirts for the youth market. The logo had to be as vibrant and dynamic as the clothing itself.\n\nUsing a custom, rounded typeface and a multi-colored approach, the logo immediately communicates a sense of joy and playfulness. It looks great on clothing tags, embroidered patches, and printed material.",
    technologies: ["Illustrator", "Apparel Design"],
    link: "#"
  },
  {
    id: "marsilas",
    title: "Marsilas",
    type: "Catering Service",
    bg: "bg-white",
    thumbnail: "/images/projects/Marsilas Catering.jpg",
    gallery: [
      "/images/projects/Marsilas Catering.jpg"
    ],
    description: "Marsilas Catering features a classic, elegant, and professional logo designed within a circular emblem, clearly conveying a commitment to quality cuisine and service.",
    fullDescription: "Catering brands need to communicate trust, quality, and sophistication. Marsilas Catering approached us for a rebrand that would elevate their positioning in a competitive market.\n\nWe opted for a classic badge or emblem style, which feels established and reliable. The serif typography speaks to a tradition of culinary excellence, while the clean, unembellished borders keep the design modern and versatile for uniforms and menus.",
    technologies: ["Illustrator", "Brand Identity"],
    link: "#"
  },
  {
    id: "maya-custom",
    title: "Maya Custom",
    type: "Premium Brand",
    bg: "bg-black",
    thumbnail: "/images/projects/Maya Custom.jpg",
    gallery: [
      "/images/projects/Maya Custom.jpg"
    ],
    description: "Maya Custom features a sleek, futuristic, and high-impact logo designed with bold geometry and cosmic elements, expressing a brand focused on premium, personalized, and modern products.",
    fullDescription: "Maya Custom specializes in bespoke, high-end products. The brand needed an identity that felt exclusive, modern, and boldly minimal. \n\nBy using stark white against deep black, the logo achieves an uncompromising presence. The geometric 'M' inside a precise circle creates a memorable mark that works just as perfectly engraved on metal as it does on a digital screen.",
    technologies: ["Illustrator", "Photoshop", "Premium Branding"],
    link: "#"
  },
  {
    id: "sinan-decor",
    title: "Sinan Decor",
    type: "Interior Design",
    bg: "bg-[#1a1a1a]",
    thumbnail: "/images/projects/Sinan Decor.jpg",
    gallery: [
      "/images/projects/Sinan Decor.jpg"
    ],
    description: "The Sinan decor logo is luxurious, sleek, and modern, utilizing color and typography to suggest a brand specializing in high-end, contemporary interior design and decoration.",
    fullDescription: "Sinan Decor required an identity that practically breathed luxury and architectural precision. The gold on dark charcoal palette was a natural choice for high-end interior design.\n\nThe typography contrasts a heavy, grounded sans-serif for 'Sinan' with an airy, widely-spaced treatment for 'decor'. This tension creates a balanced composition that reflects the brand's ability to mix bold architectural features with delicate styling.",
    technologies: ["Illustrator", "Typography"],
    link: "#"
  },
  {
    id: "shali-nails",
    title: "Shali Nails & Makeup",
    type: "Beauty Brand",
    bg: "bg-white",
    thumbnail: "/images/projects/Shali Nail.jpg",
    gallery: [
      "/images/projects/Shali Nail.jpg"
    ],
    description: "The SHALI Nails & Makeup logo is delicate, elegant, and perfectly themed for a beauty brand, using a metallic sheen and refined lines to suggest luxury and femininity.",
    fullDescription: "Shali is a boutique nails and makeup studio. They needed a logo that was immediately recognizable but still possessed a distinct chic and upscale vibe.\n\nThe use of a stylized icon paired with elegant serif typography bridges the gap between fun and high-fashion. Metallic elements were integrated to add a touch of glamour, perfectly suited for the beauty industry.",
    technologies: ["Illustrator", "Brand Identity"],
    link: "#"
  },
  // Newly added projects based on uploaded images
  {
    id: "beleye-style",
    title: "Beleye Style",
    type: "Brand Identity",
    bg: "bg-white",
    thumbnail: "/images/projects/Beleye Style.jpg",
    gallery: [
      "/images/projects/Beleye Style.jpg"
    ],
    description: "A visually striking brand identity design for Beleye Style.",
    fullDescription: "This project features a comprehensive brand identity tailored to elevate Beleye Style's market presence.",
    technologies: ["Illustrator", "Photoshop"],
    link: "#"
  },
  {
    id: "danat-nextup",
    title: "Danat Nextup",
    type: "Logo & Branding",
    bg: "bg-white",
    thumbnail: "/images/projects/Danat Nextup.jpg",
    gallery: [
      "/images/projects/Danat Nextup.jpg"
    ],
    description: "A bold and impactful logo for Danat Nextup.",
    fullDescription: "The design for Danat Nextup focuses on creating a strong, memorable visual mark that stands out in the competitive landscape.",
    technologies: ["Illustrator", "Typography"],
    link: "#"
  },
  {
    id: "easy-life",
    title: "Easy Life",
    type: "Brand Identity",
    bg: "bg-white",
    thumbnail: "/images/projects/Easy Life.jpg",
    gallery: [
      "/images/projects/Easy Life.jpg"
    ],
    description: "A clean and friendly brand identity for Easy Life.",
    fullDescription: "Easy Life's branding emphasizes simplicity, ease of use, and approachability, using clean lines and a friendly color palette.",
    technologies: ["Illustrator", "Design"],
    link: "#"
  },
  {
    id: "happy-kids",
    title: "Happy Kids",
    type: "Apparel Logo",
    bg: "bg-white",
    thumbnail: "/images/projects/Happy Kids.jpg",
    gallery: [
      "/images/projects/Happy Kids.jpg"
    ],
    description: "A playful and vibrant logo design for the Happy Kids brand.",
    fullDescription: "Designed to appeal to both parents and children, this logo uses bright colors and soft, playful typography to communicate a sense of joy and safety.",
    technologies: ["Illustrator", "Apparel Design"],
    link: "#"
  },
  {
    id: "nbb",
    title: "NBB",
    type: "Brand Identity",
    bg: "bg-white",
    thumbnail: "/images/projects/NBB.jpg",
    gallery: [
      "/images/projects/NBB.jpg"
    ],
    description: "A sleek, professional brand identity for NBB.",
    fullDescription: "The NBB project focuses on delivering a sophisticated, corporate look that instills trust and authority in its target audience.",
    technologies: ["Illustrator", "Corporate Identity"],
    link: "#"
  },
  {
    id: "tebela-collection",
    title: "Tebela Collection",
    type: "Fashion Branding",
    bg: "bg-white",
    thumbnail: "/images/projects/Tebela collection.jpg",
    gallery: [
      "/images/projects/Tebela collection.jpg"
    ],
    description: "An elegant branding solution for Tebela Collection.",
    fullDescription: "Tebela Collection's visual identity was crafted to reflect the high-quality fashion and elegant style that the brand represents.",
    technologies: ["Illustrator", "Photoshop", "Fashion Branding"],
    link: "#"
  },
  {
    id: "tsehay-podcast",
    title: "Tsehay Podcast",
    type: "Digital Media Logo",
    bg: "bg-white",
    thumbnail: "/images/projects/Tsehay Podcast.jpg",
    gallery: [
      "/images/projects/Tsehay Podcast.jpg"
    ],
    description: "A modern and engaging logo for the Tsehay Podcast.",
    fullDescription: "This digital media logo incorporates visual elements that represent sound and communication, tailored perfectly for the podcasting medium.",
    technologies: ["Illustrator", "Digital Branding"],
    link: "#"
  }
];
