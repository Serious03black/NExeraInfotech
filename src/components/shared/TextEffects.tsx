
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// Simple text display without animations
export const WaveText: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className }) => {
  const characters = Array.from(text);
  
  return (
    <span className={cn("inline-block", className)}>
      {characters.map((char, index) => (
        <span key={index} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

// Simplified typewriter effect
export const TypewriterText: React.FC<{
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}> = ({ text, className, speed = 40, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);
    }
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, text, speed, delay]);

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      <span className="inline-block w-[2px] h-[1em] bg-current ml-[1px] align-middle animate-pulse"/>
    </span>
  );
};

// Gradient text
export const GradientFlowText: React.FC<{
  text: string;
  className?: string;
  gradientColors?: string;
}> = ({ text, className, gradientColors = "from-shivayan-purple via-shivayan-gold to-shivayan-orange" }) => {
  return (
    <span className={cn(`bg-gradient-to-r bg-clip-text text-transparent`, gradientColors, className)}>
      {text}
    </span>
  );
};

// Emphasize specific words with a highlight effect
export const HighlightWords: React.FC<{
  text: string;
  highlight: string[];
  highlightClassName?: string;
  className?: string;
}> = ({ text, highlight, highlightClassName = "text-shivayan-gold font-bold", className }) => {
  const parts = text.split(new RegExp(`(${highlight.join('|')})`, 'gi'));
  
  return (
    <span className={className}>
      {parts.map((part, i) => 
        highlight.some(word => part.toLowerCase() === word.toLowerCase())
          ? <span key={i} className={highlightClassName}>{part}</span>
          : <span key={i}>{part}</span>
      )}
    </span>
  );
};

// Simplified reveal text component
export const RevealText: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className }) => {
  return (
    <span className={cn("inline-block", className)}>
      {text}
    </span>
  );
};

export default {
  WaveText,
  TypewriterText,
  GradientFlowText,
  HighlightWords,
  RevealText
};
