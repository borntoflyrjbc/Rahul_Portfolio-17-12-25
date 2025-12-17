import React, { useState, useEffect, useRef } from 'react';
import { EmailIcon, PhoneIcon, LocationPinIcon } from './Icons';

const Contact: React.FC = () => {
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

  const contactInfo = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      description: "Let's get in touch.",
      contact: 'borntoflyrj@gmail.com',
      href: 'mailto:borntoflyrj@gmail.com',
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      description: 'Give me a call.',
      contact: '+91 99936 81478',
      href: 'tel:+919993681478',
    },
    {
      icon: <LocationPinIcon />,
      title: 'Location',
      description: 'Where to find me.',
      contact: 'Jabalpur, Madhya Pradesh',
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-32 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/drlmrcplg/image/upload/v1757224020/AST_IMAGE_k4rpjr.png"
          alt="Abstract background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Let's Connect</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <div
              key={item.title}
              className={`glass-section p-8 text-center flex flex-col items-center transition-all duration-300 hover:border-purple-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
                {/* STRICT CONTAINER: Fixed 64px size with overflow hidden */}
                <div className="mb-4 bg-gray-800/50 p-4 rounded-full border border-gray-700 w-16 h-16 flex items-center justify-center overflow-hidden">
                    {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-400 mt-1 mb-3 flex-grow">{item.description}</p>
                {item.href ? (
                    <a href={item.href} className="font-semibold text-blue-400 hover:text-blue-300 transition-colors break-all">
                        {item.contact}
                    </a>
                ) : (
                    <p className="font-semibold text-gray-200">{item.contact}</p>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;