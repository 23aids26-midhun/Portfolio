import React from 'react';

function Hero() {
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center pt-16 relative">
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-[#64ffda]"></div>
                            <p className="text-[#64ffda] font-medium">Hello, I'm</p>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold">
                            Midhunan <span className="gradient-text">Nanthan S</span>
                        </h1>
                        <div className="typewriter text-2xl md:text-3xl font-medium">
                            AI&DS Software Engineer
                        </div>
                        <p className="text-[#8892b0] text-lg">
                            Specializing in Computer Vision, and Full-Stack Development. 
                            Transforming complex problems into intelligent solutions.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            <button 
                                onClick={() => scrollToSection('#projects')}
                                className="px-6 py-3 bg-[#64ffda] text-[#0a192f] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#64ffda]/30 transition-all transform hover:scale-105 flex items-center space-x-2"
                            >
                                <span>View Projects</span>
                                <i className="fas fa-arrow-right"></i>
                            </button>
                            <button 
                                onClick={() => scrollToSection('#contact')}
                                className="px-6 py-3 border border-[#64ffda] text-[#64ffda] font-semibold rounded-lg hover:bg-[#64ffda]/10 transition-all transform hover:scale-105 flex items-center space-x-2"
                            >
                                <span>Contact</span>
                                <i className="fas fa-envelope"></i>
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Animated Square */}
                    <div className="relative flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 neon-border floating">
                            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-4">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className={`${i % 2 === 0 ? 'bg-[#64ffda]/20' : 'bg-blue-500/20'}`}></div>
                                ))}
                            </div>
                            <div className="absolute inset-8 bg-[#0a192f] flex items-center justify-center">
                                <i className="fas fa-brain text-6xl gradient-text"></i>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 border border-blue-500/20"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#64ffda]/10 border border-[#64ffda]/20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;