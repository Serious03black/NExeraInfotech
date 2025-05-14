
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";

const Solutions = () => {
  return (
    <>
      <SEO 
        title="Our Solutions" 
        description="Discover industry-specific solutions designed by Shivayan Enterprises for healthcare, finance, retail, and more."
      />
      
      <PageHeader 
        title="Our Solutions" 
        subtitle="Industry-specific Technology Solutions"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Solutions page content will go here</h2>
        </div>
      </div>
    </>
  );
};

export default Solutions;
