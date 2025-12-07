import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import SectionHeading from './ui/SectionHeading';
import { TrendingUp, Users, Share2, HeartHandshake } from 'lucide-react';

const iconMap = {
  growth: TrendingUp,
  team: Users,
  viral: Share2,
  engagement: HeartHandshake
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-surface/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Services" 
          subtitle="Comprehensive growth systems for Web3 projects."
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-primary/10">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0 group-hover:bg-primary transition-colors" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;