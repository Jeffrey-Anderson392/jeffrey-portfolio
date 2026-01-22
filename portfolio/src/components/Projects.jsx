import React from 'react'
import projects from '../data/projects.json';
import { FaGithub, FaGlobe} from 'react-icons/fa';

const Projects = () => {

    const projectArray = projects.projects;

  return (
    <section id='projects' className='mt-32 px-6 font-plus-jakarta-sans'>
        <div>
            <h2 className='text-4xl font-semibold mb-12 text-center text-slate-100 max-w-4xl mx-auto'>
                - Projects -
            </h2>
                {/* Grid Container Setup */}
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                
                {projectArray.map((project) => (
                    // The essential unique key={...}
                    <div key={project.id} className="bg-slate-700 rounded-xl p-6 shadow-xl transition-transform hover:scale-[1.02] hover:shadow-2xl shadow-black">
                        {/* Tags as small pills, rendered via a loop */}
                        <div className="flex flex-wrap gap-2 mb-4 justify-center">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="text-xs font-medium text-teal-400 bg-slate-800 px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Project Title */}
                        <h3 className="text-2xl text-center font-medium tracking-tight text-slate-100 mb-2">
                            {project.name}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-300 text-center mt-4 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mt-6 pt-4 border-t border-slate-600">
                            <span className="text-sm font-medium text-slate-400">
                                Tech Stack: {project.technologies.join(' / ')}
                            </span>
                        </div>

                        {/* Link */}
                        {project.links && (
                        <div className="flex flex-wrap gap-4">
                            {project.links.website && (
                                <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-lg font-medium mt-4">
                                    <FaGlobe /> View Project
                                </a>
                            )}
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors text-lg font-medium">
                                    <FaGithub /> View on GitHub
                                </a>
                            )}
                        </div>
                    )}
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects