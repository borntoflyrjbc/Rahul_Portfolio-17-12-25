import React from 'react';
import { AwardIcon, ArrowRightIcon, GetInTouchIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <style>{`
        .text-gradient {
          background-image: linear-gradient(to right, #c084fc, #f472b6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        @keyframes kenburns-zoom-in {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }
        
        .kenburns-bg {
          animation: kenburns-zoom-in 20s ease-out forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in-up {
            opacity: 0;
            animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      {/* Background Image Section */}
      <div className="absolute inset-0 z-0 bg-black">
        
        {/* PC Version Image (Hidden on Mobile) */}
        <img
          src="/assets/pcverson-hero.jpg"
          alt="Rahul Jain PC Portrait"
          className="hidden md:block w-full h-full object-cover object-[75%_center] opacity-50 kenburns-bg"
        />

        {/* Mobile Version Image (Visible only on Mobile) */}
        <img
          src="/assets/mobile verson-hero.jpeg"
          alt="Rahul Jain Mobile Portrait"
          className="block md:hidden w-full h-full object-cover object-center opacity-50 kenburns-bg"
        />

        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="max-w-3xl mx-auto md:mx-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tighter fade-in-up" style={{ animationDelay: '0.2s' }}>
            Video Editor, <br />
            <span className="text-gradient">
              Graphics & Motion
            </span> Designer
          </h1>
          <p className="mt-4 text-lg font-medium text-white fade-in-up max-w-2xl" style={{ animationDelay: '0.4s' }}>
            Crafting Impactful Digital Content with{' '}
            <span className="font-semibold text-purple-400 [text-shadow:0_0_10px_theme(colors.purple.400/0.5)]">AI-Driven Innovation</span>
          </p>
          <p className="mt-4 text-gray-300 max-w-xl fade-in-up" style={{ animationDelay: '0.6s' }}>
            Passionate about blending design, technology & strategy to deliver high-impact, future-ready visual experiences that captivate and engage.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a 
              href="#work" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              <span>View Portfolio</span>
              <ArrowRightIcon />
            </a>
            <a 
              href="https://wa.me/919993681478?text=hello"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white/40 hover:bg-white/10 hover:border-white text-gray-200 font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <GetInTouchIcon />
              <span>Get In Touch</span>
            </a>
          </div>
          <div className="mt-12 fade-in-up" style={{ animationDelay: '1.1s' }}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 inline-flex items-center space-x-3 shadow-lg">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-full flex-shrink-0">
                      <AwardIcon />
                  </div>
                  <span className="text-sm text-gray-200 font-medium text-left">24FPS Global Animation Awards Participant</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;