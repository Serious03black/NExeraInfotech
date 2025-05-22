
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/shared/CustomButton';
import Section from '@/components/shared/Section';

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  const servicesRef = useRef<HTMLDivElement>(null);

  return (
    <Section className="bg-gradient-to-br from-shivayan-purple/10 to-shivayan-gold/10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-cyan-purple">
          Our Services
        </h2>
        <p className="text-lg text-foreground/80">
          We provide a comprehensive range of services to help businesses innovate, optimize, and transform through technology.
        </p>
      </div>
      
      <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-item bg-background/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="text-shivayan-purple mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-foreground/70">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link to="/services">
          <CustomButton variant="secondary">
            Explore All Services
          </CustomButton>
        </Link>
      </div>
    </Section>
  );
};

export default ServicesSection;
