import React, { useState, useEffect } from 'react';
import { ResumeIcon, MenuIcon, CloseIcon } from './Icons';

const ResumeModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); 
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-opacity duration-300 ease-in-out ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
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
      <div
        className={`relative glass-section w-[95%] md:w-[70%] lg:w-[55%] max-w-4xl h-[90vh] flex flex-col p-2 md:p-4 transform transition-transform duration-300 ease-in-out ${isClosing ? 'animate-fade-scale-out' : 'animate-fade-scale-in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="resume-title" className="sr-only">Resume Viewer</h2>
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 text-white bg-gray-800 rounded-full p-2 z-10 hover:bg-gray-700 transition-colors"
          aria-label="Close resume viewer"
        >
          <CloseIcon />
        </button>
        <iframe
          src="https://drive.google.com/file/d/1Ejkr3iJYsvQUEXdpMrjUB7skqVIU4A0b/preview"
          className="w-full h-full border-0 rounded-md"
          title="Rahul Jain's Resume"
        ></iframe>
      </div>
    </div>
  );
};


const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen || isResumeModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isResumeModalOpen]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
   
  const handleResumeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (isMenuOpen) setIsMenuOpen(false);
      setIsResumeModalOpen(true);
  };

  return (
    <>
      <style>{`
        .nav-link-gradient {
          font-family: 'Poppins', sans-serif;
          transition: color 0.3s ease-in-out;
        }
        .nav-link-gradient:hover {
          background-image: linear-gradient(to right, #8A2BE2, #FF1493);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-xl shadow-black/30' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-[10px] transition-transform duration-200 hover:scale-105">
            
            {/* --- IMAGE UPDATED HERE --- */}
            <a href="#home" onClick={handleNavLinkClick} className="flex-shrink-0">
              <img 
                src="/assets/mobile-pc-header-icon.png" 
                alt="Rahul Jain"
                className="w-10 h-10 rounded-full object-cover border-2 border-purple-500 shadow-md"
              />
            </a>
            {/* ------------------------- */}

            <a 
              href="https://wa.me/919993681478"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-white font-bold text-[18px] md:text-2xl no-underline whitespace-nowrap"
            >
              Rahul Jain
            </a>
          </div>
           
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={handleNavLinkClick} className="nav-link-gradient text-gray-300 font-medium">{link.label}</a>
            ))}
          </nav>
           
          <div className="flex items-center gap-4">
            <button
              onClick={handleResumeClick}
              className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-5 rounded-lg items-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <ResumeIcon />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="text-white p-2 focus:outline-none" aria-label="Open menu">
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
        role="dialog"
      >
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50" 
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-gray-900/90 backdrop-blur-xl shadow-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center p-6 border-b border-gray-700">
             <h2 className="text-lg font-semibold text-white">Navigation</h2>
            <button onClick={() => setIsMenuOpen(false)} className="text-white p-2" aria-label="Close menu">
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-col p-6 space-y-6">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={handleNavLinkClick}
                className="nav-link-gradient text-xl text-gray-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleResumeClick}
              className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <ResumeIcon />
              <span>Resume</span>
            </button>
          </nav>
        </div>
      </div>
      
      {isResumeModalOpen && <ResumeModal onClose={() => setIsResumeModalOpen(false)} />}
    </>
  );
};

export default Header;