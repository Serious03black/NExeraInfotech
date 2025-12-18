
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/shared/CustomButton';
import Section from '@/components/shared/Section';

const AboutSection: React.FC = () => {
  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold">
              Who We Are
            </h2>
            <p className="text-lg mb-6 text-foreground/80">
              R.S.  infotech is a forward-thinking software development and IT consulting company that combines cutting-edge technology with the rich heritage and values of India.
            </p>
            <p className="text-lg mb-8 text-foreground/80">
              We believe in creating software solutions that are not just efficient and innovative, but also built on the foundations of trust, respect, and excellence that are deeply rooted in our cultural ethos.
            </p>
            <Link to="/about">
              <CustomButton 
                variant="secondary" 
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                }
              >
                Learn More About Us
              </CustomButton>
            </Link>
          </motion.div>
        </div>
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-R.S. -gold/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-R.S. -purple/30 rounded-full blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="R.S.  team working together" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
