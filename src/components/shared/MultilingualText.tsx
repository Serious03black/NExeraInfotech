
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MultilingualTextProps {
  texts: {
    text: string;
    language: string;
    className?: string;
    fontFamily?: 'sans' | 'heading' | 'cursive' | 'calligraphy' | 'sanskrit' | 'playfair' | 'montserrat' | 'quicksand' | 'abril' | 'cormorant' | 'decorative' | 'display';
  }[];
  interval?: number;
  className?: string;
  showLanguage?: boolean;
  animationType?: 'fade' | 'slide' | 'none';
}

const MultilingualText = ({
  texts,
  interval = 5000,
  className,
  showLanguage = false,
  animationType = 'fade'
}: MultilingualTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const getFontClass = (fontFamily?: string) => {
    if (!fontFamily) return '';
    
    switch (fontFamily) {
      case 'sans': return 'font-sans';
      case 'heading': return 'font-heading';
      case 'display': return 'font-display';
      case 'cursive': return 'font-cursive';
      case 'calligraphy': return 'font-calligraphy';
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

  const currentText = texts[currentIndex];
  const fontClass = getFontClass(currentText.fontFamily);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'fade': return 'transition-opacity duration-500';
      case 'slide': return 'transition-transform duration-500';
      default: return '';
    }
  };

  return (
    <div className={cn("multilingual-text-wrapper", className)}>
      <div className={cn("multilingual-text", currentText.className, fontClass, getAnimationClass())}>
        {currentText.text}
        {showLanguage && (
          <div className="mt-2 text-xs text-muted-foreground">{currentText.language}</div>
        )}
      </div>
    </div>
  );
};

export default MultilingualText;
