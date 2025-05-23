
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

// New optimized wavy text transition effect
export const WavyText: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
}> = ({ text, className, delay = 0, duration = 0.4, staggerDelay = 0.05 }) => {
  const characters = Array.from(text);
  
  return (
    <span className={cn("inline-block overflow-hidden", className)}>
      {characters.map((char, index) => (
        <span 
          key={index} 
          className="inline-block wave-element"
          style={{ 
            animationDelay: `${delay + index * staggerDelay}s`,
            animationDuration: `${duration}s`
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

// Simplified typewriter effect with reduced complexity
export const TypewriterText: React.FC<{
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}> = ({ text, className, speed = 40, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText('');
    let currentIndex = 0;
    let timer: ReturnType<typeof setTimeout>;
    
    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
        timer = setTimeout(typeNextChar, speed);
      }
    };
    
    const startDelay = setTimeout(() => {
      typeNextChar();
    }, delay);
    
    return () => {
      clearTimeout(startDelay);
      clearTimeout(timer);
    };
  }, [text, speed, delay]);

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      <span className="inline-block w-[2px] h-[1em] bg-current ml-[1px] align-middle animate-pulse"/>
    </span>
  );
};

// Optimized gradient text that uses CSS only
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

// Simple text highlighting without animations
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

// Simple reveal text
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
  RevealText,
  WavyText
};
