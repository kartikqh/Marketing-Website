import { useEffect } from "react";
import Card from "./Card";

import { FaSearch, FaBullhorn, FaChartLine, FaCode } from "react-icons/fa";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Our Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-purple-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Empowering your digital presence with tailored solutions for growth and visibility.
      </p>
      <div
        className="grid grid-cols-1 lg:grid-cols-4 gap-5"
        data-aos="fade-up"
      >
        {/* SEO */}
        <div className="flex justify-center">
          <div onClick={() => navigate("/seo")} className="w-full max-w-sm">
            <Card
              img={<FaSearch />}
              title={"Search Engine Optimization (SEO)"}
              desc={
                "Optimize your website to rank higher on search engines and drive organic traffic."
              }
            />
          </div>
        </div>

        {/* SMM */}
        <div className="flex justify-center">
          <div onClick={() => navigate("/smm")} className="w-full max-w-sm">
            <Card
              img={<FaBullhorn />}
              title={"Social Media Marketing (SMM)"}
              desc={
                "Engage your audience effectively across all social media platforms with strategic campaigns, boosting your online presence."
              }
            />
          </div>
        </div>

        {/* SEM */}
        <div className="flex justify-center">
          <div onClick={() => navigate("/sem")} className="w-full max-w-sm">
            <Card
              img={<FaChartLine />}
              title={"Search Engine Marketing (SEM)"}
              desc={
                "Drive targeted traffic and boost conversions with paid search advertising, enhancing your online visibility and driving more traffic to your website."
              }
            />
          </div>
        </div>

        {/* Web/App Development */}
        <div className="flex justify-center">
          <div onClick={() => navigate("/web-app-development")} className="w-full max-w-sm">
            <Card
              img={<FaCode />}
              title={"Web/App Development"}
              desc={
                "Create responsive websites and innovative apps tailored to your needs, ensuring a seamless user experience and driving more traffic to your website."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
