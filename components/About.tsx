
import React, { useState, useEffect, useRef } from 'react';
import type { Experience } from '../types';
import { EXPERIENCE_DATA } from '../constants';
import { AwardIcon, CheckCircleIcon, LocationIcon } from './Icons';

const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => (
    <div>
        <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
            <h3 className="text-xl font-bold text-white">{experience.role}</h3>
            <span className="text-sm text-gray-400 mt-1 sm:mt-0">{experience.period}</span>
        </div>
        <p className="text-blue-400 font-medium">{experience.company}</p>
        <p className="mt-2 text-gray-300">{experience.description}</p>
        <div className="mt-3">
            <p className="font-semibold text-gray-200">Key Achievements:</p>
            <ul className="mt-2 space-y-1">
                {experience.achievements.map((ach, index) => (
                    <li key={index} className="flex items-start">
                        <CheckCircleIcon />
                        <span className="ml-2 text-gray-300">{ach}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const About: React.FC = () => {
  // Removed 'Visual Storytelling' from the list
  const coreExpertise = ['Video Editing', 'Motion Graphics', 'Graphic Design', 'AI-Driven Production', 'Live Media Broadcasting', 'Social Media Management'];
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
    <section id="about" className="py-16 sm:py-20" ref={sectionRef}>
      <div className={`text-center mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">About Rahul</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
          A creative professional with 5+ years of experience in multimedia and motion graphics, specializing in visual storytelling and AI-enhanced content creation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 flex flex-col gap-8">
            <div className={`glass-section p-6 flex-grow flex flex-col transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '150ms' }}>
                <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-blue-500 pb-2 inline-block">Professional Summary</h3>
                <div className="flex-grow">
                    <p className="text-gray-300">
                        Creative and detail-oriented Graphic Designer & Video Editor with over 5 years of experience in multimedia, motion graphics, & creative design. Skilled in crafting impactful digital content for marketing, advertising & social media, with a strong focus on visual storytelling & user engagement.
                    </p>
                    <p className="mt-4 text-gray-300">
                        Proficient in AI-driven video production, creative designing, and generative content creation. Experienced in prompt engineering and integrating AI tools into design workflows to accelerate production & elevate creative output.
                    </p>
                     <p className="mt-4 text-gray-300">
                        Passionate about blending design, technology & strategy to deliver high-impact, future-ready visual experiences.
                    </p>
                </div>
            </div>
            <div className={`glass-section p-4 text-center lg:text-left transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '300ms' }}>
                <h3 className="text-xl font-bold text-white mb-4 border-b-2 border-blue-500 pb-2 inline-block">Core Expertise</h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {coreExpertise.map(exp => (
                        <span key={exp} className="bg-gray-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full">{exp}</span>
                    ))}
                </div>
            </div>
            <div className={`glass-section p-6 flex items-center gap-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '450ms' }}>
                 <div className="bg-blue-600/20 p-3 rounded-lg"><AwardIcon /></div>
                 <div>
                    <h4 className="font-bold text-white">24FPS Competition Participant</h4>
                    <p className="text-sm text-gray-400">Prestigious global animation awards event by MAAC (2016)</p>
                 </div>
            </div>
            <div className={`glass-section p-6 flex items-center gap-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '600ms' }}>
                <div className="bg-purple-600/20 p-3 rounded-lg"><LocationIcon /></div>
                <div>
                    <h4 className="font-bold text-white">Based in Jabalpur</h4>
                    <p className="text-sm text-gray-400">Madhya Pradesh, India</p>
                </div>
            </div>
        </div>
        <div className={`lg:col-span-2 glass-section p-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '250ms' }}>
            <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-blue-500 pb-2 inline-block">Experience</h3>
            <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-2 top-2 h-full w-0.5 bg-gray-600" aria-hidden="true"></div>
                <div className="space-y-10">
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <div 
                            key={index}
                            className={`relative pl-10 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                            style={{ transitionDelay: `${300 + index * 150}ms` }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-2 top-1 w-4 h-4 bg-blue-500 rounded-full -translate-x-1/2 border-4 border-[#010101]" aria-hidden="true"></div>
                            
                            {/* Timeline Content */}
                            <ExperienceCard experience={exp} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
