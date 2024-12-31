import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import CtaButton from "./CtaButton";
import img from "../img/logo.png";

// aos
import AOS from "aos";
import "aos/dist/aos.css";



const Hero = () => {
  const myElement = useRef(null);

  useEffect(() => {
    gsap.to(myElement.current, {
      duration: 2,
      y: -100,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    AOS.init();
  });

  // const [show, setShow] = useState(false);

  // const videoStartHandler = () => {
  //   const video = document.querySelector("#video");
  //   video.currentTime = 0;
  //   video.load();
  //   setShow(true);
  // };

  // const clickHandler = () => {
  //   const video = document.querySelector("#video");
  //   video.pause();
  //   setShow(false);
  // };

  // Add WhatsApp handler
  const handleWhatsApp = () => {
    window.open('https://wa.me/+918800644378', '_blank'); // Replace with your number
  };

  // Add Call handler
  const handleCall = () => {
    window.location.href = 'tel:+918800644378'; // Replace with your number
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-10 secondary-font relative">
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0"
      >
        <h1 className="text-[#7A6960] md:text-5xl text-3xl font-semibold">
         Empowering Your Digital Growth – One Click at a Time!
        </h1>
        <p className="text-xl mt-5 text-gray-600 primary-font">
        At Onkar Digital Services, we specialize in transforming ideas into impactful online experiences. As Dehradun&apos;s trusted digital marketing partner, we cater to startups and small-to-mid entrepreneurial businesses, offering tailored solutions in SEO, SEM, SMM, and Web Development.        </p>
        <div className="flex flex-col sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
          <a href="#contact" className="">
            <CtaButton name={"Get Started"} />
          </a>
          <button
            onClick={handleWhatsApp}
            className="bg-green-500 text-white shadow shadow-blue-300 hover:shadow-blue-600 hover:shadow px-4 py-2 rounded-3xl flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            WhatsApp Us
          </button>
          <button
            onClick={handleCall}
            className="shadow shadow-zinc-300 hover:shadow-blue-600 hover:shadow px-4 py-2 rounded-3xl flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="blue" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </button>
          {/* <div
            onClick={() => videoStartHandler()}
            className="shadow shadow-zinc-300 hover:shadow-orange-600 hover:shadow px-4 py-2 rounded-3xl"
          >
            <VideoBtn name={"Watch Video"} />
          </div> */}
        </div>
      </div>

      <div className="lg:w-1/2 w-full md:w-3/4 py-10 px-10 md:px-0">
        <img ref={myElement} className="w-full animate" src={img} alt="img" />
      </div>

      {/* Adding video */}
      {/* 
      <div className={`${show ? "block" : "hidden"} absolute lg:w-full lg:m-5 lg:h-full bg-zinc-500 bg-opacity-50 rounded overflow-hidden flex justify-center items-center shadow-2xl lg:mb-20 transition-all duration-300`}>
        <div onClick={()=> clickHandler()} className="absolute lg:right-10 right-2 lg:top-6 top-2 lg:px-3 px-[0.6rem] rounded-s-full lg:text-3xl text-xl font-light bg-zinc-700 rounded-full text-white cursor-pointer">
          x
        </div>
        <video id="video" muted controls autoPlay className="w-[800px] rounded" src={video}></video>
      </div> */}
    </div>
  );
};

export default Hero;
