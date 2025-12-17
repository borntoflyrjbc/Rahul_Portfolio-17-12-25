import React from 'react';

const AiTools: React.FC = () => {
    const tools = [
        'Nano Banana', 'Midjourney', 'Ideogram', 'Google Imagen', 'Google Veo',
        'Flux', 'Kling AI', 'RunwayML', 'Seedance', 'Seeddream', 'Runway',
        'PixVerse', 'Wan 2.2', 'Hailuo', 'HeyGen', 'ElevenLabs'
    ];

    return (
        <section className="py-20 sm:py-24 bg-[#010101] text-white overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                        Specialisation in <span className="text-purple-400">AI Tools</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Leveraging the power of cutting-edge generative AI models to create stunning visual content.
                    </p>
                </div>

                {/* Slider Component */}
                <div className="relative w-full">
                    <div className="scroller-container overflow-hidden w-full">
                         {/* 
                           The track needs to be exactly twice the width of one set of items (due to duplication)
                           and we animate it to -50% of its total width.
                           We use w-max to ensure it expands to fit the items.
                        */}
                        <div className="flex w-max animate-scroll-left">
                            {/* Original Set */}
                            <div className="flex space-x-6 px-3">
                                {tools.map((tool, index) => (
                                    <div 
                                        key={index} 
                                        className="ai-tool-tag bg-gray-900/80 backdrop-blur-md border border-gray-700 text-gray-300 hover:text-white hover:border-purple-500 rounded-xl px-6 py-4 text-lg font-medium whitespace-nowrap shadow-lg cursor-default"
                                    >
                                        {tool}
                                    </div>
                                ))}
                            </div>
                            {/* Duplicate Set for Seamless Loop */}
                            <div className="flex space-x-6 px-3">
                                {tools.map((tool, index) => (
                                    <div 
                                        key={`dup-${index}`} 
                                        className="ai-tool-tag bg-gray-900/80 backdrop-blur-md border border-gray-700 text-gray-300 hover:text-white hover:border-purple-500 rounded-xl px-6 py-4 text-lg font-medium whitespace-nowrap shadow-lg cursor-default"
                                    >
                                        {tool}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiTools;