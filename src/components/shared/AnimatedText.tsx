
import React from 'react';
import { WavyText } from './TextEffects';

interface AnimatedTextProps {
  text: string;
  className?: string;
  type?: 'words' | 'chars' | 'simple' | 'wavy';
  delay?: number;
  staggerDelay?: number;
}

const AnimatedText = ({ 
  text, 
  className = "", 
  type = 'simple',
  delay = 0,
  staggerDelay = 0.05
}: AnimatedTextProps) => {
  // For wavy text animation
  if (type === 'wavy') {
    return <WavyText text={text} className={className} delay={delay} staggerDelay={staggerDelay} />;
  }
  
  // For simple text rendering (no animation)
  if (type === 'simple') {
    return <div className={className}>{text}</div>;
  }
  
  // For word-by-word animation
  if (type === 'words') {
    const words = text.split(" ");
    return (
      <div className={className}>
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block mr-1 opacity-0 animate-[fadeIn_0.5s_ease_forwards]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {word}
          </span>
        ))}
      </div>
    );
  }
  
  // For character-by-character animation
  const characters = Array.from(text);
  return (
    <div className={className}>
      {characters.map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-[fadeIn_0.3s_ease_forwards]"
          style={{ animationDelay: `${index * 0.04}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
