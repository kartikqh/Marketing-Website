import  { useEffect } from "react";
import CtaButton from "./CtaButton";

import img from "../img/about-img.svg";
import { BsGlobe, BsGraphUp } from "react-icons/bs";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="relative lg:mx-32">
      {/* Meta description for SEO */}
      <meta name="description" content="Leading digital marketing company in Dehradun & top digital marketing company near Mussoorie. We are a full-service digital marketing and advertising agency offering SEO, SEM, SMM, web development services." />
      <meta name="keywords" content="digital marketing, digital and marketing, digital marketing agency, agency marketing digital, marketing agency digital, digital agency marketing, digital marketing and advertising agency, digital marketing ad agency, digital marketing services, digital marketing company, digital marketing firms, marketing agency, advertising agency, top digital marketing company in dehradun, leading digital marketing company in Dehradun, top digital marketing company near mussoorie" />
      
      <h1
        data-aos="fade-down"
        className="text-3xl font-semibold text-center text-[#7A6960]"
      >
        About Us
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-purple-600 h-1 w-16 rounded"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:gap-10 secondary-font">
        <div
          data-aos="fade-up"
          className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0"
        >
          <img className="w-full" src={img} alt="About Onkar Digital Services" />
        </div>
        <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
          <div data-aos="fade-left">
            <h1 className="text-[#7A6960] md:text-3xl font-semibold">
              Empowering Digital Growth
            </h1>
            <p className="text-lg mt-5 text-gray-600 primary-font">
              At Onkar Digital Services, we help startups and small-to-medium
              businesses thrive online. Our expertise in SEO, SEM, SMM, and web
              development drives measurable results for your brand&apos;s digital
              success.
            </p>
          </div>

          {/* 1st feature */}
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div
              className="bg-purple-600 w-fit p-2 md:p-5 rounded"
              style={{ color: "white" }}
            >
              <BsGlobe size={28} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-xl font-medium">
                Expand Your Online Reach
              </h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                Leverage our SEO and SEM strategies to connect with the right
                audience and grow your business exponentially.
              </p>
            </div>
          </div>

          {/* 2nd feature */}
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div
              className="bg-purple-600 w-fit p-2 md:p-5 rounded"
              style={{ color: "white" }}
            >
              <BsGraphUp size={28} />
            </div>
            <div className="w-full">
              <h2 className="text-[#7A6960] text-xl font-medium">
                Results-Driven Solutions
              </h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                From social media marketing to web development, our tailored
                solutions ensure your business stays ahead in the digital world.
              </p>
            </div>
          </div>

          {/* final para */}
          <p
            data-aos="zoom-in"
            className="text-lg mt-5 text-gray-600 primary-font"
          >
            Partner with us to unlock your brand&apos;s full potential. Together, we
            build strategies that not only engage your audience but also drive
            tangible growth.
          </p>
          <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
            <div>
              <a href="/#contact" className="">
                <CtaButton name={"Get Started"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
