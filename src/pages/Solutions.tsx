
import { useEffect } from "react";
import SEO from "@/components/shared/SEO";
import SolutionsHeader from "@/components/solutions/SolutionsHeader";
import IndustrySolutions from "@/components/solutions/IndustrySolutions";
import ProcessSteps from "@/components/solutions/ProcessSteps";
import SolutionsCallToAction from "@/components/solutions/SolutionsCallToAction";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Solutions = () => {
  // Use our custom hook for scroll animations instead of GSAP
  useScrollAnimations();

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
