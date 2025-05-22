
import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/shared/Section';

const TypographySection: React.FC = () => {
  return (
    <Section className="bg-gradient-to-br from-shivayan-purple/5 to-shivayan-gold/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gradient-cyan-purple"
          >
            Expressive Typography
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg max-w-2xl mx-auto text-foreground/80"
          >
            Our design system incorporates elegant typography to enhance communication
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-background/80 rounded-lg shadow-lg p-8 border border-shivayan-purple/10"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-2xl font-bold mb-4 text-foreground text-center">
              Elegant Design Systems
            </h3>
            <p className="text-foreground/80 mb-6">Advanced interface design with premium typography</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="p-2 bg-shivayan-purple/10 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shivayan-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span className="font-abril">Premium Typography</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-shivayan-purple/10 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shivayan-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span className="font-cormorant">Elegant Layouts</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-shivayan-purple/10 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shivayan-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span className="font-montserrat">Modern Design</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-background/80 rounded-lg shadow-lg p-8 border border-shivayan-purple/10"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-quicksand text-2xl font-bold mb-4 text-foreground text-center">
              Pristine User Experience
            </h3>
            <p className="text-foreground/80 mb-6">Thoughtful interfaces with clear communication</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="p-2 bg-shivayan-gold/10 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shivayan-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <span className="font-cursive">Intuitive Navigation</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-shivayan-gold/10 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shivayan-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <span className="font-calligraphy">Refined Aesthetics</span>
              </div>
              <div className="flex items-center">
                <div className="p-2 bg-shivayan-gold/10 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shivayan-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <span className="font-decorative">Expressive Design</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <motion.div 
            className="inline-flex flex-wrap justify-center gap-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-cursive text-xl px-4 py-2 bg-shivayan-purple/5 rounded-full">Power</span>
            <span className="font-playfair text-xl px-4 py-2 bg-shivayan-gold/5 rounded-full">Progress</span>
            <span className="font-montserrat text-xl px-4 py-2 bg-shivayan-orange/5 rounded-full">Innovation</span>
            <span className="font-decorative text-xl px-4 py-2 bg-shivayan-cyan/5 rounded-full">Creativity</span>
            <span className="font-quicksand text-xl px-4 py-2 bg-shivayan-purple/5 rounded-full">Excellence</span>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default TypographySection;
