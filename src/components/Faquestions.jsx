
import Accordian from "./Accordian";

const Faquestions = () => {
  return (
    <>
      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
          <Accordian
            question={"What is SEO and why is it important?"}
            answer={
              "SEO stands for Search Engine Optimization. It is the process of optimizing your website to improve its visibility on search engines, driving organic traffic and improving online presence."
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"What is Social Media Marketing (SMM)?"}
            answer={
              "Social Media Marketing involves using platforms like Facebook, Instagram, and Twitter to promote your brand, engage with your audience, and drive traffic to your website."
            }
          />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
          <Accordian
            question={"What are the benefits of Search Engine Marketing (SEM)?"}
            answer={
              "SEM helps in reaching your target audience through paid search campaigns, improving visibility, and driving qualified traffic to your website."
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"How does Web/App Development impact digital marketing?"}
            answer={
              "A well-developed website or app ensures a smooth user experience, faster loading times, and better engagement, which are critical for effective digital marketing."
            }
          />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
          <Accordian
            question={"What is the difference between organic and paid traffic?"}
            answer={
              "Organic traffic comes from unpaid sources like search engines, while paid traffic comes from advertisements such as Google Ads or social media campaigns."
            }
          />
        </div>

        <div className="md:w-1/2">
          <Accordian
            question={"How can Onkar Digital Services help grow my business?"}
            answer={
              "Onkar Digital Services offers a range of solutions like SEO, SMM, SEM, and Web/App Development to enhance your online presence, reach your target audience, and achieve your business goals."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Faquestions;
