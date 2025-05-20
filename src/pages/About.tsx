
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";
import Section from "@/components/shared/Section";
import AnimatedText from '@/components/shared/AnimatedText';
import ScrollReveal from '@/components/shared/ScrollReveal';
import useScrollAnimations from '@/hooks/useScrollAnimations';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Use our custom hook for scroll animations
  useScrollAnimations();
  
  useEffect(() => {
    // Additional custom animations can be added here if needed
  }, []);

  // Team members data


  // Core values
  const coreValues = [
    {
      title: "Trust",
      description: "Building lasting relationships through transparency and reliability."
    },
    {
      title: "Innovation",
      description: "Constantly exploring new ideas and technologies to stay ahead."
    },
    {
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do."
    },
    {
      title: "Heritage",
      description: "Drawing wisdom from our cultural roots to inform our approach."
    },
    {
      title: "Collaboration",
      description: "Working closely with clients as true partners in their success."
    },
    {
      title: "Growth",
      description: "Continuously learning and evolving to meet new challenges."
    }
  ];

  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Shivayan Enterprises - our journey, mission, vision, and the team driving innovation with Indian heritage."
      />
      
      <PageHeader 
        title="About Us" 
        subtitle="Our Journey, Mission, and the Team Behind Shivayan"
        backgroundImage="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Our Story Section */}
        <Section className="about-content py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient-purple-gold animate-text">Our Story</h2>
              </ScrollReveal>
              <div className="space-y-6">
                <ScrollReveal delay={0.1}>
                  <p className="text-lg text-foreground/80 animate-text">
                    Founded in 2015, Shivayan Enterprises began with a vision to create technology solutions that blend modern innovation with timeless values from Indian heritage. Our name "Shivayan" combines elements representing transformation and journey, reflecting our commitment to guiding clients through their technological evolution.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-lg text-foreground/80 animate-text">
                    Starting as a small team of passionate technologists in Bangalore, we've grown to become a global company with offices in India, the United States, and Singapore. Throughout our growth, we've maintained our founding principles: technical excellence, cultural wisdom, and client-centered service.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <p className="text-lg text-foreground/80 animate-text">
                    Today, Shivayan Enterprises serves clients across multiple industries, from startups to Fortune 500 companies. We take pride in our diverse, talented team that brings together different perspectives united by a shared commitment to innovation and excellence.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </Section>

        {/* Mission & Vision Section */}
        <Section className="bg-gradient-to-br from-shivayan-purple/10 to-shivayan-gold/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gradient-cyan-purple animate-text">Our Mission</h2>
                  <AnimatedText 
                    text="To empower organizations through technology solutions that combine innovation with cultural wisdom, creating sustainable value and meaningful impact for our clients and communities."
                    className="text-lg text-foreground/80 animate-text"
                    type="simple"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gradient-orange-yellow animate-text">Our Vision</h2>
                  <AnimatedText 
                    text="To be recognized globally as a leader in technology services that bridge modern innovation with timeless values, setting new standards for excellence, ethics, and cultural integration in the IT industry."
                    className="text-lg text-foreground/80 animate-text"
                    type="simple"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Section>

        {/* Core Values Section */}
        <Section className="values-section bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient-purple-gold animate-text">Our Core Values</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <ScrollReveal 
                  key={index} 
                  delay={index * 0.1}
                  className="h-full"
                >
                  <div className="value-item bg-background/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300 h-full">
                    <h3 className="text-2xl font-bold mb-3 text-gradient-cyan-purple">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Section>
      </motion.div>
    </>
  );
};

export default About;
