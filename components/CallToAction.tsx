import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon, EyeIcon, GetInTouchIcon } from './Icons';

const CallToAction: React.FC = () => {
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
    <section className="py-20" ref={sectionRef}>
      <div className={`bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-md text-center p-8 md:p-12 rounded-2xl border border-blue-500/50 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gray-800 rounded-full border border-gray-700">
            <EyeIcon />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Ready to Bring Your Vision to Life?</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Let's collaborate to create something extraordinary. Whether it's a promotional video, brand identity, or cutting-edge AI-enhanced content, I'm here to make it happen.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#work" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-transform transform hover:scale-105">
            <span>View Portfolio</span>
            <ArrowRightIcon />
          </a>
          <a 
            href="https://wa.me/919993681478?text=hello" 
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 hover:bg-gray-800 text-gray-300 font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors">
            <GetInTouchIcon />
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;