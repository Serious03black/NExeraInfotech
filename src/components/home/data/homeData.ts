
import React from 'react';

export const multilingualTexts = [
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

export const services = [
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

export const products = [
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

export const trustFactors = [
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
