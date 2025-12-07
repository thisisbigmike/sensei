import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import { ChevronRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-20 md:pb-0">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 md:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs md:text-sm font-mono text-primary">OPEN FOR NEW PARTNERSHIPS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 md:mb-6"
          >
            <span className="text-white">{HERO_CONTENT.name.toUpperCase()}</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-3xl text-gray-300 font-light mb-6 md:mb-8 max-w-3xl px-2"
          >
            {HERO_CONTENT.title}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mb-8 md:mb-10 leading-relaxed px-4"
          >
            {HERO_CONTENT.subtitle}
            <br className="hidden md:block" />
            <span className="text-white/80 block md:inline mt-2 md:mt-0">{HERO_CONTENT.description}</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0"
          >
            <a 
              href="#contact"
              className="group relative px-8 py-4 bg-primary text-black font-bold rounded-lg overflow-hidden flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-2">
                WORK WITH ME <ChevronRight className="w-4 h-4" />
              </span>
            </a>
            
            <a 
              href="#projects"
              className="px-8 py-4 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              VIEW PROJECTS
            </a>
          </motion.div>

          {/* Stats Teaser */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-16 border-t border-white/10 pt-8 w-full max-w-5xl"
          >
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-white font-mono">220K+</div>
              <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">Referrals</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-white font-mono">4,000+</div>
              <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">Tier 1 Influencers</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-white font-mono">Top 10</div>
              <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">Global Exchanges</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-white font-mono flex justify-center items-center gap-2">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary" /> Winner
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">Global KOL Award</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;