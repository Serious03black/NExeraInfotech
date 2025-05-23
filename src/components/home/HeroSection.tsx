import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/shared/CustomButton';
import { WavyText } from '@/components/shared/TextEffects';
import image1 from "/background.png";

// Define your tech stack icons
const TechIcons = [
  { 
    name: 'React', 
    icon: (
      <svg width="40" height="40" viewBox="0 0 128 128" fill="#61DAFB">
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zM28.5 98.5c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8 20.3c4.1-2.4 5.5-9.8 3.8-20.3-.3-2.1-.8-4.3-1.4-6.6-5.2 1.2-10.7 2-16.5 2.5-3.4 4.8-6.9 9.1-10.4 13 7.4 7.3 14.9 12.3 21 12.3 1.3 0 2.5-.3 3.5-.9zM100.7 77.5c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm1.8-13.4c2 .8 4.2 1.5 6.4 2.1 10 3.7 15.7 8.7 15.7 13.4 0 5.7-8.3 11.6-22.1 15.6-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5z"></path>
      </svg>
    )
  },
  // Add more icons as needed...
];

interface FloatingTechIconProps {
  icon: React.ReactNode;
  x: string;
  y: string;
  delay: number;
  size: number;
  rotate: number;
}

const FloatingTechIcon: React.FC<FloatingTechIconProps> = ({ icon, x, y, delay, size, rotate }) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        width: `${size}rem`,
        height: `${size}rem`,
        zIndex: 1,
      }}
      initial={{ y: -10, opacity: 0, scale: 0.8 }}
      animate={{ 
        y: [0, -15, 0],
        opacity: [0.8, 1, 0.8],
        rotate: [rotate, rotate + 10, rotate],
      }}
      transition={{
        duration: 5 + Math.random() * 5,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    >
      {icon}
    </motion.div>
  );
};

interface HeroSectionProps {
  multilingualTexts?: {
    text: string;
    language: string;
    className: string;
    fontFamily: "display" | "sans" | "playfair" | "quicksand";
  }[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ multilingualTexts = [] }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-shivayan-dark-purple via-shivayan-purple to-shivayan-gold opacity-70"></div>
      
      {/* Background image */}
      <img 
        className="absolute w-full h-full object-contain opacity-40"
        src={image1}
        alt="Background pattern"
      />
      
      {/* Floating tech icons */}
      {TechIcons.slice(0, 8).map((tech, index) => (
        <FloatingTechIcon
          key={tech.name}
          icon={tech.icon}
          x={`${10 + (index * 15) % 75}%`}
          y={`${15 + (index * 20) % 65}%`}
          delay={index * 0.15}
          size={3 + Math.random() * 2}
          rotate={-15 + Math.random() * 30}
        />
      ))}
      
      <div className="w-full px-4 sm:px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              <WavyText 
                text="WHERE" 
                delay={0.3}
                staggerDelay={0.04}
                className="mr-4"
              />
              <WavyText 
                text="POWER" 
                delay={0.6}
                staggerDelay={0.04}
                className="text-shivayan-gold mr-4"
              />
              <WavyText 
                text="MEETS" 
                delay={0.9}
                staggerDelay={0.04}
                className="mr-4"
              />
              <WavyText 
                text="INNOVATION" 
                delay={1.2}
                staggerDelay={0.04}
                className="text-shivayan-gold"
              />
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
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-playfair text-white">
              <WavyText 
                text="EXCELLENCE AND INNOVATION" 
                delay={1.5}
                staggerDelay={0.03}
              />
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