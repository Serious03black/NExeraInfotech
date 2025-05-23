
import React from 'react';
import { WavyText } from './TextEffects';

interface AnimatedTextProps {
  text: string;
  className?: string;
  type?: 'words' | 'chars' | 'simple' | 'wavy';
  delay?: number;
  staggerDelay?: number;
  staggerDirection?: 'forward' | 'reverse' | 'random';
  onScrollReveal?: boolean;
}

const AnimatedText = ({ 
  text, 
  className = "", 
  type = 'simple',
  delay = 0,
  staggerDelay = 0.05,
  staggerDirection = 'forward',
  onScrollReveal = false
}: AnimatedTextProps) => {
  // For wavy text animation
  if (type === 'wavy') {
    return (
      <WavyText 
        text={text} 
        className={className} 
        delay={delay} 
        staggerDelay={staggerDelay}
      />
    );
  }
  
  // For simple text rendering (no animation)
  if (type === 'simple') {
    return <div className={className}>{text}</div>;
  }
  
  // For word-by-word animation
  if (type === 'words') {
    const words = text.split(" ");
    
    // Handle stagger direction
    let indexModifier = (index: number) => index;
    if (staggerDirection === 'reverse') {
      indexModifier = (index: number) => words.length - 1 - index;
    } else if (staggerDirection === 'random') {
      const randomIndices = [...Array(words.length).keys()]
        .sort(() => Math.random() - 0.5);
      indexModifier = (index: number) => randomIndices[index];
    }
    
    return (
      <div className={`${className} ${onScrollReveal ? 'gsap-paragraph' : ''}`}>
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block mr-1 opacity-0 animate-[fadeIn_0.5s_ease_forwards]"
            style={{ animationDelay: `${delay + indexModifier(index) * staggerDelay}s` }}
          >
            {word}
          </span>
        ))}
      </div>
    );
  }
  
  // For character-by-character animation
  const characters = Array.from(text);
  
  // Handle stagger direction
  let indexModifier = (index: number) => index;
  if (staggerDirection === 'reverse') {
    indexModifier = (index: number) => characters.length - 1 - index;
  } else if (staggerDirection === 'random') {
    const randomIndices = [...Array(characters.length).keys()]
      .sort(() => Math.random() - 0.5);
    indexModifier = (index: number) => randomIndices[index];
  }
  
  return (
    <div className={`${className} ${onScrollReveal ? 'gsap-paragraph' : ''}`}>
      {characters.map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-[fadeIn_0.3s_ease_forwards]"
          style={{ animationDelay: `${delay + indexModifier(index) * staggerDelay}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
