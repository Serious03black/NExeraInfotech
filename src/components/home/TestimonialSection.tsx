
import React, { useRef } from 'react';
import Section from '@/components/shared/Section';

const TestimonialSection: React.FC = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);

  return (
    <Section className="bg-background">
      <div ref={testimonialRef} className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-orange-yellow">
            What Our Clients Say
          </h2>
        </div>
        
        <div className="bg-gradient-to-br from-R.S.-purple/5 to-R.S.-gold/5 p-8 md:p-12 rounded-2xl shadow-lg relative">
          <div className="absolute -top-4 -left-4 text-6xl text-R.S.-gold opacity-50">❝</div>
          <div className="absolute -bottom-4 -right-4 text-6xl text-R.S.-gold opacity-50 transform rotate-180">❝</div>
          
          <blockquote className="text-lg md:text-xl italic text-foreground/90 mb-8 relative z-10">
            R.S. infotech transformed our business with their innovative software solutions. Their team's deep technical expertise combined with their understanding of our business needs led to a product that exceeded our expectations. What sets them apart is their commitment to excellence and the values they bring to every project.
          </blockquote>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-R.S.-purple/20 flex items-center justify-center text-R.S.-purple font-bold">
              AR
            </div>
            <div>
              <div className="font-bold">Arjun Reddy</div>
              <div className="text-sm text-foreground/70">CTO, TechVision Global</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialSection;
