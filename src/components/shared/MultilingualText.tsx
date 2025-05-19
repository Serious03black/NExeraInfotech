
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MultilingualTextProps {
  texts: {
    text: string;
    language: string;
    className?: string;
    fontFamily?: 'sans' | 'heading' | 'cursive' | 'calligraphy' | 'marathi' | 'hindi' | 'sanskrit' | 'playfair' | 'montserrat' | 'quicksand' | 'abril' | 'cormorant' | 'decorative' | 'display';
  }[];
  interval?: number;
  className?: string;
  animationType?: 'fade' | 'slide' | 'scale' | 'rotate' | 'bounce' | 'flip';
  cardStyle?: 'none' | 'gradient' | 'glass' | 'minimal' | 'accent';
  showLanguage?: boolean;
}

const MultilingualText = ({
  texts,
  interval = 5000,
  className,
  animationType = 'fade',
  cardStyle = 'none',
  showLanguage = false
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
    },
    rotate: {
      hidden: { rotate: -5, opacity: 0 },
      visible: { rotate: 0, opacity: 1, transition: { duration: 0.6 } },
      exit: { rotate: 5, opacity: 0, transition: { duration: 0.4 } }
    },
    bounce: {
      hidden: { y: 50, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 15 } },
      exit: { y: -30, opacity: 0, transition: { duration: 0.3 } }
    },
    flip: {
      hidden: { rotateX: 90, opacity: 0 },
      visible: { rotateX: 0, opacity: 1, transition: { duration: 0.7 } },
      exit: { rotateX: -90, opacity: 0, transition: { duration: 0.5 } }
    }
  };

  const getFontClass = (fontFamily?: string) => {
    if (!fontFamily) return '';
    
    switch (fontFamily) {
      case 'sans': return 'font-sans';
      case 'heading': return 'font-heading';
      case 'display': return 'font-display';
      case 'cursive': return 'font-cursive';
      case 'calligraphy': return 'font-calligraphy';
      case 'marathi': return 'font-marathi';
      case 'hindi': return 'font-hindi';
      case 'sanskrit': return 'font-sanskrit';
      case 'playfair': return 'font-playfair';
      case 'montserrat': return 'font-montserrat';
      case 'quicksand': return 'font-quicksand';
      case 'abril': return 'font-abril';
      case 'cormorant': return 'font-cormorant';
      case 'decorative': return 'font-decorative';
      default: return '';
    }
  };

  const getCardClass = () => {
    switch (cardStyle) {
      case 'gradient': return 'designer-card-gradient';
      case 'glass': return 'designer-card-glass';
      case 'minimal': return 'designer-card-minimal';
      case 'accent': return 'designer-card-accent';
      default: return '';
    }
  };

  const currentText = texts[currentIndex];
  const fontClass = getFontClass(currentText.fontFamily);

  return (
    <div className={cn("multilingual-text-wrapper", getCardClass(), className)}>
      <motion.div
        key={currentIndex}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants[animationType]}
        className={cn("multilingual-text", currentText.className, fontClass)}
      >
        {currentText.text}
        {showLanguage && (
          <div className="mt-2 text-xs text-muted-foreground">{currentText.language}</div>
        )}
      </motion.div>
    </div>
  );
};

export default MultilingualText;
