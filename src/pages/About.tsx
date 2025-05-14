
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";
import Section from "@/components/shared/Section";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Timeline animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-content",
        start: "top 75%",
      }
    });

    tl.fromTo(".animate-text", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 }
    );
    
    // Team members animation
    gsap.fromTo(".team-member",
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.6,
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 75%",
        }
      }
    );
    
    // Values animation
    gsap.fromTo(".value-item",
      { scale: 0.9, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        stagger: 0.15, 
        duration: 0.5,
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 80%",
        }
      }
    );
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "Founder & CEO",
      bio: "With over 20 years in technology leadership, Arjun combines technical expertise with cultural values to drive Shivayan's vision forward.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Priya Patel",
      role: "CTO",
      bio: "Priya leads our technical strategy and innovations, ensuring we stay at the cutting edge while delivering reliable solutions.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
    },
    {
      name: "Vikram Mehta",
      role: "Head of Consulting",
      bio: "Vikram brings strategic insight to our consulting practice, helping clients navigate complex technological challenges.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    },
    {
      name: "Anjali Desai",
      role: "Design Director",
      bio: "Anjali ensures that our solutions are not only functional but also aesthetically pleasing and user-friendly.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    }
  ];

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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient-purple-gold animate-text">Our Story</h2>
              <div className="space-y-6">
                <p className="text-lg text-foreground/80 animate-text">
                  Founded in 2015, Shivayan Enterprises began with a vision to create technology solutions that blend modern innovation with timeless values from Indian heritage. Our name "Shivayan" combines elements representing transformation and journey, reflecting our commitment to guiding clients through their technological evolution.
                </p>
                <p className="text-lg text-foreground/80 animate-text">
                  Starting as a small team of passionate technologists in Bangalore, we've grown to become a global company with offices in India, the United States, and Singapore. Throughout our growth, we've maintained our founding principles: technical excellence, cultural wisdom, and client-centered service.
                </p>
                <p className="text-lg text-foreground/80 animate-text">
                  Today, Shivayan Enterprises serves clients across multiple industries, from startups to Fortune 500 companies. We take pride in our diverse, talented team that brings together different perspectives united by a shared commitment to innovation and excellence.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Mission & Vision Section */}
        <Section className="bg-gradient-to-br from-shivayan-purple/10 to-shivayan-gold/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient-cyan-purple animate-text">Our Mission</h2>
                <p className="text-lg text-foreground/80 animate-text">
                  To empower organizations through technology solutions that combine innovation with cultural wisdom, creating sustainable value and meaningful impact for our clients and communities.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient-orange-yellow animate-text">Our Vision</h2>
                <p className="text-lg text-foreground/80 animate-text">
                  To be recognized globally as a leader in technology services that bridge modern innovation with timeless values, setting new standards for excellence, ethics, and cultural integration in the IT industry.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Core Values Section */}
        <Section className="values-section bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient-purple-gold animate-text">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className="value-item bg-background/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold/30 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-3 text-gradient-cyan-purple">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Team Section */}
        <Section className="team-section bg-gradient-to-br from-shivayan-dark-purple/5 to-shivayan-gold/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gradient-purple-gold animate-text">Meet Our Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110" 
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-shivayan-purple font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-foreground/70">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </motion.div>
    </>
  );
};

export default About;
