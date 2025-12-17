import React, { useState, useEffect, useRef } from 'react';
import type { SkillCategory } from '../types';
import { SKILL_DATA } from '../constants';

const SkillLine: React.FC<{ name: string; level: number; isVisible: boolean; delay: number }> = ({ name, level, isVisible, delay }) => (
    <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
            <span className="text-gray-200 font-medium">{name}</span>
        </div>
        <div className="w-full bg-gray-700/50 rounded-full h-1.5">
            <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full" 
                style={{
                    width: isVisible ? `${level}%` : '0%',
                    transition: `width 0.8s ease-out ${delay}ms`
                }}
            ></div>
        </div>
    </div>
);

const Skills: React.FC = () => {
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
            {
                rootMargin: '0px',
                threshold: 0.2
            }
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
        <section id="skills" className="py-16 sm:py-20" ref={sectionRef}>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">Skills & Expertise</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                    A comprehensive toolkit combining traditional design mastery with cutting-edge AI innovation.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SKILL_DATA.map((category: SkillCategory, index) => (
                    <div 
                        key={index} 
                        className={`glass-section p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            {/* STRICT ICON CONTAINER: Fixed size + overflow hidden ensures NO HUGE ICONS */}
                            <div className="bg-gray-800 p-3 rounded-lg flex-shrink-0 w-14 h-14 flex items-center justify-center overflow-hidden">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white">{category.title}</h3>
                        </div>
                        <div>
                            {category.skills.map((skill, skillIndex) => (
                                <SkillLine 
                                    key={skillIndex} 
                                    name={skill.name} 
                                    level={skill.level} 
                                    isVisible={isVisible}
                                    delay={index * 150 + (skillIndex + 1) * 100} 
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;