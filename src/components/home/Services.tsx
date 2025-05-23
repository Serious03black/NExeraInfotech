
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";
import Section from "@/components/shared/Section";
import CustomButton from '@/components/shared/CustomButton';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    // Service card animations
    gsap.fromTo(".service-card", 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.8,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 75%",
        }
      }
    );
    
    // Process steps animation
    gsap.fromTo(".process-step",
      { x: -30, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        stagger: 0.3, 
        duration: 0.6,
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 80%",
        }
      }
    );
    
    // Technology logos animation
    gsap.fromTo(".tech-item",
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".tech-section",
          start: "top 85%",
        }
      }
    );
  }, []);

  // Services data
 
  // Process steps
 

  // Technology logos
  const technologies = [
    "React", "Angular", "Vue.js", "Node.js", "Python", "Java", "AWS", "Azure", 
    "Google Cloud", "Docker", "Kubernetes", "TensorFlow", "PyTorch",'And Many More'
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >

        {/* Technologies Section */}
        <Section className="tech-section">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gradient-purple-gold">Technologies We Work With</h2>
            
            <div className="flex flex-wrap justify-center gap-6">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="tech-item px-6 py-3 bg-background/50 backdrop-blur-sm rounded-full shadow-md border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300"
                >
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-16">
              <p className="text-lg text-foreground/80 mb-6">
                Ready to discuss your project or learn more about our services?
              </p>
              <Link to="/contact">
                <CustomButton variant="primary" size="lg">
                  Contact Our Team
                </CustomButton>
              </Link>
            </div>
          </div>
        </Section>
      </motion.div>
    </>
  );
};

export default Services;
