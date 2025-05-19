
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import SEO from '@/components/shared/SEO';
import CustomButton from '@/components/shared/CustomButton';
import Section from '@/components/shared/Section';
import AnimatedText from '@/components/shared/AnimatedText';
import ScrollReveal from '@/components/shared/ScrollReveal';
import useScrollAnimations from '@/hooks/useScrollAnimations';
import { WaveText, TypewriterText, GradientFlowText } from '@/components/shared/TextEffects';
import { TechIconsCollection } from '@/components/shared/TechIcons';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const Index = () => {
  // Use our custom hook for scroll animations
  useScrollAnimations();
  
  useEffect(() => {
    // Features animation
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
    
    // Trust indicators animation
    const trustItems = document.querySelectorAll('.trust-item');
    trustItems.forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, y: 30 },
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
    
    // Advanced animation for hero section
    const heroTimeline = gsap.timeline();
    
    // Only run this animation when the SplitText is loaded
    if (typeof SplitText !== 'undefined') {
      try {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
          const splitTitle = new SplitText(heroTitle, { type: "chars,words" });
          
          heroTimeline
            .from(splitTitle.chars, {
              opacity: 0,
              y: 50,
              rotationX: -90,
              stagger: 0.02,
              duration: 0.8,
              ease: "back.out(1.7)"
            });
        }
      } catch (error) {
        console.error("Error with SplitText:", error);
      }
    }

    // Tech icons floating animation
    const techSection = document.querySelector('.tech-section');
    if (techSection) {
      gsap.fromTo(techSection.querySelectorAll('.tech-icon'),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: techSection,
            start: "top 80%",
          }
        }
      );
    }
    
    // Products animation
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
    
    // Loyalty benefits animation
    const loyaltyItems = document.querySelectorAll('.loyalty-item');
    loyaltyItems.forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: -20 },
        { 
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
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
    }
  ];
  
  const products = [
    {
      title: "Enterprise Solutions",
      description: "Comprehensive software platforms designed for large-scale business operations.",
      icon: "💼"
    },
    {
      title: "Cloud Services",
      description: "Scalable, secure cloud infrastructure and applications for modern businesses.",
      icon: "☁️"
    },
    {
      title: "AI Implementations",
      description: "Custom artificial intelligence solutions that drive automation and insights.",
      icon: "🤖"
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps with exceptional user experience.",
      icon: "📱"
    }
  ];
  
  const trustFactors = [
    {
      title: "10+ Years Experience",
      description: "A decade of excellence in software development and IT consulting."
    },
    {
      title: "500+ Successful Projects",
      description: "Hundreds of projects delivered on time and within budget."
    },
    {
      title: "99% Client Retention",
      description: "Our clients stay with us because of our consistent quality and service."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support for all our solutions."
    }
  ];
  
  const loyaltyBenefits = [
    {
      title: "Priority Support",
      description: "Dedicated support team with faster response times."
    },
    {
      title: "Free Upgrades",
      description: "Regular software updates and enhancements at no extra cost."
    },
    {
      title: "Exclusive Training",
      description: "Special access to training sessions and educational resources."
    },
    {
      title: "Partnership Rewards",
      description: "Special discounts on new services and products."
    }
  ];

  // Animation variants for different elements
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const decorativeVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Shivayan Enterprises - Innovation Meets Heritage" 
        description="A forward-thinking software development and IT consulting company providing powerful enterprise solutions, cloud services, and AI implementations."
      />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-shivayan-dark-purple to-shivayan-purple overflow-hidden"
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-shivayan-purple/80 to-shivayan-dark-purple/90"></div>
        
        {/* Decorative elements with enhanced animations */}
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-shivayan-gold/30 rounded-full blur-3xl"
          variants={decorativeVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/3 -right-20 w-96 h-96 bg-shivayan-orange/20 rounded-full blur-3xl"
          variants={decorativeVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            className="hero-title text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 gsap-title"
            variants={fadeInUp}
          >
            <WaveText text="Welcome to" className="block mb-2" />
            <GradientFlowText 
              text="Shivayan" 
              gradientColors="from-shivayan-gold via-shivayan-orange to-shivayan-yellow"
              className="text-6xl md:text-7xl lg:text-8xl"
            />
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 gsap-paragraph"
            variants={fadeInUp}
          >
            Where <TypewriterText text="Innovation" className="text-shivayan-gold font-bold" /> Meets 
            <TypewriterText text=" Power" delay={1000} className="text-shivayan-gold font-bold" />
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
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
        
        {/* Scroll indicator with enhanced animation */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5] 
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

      {/* Technology Icons Section */}
      <Section className="tech-section bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold">
                <GradientFlowText text="Technologies We Master" />
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg max-w-2xl mx-auto text-foreground/80">
                Our expertise spans across modern web and mobile development technologies to deliver cutting-edge solutions.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
            <TechIconsCollection 
              showLabels={true}
              grid={true}
              animations={true}
              iconSize="lg"
            />
          </ScrollReveal>
        </div>
      </Section>

      {/* Products Section */}
      <Section className="bg-gradient-to-br from-shivayan-purple/10 to-shivayan-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-orange-yellow">
                <WaveText text="Our Premium Products" />
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg max-w-2xl mx-auto text-foreground/80">
                Explore our comprehensive suite of enterprise-grade solutions designed to transform your business
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ScrollReveal 
                key={index}
                delay={index * 0.1}
              >
                <div className="product-item bg-background/70 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                  <p className="text-foreground/70">{product.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal direction="up" delay={0.5} className="mt-10 text-center">
            <Link to="/solutions">
              <CustomButton variant="secondary">
                View All Solutions
              </CustomButton>
            </Link>
          </ScrollReveal>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold gsap-title">
                <WaveText text="Why Choose Shivayan?" />
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg max-w-2xl mx-auto text-foreground/80 gsap-paragraph">
                Our unique approach combines technical excellence with cultural wisdom to deliver exceptional solutions for our clients.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <ScrollReveal 
                key={index}
                delay={index * 0.1} 
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div className="feature-item bg-background/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <AnimatedText 
                    text={feature.title} 
                    className="text-xl font-bold mb-4 text-gradient-cyan-purple"
                    type="words"
                  />
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal direction="up" delay={0.5} className="text-center">
            <Link to="/contact">
              <CustomButton variant="secondary">
                Contact Us Today
              </CustomButton>
            </Link>
          </ScrollReveal>
        </div>
      </Section>
      
      {/* Trust Factors Section */}
      <Section className="bg-shivayan-dark-purple text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shivayan-gold">
                <TypewriterText text="Trusted by Businesses Worldwide" speed={70} />
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl max-w-2xl mx-auto text-white/80 mb-12">
                Our track record speaks for itself
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFactors.map((factor, index) => (
              <div key={index} className="trust-item text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-shivayan-gold">{factor.title}</h3>
                <p className="text-white/80">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Loyalty Benefits Section */}
      <Section className="bg-gradient-to-br from-shivayan-purple/5 to-shivayan-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-cyan-purple">
                <WaveText text="Loyalty Program Benefits" />
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg max-w-2xl mx-auto text-foreground/80">
                We reward long-term partnerships with exclusive benefits and privileges
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {loyaltyBenefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="loyalty-item flex items-start p-4 bg-background/50 rounded-lg border border-shivayan-purple/10">
                  <div className="mr-4 mt-1 text-shivayan-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                    <p className="text-foreground/70">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-shivayan-purple to-shivayan-dark-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gsap-title">
              <WaveText text="Ready to Transform Your Business?" />
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90 gsap-paragraph">
              Partner with Shivayan Enterprises for innovative solutions that drive growth, efficiency, and success.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <Link to="/contact">
              <CustomButton variant="primary" size="lg">
                Get Started Today
              </CustomButton>
            </Link>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
};

export default Index;
