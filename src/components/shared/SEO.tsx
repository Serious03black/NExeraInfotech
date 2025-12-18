
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
}

const SEO = ({
  title,
  description = "R.S. inotech blends innovation with Indian heritage to provide cutting-edge software development and IT consulting services for businesses worldwide.",
  keywords = "software development, IT consulting, AI solutions, cloud services, custom software, Indian tech company",
  ogImage = "https://shivayan.com/opengraph-image.png",
  ogUrl = "https://shivayan.com",
  ogType = "website",
}: SEOProps) => {
  const fullTitle = `${title} | R.S. inotech`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};

export default SEO;
