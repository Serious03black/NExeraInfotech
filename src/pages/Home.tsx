import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomButton from '@/components/shared/CustomButton';
import Section from '@/components/shared/Section';
import SEO from '@/components/shared/SEO';
import MultilingualText from '@/components/shared/MultilingualText';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  const multilingualTexts = [
    {
      text: "Excellence and Innovation",
      language: "English",
      className: "text-2xl font-bold",
      fontFamily: "display" as const
    },
    {
      text: "Creative Design Solutions",
      language: "English",
      className: "text-2xl font-bold",
      fontFamily: "sans" as const
    },
    {
      text: "Power & Innovation",
      language: "English",
      className: "text-2xl font-bold",
      fontFamily: "playfair" as const
    },
    {
      text: "Elegance & Excellence",
      language: "English",
      className: "text-2xl font-bold",
      fontFamily: "quicksand" as const
    }
  ];

  useEffect(() => {
    // Services section animation
    if (servicesRef.current) {
      const serviceItems = servicesRef.current.querySelectorAll('.service-item');
      
      gsap.fromTo(serviceItems, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
          }
        }
      );
    }
    
    // Products animation
    if (productsRef.current) {
      const productItems = productsRef.current.querySelectorAll('.product-item');
      
      gsap.fromTo(productItems, 
        { scale: 0.9, opacity: 0 }, 
        { 
          scale: 1, 
          opacity: 1, 
          stagger: 0.15,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 80%",
          }
        }
      );
    }
    
    // Trust section animation
    if (trustRef.current) {
      const trustItems = trustRef.current.querySelectorAll('.trust-item');
      
      gsap.fromTo(trustItems, 
        { y: 30, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: trustRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Testimonials animation
    if (testimonialRef.current) {
      gsap.fromTo(testimonialRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top 80%",
          }
        }
      );
    }

    // Stats animation
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('.stat-item');
      
      gsap.fromTo(statItems, 
        { scale: 0.9, opacity: 0 }, 
        { 
          scale: 1, 
          opacity: 1, 
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 75%",
          }
        }
      );
    }
  }, []);

  const services = [
    {
      title: "Custom Software Development",
      description: "Tailor-made software solutions designed specifically to meet your business needs and challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: "IT Consulting",
      description: "Expert guidance to optimize your technology infrastructure and align IT with business goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to gain insights, automate processes, and drive innovation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a9 9 0 0 1 9 9c0 3.086-1.243 5.887-3.257 7.93L12 24l-5.743-5.07A9 9 0 0 1 3 11a9 9 0 0 1 9-9Z"></path>
          <circle cx="12" cy="11" r="3"></circle>
        </svg>
      )
    },
    {
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure and migration services to modernize your operations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
      )
    }
  ];

  const products = [
    {
      title: "Enterprise Management Suite",
      description: "Comprehensive software platform for managing all aspects of enterprise operations.",
      category: "Enterprise"
    },
    {
      title: "ShivaCloud Platform",
      description: "Our flagship cloud platform offering scalable infrastructure and services.",
      category: "Cloud"
    },
    {
      title: "AI Insights Engine",
      description: "Advanced analytics and AI-powered decision-making tools for businesses.",
      category: "AI"
    },
    {
      title: "SecureConnect",
      description: "End-to-end encrypted communication and collaboration platform for teams.",
      category: "Security"
    },
    {
      title: "MobileWorks Pro",
      description: "Enterprise-grade mobile application development framework.",
      category: "Mobile"
    },
    {
      title: "DataFlow Analytics",
      description: "Real-time data processing and visualization platform.",
      category: "Analytics"
    }
  ];

  const trustFactors = [
    {
      title: "ISO Certified",
      description: "We adhere to international standards for quality and security."
    },
    {
      title: "GDPR Compliant",
      description: "All our processes and products comply with data protection regulations."
    },
    {
      title: "24/7 Support",
      description: "Our dedicated team is available round-the-clock for any assistance."
    },
    {
      title: "Secure Infrastructure",
      description: "Built-in security at every layer of our technology stack."
    }
  ];

  return (
    <>
      <SEO title="Home" />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-shivayan-dark-purple via-shivayan-purple to-shivayan-gold opacity-90"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -left-40 w-96 h-96 bg-shivayan-gold/30 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-shivayan-orange/30 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Where <span className="text-gradient-orange-yellow">Power</span> Meets <span className="text-gradient-orange-yellow">Innovation</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Building cutting-edge enterprise software solutions that drive business growth and transformation.
              </p>
            </motion.div>
            
            {/* Multilingual Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <MultilingualText 
                texts={multilingualTexts} 
                interval={3000}
                animationType="fade"
                className="text-white"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link to="/contact">
                <CustomButton 
                  variant="primary" 
                  size="lg"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  }
                >
                  Get Started
                </CustomButton>
              </Link>
              <Link to="/portfolio">
                <CustomButton 
                  variant="outline" 
                  size="lg"
                >
                  View Our Work
                </CustomButton>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 8, 0] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </motion.div>
      </div>

      {/* Products Showcase Section */}
      <Section className="bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold"
            >
              Our Premium Products
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg max-w-2xl mx-auto text-foreground/80"
            >
              Powerful enterprise solutions designed to transform your business operations and drive growth
            </motion.p>
          </div>

          <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="product-item">
                <motion.div
                  className="bg-card p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold transition-all duration-300 h-full"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-shivayan-purple/10 text-shivayan-purple rounded-full">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-foreground/80">{product.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/solutions">
              <CustomButton variant="secondary">
                Explore All Products
              </CustomButton>
            </Link>
          </div>
        </div>
      </Section>

      {/* Trust & Reliability Section */}
      <Section className="bg-gradient-to-br from-shivayan-purple/5 to-shivayan-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gradient-cyan-purple"
            >
              Trust & Reliability
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg max-w-2xl mx-auto text-foreground/80"
            >
              Our commitment to security, quality, and dependability is at the core of everything we do
            </motion.p>
          </div>

          <div ref={trustRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {trustFactors.map((factor, index) => (
              <div key={index} className="trust-item">
                <motion.div
                  className="bg-background/80 p-6 rounded-lg border border-shivayan-purple/10 shadow-md"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-shivayan-purple/10 rounded-full text-shivayan-purple mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">{factor.title}</h3>
                  </div>
                  <p className="text-foreground/70">{factor.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold">
                Who We Are
              </h2>
              <p className="text-lg mb-6 text-foreground/80">
                Shivayan Enterprises is a forward-thinking software development and IT consulting company that combines cutting-edge technology with the rich heritage and values of India.
              </p>
              <p className="text-lg mb-8 text-foreground/80">
                We believe in creating software solutions that are not just efficient and innovative, but also built on the foundations of trust, respect, and excellence that are deeply rooted in our cultural ethos.
              </p>
              <Link to="/about">
                <CustomButton 
                  variant="secondary" 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  }
                >
                  Learn More About Us
                </CustomButton>
              </Link>
            </motion.div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-shivayan-gold/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shivayan-purple/30 rounded-full blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Shivayan team working together" 
                  className="w-full h-auto rounded-lg shadow-xl relative z-10" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
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

      {/* Typography Showcase */}
      <Section className="bg-gradient-to-br from-shivayan-purple/5 to-shivayan-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gradient-cyan-purple"
            >
              Expressive Typography
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg max-w-2xl mx-auto text-foreground/80"
            >
              Our design system incorporates elegant typography to enhance communication
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-background/80 rounded-lg shadow-lg p-8 border border-shivayan-purple/10"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-playfair text-2xl font-bold mb-4 text-foreground text-center">
                Elegant Design Systems
              </h3>
              <p className="text-foreground/80 mb-6">Advanced interface design with premium typography</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="p-2 bg-shivayan-purple/10 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shivayan-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <span className="font-abril">Premium Typography</span>
                </div>
                <div className="flex items-center">
                  <div className="p-2 bg-shivayan-purple/10 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shivayan-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <span className="font-cormorant">Elegant Layouts</span>
                </div>
                <div className="flex items-center">
                  <div className="p-2 bg-shivayan-purple/10 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shivayan-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <span className="font-montserrat">Modern Design</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-background/80 rounded-lg shadow-lg p-8 border border-shivayan-purple/10"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-quicksand text-2xl font-bold mb-4 text-foreground text-center">
                Pristine User Experience
              </h3>
              <p className="text-foreground/80 mb-6">Thoughtful interfaces with clear communication</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="p-2 bg-shivayan-gold/10 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shivayan-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <span className="font-cursive">Intuitive Navigation</span>
                </div>
                <div className="flex items-center">
                  <div className="p-2 bg-shivayan-gold/10 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shivayan-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <span className="font-calligraphy">Refined Aesthetics</span>
                </div>
                <div className="flex items-center">
                  <div className="p-2 bg-shivayan-gold/10 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shivayan-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <span className="font-decorative">Expressive Design</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <motion.div 
              className="inline-flex flex-wrap justify-center gap-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-cursive text-xl px-4 py-2 bg-shivayan-purple/5 rounded-full">Power</span>
              <span className="font-playfair text-xl px-4 py-2 bg-shivayan-gold/5 rounded-full">Progress</span>
              <span className="font-montserrat text-xl px-4 py-2 bg-shivayan-orange/5 rounded-full">Innovation</span>
              <span className="font-decorative text-xl px-4 py-2 bg-shivayan-cyan/5 rounded-full">Creativity</span>
              <span className="font-quicksand text-xl px-4 py-2 bg-shivayan-purple/5 rounded-full">Excellence</span>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
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

      {/* Testimonial Section */}
      <Section className="bg-background">
        <div ref={testimonialRef} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-orange-yellow">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-shivayan-purple/5 to-shivayan-gold/5 p-8 md:p-12 rounded-2xl shadow-lg relative">
            <div className="absolute -top-4 -left-4 text-6xl text-shivayan-gold opacity-50">❝</div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-shivayan-gold opacity-50 transform rotate-180">❝</div>
            
            <blockquote className="text-lg md:text-xl italic text-foreground/90 mb-8 relative z-10">
              Shivayan Enterprises transformed our business with their innovative software solutions. Their team's deep technical expertise combined with their understanding of our business needs led to a product that exceeded our expectations. What sets them apart is their commitment to excellence and the values they bring to every project.
            </blockquote>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-shivayan-purple/20 flex items-center justify-center text-shivayan-purple font-bold">
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

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-shivayan-purple to-shivayan-dark-purple text-white">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Partner with Shivayan Enterprises and experience the perfect blend of innovation, expertise, and proven solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/contact">
              <CustomButton 
                variant="primary" 
                size="lg"
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                }
              >
                Contact Us Today
              </CustomButton>
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Home;
