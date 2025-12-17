
import React, { useState, useMemo, useRef, useEffect } from 'react';
import type { PortfolioProject } from '../types';
import { PortfolioCategory } from '../types';
import { PORTFOLIO_PROJECTS_DATA } from '../constants';
import { PlayIcon } from './Icons';
import VideoLightbox from './VideoLightbox';

const VideoShowcase: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [lightboxVideoProject, setLightboxVideoProject] = useState<PortfolioProject | null>(null);
    
    // Select a curated list of videos for the showcase.
    // Updated to use the new VIDEO_MOTION category.
    const featuredVideos = useMemo(() => {
        return PORTFOLIO_PROJECTS_DATA.filter(p => p.category === PortfolioCategory.VIDEO_MOTION).slice(0, 8);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }
        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <section className="py-16 sm:py-20" ref={sectionRef}>
            <style>{`
                .horizontal-scrollbar::-webkit-scrollbar {
                    height: 8px;
                }
                .horizontal-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .horizontal-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                }
                .horizontal-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(255, 255, 255, 0.4);
                }
            `}</style>
            <div className={`text-center mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">Video Showcase</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                    A curated selection of video projects, from event highlights and promotional content to fashion reels.
                </p>
            </div>
            
            <div className={`relative transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex space-x-6 overflow-x-auto pb-4 horizontal-scrollbar">
                    {featuredVideos.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => setLightboxVideoProject(project)}
                            className={`group relative flex-shrink-0 w-80 h-48 rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'translate-y-0' : 'translate-y-5'}`}
                            style={{ transitionDelay: `${150 + index * 100}ms` }}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center">
                                    <PlayIcon />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 p-4">
                                <h3 className="text-white font-bold text-base truncate">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {lightboxVideoProject && (
                <VideoLightbox 
                    src={lightboxVideoProject.videoUrl!} 
                    poster={lightboxVideoProject.image} 
                    onClose={() => setLightboxVideoProject(null)} 
                />
            )}
        </section>
    );
};

export default VideoShowcase;
