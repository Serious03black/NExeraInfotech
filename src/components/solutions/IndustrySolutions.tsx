
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/shared/Section";
import ScrollReveal from "@/components/shared/ScrollReveal";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface SolutionItem {
  title: string;
  description: string;
  calligraphyText: string;
}

const IndustrySolutions: React.FC = () => {
  const solutionsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animated text reveal for solutions
    if (solutionsRef.current) {
      const solutions = solutionsRef.current.querySelectorAll('.solution-item');
      
      gsap.fromTo(solutions, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: solutionsRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  const industrySolutions: SolutionItem[] = [
    {
      title: "Healthcare",
      description: "Comprehensive digital solutions for modern healthcare providers, improving patient care and operational efficiency.",
      calligraphyText: "Healing",
    },
    {
      title: "Finance",
      description: "Secure, scalable financial technology that transforms traditional banking into innovative digital experiences.",
      calligraphyText: "Prosperity",
    },
    {
      title: "Education",
      description: "Interactive learning platforms that make education more accessible, engaging, and effective for all.",
      calligraphyText: "Knowledge",
    },
    {
      title: "Retail",
      description: "Omnichannel commerce solutions that create seamless shopping experiences across physical and digital touchpoints.",
      calligraphyText: "Commerce",
    }
  ];

  return (
    <Section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold">Industry-Specific Solutions</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg max-w-2xl mx-auto text-foreground/80">
              We deliver tailored technology solutions that address the unique challenges and opportunities in your industry.
            </p>
          </ScrollReveal>
        </div>
        
        <div ref={solutionsRef} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {industrySolutions.map((solution, index) => (
            <div key={index} className="solution-item bg-card p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4 overflow-hidden">
                <div className={`text-4xl font-calligraphy text-shivayan-purple mb-2`}>
                  {solution.calligraphyText}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
              <p className="text-foreground/80">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default IndustrySolutions;
