
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/shared/CustomButton';
import Section from '@/components/shared/Section';

const CtaSection: React.FC = () => {
  return (
    <Section className="bg-gradient-to-r from-shivayan-purple to-shivayan-dark-purple text-white">
      <div className="text-center max-w-3xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-white/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Partner with Shivayan Enterprises and experience the perfect blend of innovation, expertise, and proven solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link to="/contact">
            <CustomButton 
              variant="primary" 
              size="lg"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              }
            >
              Contact Us Today
            </CustomButton>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default CtaSection;
