import  {useEffect } from "react";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {


  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="md:grid grid-cols-4 p-5 md:p-0">
      <div data-aos="fade-right" >
        <h1 className="text-xl font-light mb-3">Onkar Digital Services</h1>
        <p className="mb-1">51 Saraswati Vihar  Raipur road</p>
        <p className="mb-5">Dehrdaun, UK(In) 248001</p>

        <div>
          <p className="font-medium">
            Phone: <span className="font-normal ml-1">+91 88006 44378</span>
          </p>
          <p className="font-medium">
            Email: <span className="font-normal ml-1">oberoi181994@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Useful links */}
      <div data-aos="fade-right" data-aos-delay="300" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">
          Useful Links
        </h1>
        <ul>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              Home
            </a>
          </li>
          <li className="mb-2 arrow">
            <a href="#about" className="text-zinc-700">
              About Us
            </a>
          </li>
          <li className="mb-2 arrow">
            <a href="#services" className="text-zinc-700">
              Service
            </a>
          </li>
          <li className="mb-2 arrow">
            <a href="#" className="text-zinc-700">
              Terms Of Service
            </a>
          </li>
        </ul>
      </div>

      {/* Our Services */}
      <div data-aos="fade-right" data-aos-delay="500" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">
          Our Services
        </h1>
        <ul>
          <li className="mb-2 arrow">
            <Link to="/app-development" className="text-zinc-700">
              Social Media Marketing (SMM)
            </Link>
          </li>
          <li className="mb-2 arrow">
          <Link to="/web-development" className="text-zinc-700">
              Search Engine Marketing (SEM)
            </Link>
          </li>
          <li className="mb-2 arrow">
          <Link to="/seo-optimization" className="text-zinc-700">
          Web/App Development
            </Link>
          </li>
          <li className="mb-2 arrow">
          <Link to="/campagin-creation" className="text-zinc-700">
          SEO Optimization
            </Link>
          </li>
          <li className="mb-2 arrow">
          <Link to="/hireus" className="text-zinc-700">
          Hire Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Follow Us */}
      <div data-aos="fade-right" data-aos-delay="700" className="mt-10 md:mt-0">
        <h1 className="text-[#7A6960] font-medium text-lg mb-2">Follow Us</h1>
        <p className="text-sm">
          Follow us on our social media platforms to stay updated on our latest projects and services.
        </p>
        <div className="flex justify-between pr-5 mt-5">
          <div className="border border-zinc-400 p-2 rounded-full hover:border-purple-600 hover:text-purple-600">
            <IoLogoTwitter size={"26px"} />
          </div>

          <div className="border border-zinc-400 p-2 rounded-full hover:border-purple-600 hover:text-purple-600">
            <IoLogoFacebook size={"26px"} />
          </div>

          <div className="border border-zinc-400 p-2 rounded-full hover:border-purple-600 hover:text-purple-600">
            <IoLogoInstagram size={"26px"} />
          </div>

          <div className="border border-zinc-400 p-2 rounded-full hover:border-purple-600 hover:text-purple-600">
            <IoLogoLinkedin size={"26px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
