import React, { useState } from "react";

const Accordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
          {/* Meta description for SEO */}
          <meta name="description" content="Leading digital marketing company in Dehradun & top digital marketing company near Mussoorie. We are a full-service digital marketing and advertising agency offering SEO, SEM, SMM, web development services." />
      <meta name="keywords" content="digital marketing, digital and marketing, digital marketing agency, agency marketing digital, marketing agency digital, digital agency marketing, digital marketing and advertising agency, digital marketing ad agency, digital marketing services, digital marketing company, digital marketing firms, marketing agency, advertising agency, top digital marketing company in dehradun, leading digital marketing company in Dehradun, top digital marketing company near mussoorie" />
      
      <div
        onClick={() => setShow(!show)}
        className="bg-[#ffffff] cursor-pointer rounded hover:text-purple-600"
      >
        <button
          className={`flex justify-between items-center w-full p-4 ${
            show ? "text-purple-600" : ""
          }`}
        >
          <span>{question}</span>
          <span className="transition-all duration-300">
            {show ? (
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14"
                />
              </svg>
            ) : (
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            )}
          </span>
        </button>
        {/* answer */}
        <div className="text-[#7A6960]">
          {show ? <p className="pb-2 -mt-1 px-5">{answer}</p> : null}
        </div>
      </div>
    </>
  );
};

export default Accordian;
