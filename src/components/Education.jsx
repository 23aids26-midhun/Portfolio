import React from 'react';

function Education() {
    return (
        <section id="education" className="py-20 bg-[#112240]/50 relative">
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-8 section-title">Education & Achievements</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Education Column */}
                    <div className="gradient-bg rounded-2xl p-8 card-hover">
                        <div className="flex items-center mb-6">
                            <div className="w-4 h-4 bg-[#64ffda] mr-3"></div>
                            <h3 className="text-2xl font-bold gradient-text">Education</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="p-4 rounded-lg bg-[#0a192f]/30 border border-blue-500/20">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-xl font-semibold">Paavai Engineering College</h4>
                                    <span className="text-[#64ffda]">2023-2027</span>
                                </div>
                                <p className="text-[#8892b0] mb-2">B.E - Artificial Intelligence and Data Science</p>
                                <p className="text-[#8892b0]">CGPA: 8.02 | Namakkal, India</p>
                            </div>
                            <div className="p-4 rounded-lg bg-[#0a192f]/30 border border-blue-500/20">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-xl font-semibold">Bharathi Higher Secondary School</h4>
                                    <span className="text-[#64ffda]">2022-2023</span>
                                </div>
                                <p className="text-[#8892b0] mb-2">Higher Secondary Certificate (HSC)</p>
                                <p className="text-[#8892b0]">Percentage: 78.4% | Namakkal, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Achievements Column */}
                    <div className="gradient-bg rounded-2xl p-8 card-hover">
                        <div className="flex items-center mb-6">
                            <div className="w-4 h-4 bg-[#64ffda] mr-3"></div>
                            <h3 className="text-2xl font-bold gradient-text">Achievements</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start p-4 rounded-lg bg-[#0a192f]/30 border border-blue-500/20">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                                    <i className="fas fa-trophy text-yellow-400"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Smart India Hackathon 2025</h4>
                                    <p className="text-[#8892b0]">Selected for National Level Competition</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 rounded-lg bg-[#0a192f]/30 border border-blue-500/20">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-4 mt-1">
                                    <i className="fas fa-file-alt text-green-400"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold">Research Publication</h4>
                                    <p className="text-[#8892b0]">Presented paper at ICECA 2025 on Disease Classification in Paddy Crops</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-center mb-6 mt-6">
                            <div className="w-4 h-4 bg-[#64ffda] mr-3"></div>
                            <h3 className="text-2xl font-bold gradient-text">Certifications</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-4 rounded-lg square-chip">
                                <span>Artificial Intelligence Primer – Infosys Springboard</span>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-lg square-chip">
                                <span>Java Full Stack – Wipro TalentNext</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;