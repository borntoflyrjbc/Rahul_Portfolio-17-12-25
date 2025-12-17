
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

// Replaced extensive URL list with empty strings to preserve slot count (~54 items)
const graphicDesignImages = Array(54).fill("");

const graphicProjects: PortfolioProject[] = graphicDesignImages.map((url, index) => ({
  id: 10 + index,
  category: PortfolioCategory.GRAPHIC,
  image: url,
  title: 'Graphics & Design',
  description: 'A custom graphic created for digital marketing and brand engagement.',
  tags: ['Social Media Post'],
}));

const videoData = [
    { url: '', tag: 'Event Highlight', title: 'Udyam Highlight' },
    { url: '', tag: 'Fashion Reel' },
    { url: '', tag: 'Festive Promo' },
    { url: '', tag: 'Real Estate Promo' },
    { url: '', tag: 'Event Highlights' },
    { url: '', tag: 'Event Reel' },
    { url: '', tag: 'Corporate Promo' },
    { url: '', tag: 'Fashion Highlights' },
    { url: '', tag: 'Political Campaign' },
    { url: '', tag: 'Senior Living Promo' },
    { url: '', tag: 'Event Highlights' },
    { url: '', tag: 'Real Estate Promo' },
    { url: '', tag: 'Real Estate Ad' },
    { url: '', tag: 'Real Estate Campaign' },
    { url: '', tag: 'Social Media Promo' },
    { url: '', tag: 'Real Estate Video' },
    { url: '', tag: 'Independence Day Campaign' },
    { url: '', tag: 'Product Launch' },
    { url: '', tag: 'Fashion Reel' },
    { url: '', tag: 'Event Highlights' },
    { url: '', tag: 'Event Reel' },
    { url: '', tag: 'College Event' },
    { url: '', tag: 'Fashion Reel' },
    { url: '', tag: 'Social Media Reel' },
    { url: '', tag: 'Corporate Promo' },
    { url: '', tag: 'Fashion Reel' },
    { url: '', tag: 'Social Media Reel' },
    { url: '', tag: 'Fashion Reel' },
    { url: '', tag: 'Social Media Reel' },
    { url: '', tag: 'Fashion Reel' },
    { url: '', tag: 'Political Campaign' },
    { url: '', tag: 'Event Highlights' },
    { url: '', tag: 'Event Slideshow' },
    { url: '', tag: 'Event Highlights' },
    { url: '', tag: 'Corporate Video' },
    { url: '', tag: 'Social Media Promo' },
    { url: '', tag: 'Real Estate Promo' },
    { url: '', tag: 'Live Performance' },
    { url: '', tag: 'Event Highlights' },
    { url: '', tag: 'World Cup Campaign' },
    { url: '', tag: 'Real Estate Promo' },
    { url: '', tag: 'Event Highlights' },
];

const motionGraphicsData = [
  { url: '', tag: 'Motion Graphic', title: 'Motion Graphics Showcase A' },
  { url: '', tag: 'Motion Graphic', title: 'Motion Graphics Showcase B' },
  { url: '', tag: 'Festive Promo' },
  { url: '', tag: 'Logo Animation' },
  { url: '', tag: 'Explainer Graphic' },
  { url: '', tag: 'Promotional Graphic' },
  { url: '', tag: 'Independence Day Promo' },
  { url: '', tag: 'Mahaveer Jayanti Promo' },
  { url: '', tag: 'Corporate Motion Graphic' },
];

const aiCreationData = [
  { 
    url: '', 
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
    if (!videoUrl) return "";

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
