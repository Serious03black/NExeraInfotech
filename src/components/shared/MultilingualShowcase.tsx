
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/shared/ScrollReveal';

interface MultilingualShowcaseProps {
  className?: string;
}

const MultilingualShowcase = ({ className = '' }: MultilingualShowcaseProps) => {
  const fontStyles = [
    {
      text: "Innovative Solutions",
      language: "English",
      fontClass: "font-display",
      description: "Modern elegant display font"
    },
    {
      text: "Creative Excellence",
      language: "English",
      fontClass: "font-cursive",
      description: "Flowing cursive style"
    },
    {
      text: "Timeless Heritage",
      language: "English",
      fontClass: "font-calligraphy",
      description: "Classic calligraphy"
    },
    {
      text: "कलात्मक उत्कृष्टता",
      language: "Marathi",
      fontClass: "font-marathi",
      description: "Traditional Marathi typography"
    },
    {
      text: "नवीन विचार",
      language: "Hindi",
      fontClass: "font-hindi",
      description: "Modern Hindi font"
    },
    {
      text: "सौंदर्य और प्रतिभा",
      language: "Sanskrit",
      fontClass: "font-sanskrit",
      description: "Ancient Sanskrit inspired"
    },
    {
      text: "Artistic Vision",
      language: "English",
      fontClass: "font-decorative",
      description: "Decorative script style"
    }
  ];

  return (
    <div className={`py-12 ${className}`}>
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient-purple-gold">
            Multicultural Typography
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {fontStyles.map((style, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div 
                className="bg-card p-6 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className={`text-3xl md:text-4xl mb-3 ${style.fontClass}`}>
                  {style.text}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/70">{style.language}</span>
                  <span className="text-sm text-foreground/70">{style.description}</span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Our design philosophy embraces multiple languages and typography styles, reflecting our commitment to inclusivity and cultural diversity in everything we create.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default MultilingualShowcase;
