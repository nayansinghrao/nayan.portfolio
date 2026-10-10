export interface ProfileData {
  fullName: string;
  shortName: string;
  title: string;
  email?: string;
  location: string;
  linkedInUrl: string;
  behanceUrl: string;
}

export const PROFILE_DATA: ProfileData = {
  fullName: 'Nayan Singh Rao',
  shortName: 'Nayan',
  title: 'Graphic Designer',
  email: 'nayansinghrao.designs@gmail.com',
  location: 'Rajasthan, India',
  linkedInUrl: 'https://www.linkedin.com/in/nayansinghrao',
  behanceUrl: 'https://www.behance.net/nayansinghrao',
};

export const ABOUT_DATA = {
  bio: "I'm a graphic designer based in Rajasthan, India, focused on branding, visual identity, logo design and packaging design. I currently work at Jundalo Technologies, creating AI-generated video ads, social media reels and graphic design work.",
  education: {
    degree: 'Arts',
    university: 'Govind Guru Tribal University (GGTU), Banswara',
    years: '2023 - 2026',
  },
  currentWorkplace: 'Jundalo Technologies',
  location: 'Rajasthan, India',
};

// Skills as tags:
// Branding, Logo Design, Packaging and Label Design, Social Media Design, Reels, AI Video Ads, Amazon A+ Content, Video Editing
export const SKILLS_TAGS = [
  'Branding',
  'Logo Design',
  'Packaging and Label Design',
  'Social Media Design',
  'Reels',
  'AI Video Ads',
  'Amazon A+ Content',
  'Video Editing',
] as const;

// Tools as icon cards:
// Adobe Photoshop, Adobe Illustrator, CorelDRAW (basic), Adobe Premiere Pro, Adobe After Effects, Canva.
// AI tools: ChatGPT, Claude, Stitch, Google AI Studio.
export interface ToolItem {
  id: string;
  name: string;
  category: 'design' | 'ai';
  shortTag?: string;
  iconName?: string;
}

export const DESIGN_TOOLS: ToolItem[] = [
  { id: 'photoshop', name: 'Adobe Photoshop', category: 'design', shortTag: 'Ps' },
  { id: 'illustrator', name: 'Adobe Illustrator', category: 'design', shortTag: 'Ai' },
  { id: 'coreldraw', name: 'CorelDRAW (basic)', category: 'design', shortTag: 'CDR' },
  { id: 'premiere', name: 'Adobe Premiere Pro', category: 'design', shortTag: 'Pr' },
  { id: 'aftereffects', name: 'Adobe After Effects', category: 'design', shortTag: 'Ae' },
  { id: 'canva', name: 'Canva', category: 'design', shortTag: 'Canva' },
];

export const AI_TOOLS: ToolItem[] = [
  { id: 'chatgpt', name: 'ChatGPT', category: 'ai', shortTag: 'GPT' },
  { id: 'claude', name: 'Claude', category: 'ai', shortTag: 'Claude' },
  { id: 'stitch', name: 'Stitch', category: 'ai', shortTag: 'Stitch' },
  { id: 'ai-studio', name: 'Google AI Studio', category: 'ai', shortTag: 'AI' },
];

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description?: string;
}

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Graphic Designer',
    company: 'Jundalo Technologies',
    period: 'Jul 2026 - Present',
    description: 'AI-generated video ads, social media reels and graphic design work.',
  },
  {
    id: 'exp-2',
    role: 'Graphic Design Intern',
    company: 'Uparrow Design, Dungarpur',
    period: 'Dec 2025 - May 2026',
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  behanceUrl: string;
  category?: string;
  categorySlug?: string;
  badge?: string;
  image?: string;
  imageAlt?: string;
  indexNumber?: string;
  tagline?: string;
  location?: string;
  year?: string;
  clientBrief?: string;
  myRole?: string;
  process?: string;
  deliverables?: string[];
  colorPalette?: { name: string; hex: string; textDark?: boolean }[];
  caseStudyHighlight?: string;
  specPill?: string;
  metrics?: string;
}

export const CONCEPT_BRANDS: ProjectItem[] = [
  {
    id: 'cocona',
    title: 'Cocona',
    tag: 'Concept Project',
    description: 'Premium coconut water branding',
    behanceUrl: 'https://www.behance.net/gallery/249545371/Cocona-Premium-Coconut-Water-Branding',
    badge: 'Concept Project',
    indexNumber: '01 / 03',
  },
  {
    id: 'seth-dhanraj',
    title: 'Seth Dhanraj',
    tag: 'Concept Project',
    description: 'A jewellery brand',
    behanceUrl: 'https://www.behance.net/gallery/249332109/Seth-Dhanraj-A-Jewellery-Brand',
    badge: 'Concept Project',
    indexNumber: '02 / 03',
  },
  {
    id: 'sharpix',
    title: 'Sharpix',
    tag: 'Concept Project',
    description: 'Premium grooming technology branding',
    behanceUrl: 'https://www.behance.net/gallery/249624569/Sharpix-Premium-Grooming-Technology-Branding',
    badge: 'Concept Project',
    indexNumber: '03 / 03',
  },
];

export const FEATURED_PROJECTS = CONCEPT_BRANDS;
export const CONCEPT_BRANDS_DEEPDIVE = CONCEPT_BRANDS;
export const DOSSIER_FOLDERS: any[] = [];
export const TOOL_ECOSYSTEM: any[] = [];
