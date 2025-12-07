
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, CheckCircle2, ArrowRight, BarChart3 } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';
import SectionHeading from './ui/SectionHeading';
import Modal from './ui/Modal';
import { Achievement } from '../types';

const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const openModal = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <section id="achievements" className="py-16 md:py-20 bg-surface/50 relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Recognition" 
          subtitle="Proven track record of excellence in Web3 influence and community building."
          center
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => openModal(achievement)}
              className={`relative overflow-hidden rounded-2xl p-6 md:p-8 glass-card cursor-pointer group transition-all duration-300 ${
                achievement.highlight 
                  ? 'border-primary/40 bg-primary/5 hover:bg-primary/10' 
                  : 'hover:bg-white/5'
              }`}
            >
              {achievement.highlight && (
                <div className="absolute top-0 right-0 p-3 opacity-20 transition-transform group-hover:scale-110 duration-500">
                  <Trophy className="w-20 h-20 md:w-24 md:h-24 text-primary" />
                </div>
              )}
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${achievement.highlight ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                      {achievement.highlight ? <Trophy className="w-6 h-6 md:w-8 md:h-8" /> : <Award className="w-6 h-6 md:w-8 md:h-8" />}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{achievement.title}</h3>
                  </div>
                  
                  {/* Hover visual cue */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                    <ArrowRight className="text-primary w-5 h-5" />
                  </div>
                </div>
                
                <h4 className="text-base md:text-lg text-gray-300 font-medium mb-4">{achievement.subtitle}</h4>
                <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed whitespace-pre-line line-clamp-4">{achievement.description}</p>
                
                <div className="space-y-2">
                  {achievement.stats.slice(0, 3).map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-4 h-4 md:w-5 md:h-5 ${achievement.highlight ? 'text-primary' : 'text-secondary'}`} />
                      <span className="text-sm md:text-base font-mono text-gray-200">{stat}</span>
                    </div>
                  ))}
                  {achievement.stats.length > 3 && (
                     <p className="text-xs text-gray-500 pt-1">+ {achievement.stats.length - 3} more highlights inside</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievement Detail Modal */}
      <Modal isOpen={!!selectedAchievement} onClose={closeModal}>
        {selectedAchievement && (
          <div>
            {/* Header Image Area */}
            {selectedAchievement.imageUrl && (
              <div className="relative h-48 md:h-72 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent z-10" />
                <img 
                  src={selectedAchievement.imageUrl} 
                  alt={selectedAchievement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full">
                   {selectedAchievement.tags && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {selectedAchievement.tags.map(tag => (
                        <span key={tag} className="text-[10px] md:text-xs font-bold font-mono px-2 py-1 rounded bg-secondary text-white border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-1">{selectedAchievement.title}</h2>
                  <p className="text-base md:text-lg text-gray-300 font-light">{selectedAchievement.subtitle}</p>
                </div>
              </div>
            )}
            
            {/* Content Area */}
            <div className={`p-6 md:p-8 ${!selectedAchievement.imageUrl ? 'pt-8' : ''}`}>
              {!selectedAchievement.imageUrl && (
                <div className="mb-6 border-b border-white/10 pb-6">
                   <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{selectedAchievement.title}</h2>
                   <p className="text-lg text-gray-300">{selectedAchievement.subtitle}</p>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                   <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className={`w-1 h-6 rounded-full ${selectedAchievement.highlight ? 'bg-primary' : 'bg-secondary'}`} />
                    Achievement Details
                  </h3>
                  
                  <div className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg whitespace-pre-line">
                    {selectedAchievement.longDescription || selectedAchievement.description}
                  </div>

                  {selectedAchievement.gallery && (
                    <div className="mb-8">
                      <h4 className="text-sm uppercase text-gray-500 font-bold mb-3 flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" /> Performance Metrics Proof
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {selectedAchievement.gallery.map((img, idx) => (
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
                  )}

                  {selectedAchievement.demoImage && !selectedAchievement.gallery && (
                    <div className="mb-8 rounded-xl overflow-hidden border border-white/10 shadow-lg group">
                       <img 
                         src={selectedAchievement.demoImage} 
                         alt="Achievement Proof" 
                         className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                       />
                       <div className="bg-black/40 p-2 text-center text-xs text-gray-400 backdrop-blur-sm">Official Recognition</div>
                    </div>
                  )}
                </div>

                <div className="md:col-span-1">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 sticky top-6">
                    <h3 className="text-lg font-bold text-white mb-4">Impact Statistics</h3>
                    <ul className="space-y-4">
                      {selectedAchievement.stats.map((stat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-200">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${selectedAchievement.highlight ? 'text-primary' : 'text-secondary'}`} />
                          <span>{stat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Achievements;
