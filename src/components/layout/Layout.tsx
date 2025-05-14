
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  
  // Enhanced page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          className="flex-grow pt-16"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
