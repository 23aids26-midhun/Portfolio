import React from 'react';

function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-8 section-title">About Me</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                        <div className="gradient-bg rounded-2xl p-8 card-hover">
                            <div className="flex items-center mb-4">
                                <div className="w-4 h-4 bg-[#64ffda] mr-3"></div>
                                <h3 className="text-2xl font-bold gradient-text">AI&DS Engineer</h3>
                            </div>
                            <p className="text-[#8892b0] mb-6">
                                I'm a passionate Software Engineer specializing in Artificial Intelligence and Data Science. 
                                With expertise in Computer Vision, and Full-Stack development, I create intelligent 
                                systems that solve real-world problems.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center p-4 square-chip">
                                    <div className="w-12 h-12 rounded-lg bg-[#112240] flex items-center justify-center mr-4">
                                        <i className="fas fa-map-marker-alt gradient-text"></i>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Location</p>
                                        <p className="text-[#8892b0]">Namakkal, Tamil Nadu, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center">
                            <div className="w-4 h-4 bg-[#64ffda] mr-3"></div>
                            Core Expertise
                        </h3>
                        <div className="space-y-4">
                            <div className="gradient-bg rounded-xl p-6 card-hover">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
                                        <i className="fas fa-robot text-[#64ffda]"></i>
                                    </div>
                                    <h4 className="text-xl font-semibold">React</h4>
                                </div>
                                <p className="text-[#8892b0]">CareerPilot AI, Ensemble Learning for Full-Stack applications</p>
                            </div>
                            <div className="gradient-bg rounded-xl p-6 card-hover">
                                <div className="flex items-center mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4">
                                        <i className="fas fa-code text-[#64ffda]"></i>
                                    </div>
                                    <h4 className="text-xl font-semibold">Full-Stack Development</h4>
                                </div>
                                <p className="text-[#8892b0]">FastAPI, React, MongoDB for scalable AI application backends</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;