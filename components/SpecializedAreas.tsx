
import React, { useState, useEffect, useRef } from 'react';
import { VideoProductionIcon, MotionGraphicsIcon, GraphicDesignIcon, AIIntegrationIcon } from './Icons';

const SpecializedAreas: React.FC = () => {
  const areas = [
    {
      icon: <VideoProductionIcon />,
      label: 'Video Editing',
      description: 'Crafting compelling stories through precise cuts, color, and sound.'
    },
    {
      icon: <MotionGraphicsIcon />,
      label: 'Motion Graphics',
      description: 'Bringing static designs to life with engaging animations and effects.'
    },
    {
      icon: <GraphicDesignIcon />,
      label: 'Graphic Design',
      description: 'Creating visually stunning assets for branding and marketing.'
    },
    {
      icon: <AIIntegrationIcon />,
      label: 'AI Creation',
      description: 'Harnessing generative AI models to craft unique, high-fidelity visual narratives and concepts.'
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      <div className={`text-center mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Specialized Areas</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
          Fusing creativity and technology to deliver specialized visual solutions that captivate and engage.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {areas.map((area, index) => (
          <div 
            key={index} 
            className={`group glass-section p-8 text-center transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDuration: '700ms', transitionDelay: `${index * 150}ms` }}
          >
            {/* STRICT CONTAINER: Fixed 80px size with overflow hidden */}
            <div className="mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center bg-gray-800 border-2 border-gray-700 group-hover:bg-blue-600/20 group-hover:border-blue-500 transition-colors duration-300 overflow-hidden">
              {area.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{area.label}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecializedAreas;
