
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";

const About = () => {
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

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About page content will go here</h2>
        </div>
      </div>
    </>
  );
};

export default About;
