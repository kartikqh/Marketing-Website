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

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="text-[#7A6960]">
      <h1 className="text-3xl font-semibold text-center">Platforms We Work On</h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-purple-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Explore The Platforms On Which We Provide Services, Helping Your Business To Grow
      </p>

      {/* Images */}
      <div className="flex flex-col justify-center items-center lg:-gap-6 gap-3 p-5 mb-10">
        {/* 1st row */}
        <div data-aos="fade-right" className="flex flex-col md:flex-row lg:-gap-6 gap-3">
          <div onClick={() => navigate("/coming-soon")}>
            <PortfolioProduct image={app1} />
          </div>

          <div onClick={() => navigate("/coming-soon")}>
            <PortfolioProduct image={product1} />
          </div>

          <div onClick={() => navigate("/coming-soon")}>
            <PortfolioProduct image={branding1} />
          </div>
        </div>

        {/* 2nd row */}
        <div data-aos="fade-left" className=" md:flex lg:-gap-6 gap-3 hidden">
          <div onClick={() => navigate("/coming-soon")}>
            <PortfolioProduct image={app2} />
          </div>

          <div onClick={() => navigate("/coming-soon")}>
            <PortfolioProduct image={book2} />
          </div>

          <div onClick={() => navigate("/coming-soon")}>
            <PortfolioProduct image={book3} />
          </div>
        </div>

        {/* 3rd row */}
        <div data-aos="fade-up" className="lg:-gap-6 gap-3 hidden md:flex">
        <div onClick={() => navigate("/coming-soon")}>
            <PortfolioProduct image={product3} />
          </div>

          <div onClick={() => navigate("/coming-soon")}>
            <PortfolioProduct image={book1} />
          </div>

          <div onClick={() => navigate("/coming-soon")}>
            <PortfolioProduct image={app3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
