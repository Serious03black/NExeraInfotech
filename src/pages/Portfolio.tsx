
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";

const Portfolio = () => {
  return (
    <>
      <SEO 
        title="Portfolio" 
        description="Explore our portfolio of successful projects and see how Shivayan Enterprises has helped businesses transform through technology."
      />
      
      <PageHeader 
        title="Our Portfolio" 
        subtitle="Showcasing Our Successful Projects"
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Portfolio page content will go here</h2>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
