
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  
  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      x: -20
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
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
