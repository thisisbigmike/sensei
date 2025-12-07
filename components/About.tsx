import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '../constants';
import SectionHeading from './ui/SectionHeading';
import { BadgeCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right z-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            {/* Wrapper for image and badge to ensure they stay together */}
            <div className="relative w-full max-w-[400px] aspect-square">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full h-full">
                
                <img 
                  src={ABOUT_CONTENT.image} 
                  alt="Sensei" 
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
              
              {/* Decorative Elements - Anchored to the wrapper */}
              <div className="absolute -bottom-6 -right-4 md:-right-6 w-20 h-20 md:w-24 md:h-24 bg-surface border border-primary/20 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-md z-20">
                <BadgeCheck className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <SectionHeading title={ABOUT_CONTENT.title} />
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              {ABOUT_CONTENT.role}
            </h3>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-primary/90 font-medium leading-relaxed">
                {ABOUT_CONTENT.description}
              </p>
              
              <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent my-8" />
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-gray-400 text-xs md:text-sm uppercase tracking-wider mb-1">Agency</h4>
                  <p className="text-white font-bold text-base md:text-lg">Apexium Agency</p>
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs md:text-sm uppercase tracking-wider mb-1">Focus</h4>
                  <p className="text-white font-bold text-base md:text-lg">Web3 Growth</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;