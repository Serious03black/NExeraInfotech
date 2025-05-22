
import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { Link } from "react-router-dom";

const SolutionsCallToAction: React.FC = () => {
  return (
    <Section className="bg-gradient-to-r from-shivayan-purple to-shivayan-dark-purple text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-decorative">Transform Your Business Today</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Let's collaborate to create innovative solutions that drive your business forward.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-shivayan-gold text-shivayan-dark-purple px-8 py-3 rounded-md font-bold hover:bg-white transition-colors duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default SolutionsCallToAction;
