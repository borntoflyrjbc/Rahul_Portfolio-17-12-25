
import React, { useState, useMemo, useRef, useEffect } from 'react';
import type { PortfolioProject } from '../types';
import { PortfolioCategory } from '../types';
import { PORTFOLIO_PROJECTS_DATA } from '../constants';
import { PlayIcon } from './Icons';
import VideoLightbox from './VideoLightbox';

const GalleryItem: React.FC<{
  project: PortfolioProject;
  onVideoClick: (project: PortfolioProject) => void;
  onImageClick: (imageUrl: string) => void;
  index: number;
  priority: boolean;
}> = ({ project, onVideoClick, onImageClick, index, priority }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animation Observer (Fade In)
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
    const currentItem = itemRef.current;
    if (currentItem) {
      observer.observe(currentItem);
    }
    return () => {
      if (currentItem) {
        observer.unobserve(currentItem);
      }
    };
  }, []);

  // Autoplay Observer (Mobile Fix) - Threshold 0.6
  useEffect(() => {
    if (!project.videoUrl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
             const playPromise = videoRef.current.play();
             if (playPromise !== undefined) {
               playPromise.catch((error) => {
                 // Auto-play was prevented
                 console.debug("Autoplay prevented:", error);
               });
             }
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.6 }
    );

    const currentItem = itemRef.current;
    if (currentItem) {
      observer.observe(currentItem);
    }

    return () => {
        if (currentItem) {
            observer.disconnect();
        }
    };
  }, [project.videoUrl]);

  const handleMouseEnter = () => {
    if (project.videoUrl && videoRef.current) {
        videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (project.videoUrl && videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleClick = () => {
    if (project.videoUrl) {
      onVideoClick(project);
    } else {
      onImageClick(project.image);
    }
  };

  const tagText = project.category === PortfolioCategory.VIDEO_MOTION
    ? 'Video & Motion'
    : project.category === PortfolioCategory.AI
    ? 'AI'
    : 'Creative';

  return (
    <div 
      ref={itemRef}
      className={`break-inside-avoid mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} 
      style={{ transitionDelay: `${(index % 4) * 150}ms` }}
    >
      <div
        className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-blue-500/40 cursor-pointer hover:-translate-y-2 hover:scale-[1.03] hover:z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        role="button"
        aria-label={project.videoUrl ? `Play video: ${project.title}` : `View image: ${project.title}`}
      >
        {project.videoUrl ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            poster={project.image}
            muted
            loop
            playsInline
            preload={priority ? "auto" : "metadata"}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        
        {/* Enhanced hover overlay with title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="w-full">
                 <h3 className="text-white font-bold text-base truncate">{project.title}</h3>
                 <p className="text-gray-300 text-xs">{project.tags.join(' • ')}</p>
            </div>
        </div>
        
        {/* Permanent Play Icon for videos */}
        {project.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <PlayIcon />
            </div>
          </div>
        )}

        {/* Permanent Category Tag */}
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-md backdrop-blur-sm z-10">
          {tagText}
        </div>
      </div>
    </div>
  );
};


const ImageLightbox: React.FC<{ src: string, onClose: () => void }> = ({ src, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className={`fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      onClick={handleClose}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fadeIn 0.3s forwards; }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        .animate-fade-out { animation: fadeOut 0.3s forwards; }

        @keyframes fade-scale-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-scale-out {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(0.95); }
        }
        .animate-fade-scale-in { animation: fade-scale-in 0.3s forwards; }
        .animate-fade-scale-out { animation: fade-scale-out 0.3s forwards; }
      `}</style>
      <button 
        onClick={handleClose}
        className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-5xl font-light bg-black/30 rounded-full w-12 h-12 flex items-center justify-center leading-none z-20 hover:bg-black/60 transition-colors"
        aria-label="Close image viewer"
      >&times;</button>
      <div 
        className={`relative w-full h-full flex items-center justify-center transform transition-transform duration-300 ease-in-out ${isClosing ? 'animate-fade-scale-out' : 'animate-fade-scale-in'}`} 
        onClick={e => e.stopPropagation()}
      >
        <img src={src} alt="Portfolio piece" className="w-auto h-auto max-w-full max-h-full rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};


const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<PortfolioCategory>(PortfolioCategory.ALL);
    const [lightboxVideoProject, setLightboxVideoProject] = useState<PortfolioProject | null>(null);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const filters = [
        PortfolioCategory.ALL, 
        PortfolioCategory.VIDEO_MOTION, 
        PortfolioCategory.GRAPHIC,
        PortfolioCategory.AI
    ];
    
    // CUSTOM SORTING LOGIC: 2 Videos : 1 Graphic
    const filteredProjects = useMemo(() => {
        if (filter !== PortfolioCategory.ALL) {
            return PORTFOLIO_PROJECTS_DATA.filter(p => p.category === filter);
        }

        const videoProjects = PORTFOLIO_PROJECTS_DATA.filter(p => 
            p.category === PortfolioCategory.VIDEO_MOTION || p.category === PortfolioCategory.AI
        );
        const graphicProjects = PORTFOLIO_PROJECTS_DATA.filter(p => 
            p.category === PortfolioCategory.GRAPHIC
        );

        const sorted: PortfolioProject[] = [];
        let vIndex = 0;
        let gIndex = 0;

        while (vIndex < videoProjects.length || gIndex < graphicProjects.length) {
            // Push up to 2 videos
            if (vIndex < videoProjects.length) sorted.push(videoProjects[vIndex++]);
            if (vIndex < videoProjects.length) sorted.push(videoProjects[vIndex++]);
            
            // Push 1 graphic
            if (gIndex < graphicProjects.length) sorted.push(graphicProjects[gIndex++]);
        }

        return sorted;
    }, [filter]);

    useEffect(() => {
        // Clean up any existing preload links created by this component
        document.querySelectorAll('link[data-video-preload]').forEach(e => e.remove());

        // Find the first 3 video projects in the current filtered list
        const videosToPreload = filteredProjects
            .filter(p => p.videoUrl)
            .slice(0, 3);

        // Create new preload links and append them to the head
        videosToPreload.forEach(project => {
            if (project.videoUrl) {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'video';
                link.href = project.videoUrl;
                link.setAttribute('data-video-preload', 'true');
                document.head.appendChild(link);
            }
        });

        // The cleanup is handled at the start of the effect, so old links are removed on re-run.
    }, [filteredProjects]);

    return (
        <section id="work" className="py-16 sm:py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">Creative Works</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                    A showcase of projects blending technology and creativity, where artistry and innovation craft unique visual expressions.
                </p>
            </div>
            
            <div className="w-full max-w-4xl mx-auto mb-10">
                <div className="flex flex-wrap justify-center gap-2 px-2 md:gap-3">
                    {filters.map(f => (
                        <button 
                            key={f} 
                            onClick={() => setFilter(f)}
                            className={`whitespace-nowrap px-4 py-2 md:px-6 md:py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out border ${
                                filter === f
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white shadow-lg shadow-purple-500/25 scale-105'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20'
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>
            
            {filteredProjects.length > 0 ? (
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {filteredProjects.map((project, index) => (
                       <GalleryItem 
                            key={project.id} 
                            project={project} 
                            onVideoClick={setLightboxVideoProject} 
                            onImageClick={setLightboxImage}
                            index={index} 
                            priority={index < 5}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center mt-12 text-gray-400">
                    <p className="text-xl">Coming Soon</p>
                    <p className="text-sm mt-2">New projects are being crafted in the lab.</p>
                </div>
            )}

            {lightboxVideoProject && (
              <VideoLightbox 
                src={lightboxVideoProject.videoUrl!} 
                poster={lightboxVideoProject.image} 
                onClose={() => setLightboxVideoProject(null)} 
              />
            )}
            {lightboxImage && <ImageLightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />}
        </section>
    );
};

export default Portfolio;
