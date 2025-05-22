
import React, { useRef } from 'react';
import Section from '@/components/shared/Section';

const StatsSection: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  return (
    <Section className="bg-shivayan-dark-purple text-white">
      <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="stat-item text-center p-6">
          <div className="text-5xl font-bold mb-2 text-shivayan-gold">200+</div>
          <div className="text-xl font-medium">Projects Completed</div>
        </div>
        <div className="stat-item text-center p-6">
          <div className="text-5xl font-bold mb-2 text-shivayan-orange">50+</div>
          <div className="text-xl font-medium">Expert Developers</div>
        </div>
        <div className="stat-item text-center p-6">
          <div className="text-5xl font-bold mb-2 text-shivayan-yellow">15+</div>
          <div className="text-xl font-medium">Countries Served</div>
        </div>
        <div className="stat-item text-center p-6">
          <div className="text-5xl font-bold mb-2 text-shivayan-cyan">98%</div>
          <div className="text-xl font-medium">Client Satisfaction</div>
        </div>
      </div>
    </Section>
  );
};

export default StatsSection;
