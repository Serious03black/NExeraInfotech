
import React from "react";
import Section from "@/components/shared/Section";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  fontClass: string;
}

const ProcessSteps: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your business, challenges, and vision through in-depth consultation.",
      fontClass: "font-calligraphy"
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our experts develop a tailored roadmap that aligns technology solutions with your business objectives.",
      fontClass: "font-cursive"
    },
    {
      number: "03",
      title: "Implementation",
      description: "We bring your solution to life with agile development methodologies and continuous collaboration.",
      fontClass: "font-decorative"
    },
    {
      number: "04",
      title: "Evolution",
      description: "We provide ongoing support and iterative improvements to ensure your solution grows with your business.",
      fontClass: "font-sans"
    }
  ];

  return (
    <Section className="bg-gradient-to-br from-shivayan-purple/10 to-shivayan-gold/10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-cyan-purple">Our Process</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg max-w-2xl mx-auto text-foreground/80">
              A thoughtful approach that combines ancient wisdom with modern technological excellence.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, index) => (
            <ScrollReveal 
              key={index} 
              delay={0.2 * (index + 1)}
              direction={index % 2 === 0 ? 'left' : 'right'}
              className={`flex flex-col md:flex-row items-start md:items-center gap-6 mb-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              width="100%"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-shivayan-purple to-shivayan-gold rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{step.number}</span>
              </div>
              <div>
                <div className={`${step.fontClass} text-3xl mb-2 text-shivayan-purple`}>{step.title}</div>
                <p className="text-lg text-foreground/80">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ProcessSteps;
