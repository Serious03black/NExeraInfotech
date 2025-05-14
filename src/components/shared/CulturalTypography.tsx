import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Section from '@/components/shared/Section';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CulturalTypography = () => {
  useEffect(() => {
    const typographyItems = document.querySelectorAll('.typography-item');
    
    typographyItems.forEach((item, i) => {
      gsap.fromTo(item,
        { 
          opacity: 0,
          y: 30
        },
        { 
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, []);
  
  const typographyExamples = [
    {
      text: "Innovation",
      translation: "नवाचार",
      fontClass: "font-cursive",
      description: "Creative thinking and new ideas"
    },
    {
      text: "Heritage",
      translation: "विरासत",
      fontClass: "font-calligraphy",
      description: "Honoring our traditions"
    },
    {
      text: "Excellence",
      translation: "उत्कृष्टता",
      fontClass: "font-marathi",
      description: "Commitment to quality"
    },
    {
      text: "Creativity",
      translation: "रचनात्मकता",
      fontClass: "font-hindi",
      description: "Imaginative solutions"
    },
    {
      text: "Wisdom",
      translation: "ज्ञान",
      fontClass: "font-sanskrit",
      description: "Ancient knowledge"
    },
    {
      text: "Harmony",
      translation: "सामंजस्य",
      fontClass: "font-decorative",
      description: "Balance in all things"
    }
  ];

  return (
    <Section className="bg-gradient-to-br from-shivayan-purple/5 to-shivayan-gold/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold">Cultural Typography</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg max-w-2xl mx-auto text-foreground/80">
              Our design philosophy bridges cultures and traditions through typography, celebrating the rich linguistic heritage of India alongside modern global design.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {typographyExamples.map((example, index) => (
            <div key={index} className="typography-item">
              <motion.div
                className="bg-card p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold transition-all duration-300"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className={`text-3xl mb-2 ${example.fontClass}`}>
                  {example.text}
                </div>
                <div className="text-2xl mb-4 font-hindi text-shivayan-purple">
                  {example.translation}
                </div>
                <p className="text-foreground/80">{example.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CulturalTypography;
