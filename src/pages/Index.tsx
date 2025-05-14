
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import SEO from '@/components/shared/SEO';
import CustomButton from '@/components/shared/CustomButton';
import Section from '@/components/shared/Section';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const Index = () => {
  useEffect(() => {
    // GSAP animations
    const titles = document.querySelectorAll('.gsap-title');
    const paragraphs = document.querySelectorAll('.gsap-paragraph');
    
    titles.forEach(title => {
      gsap.fromTo(title, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          scrollTrigger: {
            trigger: title,
            start: "top 80%"
          }
        }
      );
    });
    
    paragraphs.forEach(paragraph => {
      gsap.fromTo(paragraph, 
        { y: 30, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          scrollTrigger: {
            trigger: paragraph,
            start: "top 85%"
          }
        }
      );
    });
    
    // Text reveal animation
    const featuresItems = document.querySelectorAll('.feature-item');
    featuresItems.forEach((item, index) => {
      gsap.fromTo(item,
        { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
    
  }, []);

  const features = [
    {
      title: "Innovative Solutions",
      description: "Combining cutting-edge technology with creative thinking to solve complex problems."
    },
    {
      title: "Cultural Heritage",
      description: "Drawing wisdom and values from India's rich cultural traditions."
    },
    {
      title: "Expert Team",
      description: "A diverse team of professionals dedicated to excellence in every project."
    },
    {
      title: "Client-Focused",
      description: "Putting client needs first with responsive communication and tailored solutions."
    },
    {
      title: "Continuous Growth",
      description: "Constantly evolving our skills and knowledge to stay ahead in technology."
    },
    {
      title: "Global Perspective",
      description: "Bringing international expertise while honoring our cultural roots."
    }
  ];

  return (
    <>
      <SEO 
        title="Shivayan Enterprises - Innovation Meets Heritage" 
        description="A forward-thinking software development and IT consulting company blending modern technology with timeless Indian heritage values."
      />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-shivayan-dark-purple to-shivayan-purple overflow-hidden"
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-shivayan-purple/80 to-shivayan-dark-purple/90"></div>
        
        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-shivayan-gold/30 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -20, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-20 w-96 h-96 bg-shivayan-orange/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, 20, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 gsap-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to <span className="text-gradient-orange-yellow">Shivayan</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 gsap-paragraph"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where <span className="text-shivayan-gold">Innovation</span> Meets <span className="text-shivayan-gold">Heritage</span>
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/about">
              <CustomButton 
                variant="primary" 
                size="lg"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                }
              >
                Discover Our Story
              </CustomButton>
            </Link>
            <Link to="/services">
              <CustomButton 
                variant="outline" 
                size="lg"
              >
                Explore Services
              </CustomButton>
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ 
            y: [0, 10, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 7l5 5 5-5"></path>
          </svg>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <Section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold gsap-title">Why Choose Shivayan?</h2>
            <p className="text-lg max-w-2xl mx-auto text-foreground/80 gsap-paragraph">Our unique approach combines technical excellence with cultural wisdom to deliver exceptional solutions for our clients.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-item bg-background/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-4 text-gradient-cyan-purple">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/contact">
              <CustomButton variant="secondary">
                Contact Us Today
              </CustomButton>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-shivayan-purple to-shivayan-dark-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gsap-title">Ready to Transform Your Business?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90 gsap-paragraph">Partner with Shivayan Enterprises for innovative solutions that drive growth, efficiency, and success.</p>
          <Link to="/contact">
            <CustomButton variant="primary" size="lg">
              Get Started Today
            </CustomButton>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Index;
