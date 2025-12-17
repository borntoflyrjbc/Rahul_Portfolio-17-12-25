import React, { useState, useEffect, useRef } from 'react';

const CreativeProcess: React.FC = () => {
    const steps = [
        {
            number: '01',
            title: 'Discovery',
            description: 'Understanding your vision and requirements',
        },
        {
            number: '02',
            title: 'Strategy',
            description: 'Developing the creative approach and timeline',
        },
        {
            number: '03',
            title: 'Creation',
            description: 'Bringing your project to life with precision',
        },
        {
            number: '04',
            title: 'Delivery',
            description: 'Final review and seamless project handover',
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
        <section className="py-20" ref={sectionRef}>
            <div className={`glass-section p-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white">My Creative Process</h2>
                    <p className="mt-3 text-lg text-gray-400">
                        A streamlined approach that ensures every project meets your vision while exceeding expectations.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-600 hidden md:block" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div 
                                key={index} 
                                className={`relative flex flex-col items-center text-center p-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="z-10 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-xl rounded-full border-4 border-[#0d1321] mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreativeProcess;