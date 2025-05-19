
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MultilingualTextProps {
  texts: {
    text: string;
    language: string;
    className?: string;
  }[];
  interval?: number;
  className?: string;
  animationType?: 'fade' | 'slide' | 'scale';
}

const MultilingualText = ({
  texts,
  interval = 5000,
  className,
  animationType = 'fade'
}: MultilingualTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [texts.length, interval]);
  
  // Animation variants based on type
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1 } },
      exit: { opacity: 0, transition: { duration: 0.5 } }
    },
    slide: {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
      exit: { y: -20, opacity: 0, transition: { duration: 0.3 } }
    },
    scale: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
      exit: { scale: 1.1, opacity: 0, transition: { duration: 0.3 } }
    }
  };

  const currentText = texts[currentIndex];

  return (
    <div className={cn("multilingual-text-wrapper", className)}>
      <motion.div
        key={currentIndex}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants[animationType]}
        className={cn("multilingual-text", currentText.className)}
      >
        {currentText.text}
      </motion.div>
    </div>
  );
};

export default MultilingualText;
