import { useEffect } from "react";
import app1 from "../img/googleadds.jpg";
import app2 from "../img/shopify.webp";
import app3 from "../img/woocomerce.png";
import product1 from "../img/youtube.jpg";
import product3 from "../img/wordads.jpg";
import branding1 from "../img/Meta.jpg";
import book1 from "../img/analytics.png";
import book2 from "../img/aws.png";
import book3 from "../img/shopping.jpg";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import PortfolioProduct from "./PortfolioProduct";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    
    <motion.div 
      className="text-[#7A6960]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
            {/* Meta description for SEO */}
            <meta name="description" content="Leading digital marketing company in Dehradun & top digital marketing company near Mussoorie. We are a full-service digital marketing and advertising agency offering SEO, SEM, SMM, web development services." />
      <meta name="keywords" content="digital marketing, digital and marketing, digital marketing agency, agency marketing digital, marketing agency digital, digital agency marketing, digital marketing and advertising agency, digital marketing ad agency, digital marketing services, digital marketing company, digital marketing firms, marketing agency, advertising agency, top digital marketing company in dehradun, leading digital marketing company in Dehradun, top digital marketing company near mussoorie" />
      
      <motion.h1 
        className="text-3xl font-semibold text-center"
        variants={itemVariants}
      >
        Platforms We Work On
      </motion.h1>
      <motion.div 
        className="flex justify-center items-center mt-2"
        variants={itemVariants}
      >
        <div className="bg-purple-600 h-1 w-16 rounded"></div>
      </motion.div>
      <motion.p 
        className="text-gray-700 text-center mt-7 mb-10 text-lg"
        variants={itemVariants}
      >
        Explore The Platforms On Which We Provide Services, Helping Your Business To Grow
      </motion.p>

      {/* Images */}
      <AnimatePresence>
        <motion.div className="flex flex-col justify-center items-center lg:-gap-6 gap-3 p-5 mb-10">
          {/* Row 1 */}
          <motion.div className="flex flex-col md:flex-row lg:-gap-6 gap-3">
            {[app1, product1, branding1].map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/coming-soon")}
              >
                <PortfolioProduct image={image} />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div className="flex flex-col md:flex-row lg:-gap-6 gap-3">
            {[app2, book2, book3].map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/coming-soon")}
              >
                <PortfolioProduct image={image} />
              </motion.div>
            ))}
          </motion.div>

          {/* Row 3 */}
          <motion.div className="flex flex-col md:flex-row lg:-gap-6 gap-3">
            {[product3, book1, app3].map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/coming-soon")}
              >
                <PortfolioProduct image={image} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Portfolio;
