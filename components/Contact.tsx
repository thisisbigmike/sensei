import React from 'react';
import { motion } from 'framer-motion';
import { SOCIALS } from '../constants';
import { Twitter, MessageCircle, Send } from 'lucide-react';

const iconMap = {
  twitter: Twitter,
  discord: MessageCircle,
  telegram: Send
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-t from-black to-surface">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Scale Your Project?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 mb-12"
          >
            Let's build a growth system that drives real adoption.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {SOCIALS.map((social, index) => {
              const Icon = iconMap[social.icon];
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl glass-card group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-1">{social.platform}</h3>
                  <p className="text-sm text-gray-500">{social.handle}</p>
                </motion.a>
              );
            })}
          </div>
          
          <div className="text-sm text-gray-600 border-t border-white/10 pt-8">
            <p>© {new Date().getFullYear()} SENSEI. All rights reserved.</p>
            <p className="mt-2">"Building Web3 communities that scale."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;