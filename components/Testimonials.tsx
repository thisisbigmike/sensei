
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import SectionHeading from './ui/SectionHeading';
import { Maximize2 } from 'lucide-react';
import Modal from './ui/Modal';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const openModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What Partners Say" 
          subtitle="Trusted by leading Web3 projects and exchanges."
          center
        />

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openModal(testimonial)}
              className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-primary/30 transition-colors cursor-pointer"
            >
              {/* Visual Proof / Screenshot Area */}
              {testimonial.testimonialImage && (
                <div className="relative h-48 md:h-56 bg-surface/50 overflow-hidden shrink-0">
                  <img 
                    src={testimonial.testimonialImage} 
                    alt="Testimonial Proof" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/60 p-2 rounded-full backdrop-blur-sm border border-white/10">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              )}

              {/* Brief Description */}
              <div className="px-6 py-6 flex-1">
                <p className="text-gray-300 text-sm md:text-base italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonial Detail Modal */}
      <Modal isOpen={!!selectedTestimonial} onClose={closeModal}>
        {selectedTestimonial && (
          <div className="p-4 md:p-6 bg-surface">
            {selectedTestimonial.testimonialImage && (
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src={selectedTestimonial.testimonialImage} 
                  alt="Testimonial Full View" 
                  className="w-full h-auto object-contain max-h-[70vh] bg-black/50"
                />
              </div>
            )}
            
            <div className="mt-6">
              {selectedTestimonial.image && selectedTestimonial.name && (
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
                      <img src={selectedTestimonial.image} alt={selectedTestimonial.name} className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <h3 className="text-white font-bold text-lg">{selectedTestimonial.name}</h3>
                      <p className="text-primary text-sm">{selectedTestimonial.role} • {selectedTestimonial.company}</p>
                   </div>
                </div>
              )}
              <p className="text-gray-300 text-lg italic leading-relaxed border-l-2 border-primary/30 pl-4">
                "{selectedTestimonial.content}"
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Testimonials;
