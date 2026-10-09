export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: 'concept' | 'reels' | 'ai' | 'packaging' | 'amazon' | 'all';
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  badgeType?: 'orange' | 'white' | 'blur';
  location?: string;
  year?: string;
  indexNumber: string;
  clientBrief?: string;
  myRole?: string;
  process?: string;
  deliverables?: string[];
  colorPalette?: { name: string; hex: string; textDark?: boolean }[];
  caseStudyHighlight?: string;
  metrics?: string;
  specPill?: string;
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'komorebi-botanical',
    title: 'Komorebi Botanical',
    category: 'Branding & Packaging',
    categorySlug: 'packaging',
    tagline: 'Minimalist luxury skincare glass bottles and bamboo dropper containers photographed on coarse textured Japanese ceramic trays',
    description: 'A comprehensive organic skincare visual system blending traditional Japanese botanical heritage with modern minimalism.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAG_YuKjQe0hnT88gl-s7Lvc-RhHDbk15_jDjkzmPZUIIKgMJM_TA_Hs3_D381UwWi3ATONelrGreQekYNHm7IayiOHvEyfYcen4HS-GYW_B3xtVKuxgrnWjzww7u8WBMA2PS860CbCAqgn0cEEKC6NjsrB8dhWcUzt4Sh1ul5CSfKnHyAcQuEJM4ZklGx0oa2Mt5yXaZlKG7YRLFiOrCBDRpBSZ-jYSrSR7q5YfSTmCWy5k-ZHfpDrvQ',
    imageAlt: 'Minimalist luxury skincare glass bottles and bamboo dropper containers photographed on coarse textured Japanese ceramic trays',
    badge: 'Branding & Packaging',
    badgeType: 'white',
    location: 'Tokyo • London',
    indexNumber: '01 / 03',
    year: '2024',
    clientBrief: 'Create a tactile, zen-infused luxury identity for an organic cosmetic line targeting conscious luxury shoppers in Ginza, Harajuku, and Mayfair.',
    myRole: 'Brand Identity, Bottle System & Dielines, Ceramic Texture Art Direction, Unboxing Experience Design.',
    process: 'Explored sumi-e wash brush aesthetics paired with precision grotesque typography and tactile debossed bamboo paper stocks.',
    deliverables: ['Custom Amber Glass Vessels', 'Bamboo Dropper Sleeves', 'Sumi Ink Brandmark', 'Retail Bag Suite', 'Shopify Theme Tokens'],
    colorPalette: [
      { name: 'Sumi Charcoal', hex: '#1C1B1A', textDark: false },
      { name: 'Komorebi Cream', hex: '#F5F1E8', textDark: true },
      { name: 'Bamboo Moss', hex: '#4A5B47', textDark: false },
      { name: 'Kin Sun', hex: '#E27D40', textDark: false },
    ],
    caseStudyHighlight: 'Preserving ancestral botanical purity in contemporary Tokyo counters.',
    metrics: '+210% Retail Pre-Orders in Q2 Launch'
  },
  {
    id: 'aura-soundscapes',
    title: 'Aura Soundscapes',
    category: 'Reels & Motion Design',
    categorySlug: 'reels',
    tagline: 'Viral cross-platform kinetic motion design and short-form storytelling reels that drove 340% organic engagement.',
    description: 'Viral cross-platform kinetic motion design and short-form storytelling reels that drove 340% organic engagement.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmBQQ3JPvUDm3msx0QceIa-ANYPRmOQ_zbtLS-QAu7LWGB8o5-yqqJ9lecFnmdbplhNPy2NiZPw9DjsPWSSjmhMEZqZwzAeYW0rkn4a7mRgjYbdng0DcpYfnVf8gb4M8lrrXUkSbJEv4vkiE_t8zRq9BVmte1ceURFw_BVfxUs3xzRoJKmmds6UxQfPduKsOcQoQgrGAzX9vsJgVshrCz-R2kfdatNSPjcW2TrlT9vHA6Ujv4pcYTs0Q',
    imageAlt: 'Laptop computer displaying kinetic typography waves in neon warm orange on high resolution retina display',
    badge: '🔥 1.2M Views',
    badgeType: 'orange',
    location: 'Berlin, DE',
    indexNumber: '02 / 03',
    year: '2024',
    clientBrief: 'Design high-tempo vertical motion content and kinetic typography templates for electronic music festival releases and ambient audio apps.',
    myRole: 'Motion Direction, Custom Waveform Typography, 9:16 Kinetic Subtitles, Audio-Reactive Shaders.',
    process: 'Analyzed track BPM transients to trigger frame-exact typographic cuts, camera snap-zooms, and tactile screen texture overlays.',
    deliverables: ['18 Vertical Motion Reels', 'Custom After Effects Rig', 'Modular Typographic Stingers', 'Audio Spectrum Presets'],
    colorPalette: [
      { name: 'Club Obsidian', hex: '#0A0A0A', textDark: false },
      { name: 'Electric Blaze', hex: '#FF5A1F', textDark: false },
      { name: 'Acid Tangerine', hex: '#FF9432', textDark: true },
      { name: 'Pure Chalk', hex: '#FFFFFF', textDark: true },
    ],
    caseStudyHighlight: 'Engineered for thumb-stopping retention and algorithmic velocity.',
    metrics: '1.2M+ Viral Reel Views & 340% Engagement Spike'
  },
  {
    id: 'neoverve-studio',
    title: 'NeoVerve Studio',
    category: 'AI Video Commercial & Spatial Art',
    categorySlug: 'ai',
    tagline: 'Pioneering diffusion-rendered video commercial series bridging physical industrial design with digital spatial art.',
    description: 'Pioneering diffusion-rendered video commercial series bridging physical industrial design with digital spatial art.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpg67CBsOV_lY4geU_VsO0HxFs0EAlEuCmpggoLhFuE7YGR45pnH1AVQ9QbhB2sGATNckSLA7HS3nP3E5CqMJ4gw0ZQa3k4pElFGCG8Fz3l6BXcXa9APEOKS99L0aWMwpvy1dM8IWP-ZJ7_gPqX0CgVJAaOoADTBvAO9CrClVpfZou1r3mM6GxHNqKKrA9xLdLZ23UNXqlYBw243taAP0dpsY3YmSCrSJXEelHiGHF3yEDTIh6SyXEzg',
    imageAlt: 'Futuristic architectural concept gallery showroom with curved raw concrete monolithic arches and ray tracing ambient lighting',
    badge: 'AI Video Commercial & Spatial Art',
    badgeType: 'orange',
    location: 'San Francisco',
    indexNumber: '03 / 03',
    year: '2024',
    clientBrief: 'Generate cinematic architectural showroom visualizations and futuristic product film concepts blending physical geometry and generative diffusion.',
    myRole: 'Prompt Engineering & Synthetic Direction, Runway Gen-3 Motion Passes, Camera Choreography, Sound Spatialization.',
    process: 'Constructed custom LoRA model weights and prompt structures in Midjourney v6 + Runway to generate seamless 4K camera dollies through impossible galleries.',
    deliverables: ['30s Cinematic Master Film', '9 Architectural Keyframes', 'Sound Design Integration', 'Generative Concept Bible'],
    colorPalette: [
      { name: 'Raw Concrete', hex: '#2A2C2E', textDark: false },
      { name: 'Architectural Tan', hex: '#D8CBB8', textDark: true },
      { name: 'Warm Ray', hex: '#FFA44A', textDark: false },
      { name: 'Gallery Void', hex: '#111214', textDark: false },
    ],
    caseStudyHighlight: 'Blending high-end architectural physics with synthetic imagination.',
    metrics: 'Top Featured on Runway Creative Showcase'
  }
];

export const CONCEPT_BRANDS_DEEPDIVE: ProjectItem[] = [
  {
    id: 'cocona',
    title: 'Cocona',
    category: 'Beverage Identity & 3D Packaging',
    categorySlug: 'concept',
    tagline: 'Clean hydration, mindful living, and natural wellness — 16-Page Brand System & 250ml Aluminum Can Packaging.',
    description: 'Cocona is a contemporary coconut water brand created for a new generation that values clean hydration, mindful living, and natural wellness. Transforms coconut water from a drink into a symbol of balance, freshness, and contemporary wellness.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlE-TDDINQUN-7xLA_dKizMSCLlRmKYCro0PD3PJx05jezpeXY7N6o66T4B7KeKMSAa3mmZXKFUVcLk23lflqWLbZfGLS8VM9a-xkwwNFMm4Gskhu96FB1Nai3hKjCQlZ7e7OISS0bzTjtVowZa94WXFcd_aC6OhIObgeFooMBIMEazg7QM1an7SZmPa09okSnD6a3V3XkIgS6SFZWKwgWxpZtUhg_eqVnb5e3gUDHoWgHVNSkxTUJpw',
    imageAlt: 'Cocona Pure Coconut Water brand identity, tropical palm tree wordmark and 250ml aluminum can packaging system.',
    badge: '16-Page Official Deck',
    location: 'Organic Beverage D2C',
    year: '2024',
    indexNumber: 'CASE 01 / 03',
    specPill: 'Zing Script Rust • 250ml Can Dieline',
    clientBrief: 'Reimagining natural coconut hydration without generic palm clichés, creating a modern wellness ritual for young urban consumers.',
    myRole: 'Brand Designer & Founder — Hand-lettered cursive wordmark, 250ml can dielines, packaging nutrition facts, stationery suite, and multi-format outdoor billboard campaigns.',
    process: 'Paper sketch studies, cursive lettering development into palm frond canopy, 3D can splash water simulations, and real-world urban poster placement mockups.',
    deliverables: [
      '16-Page Brand Deck',
      'Zing Script Rust Font',
      '250ml Aluminum Can',
      'Packaging Dieline & Nutrition Facts',
      'Terracotta Cards',
      'Letterhead & Envelopes',
      'Founder ID Lanyards',
      'Transit Shelter Posters',
      'Highway Billboards',
      'Instagram Feed Grid'
    ],
    colorPalette: [
      { name: 'Deep Coconut Green', hex: '#1E2D16', textDark: false },
      { name: 'Vibrant Palm Leaf', hex: '#4CAF50', textDark: false },
      { name: 'Warm Cream Sand', hex: '#F8F5EE', textDark: true },
      { name: 'Tropical Sun Gold', hex: '#E2B842', textDark: true }
    ],
    caseStudyHighlight: 'Transforming natural tropical hydration into modern minimalist ritual.',
    metrics: 'Complete 16-Slide Official Portfolio Deck'
  },
  {
    id: 'seth-dhanraj',
    title: 'Seth Dhanraj',
    category: 'Luxury Heritage & Royal Identity',
    categorySlug: 'concept',
    tagline: 'Minimal. Bold. Timeless. — 20-Page Fine Jewellery Haute Joaillerie Brand Identity & Royal Packaging Suite.',
    description: 'Seth Dhanraj was created as a fictional jewellery brand inspired by timeless elegance, refined craftsmanship, and modern sophistication. Exploring premium aesthetics, atmosphere, and visual storytelling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCApdH1OsxcM5AvF2S9oK_APvGdBXJikUvASUQ9JLC-J7bIMbzoevvIq1I1h7Xft-hOfZjNHup2xFzpnBw4_YOth9MUW9sWA6QqPKLp6btWPNkoy1L_tSAmARd7xgsP1XVB40A_Y9slKxd_aWfWMIV4i7iCk-dYiw3fbIBagjaifOH_kyaYH-cpVC3oBVJizibT9rDflndMj9xG3v2470eOL8xGhuyT_UqT4IkWcoNJzqoivptF1Q8ebg',
    imageAlt: 'Seth Dhanraj fine jewellery royal brand identity, architectural gateway arch monogram, velvet jewelry packaging box and outdoor high-jewelry billboards.',
    badge: '20-Page Official Deck',
    location: 'Haute Joaillerie Maison',
    year: '2024',
    indexNumber: 'CASE 02 / 03',
    specPill: 'Garamond • Gold Foil & Velvet Box',
    clientBrief: 'Exploring premium aesthetics, storytelling, and luxury brand identity design through the timeless architectural arches of Rajputana and celestial starburst constellations.',
    myRole: 'Manager & Creative Director — Monogram crest design, velvet jewelry packaging boxes, Garamond typographical system, high-fashion campaign art direction, and luxury shopping bags.',
    process: 'Architectural gateway arch sketches, celestial 4-point star alignment, hot-stamped gold foil prototyping, and luxury retail environment placements.',
    deliverables: [
      '20-Page Brand Deck',
      'Garamond Typography',
      'Gold Foil Velvet Box',
      'Luxury Rope Shopping Bag',
      'Monogram Crest',
      'Embossed Cards',
      'Mall Atrium Lightbox',
      'Subway Triptych',
      'Highway Billboards',
      'Instagram Lookbook'
    ],
    colorPalette: [
      { name: 'Royal Midnight Navy', hex: '#0A1128', textDark: false },
      { name: 'Palace Gold Foil', hex: '#D4AF37', textDark: true },
      { name: 'Parchment White', hex: '#FDFBF7', textDark: true },
      { name: 'Deep Ochre', hex: '#C68B29', textDark: false }
    ],
    caseStudyHighlight: 'Preserving regal Marwari craftsmanship through contemporary luxury art direction.',
    metrics: 'Complete 20-Slide Official Portfolio Deck'
  },
  {
    id: 'sharpix',
    title: 'Sharpix',
    category: 'Industrial Tech & Men\'s Care',
    categorySlug: 'concept',
    tagline: 'Built for precision. Designed for performance. — 18-Page Male Grooming Hardware & Industrial Brand System.',
    description: 'Sharpix blends advanced grooming technology with a refined minimalist design language, creating products that feel powerful, modern and engineered for everyday precision.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkESwzcL2_LzBOPNuZIlhs4FSD3mo6uxcu8lMxuXEA3QDi0uqo-9NgQj3S-2WZZgxMYgRFZZkge5S4Hvw8clpT6pZQnPcJsRTgsIPOqAw3Aezzuh8L46NG1-p2hvlPxkCTTQHvIVBsPZlUW7oG2KgUxs1jLW01PCWB8gJ77TvVYxSPkzRtOYrVzGGSn2mm97XfdSGJSi-MwLldS6woMKjOP2kFOY_ZCyCwJACz28KWxRvuBPab-BSFdg',
    imageAlt: 'Sharpix precision male grooming trimmer industrial hardware orthographics, custom slash wordmark, subway triptych, and transit bus shelter campaigns.',
    badge: '18-Page Official Deck',
    location: 'Consumer Hardware',
    year: '2024',
    indexNumber: 'CASE 03 / 03',
    specPill: 'Custom Slash Wordmark • 5-View Orthographics',
    clientBrief: 'Disrupting traditional male grooming with precision engineered ergonomics, an aerodynamic visual voice, and high-impact international transit campaigns.',
    myRole: 'Brand Designer & Founder — 45-degree diagonal slash wordmark, 5-view industrial hardware documentation, corporate stationery, and viral digital & highway advertising.',
    process: 'Ergonomic line studies, 5-view hardware orthographics with LCD battery readout, digital acquisition ad creative, and international transit billboard campaigns.',
    deliverables: [
      '18-Page Brand Deck',
      'Custom Slash Wordmark',
      '5-Axis Hardware Renders',
      'Stationery & Envelopes',
      'Tactile Cards',
      'Staff ID Lanyards',
      'Subway Escalator Triptych',
      'Transit Bus Shelters',
      'Skyway Billboards',
      'Social Ad Carousel'
    ],
    colorPalette: [
      { name: 'Stealth Black', hex: '#000000', textDark: false },
      { name: 'Electric Cyan LED', hex: '#00A3FF', textDark: false },
      { name: 'Matte Graphite', hex: '#1C1E21', textDark: false },
      { name: 'Pure White', hex: '#FFFFFF', textDark: true }
    ],
    caseStudyHighlight: 'Military-grade industrial precision meets modern lifestyle consumer grooming.',
    metrics: 'Complete 18-Slide Official Portfolio Deck'
  }
];

export const DOSSIER_FOLDERS = [
  {
    id: 'dossier-01',
    num: '01 / CONCEPT BRANDS',
    count: '12 PROJECTS',
    title: 'Concept Brands',
    desc: 'Full bespoke visual systems, brand strategy, logo suites & design tokens from scratch for future-forward companies.',
    tag: 'Bespoke Visual Identity',
    actionIcon: 'arrow_forward',
    span: 'lg:col-span-7',
    filterKey: 'concept',
    subImages: [
      {
        title: 'Cocona Hydration',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZieUvuVpE9-AQpK8-A8OK8S_SLM00H9mbZMvXEIqGHjQc__gXanAAcwmwMKNKidpHq5Ft0tjr-cF_LSl7aKij9DeYwEe4fsiFcPdxdzU_mqcE8VFkxHp2aJLazK7hCI5tFo59CjzSLPsbky7FZUFDFy8_04PGT_A4bnUKOWvDB5sgBb4cAjWlg3dt0SuZzLQw7290JPEb5MH00Gbb_dCsegLkfkVS1fXoHL6FlcBZx-nMFy2OskBKNw',
        colors: ['#0B3C35', '#F4EBD9', '#FD591E']
      },
      {
        title: 'Seth Dhanraj Maison',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXnnvjyZpkWgU51U3HQy7WsRjNks194Afx6dGY6lQw-D7pHpQHFTuI-B-BJBEbfrdWJYDBmfR2HKoySpf_bJWp1mZ4UJGyO46ViGt6GBtrGy52dEGW-FUyATvrmMv3D9rZ5JhDrOHsElJMFaoqH3ux4pkspXYMN5dOOQcSO3q_Iiz2yguT2HPQpMGbwIBWfL71F3-uYIAdy45-n4u8fWPa6q8U2nwQjTc-SGzUqbbQMc4Q1aF2BPw-ug',
        colors: ['#D4AF37', '#18382B', '#800020']
      }
    ]
  },
  {
    id: 'dossier-02',
    num: '02 / REELS & MOTION',
    count: '18 VIDEOS',
    title: 'Reels & Social Media',
    desc: 'Snappy vertical storytelling reels and high-retention micro-content engineered for brand velocity.',
    tag: '140 BPM Sync',
    actionIcon: 'play_arrow',
    span: 'lg:col-span-5',
    filterKey: 'reels',
    subImages: [
      {
        title: 'VIRAL CUT // 0.8s',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5YFANM022HEpV8AELghBOszDzyh25iARhk4lXkD5jpwyWKTGgVTXAWEueAsG8AI7j2Tx9m9InjpovIN8C27Rge37GmZuXhMmZ89qxrjx5ow3Cgp8MRw4HR4Sk6rl2mJLAFRbmo_JS4lfgDNaW8EBYJ7HR0Jv3-77k545JnNiBXOFk6j18HLPozgJIjby-a0Fr1imGNkUo4ofEcy4P7ZxJIT9mSyO9K2hGNjsu3cbgBS-JHGkEZs6Tw',
        colors: ['#FF5A1F', '#000000']
      }
    ]
  },
  {
    id: 'dossier-03',
    num: '03 / AI COMMERCIALS',
    count: '09 CAMPAIGNS',
    title: 'AI Video Ads',
    desc: 'Cinema-grade synthetic advertising built with Midjourney, Runway Gen-3 & hybrid art direction.',
    tag: 'Runway Gen-3 + MJ v6',
    actionIcon: 'smart_toy',
    span: 'lg:col-span-4',
    filterKey: 'ai',
    singleImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATjxVsInMiNcI-p0N_kMX43NnvU0ICaQsxyOAb8tqgzsXZRJOE53ngIm0opWduq5nHeA6c7o5riqGq1BmPOzFfvZErp-YkTk7OEYnqC3_qi8Oc2bEj0TNyZna3LPcmRZG4fW-BJ0ZTgMLYTZXSwHiVr6MwZoqpqSch9Qvc-oPN-9m2Gvcipj6G8V6XEwgTEh4xJqdNvjQQSZrU2qTZuUlkmPnHM1exKhkQAU3-YiJh6rxI-270h1l09Q'
  },
  {
    id: 'dossier-04',
    num: '04 / PACKAGING',
    count: '05 BRANDS',
    title: 'Labels & Packaging',
    desc: 'Dielines, tactile print finishes, unboxing rituals and consumer retail shelf design systems.',
    tag: 'Tactile Foil & Dielines',
    actionIcon: 'inventory_2',
    span: 'lg:col-span-4',
    filterKey: 'packaging',
    singleImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8g6vu1pCUDvinio7oep90s6Z8CVQhjTdtdH9kUe1eAi9WubcXgcth-ksmTK1zjZOx9LiuZ-qP58VgWg46K01LIy1rwL74uVi39Pls33g-q-ZUW-DTmyJBDkJgfdU372ItjTOcDITBELrPmjeWtAKEGVLw1PF6oZPc1_KKYn5pK-epwJz0fiZZuRkIZ1qcgjvEBUwxOGzTptsue2gcMKCKl-eoRIgYeg4qxphuBeB2j-n64_PyUz66mw'
  },
  {
    id: 'dossier-05',
    num: '05 / AMAZON A+ & E-COM',
    count: '04 SUITES',
    title: 'Amazon A+ Banners',
    desc: 'Conversion-optimized e-commerce brand stores and premium Amazon A+ visual storytelling modules.',
    tag: '+42% Conversion Rate',
    actionIcon: 'shopping_bag',
    span: 'lg:col-span-4',
    filterKey: 'amazon',
    singleImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn5tWkvKRCGR6Yw96PV98OWIaAduse1JHIil3YpXOb6togOE6reocdG_45OrVjH6yVdkRS4VX7HqI7ju5j1ffyOMg6OFgDE1ABgvkZYlvWq8DSq9M6Jo-pLhcJx1mRjT2DcI8Tw6E8FC4oDaPHoQAkfD1TjAmAL0i1kWl7nqXV_xmX9bhoDRy-jEjRKNmZAjYa8oqQJRvfvkBnXFNV-leYKRtOIEADwV6qs05JeVOHrITKx5OSXeRkmw'
  }
];

export const SKILLS_LIST = [
  {
    id: 'branding',
    title: 'Branding',
    badge: 'System',
    cluster: 'identity',
    icon: 'verified',
    tag: 'Identity Core',
    description: 'Brand architectures, color chemistry, style manuals, holistic tonality.'
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    badge: 'Vector',
    cluster: 'identity',
    icon: 'interests',
    tag: 'Vector Craft',
    description: 'Bespoke logomarks, monograms, custom typographic ligatures, scalable icons.'
  },
  {
    id: 'social-media',
    title: 'Social Media Design',
    badge: 'Content',
    cluster: 'growth',
    icon: 'dynamic_feed',
    tag: 'Engagement',
    description: 'Scroll-stopping carousel systems, feed grids, interactive narrative templates.'
  },
  {
    id: 'reels',
    title: 'Reels',
    badge: '9:16 Viral',
    cluster: 'motion',
    icon: 'smartphone',
    tag: 'Vertical Video',
    badgeColor: 'orange',
    description: 'Short-form vertical video curation, rhythmic transitions, dynamic kinetic subs.'
  },
  {
    id: 'ai-video-ads',
    title: 'AI Video Ads',
    badge: 'Synthetic',
    cluster: 'motion',
    icon: 'auto_awesome',
    tag: 'Next-Gen Ads',
    iconActive: true,
    description: 'Generative visual concepts, AI avatar motion, prompt-directed 4K commercials.'
  },
  {
    id: 'packaging-labels',
    title: 'Packaging & Labels',
    badge: 'Print Ready',
    cluster: 'identity',
    icon: 'inventory_2',
    tag: 'Tangible Craft',
    description: 'Dielines, luxury finishes, foil stamps, box structures, FDA compliant labels.'
  },
  {
    id: 'amazon-a-plus',
    title: 'Amazon A+ Content',
    badge: 'Conversion',
    cluster: 'growth',
    icon: 'storefront',
    tag: 'D2C E-Com',
    description: 'Brand story modules, comparison graphs, lifestyle infocards, listing hero shots.'
  },
  {
    id: 'photo-editing',
    title: 'Photo Editing',
    badge: 'Retouch',
    cluster: 'identity',
    icon: 'tune',
    tag: 'Raster Detail',
    description: 'High-end skin retouching, product compositing, shadow match, HDR balance.'
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    badge: 'Kinetic',
    cluster: 'motion',
    icon: 'animation',
    tag: 'Dynamic Flow',
    description: 'Title animation, logo stingers, audio-reactive vectors, 2.5D visual effects.'
  },
  {
    id: 'art-direction',
    title: 'Art Direction',
    badge: 'Leadership',
    cluster: 'identity',
    icon: 'brush',
    tag: 'Creative Lead',
    description: 'Campaign concept boards, photoshoot curation, narrative mood, cohesive vision.'
  }
];

export const TOOL_ECOSYSTEM = [
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    badge: 'Raster Suite',
    status: 'Daily Driver',
    logo: 'Ps',
    bg: '#001E36',
    fg: '#31A8FF',
    desc: 'Photo manipulation, high-frequency separation, raster graphics, multi-layered visual composite key visuals, and color cast harmonization.',
    tags: ['Compositing', 'Retouch', 'Key Visuals']
  },
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    badge: 'Vector Suite',
    status: 'System Master',
    logo: 'Ai',
    bg: '#330000',
    fg: '#FF9A00',
    desc: 'Vector identity systems, mathematical logomarks, typography design, scalable iconography grids, print-ready press preflight, and dielines.',
    tags: ['Brand Marks', 'Packaging', 'Vectors']
  },
  {
    id: 'after-effects',
    name: 'Adobe After Effects',
    badge: 'Motion Graphics',
    status: 'High FPS',
    logo: 'Ae',
    bg: '#00005B',
    fg: '#9999FF',
    desc: 'Kinetic typography, expressive motion graphics, viral reel animations, camera parallax, sound sync motion, and visual composite effects.',
    tags: ['Kinetic Type', 'VFX', 'Reels']
  },
  {
    id: 'premiere-pro',
    name: 'Adobe Premiere Pro',
    badge: 'Video Editorial',
    status: 'Commercial',
    logo: 'Pr',
    bg: '#00005B',
    fg: '#EA77FF',
    desc: 'Commercial cutting, pacing design, Lumetri color grading, multi-cam assembly, high-retention audio sequencing, and social deliverable exports.',
    tags: ['Editing', 'Color Grade', 'Pacing']
  },
  {
    id: 'figma',
    name: 'Figma',
    badge: 'Design Systems',
    status: 'Collab Hub',
    logo: 'Fg',
    bg: '#1E1E1E',
    fg: '#0ACF83',
    isFigma: true,
    desc: 'Responsive UI/UX mockups, social layout templates, brand guideline hubs, interactive pitch presentations, and client collaboration boards.',
    tags: ['Components', 'Pitch Decks', 'Prototypes']
  },
  {
    id: 'ai-synthetic',
    name: 'AI & Synthetic Media',
    badge: 'Generative AI',
    status: 'Synthetic Core',
    isAiCore: true,
    desc: 'Midjourney v6, Runway Gen-3 Alpha, Kling AI video, ElevenLabs voice cloning, and Claude/GPT prompt engineering for hyper-real ad ideation.',
    tags: ['Midjourney', 'Runway Gen-3', 'Kling AI', 'ElevenLabs']
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01. Ideation',
    title: 'Prompt & Concept',
    desc: 'Midjourney + Claude moodboards & keyframes',
    icon: 'lightbulb'
  },
  {
    step: '02. Craft',
    title: 'Design & Layout',
    desc: 'Photoshop, Illustrator & Figma vector finesse',
    icon: 'design_services'
  },
  {
    step: '03. Kinetics',
    title: 'Motion & Master',
    desc: 'Runway + After Effects short-form master',
    icon: 'movie'
  }
];

export const EXPERIENCE_ITEMS = [
  {
    period: '2023 — Present',
    role: 'Lead Art Director & Generative Creative',
    company: 'Studio Rao / Independent Practice',
    location: 'Rajasthan, India • Global Remote',
    type: 'Studio Lead',
    description: 'Spearheading end-to-end brand identity rollouts, viral vertical reels, and AI-accelerated commercial video productions for international brands in the US, Europe, and India.',
    highlights: [
      'Delivered 48+ comprehensive brand and packaging systems with 100% vector press precision.',
      'Directed motion campaigns generating over 15M+ organic impressions across Instagram and TikTok.',
      'Pioneered hybrid generative AI ad production pipelines reducing commercial turnaround time by 60%.'
    ],
    skills: ['Brand Architecture', 'Runway Gen-3', 'After Effects', 'Packaging Dielines']
  },
  {
    period: '2021 — 2023',
    role: 'Senior Motion & Visual Identity Designer',
    company: 'Apex Media & Growth Lab',
    location: 'Remote',
    type: 'Full-time Lead',
    description: 'Directed visual storytelling and viral short-form motion creative for high-growth direct-to-consumer lifestyle brands and tech startups.',
    highlights: [
      'Engineered high-converting Amazon A+ suites that lifted client average conversion rates by +42%.',
      'Developed kinetic typography design systems adopted across 30+ client social accounts.',
      'Managed a cross-disciplinary pod of 4 junior designers and motion animators.'
    ],
    skills: ['Kinetic Typography', 'Amazon A+ Content', 'Premiere Pro', 'Figma Systems']
  },
  {
    period: '2019 — 2021',
    role: 'Graphic & Packaging Designer',
    company: 'Verve Creative Collective',
    location: 'Jaipur, India',
    type: 'Studio Associate',
    description: 'Created retail product packaging, tactile print collateral, brand identities, and editorial lookbooks for heritage artisanal luxury and hospitality clients.',
    highlights: [
      'Mastered print pre-flight, foil stamping, Pantone ink matching, and bespoke box structure engineering.',
      'Handcrafted custom logomarks, monogram crests, and cultural heritage iconography.'
    ],
    skills: ['Illustrator', 'Photoshop', 'Print Preflight', 'Luxury Packaging']
  }
];
