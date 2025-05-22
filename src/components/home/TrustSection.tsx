
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/shared/Section';

interface TrustFactor {
  title: string;
  description: string;
}

interface TrustSectionProps {
  trustFactors: TrustFactor[];
}

const TrustSection: React.FC<TrustSectionProps> = ({ trustFactors }) => {
  const trustRef = useRef<HTMLDivElement>(null);

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
            Trust & Reliability
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg max-w-2xl mx-auto text-foreground/80"
          >
            Our commitment to security, quality, and dependability is at the core of everything we do
          </motion.p>
        </div>

        <div ref={trustRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {trustFactors.map((factor, index) => (
            <div key={index} className="trust-item">
              <motion.div
                className="bg-background/80 p-6 rounded-lg border border-shivayan-purple/10 shadow-md"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-shivayan-purple/10 rounded-full text-shivayan-purple mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">{factor.title}</h3>
                </div>
                <p className="text-foreground/70">{factor.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TrustSection;
