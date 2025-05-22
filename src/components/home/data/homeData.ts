
import React from 'react';
import { CodeIcon, ConsultingIcon, AIIcon, CloudIcon } from './ServiceIcons';

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
    icon: CodeIcon
  },
  {
    title: "IT Consulting",
    description: "Expert guidance to optimize your technology infrastructure and align IT with business goals.",
    icon: ConsultingIcon
  },
  {
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to gain insights, automate processes, and drive innovation.",
    icon: AIIcon
  },
  {
    title: "Cloud Solutions",
    description: "Secure, scalable cloud infrastructure and migration services to modernize your operations.",
    icon: CloudIcon
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
