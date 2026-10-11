import React from 'react';
import { projects, githubProfile } from '../data/projects';

function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl font-bold mb-8 section-title">Projects</h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div key={project.title} className="gradient-bg rounded-2xl p-8 card-hover flex flex-col">
                            <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 neon-border">
                                <i className={`${project.icon} text-[#64ffda] text-2xl`}></i>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                            <p className="text-[#8892b0] mb-6 flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 square-chip text-sm">{tag}</span>
                                ))}
                            </div>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#64ffda] font-semibold hover:underline"
                            >
                                <i className="fab fa-github"></i> View on GitHub
                                <i className="fas fa-arrow-right text-sm"></i>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href={githubProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 rounded-lg border border-[#64ffda] text-[#64ffda] font-semibold hover:bg-[#64ffda] hover:text-[#0a192f] transition-all"
                    >
                        <i className="fab fa-github mr-2"></i> See all repositories
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
