export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  type: string;
  category: 'branding' | 'logo' | 'packaging' | 'digital';
  year: string;
  bg?: string;
  thumbnail: string;
  gallery: string[];
  description: string;
  fullDescription: string;
  technologies: string[];
  link?: string;
}

export const projectsData: Project[] = [
  // 1. Maya Custom (Branding)
  {
    id: "maya-custom",
    title: "Maya Custom",
    type: "Premium Brand Identity",
    category: "branding",
    year: "2025",
    thumbnail: "/images/projects/Maya Custom.jpg",
    gallery: ["/images/projects/Maya Custom.jpg"],
    description: "Sleek, futuristic, high-impact mark engineered with geometric precision for a bespoke luxury goods maker.",
    fullDescription: "Maya Custom specializes in bespoke, high-end products. The brand needed an identity that felt exclusive, modern, and boldly minimal.\n\nBy using stark white against deep black, the logo achieves an uncompromising presence. The geometric 'M' inside a precise circle creates a memorable mark that works just as perfectly engraved on metal as it does on a digital screen.",
    technologies: ["Illustrator", "Photoshop", "Brand System"]
  },

  // 2. YeneWish (Brand Identity & Monogram)
  {
    id: "yenewish",
    title: "YeneWish",
    type: "Brand Monogram & Identity",
    category: "branding",
    year: "2024",
    thumbnail: "/images/projects/Yene Wish.jpg",
    gallery: ["/images/projects/Yene Wish.jpg"],
    description: "A matte gold interlocking monogram of 'Y' and 'W' on warm cream, pairing luxury with understated elegance.",
    fullDescription: "YeneWish required a mark of elegance and sophistication. The objective was to create a monogram that feels timeless and luxurious, suitable for a high-end service or product line.\n\nThe interlocking 'Y' and 'W' characters were carefully kerned and customized to create a seamless interplay of shapes. The matte gold on a cream background establishes a premium feel, while the sturdy sans-serif wordmark provides a grounding balance.",
    technologies: ["Illustrator", "Monogram Craft", "Visual Identity"]
  },

  // 3. Sinan Decor (Interior Branding & Signage)
  {
    id: "sinan-decor",
    title: "Sinan Decor",
    type: "Interior Design & Architecture",
    category: "branding",
    year: "2024",
    thumbnail: "/images/projects/Sinan Decor.jpg",
    gallery: ["/images/projects/Sinan Decor.jpg"],
    description: "Architectural luxury branding balancing heavy grounded letterforms with airy minimalist typographic layout.",
    fullDescription: "Sinan Decor required an identity that practically breathed luxury and architectural precision. The gold on dark charcoal palette was a natural choice for high-end interior design.\n\nThe typography contrasts a heavy, grounded sans-serif for 'Sinan' with an airy, widely-spaced treatment for 'decor'. This tension creates a balanced composition that reflects the brand's ability to mix bold architectural features with delicate styling.",
    technologies: ["Illustrator", "Typography", "Spatial Branding"]
  },

  // 4. Goody Apparel (Packaging & Streetwear)
  {
    id: "goody",
    title: "Goody Apparel",
    type: "Streetwear & Apparel",
    category: "packaging",
    year: "2023",
    thumbnail: "/images/projects/Goody Tshirt.jpg",
    gallery: ["/images/projects/Goody Tshirt.jpg"],
    description: "Playful, colorful typographic apparel identity tailored for casual youth streetwear and screen printing.",
    fullDescription: "Goody is an apparel brand focused on fun, casual, and colorful T-shirts for the youth market. The logo had to be as vibrant and dynamic as the clothing itself.\n\nUsing a custom, rounded typeface and a multi-colored approach, the logo immediately communicates a sense of joy and playfulness. It looks great on clothing tags, embroidered patches, and printed material.",
    technologies: ["Illustrator", "Apparel & Packaging", "Merchandise"]
  },

  // 5. Marsilas Catering (Packaging & Hospitality)
  {
    id: "marsilas",
    title: "Marsilas Catering",
    type: "Culinary & Hospitality",
    category: "packaging",
    year: "2023",
    thumbnail: "/images/projects/Marsilas Catering.jpg",
    gallery: ["/images/projects/Marsilas Catering.jpg"],
    description: "Classic circular emblem communicating culinary craftsmanship, premium event catering, and heritage hospitality.",
    fullDescription: "Catering brands need to communicate trust, quality, and sophistication. Marsilas Catering approached us for a rebrand that would elevate their positioning in a competitive market.\n\nWe opted for a classic badge or emblem style, which feels established and reliable. The serif typography speaks to a tradition of culinary excellence, while the clean, unembellished borders keep the design modern and versatile for uniforms and menus.",
    technologies: ["Illustrator", "Emblem Design", "Packaging & Menus"]
  },

  // 6. Guadegnaye (Digital Platform & UI)
  {
    id: "guadegnaye",
    title: "Guadegnaye",
    type: "Telegram Bot & Platform",
    category: "digital",
    year: "2025",
    thumbnail: "/images/projects/Guadegaye.jpg",
    gallery: ["/images/projects/Guadegaye.jpg"],
    description: "Modern visual identity and icon system for a high-traffic community Telegram bot platform in Ethiopia.",
    fullDescription: "Guadegnaye was conceptualized as a Telegram bot to aid users in finding and connecting with friends ('Guadegnaye' translates to 'My Friend' in Amharic). The logo design process involved exploring clean, typographic concepts that scale effortlessly in small avatar formats.\n\nWe settled on a bold 'GD' monogram that feels both tech-forward and friendly. The visual identity extends beyond the logo, incorporating a vibrant yet professional color palette to convey trustworthiness and ease of use.",
    technologies: ["Illustrator", "Photoshop", "Digital Product"]
  },

  // 7. Et-SparkUp (Growth Marketing Agency Branding)
  {
    id: "et-sparkup",
    title: "Et-SparkUp",
    type: "Growth Marketing Agency",
    category: "digital",
    year: "2024",
    thumbnail: "/images/projects/Et SparkUp.jpg",
    gallery: ["/images/projects/Et SparkUp.jpg"],
    description: "Dynamic logo featuring an upward momentum arrow and lightning mark symbolizing rapid growth and high-energy marketing.",
    fullDescription: "Et-SparkUp is a marketing agency focused on rapid growth and high-impact campaigns. The branding needed to reflect speed, energy, and results.\n\nThe lightning bolt is a universal symbol for energy, but by pairing it with a sharp, modern typographic layout, it avoids feeling cliché. The contrast between deep blue and vibrant orange ensures high visibility and memorable brand recall across all digital touchpoints.",
    technologies: ["Illustrator", "Digital Strategy", "Marketing Branding"]
  },

  // 8. Shali Nails & Beauty (Logo & Visual Identity)
  {
    id: "shali-nails",
    title: "Shali Nails & Beauty",
    type: "Boutique Beauty Studio",
    category: "logo",
    year: "2024",
    thumbnail: "/images/projects/Shali Nail.jpg",
    gallery: ["/images/projects/Shali Nail.jpg"],
    description: "Delicate feminine typography and metallic sheen for a luxury nails and cosmetics studio.",
    fullDescription: "Shali is a boutique nails and makeup studio. They needed a logo that was immediately recognizable but still possessed a distinct chic and upscale vibe.\n\nThe use of a stylized icon paired with elegant serif typography bridges the gap between fun and high-fashion. Metallic elements were integrated to add a touch of glamour, perfectly suited for the beauty industry.",
    technologies: ["Illustrator", "Brand Identity", "Print Prep"]
  },

  // Additional Client & Brand Deliverables
  {
    id: "beleye-style",
    title: "Beleye Style",
    type: "Fashion & Lifestyle Identity",
    category: "branding",
    year: "2024",
    thumbnail: "/images/projects/Beleye Style.jpg",
    gallery: ["/images/projects/Beleye Style.jpg"],
    description: "Striking contemporary fashion branding designed for retail presence and high-end apparel tags.",
    fullDescription: "This project features a comprehensive brand identity tailored to elevate Beleye Style's market presence across retail signage, packaging, and digital lookbooks.",
    technologies: ["Illustrator", "Photoshop", "Fashion Identity"]
  },
  {
    id: "danat-nextup",
    title: "Danat Nextup",
    type: "Next-Gen Agency Mark",
    category: "logo",
    year: "2024",
    thumbnail: "/images/projects/Danat Nextup.jpg",
    gallery: ["/images/projects/Danat Nextup.jpg"],
    description: "Bold geometric wordmark with custom kerning and distinctive modern silhouette.",
    fullDescription: "The design for Danat Nextup focuses on creating a strong, memorable visual mark that stands out in the competitive landscape with high typographic restraint.",
    technologies: ["Illustrator", "Typography", "Geometry"]
  },
  {
    id: "tsehay-podcast",
    title: "Tsehay Podcast",
    type: "Audio & Media Branding",
    category: "digital",
    year: "2024",
    thumbnail: "/images/projects/Tsehay Podcast.jpg",
    gallery: ["/images/projects/Tsehay Podcast.jpg"],
    description: "Soundwave-inspired solar monogram engineered for podcast directory thumbnails and social clips.",
    fullDescription: "This digital media logo incorporates visual elements that represent sound and communication, tailored perfectly for the podcasting medium and streaming channels.",
    technologies: ["Illustrator", "Digital Branding", "Social Assets"]
  },
  {
    id: "happy-kids",
    title: "Happy Kids",
    type: "Children's Apparel Brand",
    category: "packaging",
    year: "2023",
    thumbnail: "/images/projects/Happy Kids.jpg",
    gallery: ["/images/projects/Happy Kids.jpg"],
    description: "Warm, approachable, and playful branding engineered for children's fashion packaging and tags.",
    fullDescription: "Designed to appeal to both parents and children, this logo uses bright colors and soft, playful typography to communicate a sense of joy and safety.",
    technologies: ["Illustrator", "Apparel Design", "Print Artwork"]
  },
  {
    id: "nbb",
    title: "NBB Corporate",
    type: "Corporate & Enterprise Mark",
    category: "branding",
    year: "2024",
    thumbnail: "/images/projects/NBB.jpg",
    gallery: ["/images/projects/NBB.jpg"],
    description: "Clean corporate visual system built for institutional trust, corporate stationery, and signage.",
    fullDescription: "The NBB project focuses on delivering a sophisticated, corporate look that instills trust and authority in its target audience.",
    technologies: ["Illustrator", "Corporate Guidelines", "Print Systems"]
  },
  {
    id: "tebela-collection",
    title: "Tebela Collection",
    type: "Bespoke Fashion House",
    category: "packaging",
    year: "2023",
    thumbnail: "/images/projects/Tebela collection.jpg",
    gallery: ["/images/projects/Tebela collection.jpg"],
    description: "High-contrast editorial serif branding crafted for premium garment boxes, ribbons, and woven labels.",
    fullDescription: "Tebela Collection's visual identity was crafted to reflect high-quality fashion, elegance, and artisanal garment craft.",
    technologies: ["Illustrator", "Photoshop", "Packaging Dielines"]
  },
  {
    id: "easy-life",
    title: "Easy Life",
    type: "Consumer Goods Brand",
    category: "branding",
    year: "2024",
    thumbnail: "/images/projects/Easy Life.jpg",
    gallery: ["/images/projects/Easy Life.jpg"],
    description: "Minimalist and welcoming consumer brand identity built around convenience, approachability, and clarity.",
    fullDescription: "Easy Life's branding emphasizes simplicity, ease of use, and approachability, using clean lines and a friendly color palette across physical and digital customer touchpoints.",
    technologies: ["Illustrator", "Visual System", "Identity Guide"]
  }
];
