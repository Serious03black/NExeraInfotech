
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/shared/CustomButton';
import MultilingualText from '@/components/shared/MultilingualText';
import image1 from "/background.png";

interface HeroSectionProps {
  multilingualTexts: {
    text: string;
    language: string;
    className: string;
    fontFamily: "display" | "sans" | "playfair" | "quicksand";
  }[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ multilingualTexts }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-shivayan-dark-purple via-shivayan-purple to-shivayan-gold opacity-70"></div>
      
      {/* Background image - positioning fixed */}
      <img 
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        src={image1}
        alt="Background pattern"
      />
      
      <div className="w-full px-4 sm:px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              WHERE <span className="text-shivayan-gold">POWER</span> MEETS <span className="text-shivayan-gold">INNOVATION</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Building cutting-edge enterprise software solutions that drive business growth and transformation.
            </p>
          </motion.div>
          
          {/* Single Multilingual Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-playfair text-white">
              EXCELLENCE AND INNOVATION
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/contact">
              <CustomButton 
                variant="primary" 
                size="lg"
                className="bg-shivayan-gold hover:bg-shivayan-gold/90 text-shivayan-dark-purple min-w-[200px]"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                }
              >
                Get Started
              </CustomButton>
            </Link>
            <Link to="/portfolio">
              <CustomButton 
                variant="outline" 
                size="lg"
                className="border-shivayan-gold text-shivayan-gold hover:bg-shivayan-gold/10 min-w-[200px]"
              >
                View Our Work
              </CustomButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
