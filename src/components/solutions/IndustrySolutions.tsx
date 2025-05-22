
import React from "react";
import Section from "@/components/shared/Section";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface SolutionItem {
  title: string;
  description: string;
  calligraphyText: string;
}

const IndustrySolutions: React.FC = () => {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {industrySolutions.map((solution, index) => (
            <ScrollReveal 
              key={index} 
              delay={0.1 * (index + 1)} 
              className="solution-item bg-card p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300 hover:-translate-y-1"
              width="100%"
            >
              <div className="mb-4 overflow-hidden">
                <div className={`text-4xl font-calligraphy text-shivayan-purple mb-2`}>
                  {solution.calligraphyText}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
              <p className="text-foreground/80">{solution.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default IndustrySolutions;
