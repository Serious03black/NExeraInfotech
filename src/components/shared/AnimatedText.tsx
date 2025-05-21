
import { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  type?: 'words' | 'chars' | 'simple';
}

const AnimatedText = ({ 
  text, 
  className = "", 
  type = 'simple'
}: AnimatedTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  
  // For simple text, just render directly
  if (type === 'simple') {
    const words = text.split(" ");
    
    return (
      <div className={className}>
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block mr-1"
          >
            {word}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div ref={textRef} className={className}>
      {text}
    </div>
  );
};

export default AnimatedText;
