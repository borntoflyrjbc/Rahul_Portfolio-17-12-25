
import React from 'react';
import type { SkillCategory, Experience, Service, PortfolioProject, TagCategory } from './types';
import { PortfolioCategory } from './types';
import { DesignIcon, VideoIcon, TechIcon, AIIcon, VideoProductionIcon, MotionGraphicsIcon, UIDesignIcon, GraphicDesignIcon, AIEnhancedIcon, DigitalMarketingIcon } from './components/Icons';

export const SKILL_DATA: SkillCategory[] = [
  {
    title: 'Video & Motion',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(VideoIcon),
    skills: [
      { name: 'Adobe Premiere Pro', level: 95 },
      { name: 'Adobe After Effects', level: 90 },
      { name: 'Adobe Audition', level: 85 },
    ],
  },
  {
    title: 'Design & Creative',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(DesignIcon),
    skills: [
      { name: 'Adobe Photoshop', level: 95 },
      { name: 'Adobe Illustrator', level: 90 },
      { name: 'Sketch (UI/UX Design)', level: 80 },
    ],
  },
  {
    title: 'AI & Innovation',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(AIIcon),
    skills: [
      { name: 'AI Video Production', level: 92 },
      { name: 'AI Image Generation', level: 88 },
      { name: 'Generative Content', level: 85 },
    ],
  },
  {
    title: 'Technical Skills',
    // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
    icon: React.createElement(TechIcon),
    skills: [
      { name: 'WordPress', level: 85 },
      { name: 'OBS Studio (Live media Broadcasting)', level: 90 },
      { name: 'Social Media Management', level: 88 },
    ],
  },
];

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

export const SERVICES_DATA: Service[] = [
    {
        // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement(VideoProductionIcon),
        title: 'Video Production & Editing',
        description: 'Professional video editing services for promotional content, social media campaigns, and live broadcast productions.',
        features: ['Promotional Videos', 'Social Media Content', 'Live Broadcasts', 'Corporate Videos', 'Event Coverage'],
    },
    {
        // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement(MotionGraphicsIcon),
        title: 'Motion Graphics Design',
        description: 'Creative animations and motion graphics that bring your brand to life with engaging visual storytelling.',
        features: ['Logo Animations', 'Explainer Videos', 'Title Sequences', 'UI Animations', 'Brand Motion Systems'],
    },
    {
        // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement(UIDesignIcon),
        title: 'UI/UX Design',
        description: 'User-centric interface design that creates seamless experiences and drives engagement across digital platforms.',
        features: ['Website Design', 'Mobile App UI', 'User Research', 'Wireframing', 'Prototyping'],
    },
    {
        // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement(GraphicDesignIcon),
        title: 'Graphic Design',
        description: 'Comprehensive graphic design solutions from brand identity to marketing materials that make lasting impressions.',
        features: ['Social Media Graphics', 'Marketing Materials', 'Digital Banners', 'Infographics', 'Web Graphics'],
    },
    {
        // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement(AIEnhancedIcon),
        title: 'AI-Enhanced Creative Solutions',
        description: 'Cutting-edge AI integration that accelerates creative workflows and unlocks new possibilities in visual content creation.',
        features: ['AI Video Production', 'Automated Workflows', 'Content Generation', 'Smart Editing', 'Prompt Engineering'],
    },
    {
        // FIX: Replaced JSX with React.createElement to be valid in a .ts file.
        icon: React.createElement(DigitalMarketingIcon),
        title: 'Digital Marketing Visuals',
        description: 'Strategic visual content designed specifically for digital marketing campaigns that convert and engage audiences.',
        features: ['Social Media Campaigns', 'Ad Creatives', 'Email Templates', 'Landing Page Design', 'Marketing Automation'],
    },
];

const graphicDesignImages = [
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/_Live%20where%20everything%20you%20need%20is%20just%20minutes%20away!%20From%20schools%20and%20hospitals%20to%20shopping%20and%20(1).jpg?updatedAt=1758874073252",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-09-02%20at%2017.52.12_4684b15e.jpg?updatedAt=1758873218977",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/get.jpeg?updatedAt=1758874073118",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/Experience%20the%20perfect%20blend%20of%20modern%20amenities,%20serene%20surroundings,%20and%20affordable%20luxury.%20Ma.jpg?updatedAt=1758874072982",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/Discover%20your%20dream%20home!We_re%20proud%20to%20showcase%20our%20stunning%201%20&%202%20BHK%20flats,%20designed%20for%20comf.jpg?updatedAt=1758874072926",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/This%20_WorldEnvironmentDay,%20let_s%20unlock%20the%20key%20to%20a%20greener%20tomorrow!%20The%20key%20to%20a%20better%20tomor.jpg?updatedAt=1758874072896",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/Upgrade%20to%20a%20Prime%20Lifestyle%20at%20Nakshatra%20Nagar,%20Jabalpur!%20_Looking%20for%20a%20modern%20home%20in%20a%20prim.jpg?updatedAt=1758874073016",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-09-26%20at%2013.16.21_35e2be20.jpg?updatedAt=1758872925714",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0045.jpg?updatedAt=1759058443894",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-09-25%20at%2016.10.03_c9fa90c9.jpg?updatedAt=1758872596610",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/_Why%20settle%20for%20less%20when%20you%20can%20live%20smartStandalone%20colonies%20offer%20homes.Townships%20like%20Naks.jpg?updatedAt=1758874073328",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/Century%20group%20X%20Nakshatra%20Nagar%20has%20the%20key%20to%20your%20dream%20HOME%20_.%20Visit%20now!!!%20_centurygroup%20_k.jpg?updatedAt=1758874073441",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/This%20Raksha%20Bandhan,%20celebrate%20the%20bond%20of%20love,%20care,%20and%20protection%20in%20a%20place%20that%20feels%20just.jpg?updatedAt=1758874073393",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/Welcoming%20Lord%20Ganesha%20into%20our%20lives%20and%20homes%20with%20love,%20positivity,%20and%20new%20beginnings.%20_%E2%9C%A8Th.jpg?updatedAt=1758874073712",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/National%20Senior%20Citizen%20Day_%20_Because%20comfort,%20care,%20and%20community%20matter%20the%20most%20for%20those%20wh.jpg?updatedAt=1758874074149",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0006.jpg?updatedAt=1759058434490",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0029.jpg?updatedAt=1759058438017",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0011.jpg?updatedAt=1759058439240",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0025.jpg?updatedAt=1759058440024",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0010.jpg?updatedAt=1759058440573",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0028.jpg?updatedAt=1759058440698",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0031.jpg?updatedAt=1759058440739",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0009.jpg?updatedAt=1759058440784",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-08-18%20at%2015.09.31_a11f9345.jpg?updatedAt=1759058440838",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-08-20%20at%2008.51.10_2c0ed84d.jpg?updatedAt=1759058441144",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0041.jpg?updatedAt=1759058441200",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0027.jpg?updatedAt=1759058441260",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0032.jpg?updatedAt=1759058441891",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-08-20%20at%2009.06.47_9f9648b4.jpg?updatedAt=1759058442266",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0040.jpg?updatedAt=1759058442392",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0005.jpg?updatedAt=1759058442436",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-08-20%20at%2008.51.12_6207ad33.jpg?updatedAt=1759058442734",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0008.jpg?updatedAt=1759058442822",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0039.jpg?updatedAt=1759058442864",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0046.jpg?updatedAt=1759058443059",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-08-20%20at%2008.49.18_0644ae57.jpg?updatedAt=1759058443290",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-08-20%20at%2008.50.16_4ba31d69.jpg?updatedAt=1759058443956",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-08-18%20at%2015.09.33_f920eefe.jpg?updatedAt=1759058444596",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0035.jpg?updatedAt=1759058444812",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0016.jpg?updatedAt=1759058444836",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0024.jpg?updatedAt=1759058445151",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0042.jpg?updatedAt=1759058445162",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0047.jpg?updatedAt=1759058445189",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-08-18%20at%2015.09.33_2fc082d1.jpg?updatedAt=1759058445202",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-08-18%20at%2015.09.37_0e51374d.jpg?updatedAt=1759058445205",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0013.jpg?updatedAt=1759058445240",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0012.jpg?updatedAt=1759058445351",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0021.jpg?updatedAt=1759058445361",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0033.jpg?updatedAt=1759058445443",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0038.jpg?updatedAt=1759058445467",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0018.jpg?updatedAt=1759058445498",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0017.jpg?updatedAt=1759058445550",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0019.jpg?updatedAt=1759058445556",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-08-20%20at%2008.50.40_096f610b.jpg?updatedAt=1759058445689",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0020.jpg?updatedAt=1759058445680",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0022.jpg?updatedAt=1759058445838",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0015.jpg?updatedAt=1759058445824",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0034.jpg?updatedAt=1759058445852",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-08-18%20at%2015.09.34_543ab71a.jpg?updatedAt=1759058446026",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/IMG-20250820-WA0023.jpg?updatedAt=1759058446016",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-08-18%20at%2015.09.35_4835e8d0.jpg?updatedAt=1759058446613",
  "https://ik.imagekit.io/borntoflyrj/Social%20Media%20Posts/WhatsApp%20Image%202025-08-18%20at%2015.09.38_eda59347.jpg?updatedAt=1759058445001",
];

const graphicProjects: PortfolioProject[] = [...new Set(graphicDesignImages)].map((url, index) => ({
  id: 10 + index,
  category: PortfolioCategory.GRAPHIC,
  image: url,
  title: 'Graphics & Design',
  description: 'A custom graphic created for digital marketing and brand engagement.',
  tags: ['Social Media Post'],
}));

const videoData = [
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/udyam.mp4', tag: 'Event Highlight', title: 'Udyam Highlight' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Sam-Max.mp4?updatedAt=1765866780243', tag: 'Fashion Reel' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Udyam_diwali_wishes-2025-Whatsapp.mp4?updatedAt=1761718382422', tag: 'Festive Promo' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/UDYAM%20REVISED-24-9-25.mp4?updatedAt=1758872953393', tag: 'Real Estate Promo' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/winter%20fest%20horizontal.mp4?updatedAt=1759060829914', tag: 'Event Highlights' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/sam%20winter%20fest-rev.mp4?updatedAt=1759060834938', tag: 'Event Reel' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Vectus_independence%20day-wishescomp.mp4?updatedAt=1759062857826', tag: 'Corporate Promo' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/UCB_rev.mp4?updatedAt=1759060783239', tag: 'Fashion Highlights' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/ipap_political_campaign.mp4?updatedAt=1759058569016', tag: 'Political Campaign' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Krishnashray%20Senior%20Living%20Jabalpur%20video-rev.mp4?updatedAt=1759060747352', tag: 'Senior Living Promo' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/brain%20discovery_28-12-24_1.mp4?updatedAt=1759060692556', tag: 'Event Highlights' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/utkarsh%20developers.mp4?updatedAt=1759063004340', tag: 'Real Estate Promo' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Own%20your%20dream%20home!Nakshatra%20Nagar%20presents%202BHK%20800sq%20ft%20%20Singlex%20at%20just%20%E2%82%B940%20lacs!%20That%20too%20w.mp4?updatedAt=1759060540623', tag: 'Real Estate Ad' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/nakshatranagar-phase%205%20-%20campaign%20.mp4?updatedAt=1759060536750', tag: 'Real Estate Campaign' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/WhatsApp%20Video%202025-08-23%20at%2007.18.42_59acb461.mp4?updatedAt=1759060485715', tag: 'Social Media Promo' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/WhatsApp%20Video%202025-08-20%20at%2012.54.44_3c123b35.mp4?updatedAt=1759060485581', tag: 'Real Estate Video' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/udyam%20independence%20day%20campaign.mp4?updatedAt=1759060404454', tag: 'Independence Day Campaign' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/nakshatra-phase-5-launch.mp4?updatedAt=1759060341127', tag: 'Product Launch' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Vastraa_reel-edit.mp4/ik-video.mp4?updatedAt=1759059952825', tag: 'Fashion Reel' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/udyam%20final.mp4?updatedAt=1759059940135', tag: 'Event Highlights' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Snapinsta.app_video_10000000_1341768590061998_2696688742582291465_n.mp4?updatedAt=1759059893916', tag: 'Event Reel' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/ECHOES%202025%20_%20A%20Night%20to%20Remember!%20_%E2%9C%A8Hitkarini%20College%20of%20Engineering%20and%20Technology%20lit%20up%20the.mp4?updatedAt=1759059887997', tag: 'College Event' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Sam_model_edit.mp4?updatedAt=1759059874324', tag: 'Fashion Reel' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/motion-book-animation.mp4?updatedAt=1759059863697', tag: 'Social Media Reel' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Hcet-promovideo-1.mp4?updatedAt=1759059847910', tag: 'Corporate Promo' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/silk_n_salt_render%201.mp4?updatedAt=1759059844948', tag: 'Fashion Reel' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Urban%207.mp4/ik-video.mp4?updatedAt=1759059781837', tag: 'Social Media Reel' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Sam_model-Edit.mp4?updatedAt=1759059744357', tag: 'Fashion Reel' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Urban%204.mp4/ik-video.mp4?updatedAt=1759059728200', tag: 'Social Media Reel' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/model_reel-edit.mp4?updatedAt=1759058893141', tag: 'Fashion Reel' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/ipap_political_video.mp4?updatedAt=1759058892548', tag: 'Political Campaign' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/WhatsApp%20Video%202025-08-20%20at%2012.52.15_03f23c23.mp4?updatedAt=1759058860811', tag: 'Event Highlights' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/sam-christmas-slideshow.mp4?updatedAt=1759058856783', tag: 'Event Slideshow' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/WhatsApp%20Video%202025-08-20%20at%2009.06.46_190811eb.mp4?updatedAt=1759058820105', tag: 'Event Highlights' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/hcet-informational-video.mp4?updatedAt=1759058781464', tag: 'Corporate Video' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/WhatsApp%20Video%202025-08-20%20at%2012.52.22_b36a446d.mp4?updatedAt=1759058750758', tag: 'Social Media Promo' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/udam_projectbase-edit.mp4?updatedAt=1759058709986', tag: 'Real Estate Promo' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Hitkarini%20Hills%20Echoes%20-%20Live%20Performance%20by%20Tushar%20Joshi,%20Satyam%20Tiwari%20.mp4?updatedAt=1759058705054', tag: 'Live Performance' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/sam_cricket.mp4?updatedAt=1759058702229', tag: 'Event Highlights' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/sam_cricket-worldcup_campaign.mp4?updatedAt=1759058660459', tag: 'World Cup Campaign' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Snapinsta.app_video_414711859_2116385922044653_1106309403354473494_n.mp4?updatedAt=1759058636797', tag: 'Real Estate Promo' },
    { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/VID-20250820-WA0002.mp4?updatedAt=1759058597996', tag: 'Event Highlights' },
];

const motionGraphicsData = [
  { url: 'https://ik.imagekit.io/borntoflyrj/Motion%20graphics/AQMufniDUBZ9DN_YwyVfyzR8k3KvctGH2aOtuFXk5KtTjdRA6DcIRkVcTeoBma6ENzpW8p7Ucgf5CdHvt1pl60giW5eBvCdAm2Nzwj0.mp4?updatedAt=1759061387507', tag: 'Motion Graphic', title: 'Motion Graphics Showcase A' },
  { url: 'https://ik.imagekit.io/borntoflyrj/Motion%20graphics/AQPNHJy6C6g-dY2KDDDk9tgztrXD-ubOa1lCBI6G4f1JRcKpVf5BDjc0UF1ik8G4tzpmUT9v-Qph6Gdb83K25y9gEnO_EdGhRXktWWQ.mp4?updatedAt=1759061387112', tag: 'Motion Graphic', title: 'Motion Graphics Showcase B' },
  { url: 'https://ik.imagekit.io/borntoflyrj/Motion%20graphics/On%20this%20auspicious%20Maha%20shivratri,%20take%20a%20step%20towards%20your%20dream%20home%20at%20Udyam%20Navoday_where%20pe.mp4?updatedAt=1759061393741', tag: 'Festive Promo' },
  { url: 'https://ik.imagekit.io/borntoflyrj/Motion%20graphics/AQOxnlIqlBBb4Oiy6HmZvwkpfk6rUg1yMyp-4WlakCAbnppGxUm4jjE9Xg6wCt7pKPPKe5hm_UVCuE32c3C8ZtBDNoY8Wk-yo0Il8CA.mp4?updatedAt=1759061386614', tag: 'Logo Animation' },
  { url: 'https://ik.imagekit.io/borntoflyrj/Motion%20graphics/KRISHNASHRAY_VIDEO-1.mp4?updatedAt=1759061446277', tag: 'Explainer Graphic' },
  { url: 'https://ik.imagekit.io/borntoflyrj/Motion%20graphics/motion%20graphics%20promo%20-%20krishnashray%201080-1080.mp4?updatedAt=1759061672751', tag: 'Promotional Graphic' },
  { url: 'https://ik.imagekit.io/borntoflyrj/Motion%20graphics/2k_Udyam_independence%20day.mp4?updatedAt=1759061725945', tag: 'Independence Day Promo' },
  { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/This%20Mahaveer%20Jayanti,%20let_s%20honour%20the%20strength%20of%20values%20that%20shape%20both%20our%20lives%20and%20the%20spa.mp4?updatedAt=1758874130893', tag: 'Mahaveer Jayanti Promo' },
  { url: 'https://ik.imagekit.io/borntoflyrj/Video%20Editing/Nirmal%20glass%20industries%20-%20v2.mp4?updatedAt=1758873311744', tag: 'Corporate Motion Graphic' },
];

const aiCreationData = [
  { 
    url: 'https://ik.imagekit.io/borntoflyrj/Ai%20Visual%20Creation/comp-cinematic-ad-rahul_.mp4?updatedAt=1765866610164', 
    title: 'Cinematic Ad Composition',
    tag: 'AI Creation' 
  }
];

const getTagCategory = (tag: string): TagCategory => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes('real estate')) return 'real-estate';
    if (lowerTag.includes('event')) return 'event';
    if (lowerTag.includes('fashion')) return 'fashion';
    if (lowerTag.includes('corporate') || lowerTag.includes('informational') || lowerTag.includes('political')) return 'corporate';
    if (lowerTag.includes('social') || lowerTag.includes('podcast') || lowerTag.includes('story')) return 'social';
    return 'event'; // Default
};

const generatePosterUrl = (videoUrl: string): string => {
    const ikVideoMarker = '/ik-video.mp4';
    
    const urlParts = videoUrl.split('?');
    let path = urlParts[0];
    const query = urlParts.length > 1 ? `?${urlParts[1]}` : '';

    // If the special ImageKit marker exists, remove it to get the base asset path
    if (path.endsWith(ikVideoMarker)) {
        path = path.substring(0, path.length - ikVideoMarker.length);
    }
    
    // Append the ImageKit thumbnail transformer to the base asset path
    // This is a more reliable method than replacing file extensions.
    const thumbnailUrl = `${path}/ik-thumbnail.jpg`;
    
    // Re-append the original query string to the new thumbnail URL
    return thumbnailUrl + query;
};


const videoProjects: PortfolioProject[] = videoData.map((video, index) => ({
    id: 200 + index,
    category: PortfolioCategory.VIDEO_MOTION, // Consolidated Category
    videoUrl: video.url,
    image: generatePosterUrl(video.url),
    title: (video as any).title || 'Video Editing',
    description: `A video project showcasing skills in ${video.tag}.`,
    tags: [video.tag],
    tagCategory: getTagCategory(video.tag),
}));

const motionGraphicsProjects: PortfolioProject[] = motionGraphicsData.map((video, index) => ({
    id: 300 + index,
    category: PortfolioCategory.VIDEO_MOTION, // Consolidated Category
    videoUrl: video.url,
    image: generatePosterUrl(video.url),
    title: (video as any).title || 'Motion Graphics',
    description: `A motion graphics project: ${video.tag}.`,
    tags: [video.tag],
    tagCategory: 'motion',
}));

const aiProjects: PortfolioProject[] = aiCreationData.map((video, index) => ({
    id: 400 + index,
    category: PortfolioCategory.AI,
    videoUrl: video.url,
    image: generatePosterUrl(video.url),
    title: video.title,
    description: 'Innovative visual content generated using advanced AI tools.',
    tags: [video.tag],
    tagCategory: 'motion',
}));


export const PORTFOLIO_PROJECTS_DATA: PortfolioProject[] = [
  ...graphicProjects,
  ...videoProjects,
  ...motionGraphicsProjects,
  ...aiProjects,
];
