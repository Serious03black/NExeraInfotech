
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services" 
        description="Explore the comprehensive range of software development and IT consulting services offered by Shivayan Enterprises."
      />
      
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive Software Development and IT Consulting Solutions"
        backgroundImage="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
      />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Services page content will go here</h2>
        </div>
      </div>
    </>
  );
};

export default Services;
