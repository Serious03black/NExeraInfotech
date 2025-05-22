
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/shared/CustomButton';
import Section from '@/components/shared/Section';

interface Product {
  title: string;
  description: string;
  category: string;
}

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  const productsRef = useRef<HTMLDivElement>(null);

  return (
    <Section className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gradient-purple-gold"
          >
            Our Premium Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg max-w-2xl mx-auto text-foreground/80"
          >
            Powerful enterprise solutions designed to transform your business operations and drive growth
          </motion.p>
        </div>

        <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <motion.div
                className="bg-card p-8 rounded-lg shadow-lg border border-shivayan-purple/10 hover:border-shivayan-gold transition-all duration-300 h-full"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-shivayan-purple/10 text-shivayan-purple rounded-full">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-foreground/80">{product.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/solutions">
            <CustomButton variant="secondary">
              Explore All Products
            </CustomButton>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default ProductsSection;
