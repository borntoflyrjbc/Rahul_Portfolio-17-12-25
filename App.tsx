
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import SpecializedAreas from './components/SpecializedAreas';
import Portfolio from './components/Portfolio';
import AiTools from './components/AiTools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUpIcon } from './components/Icons';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Visible after 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[30px] right-[15px] z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon />
    </button>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (!anchor) {
        return;
      }
      
      const href = anchor.getAttribute('href');
      if (!href || href === '#') {
          return;
      }

      event.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 80; // Offset for the fixed header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative bg-black text-white">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 md:px-8 flex flex-col gap-12 sm:gap-16">
        <About />
        <Portfolio />
        <SpecializedAreas />
        <Skills />
      </main>
      <AiTools />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
