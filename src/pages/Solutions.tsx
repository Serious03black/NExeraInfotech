
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "@/components/shared/SEO";
import SolutionsHeader from "@/components/solutions/SolutionsHeader";
import IndustrySolutions from "@/components/solutions/IndustrySolutions";
import ProcessSteps from "@/components/solutions/ProcessSteps";
import SolutionsCallToAction from "@/components/solutions/SolutionsCallToAction";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  useEffect(() => {
    // Initialize any page-level animations if needed
    return () => {
      // Clean up any ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <SEO 
        title="Our Solutions" 
        description="Discover industry-specific solutions designed by Shivayan Enterprises for healthcare, finance, retail, and more."
      />
      
      <SolutionsHeader />
      <IndustrySolutions />
      <ProcessSteps />
      <SolutionsCallToAction />
    </>
  );
};

export default Solutions;
