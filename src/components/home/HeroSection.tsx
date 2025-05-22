
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/shared/CustomButton';
import MultilingualText from '@/components/shared/MultilingualText';

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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-shivayan-dark-purple via-shivayan-purple to-shivayan-gold opacity-50"></div>
      <img className='opacity-100 ml-12 mb-20 relative'
      src="../../public/background.png"
      alt=""
       />
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-shivayan-gold/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-shivayan-orange/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Where <span className="text-gradient-orange-yellow">Power</span> Meets <span className="text-gradient-orange-yellow">Innovation</span>
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
          
          {/* Multilingual Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <MultilingualText 
              texts={multilingualTexts} 
              interval={3000}
              animationType="fade"
              className="text-white"
            />
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
              >
                View Our Work
              </CustomButton>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 8, 0] 
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </div>
  );
};

export default HeroSection;
