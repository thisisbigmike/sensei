
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Modal from './ui/Modal';
import { ExternalLink, Layers, ArrowRight, BarChart3 } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const isMetricsCard = selectedProject?.id === 'metrics-card';

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Impactful campaigns and strategic partnerships across the ecosystem."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openModal(project)}
              className="group glass-card rounded-xl overflow-hidden flex flex-col h-full cursor-pointer hover:border-primary/20"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/20 transition-colors duration-300" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/80 p-2 rounded-full">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.subtitle}</p>

                <ul className="space-y-2 mt-auto">
                  {project.description.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <Layers className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                  {project.description.length > 2 && (
                    <li className="text-xs text-gray-500 pl-6">+ {project.description.length - 2} more...</li>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal isOpen={!!selectedProject} onClose={closeModal}>
        {selectedProject && (
          <div>
            <div className="relative h-48 md:h-80 w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-4 md:p-8 z-20 w-full">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-[10px] md:text-xs font-bold font-mono px-2 py-1 rounded bg-primary text-black">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-base md:text-xl text-gray-300 font-light line-clamp-2 md:line-clamp-none">{selectedProject.subtitle}</p>
              </div>
            </div>

            <div className="p-4 md:p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className={`${isMetricsCard ? 'md:col-span-3' : 'md:col-span-2'} order-2 md:order-1`}>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full" />
                    Project Overview
                  </h3>
                  
                  {selectedProject.longDescription ? (
                    <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg whitespace-pre-line">
                      {selectedProject.longDescription}
                    </p>
                  ) : (
                    <p className="text-gray-300 leading-relaxed mb-8">
                      Detailed case study coming soon.
                    </p>
                  )}

                  {selectedProject.gallery ? (
                    <div className="mb-8">
                      <h4 className="text-sm uppercase text-gray-500 font-bold mb-3 flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" /> Performance Gallery
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {selectedProject.gallery.map((img, idx) => (
                          <div key={idx} className="rounded-xl overflow-hidden border border-white/10 shadow-lg h-32 group relative">
                            <img 
                              src={img} 
                              alt={`Metric Proof ${idx + 1}`} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : selectedProject.demoImage && (
                    <div className="mb-8 rounded-xl overflow-hidden border border-white/10 shadow-lg group">
                       <img 
                         src={selectedProject.demoImage} 
                         alt="Project Demo" 
                         className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                       />
                       <div className="bg-black/40 p-2 text-center text-xs text-gray-400 backdrop-blur-sm">Event Highlights</div>
                    </div>
                  )}

                  <h4 className="text-lg font-bold text-white mb-3">Key Highlights</h4>
                  <ul className="space-y-3 mb-8">
                    {selectedProject.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 text-sm md:text-base">
                        <Layers className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {!isMetricsCard && (
                  <div className="md:col-span-1 order-1 md:order-2">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:sticky md:top-6">
                      <h3 className="text-lg font-bold text-white mb-4">Project Details</h3>
                      
                      <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Role</div>
                          <div className="text-white font-medium">Strategic Advisor</div>
                        </div>
                        
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Status</div>
                          <div className="inline-flex items-center gap-2 text-green-400 font-medium text-sm">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Active Partnership
                          </div>
                        </div>
                      </div>

                      {selectedProject.link && (
                        <a 
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors mt-6"
                        >
                          Visit Project <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
