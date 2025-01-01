
import Template from "./Template";
import NavBar from "../components/NavBar";

const Seo = () => {
  return (
    <div>
            {/* Meta description for SEO */}
            <meta name="description" content="Leading digital marketing company in Dehradun & top digital marketing company near Mussoorie. We are a full-service digital marketing and advertising agency offering SEO, SEM, SMM, web development services." />
      <meta name="keywords" content="digital marketing, digital and marketing, digital marketing agency, agency marketing digital, marketing agency digital, digital agency marketing, digital marketing and advertising agency, digital marketing ad agency, digital marketing services, digital marketing company, digital marketing firms, marketing agency, advertising agency, top digital marketing company in dehradun, leading digital marketing company in Dehradun, top digital marketing company near mussoorie" />
      
          <div className="container secondary-font">
          <NavBar />
      </div>
      <Template
        title={"Search Engine Marketing (SEM)"}
        desc={
          "Drive targeted traffic and boost conversions with paid search advertising. Our SEM experts create and optimize data-driven campaigns across platforms like Google Ads and Bing Ads to maximize your ROI. We focus on strategic keyword targeting, compelling ad copy, and continuous optimization to help you reach your ideal customers and achieve your business goals."
        }
        image={"https://images.unsplash.com/photo-1460925895917-afdab827c52f"}
      />
    </div>
  );
};

export default Seo;
