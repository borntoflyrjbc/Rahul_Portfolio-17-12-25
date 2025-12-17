import React from 'react';
import type { SkillCategory, Experience, Service, PortfolioProject, TagCategory } from './types';
import { PortfolioCategory } from './types';
import { DesignIcon, VideoIcon, TechIcon, AIIcon, VideoProductionIcon, MotionGraphicsIcon, UIDesignIcon, GraphicDesignIcon, AIEnhancedIcon, DigitalMarketingIcon } from './components/Icons';

// --- SKILLS DATA ---
export const SKILL_DATA: SkillCategory[] = [
  {
    title: 'Video & Motion',
    icon: React.createElement(VideoIcon),
    skills: [
      { name: 'Adobe Premiere Pro', level: 95 },
      { name: 'Adobe After Effects', level: 90 },
      { name: 'Adobe Audition', level: 85 },
    ],
  },
  {
    title: 'Design & Creative',
    icon: React.createElement(DesignIcon),
    skills: [
      { name: 'Adobe Photoshop', level: 95 },
      { name: 'Adobe Illustrator', level: 90 },
      { name: 'Sketch (UI/UX Design)', level: 80 },
    ],
  },
  {
    title: 'AI & Innovation',
    icon: React.createElement(AIIcon),
    skills: [
      { name: 'AI Video Production', level: 92 },
      { name: 'AI Image Generation', level: 88 },
      { name: 'Generative Content', level: 85 },
    ],
  },
  {
    title: 'Technical Skills',
    icon: React.createElement(TechIcon),
    skills: [
      { name: 'WordPress', level: 85 },
      { name: 'OBS Studio (Live media Broadcasting)', level: 90 },
      { name: 'Social Media Management', level: 88 },
    ],
  },
];

// --- EXPERIENCE DATA ---
export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Video Editor, Graphic & Motion Designer',
    company: 'Business Culture, Jabalpur (M.P)',
    period: '2023 - Present',
    description: 'Leading visual content creation and promotional video production. Pioneering AI-driven workflows for enhanced productivity.',
    achievements: [
      'Streamlined video production processes',
      'Integrated AI tools for creative workflows',
      'Managed end-to-end promotional campaigns',
    ],
  },
  {
    role: 'Production Manager',
    company: 'CIN News Network, Jabalpur (M.P)',
    period: 'November 2020 - August 2023',
    description: 'Managed end-to-end video production processes, ensuring quality & timely delivery of content. Collaborated with creative teams to enhance the visual appeal of news segments. Directed live broadcasts and handled camera operations for TV and social media platforms.',
    achievements: [
      'Managed end-to-end video production processes',
      'Enhanced the visual appeal of news segments',
      'Directed live broadcasts and handled camera operations',
    ],
  },
  {
    role: 'UI/UX & Graphic Designer',
    company: 'Cubedots (India), Indore',
    period: 'January 2019 - June 2020',
    description: 'Specialized in user-centric interface design and seamless user experiences. Led design teams in creating intuitive digital products.',
    achievements: [
      'Designed user-centric interfaces',
      'Led design team collaborations',
      'Delivered seamless user experiences',
    ],
  },
];

// --- SERVICES DATA ---
export const SERVICES_DATA: Service[] = [
  {
    icon: React.createElement(VideoProductionIcon),
    title: 'Video Production & Editing',
    description: 'Professional video editing services for promotional content, social media campaigns, and live broadcast productions.',
    features: ['Promotional Videos', 'Social Media Content', 'Live Broadcasts', 'Corporate Videos', 'Event Coverage'],
  },
  {
    icon: React.createElement(MotionGraphicsIcon),
    title: 'Motion Graphics Design',
    description: 'Creative animations and motion graphics that bring your brand to life with engaging visual storytelling.',
    features: ['Logo Animations', 'Explainer Videos', 'Title Sequences', 'UI Animations', 'Brand Motion Systems'],
  },
  {
    icon: React.createElement(UIDesignIcon),
    title: 'UI/UX Design',
    description: 'User-centric interface design that creates seamless experiences and drives engagement across digital platforms.',
    features: ['Website Design', 'Mobile App UI', 'User Research', 'Wireframing', 'Prototyping'],
  },
  {
    icon: React.createElement(GraphicDesignIcon),
    title: 'Graphic Design',
    description: 'Comprehensive graphic design solutions from brand identity to marketing materials that make lasting impressions.',
    features: ['Social Media Graphics', 'Marketing Materials', 'Digital Banners', 'Infographics', 'Web Graphics'],
  },
  {
    icon: React.createElement(AIEnhancedIcon),
    title: 'AI-Enhanced Creative Solutions',
    description: 'Cutting-edge AI integration that accelerates creative workflows and unlocks new possibilities in visual content creation.',
    features: ['AI Video Production', 'Automated Workflows', 'Content Generation', 'Smart Editing', 'Prompt Engineering'],
  },
  {
    icon: React.createElement(DigitalMarketingIcon),
    title: 'Digital Marketing Visuals',
    description: 'Strategic visual content designed specifically for digital marketing campaigns that convert and engage audiences.',
    features: ['Social Media Campaigns', 'Ad Creatives', 'Email Templates', 'Landing Page Design', 'Marketing Automation'],
  },
];

// --- HELPER FUNCTIONS ---

// Helper to extract a clean title from filename
const getTitleFromFilename = (path: string): string => {
  const filename = path.split('/').pop() || '';
  // Remove extension
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  // Replace dashes/underscores with spaces
  return nameWithoutExt.replace(/[-_]/g, " ");
};

const getTagCategory = (tag: string): TagCategory => {
  const lowerTag = tag.toLowerCase();
  if (lowerTag.includes('real estate') || lowerTag.includes('villa') || lowerTag.includes('property')) return 'real-estate';
  if (lowerTag.includes('event') || lowerTag.includes('fest') || lowerTag.includes('highlight')) return 'event';
  if (lowerTag.includes('fashion') || lowerTag.includes('model')) return 'fashion';
  if (lowerTag.includes('corporate') || lowerTag.includes('informational') || lowerTag.includes('political')) return 'corporate';
  if (lowerTag.includes('social') || lowerTag.includes('reel') || lowerTag.includes('whatsapp')) return 'social';
  return 'event'; // Default
};

// Updated for local files: Returns empty string for local videos as we can't auto-generate thumbnails easily without a backend
const generatePosterUrl = (videoUrl: string): string => {
  return ""; 
};

// --- RAW FILE PATHS (LOCAL) ---

const graphicDesignPaths = [
  "/My Work/Graphic-design/IMG-20250820-WA0005.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0006.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0008.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0009.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0010.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0011.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0013.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0015.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0016.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0017.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0018.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0019.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0020.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0021.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0022.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0023.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0024.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0025.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0026.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0027.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0028.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0029.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0031.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0032.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0033.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0034.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0035.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0036.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0038.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0039.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0040.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0041.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0042.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0045.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0046.jpg",
  "/My Work/Graphic-design/IMG-20250820-WA0047.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-18 at 15.09.31_a11f9345.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-18 at 15.09.33_2fc082d1.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-18 at 15.09.33_f920eefe.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-18 at 15.09.34_543ab71a.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-18 at 15.09.35_90e2685d.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-18 at 15.09.35_4835e8d0.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-18 at 15.09.36_d70930e4.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-18 at 15.09.37_0e51374d.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-18 at 15.09.38_eda59347.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-20 at 08.49.17_2198f960.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-20 at 08.49.18_0644ae57.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-20 at 08.50.16_4ba31d69.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-20 at 08.50.40_096f610b.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-20 at 08.51.10_2c0ed84d.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-20 at 08.51.12_6207ad33.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-20 at 08.51.13_054639a2.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-20 at 09.06.47_9f9648b4.jpg",
  "/My Work/Graphic-design/WhatsApp Image 2025-08-21 at 14.11.01_b0fba0ff.jpg",
  "/My Work/Graphic-design/Why go through the stress of building from scratchUdyam Villas bring you the best of both worlds.jpg",
  "/My Work/Graphic-design/छोटी सी कीमत में, बड़ी सी ख़ुशी!Your dream home in Jabalpur now starts at just ₹37.99 Lacs!2 & 3.jpg"
];

const videoMotionPaths = [
  "/My Work/Video-motion/2K Udyam Independence Day.mp4",
  "/My Work/Video-motion/Aqmmugp-Jnmj-Ul1sdzpuwtysxh7opme3uu8ezyvqbbe D50liir Yxrqmpzz4y9huq9 Ktxaeiougfxixl5ybsghbbiczanemvy2py.mp4",
  "/My Work/Video-motion/Aqmufnidubz9dn Ywyvfyzr8k3kvctgh2aotufxk5kttjdra6dcirkvcteobma6enzpw8p7ucgf5cdhvt1pl60giw5ebvcdam2nzwj0.mp4",
  "/My Work/Video-motion/Aqoxnliqlbbb4oiy6hmzvwkpfk6rug1ymyp-4Wlakcabnppgxum4jje9xg6wct7pkppke5hm Uvcue32c3c8ztbdnoy8wk-Yo0il8ca.mp4",
  "/My Work/Video-motion/Aqpnhjy6c6g-Dy2kdddk9tgztrxd-Uboa1lcbi6g4f1jrckpvf5bdjc0uf1ik8g4tzpmut9v-Qph6gdb83k25y9geno Edghrxktwwq.mp4",
  "/My Work/Video-motion/Brain Discovery 28-12-24 1.mp4",
  "/My Work/Video-motion/Echoes 2025 – A Night To Remember! 🎶✨Hitkarini College Of Engineering And Technology Lit Up The.mp4",
  "/My Work/Video-motion/Hcet-Informational-Video.mp4",
  "/My Work/Video-motion/Hcet-Promovideo-1.mp4",
  "/My Work/Video-motion/Hitkarini Hills Echoes - Live Performance By Tushar Joshi, Satyam Tiwari.mp4",
  "/My Work/Video-motion/Ipap Political Campaign.mp4",
  "/My Work/Video-motion/Ipap Political Video.mp4",
  "/My Work/Video-motion/Krishnashray Senior Living Jabalpur Video-Rev.mp4",
  "/My Work/Video-motion/Krishnashray Video-1.mp4",
  "/My Work/Video-motion/Model Reel-Edit.mp4",
  "/My Work/Video-motion/Motion Graphics Promo - Krishnashray 1080-1080.mp4",
  "/My Work/Video-motion/Motion-Book-Animation.mp4",
  "/My Work/Video-motion/Nakshatranagar-Phase 5 - Campaign.mp4",
  "/My Work/Video-motion/Nakshatra-Phase-5-Launch.mp4",
  "/My Work/Video-motion/On This Auspicious Maha Shivratri, Take A Step Towards Your Dream Home At Udyam Navoday—Where Pe.mp4",
  "/My Work/Video-motion/Own Your Dream Home!Nakshatra Nagar Presents 2Bhk 800Sq Ft Singlex At Just ₹40 Lacs! That Too W.mp4",
  "/My Work/Video-motion/Sam Cricket.mp4",
  "/My Work/Video-motion/Sam Cricket-Worldcup Campaign.mp4",
  "/My Work/Video-motion/Sam Model Edit.mp4",
  "/My Work/Video-motion/Sam Model-Edit.mp4",
  "/My Work/Video-motion/Sam Winter Fest-Rev.mp4",
  "/My Work/Video-motion/Sam-Christmas-Slideshow.mp4",
  "/My Work/Video-motion/Sam-Max.mp4",
  "/My Work/Video-motion/Silk N Salt Render 1.mp4",
  "/My Work/Video-motion/Snapinsta.App Video 10000000 1341768590061998 2696688742582291465 N.mp4",
  "/My Work/Video-motion/Snapinsta.App Video 414711859 2116385922044653 1106309403354473494 N.mp4",
  "/My Work/Video-motion/Ucb Rev.mp4",
  "/My Work/Video-motion/Udam Projectbase-Edit.mp4",
  "/My Work/Video-motion/Udyam Final.mp4",
  "/My Work/Video-motion/Udyam Independence Day Campaign.mp4",
  "/My Work/Video-motion/Udyam Villa 4-12-25.mp4",
  "/My Work/Video-motion/Urban 4.mp4",
  "/My Work/Video-motion/Urban 7.mp4",
  "/My Work/Video-motion/Vastraa Reel-Edit.mp4",
  "/My Work/Video-motion/Vectus Independence Day-Wishes.mp4",
  "/My Work/Video-motion/Vid-20250820-Wa0002.mp4",
  "/My Work/Video-motion/Video 4 - Udyam- 1.mp4",
  "/My Work/Video-motion/Whatsapp Video 2025-08-20 At 09.06.46 190811Eb.mp4",
  "/My Work/Video-motion/Whatsapp Video 2025-08-20 At 12.52.15 03F23c23.mp4",
  "/My Work/Video-motion/Whatsapp Video 2025-08-20 At 12.52.22 B36a446d.mp4",
  "/My Work/Video-motion/Whatsapp Video 2025-08-20 At 12.54.44 3C123b35.mp4",
  "/My Work/Video-motion/Whatsapp Video 2025-08-23 At 07.18.42 59Acb461.mp4",
  "/My Work/Video-motion/Winter Fest Horizontal.mp4"
];

const aiCreationPaths = [
  "/My Work/Ai-creation/Comp-Cinematic-Ad-Rahul .mp4"
];

// --- PORTFOLIO DATA GENERATION ---

// 1. Graphics & Design
const graphicProjects: PortfolioProject[] = graphicDesignPaths.map((url, index) => ({
  id: 100 + index,
  category: PortfolioCategory.GRAPHIC,
  image: url, // Local image path
  title: 'Graphics & Design',
  description: 'A custom graphic created for digital marketing and brand engagement.',
  tags: ['Social Media Post', 'Design'],
  tagCategory: 'social'
}));

// 2. Video & Motion
const videoProjects: PortfolioProject[] = videoMotionPaths.map((path, index) => {
  const title = getTitleFromFilename(path);
  const tagCategory = getTagCategory(title);
  
  return {
    id: 200 + index,
    category: PortfolioCategory.VIDEO_MOTION,
    videoUrl: path, // Local video path
    image: "", // Empty string for local videos (Browser will show first frame or use video poster logic if implemented)
    title: title,
    description: `A creative video project featuring ${title}.`,
    tags: ['Video', tagCategory],
    tagCategory: tagCategory,
  };
});

// 3. AI Creation
const aiProjects: PortfolioProject[] = aiCreationPaths.map((path, index) => ({
  id: 400 + index,
  category: PortfolioCategory.AI,
  videoUrl: path,
  image: "",
  title: 'Cinematic Ad Composition',
  description: 'Innovative visual content generated using advanced AI tools.',
  tags: ['AI Creation', 'Cinematic'],
  tagCategory: 'motion',
}));

// --- EXPORT FINAL DATA ---
export const PORTFOLIO_PROJECTS_DATA: PortfolioProject[] = [
  ...graphicProjects,
  ...videoProjects,
  ...aiProjects,
];