import React, { useState, useEffect, useRef } from 'react';

function Skills() {
    const [isVisible, setIsVisible] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, []);

    return (
        <section id="skills" className="py-20 bg-[#112240]/50 relative" ref={skillsRef}>
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-8 section-title">Technical Skills</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Programming Languages */}
                    <div className="gradient-bg rounded-2xl p-8 card-hover">
                        <div className="flex items-center mb-6">
                            <div className="w-4 h-4 bg-[#64ffda] mr-3"></div>
                            <h3 className="text-2xl font-bold gradient-text">Programming Languages</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium flex items-center">
                                        <div className="w-2 h-2 bg-[#64ffda] mr-2"></div>
                                        Python
                                    </span>
                                    <span className="text-[#64ffda]">95%</span>
                                </div>
                                <div className="skill-bar">
                                    <div 
                                        className="skill-progress" 
                                        style={{ width: isVisible ? '95%' : '0%' }}
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium flex items-center">
                                        <div className="w-2 h-2 bg-[#64ffda] mr-2"></div>
                                        Java
                                    </span>
                                    <span className="text-[#64ffda]">85%</span>
                                </div>
                                <div className="skill-bar">
                                    <div 
                                        className="skill-progress" 
                                        style={{ width: isVisible ? '85%' : '0%' }}
                                    ></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium flex items-center">
                                        <div className="w-2 h-2 bg-[#64ffda] mr-2"></div>
                                        JavaScript
                                    </span>
                                    <span className="text-[#64ffda]">80%</span>
                                </div>
                                <div className="skill-bar">
                                    <div 
                                        className="skill-progress" 
                                        style={{ width: isVisible ? '80%' : '0%' }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technologies & Tools */}
                    <div className="gradient-bg rounded-2xl p-8 card-hover">
                        <div className="flex items-center mb-6">
                            <div className="w-4 h-4 bg-[#64ffda] mr-3"></div>
                            <h3 className="text-2xl font-bold gradient-text">Technologies & Tools</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center space-x-3 p-4 rounded-lg square-chip">
                                <i className="fab fa-python text-green-400"></i>
                                <span>FastAPI</span>
                            </div>
                            <div className="flex items-center space-x-3 p-4 rounded-lg square-chip">
                                <i className="fas fa-brain text-orange-400"></i>
                                <span>TensorFlow</span>
                            </div>
                            <div className="flex items-center space-x-3 p-4 rounded-lg square-chip">
                                <i className="fab fa-react text-blue-400"></i>
                                <span>React</span>
                            </div>
                            <div className="flex items-center space-x-3 p-4 rounded-lg square-chip">
                                <i className="fas fa-database text-green-500"></i>
                                <span>MongoDB</span>
                            </div>
                            <div className="flex items-center space-x-3 p-4 rounded-lg square-chip">
                                <i className="fas fa-palette text-pink-400"></i>
                                <span>Figma</span>
                            </div>
                            <div className="flex items-center space-x-3 p-4 rounded-lg square-chip">
                                <i className="fas fa-tools text-blue-300"></i>
                                <span>Uizard</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;