import  { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import CtaButton from "./CtaButton";
//import { useLocation } from "react-router-dom";


const NavBar = () => {
  //const location = useLocation();
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <div className={`w-full xl:h-24 lg:h-20 h-16 flex flex-row items-center justify-between lg:px-32 sm:px-20 px-10 fixed top-0 left-0 z-50 secondary-font transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      {/* logo */}
      <a
        href="/"
        className="lg:text-3xl text-2xl tracking-wide font-light text-[#7A6960]"
      >
        Onkar Digital Services
      </a>
      {/* menu */}
      <div className="lg:flex items-center justify-between lg:gap-14 hidden">
        <a
          href="/"
          className="text-gray-800 hover:text-purple-600 text-lg tracking-wide font-light"
        >
          Home
        </a>
        <a
          href="/#about"
          className="text-gray-800 hover:text-purple-600 text-lg tracking-wide font-light"
        >
          About
        </a>
        <a
          href="/#services"
          className="text-gray-800 hover:text-purple-600 text-lg tracking-wide font-light"
        >
          Services
        </a>
        <a
          href="/#portfolio"
          className="text-gray-800 hover:text-purple-600 text-lg tracking-wide font-light"
        >
          Platforms
        </a>

        <a
          href="/#contact"
          className="text-gray-800 hover:text-purple-600 text-lg tracking-wide font-light"
        >
          Contact
        </a>

        {/* CTA */}
        {/* <button className="bg-purple-600 text-lg text-slate-50 rounded-3xl px-4 py-1">
          Get Strated
        </button> */}
        <a href="/#contact" className="">
          <CtaButton name={"Get Started"} />
        </a>
      </div>

      {/* mobile menu */}
      <div className="lg:hidden ">
        <RxHamburgerMenu size={"28px"} onClick={clickHandler} />
      </div>

      {show && (
        <div className="absolute z-20 top-[70px] flex flex-col gap-4 text-center w-full left-0 p-5 lg:hidden shadow-xl bg-white transition-all duration-300">
          <a
            href="/"
            className="text-gray-800 hover:text-purple-600 text-lg tracking-wide font-light"
          >
            Home
          </a>
          <a
            href="/#about"
            className="text-gray-800 hover:text-purple-600 text-lg tracking-wide font-light"
          >
            About
          </a>
          <a
            href="/#services"
            className="text-gray-800 hover:text-purple-600 text-lg tracking-wide font-light"
          >
            Services
          </a>
          <a
            href="/#portfolio"
            className="text-gray-800 hover:text-purple-600 text-lg tracking-wide font-light"
          >
            Platforms
          </a>
          <a
            href="/#contact"
            className="text-gray-800 hover:text-purple-600 text-lg tracking-wide font-light"
          >
            Contact
          </a>

          {/* CTA */}
          <a
            href="/#contact"
            className="mt-2 ml-2 flex justify-center items-center"
          >
            <CtaButton name={"Get Started"} />
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
