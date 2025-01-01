import Template from "./Template";
import NavBar from "../components/NavBar";

const Campaign = () => {
  return (
    <div>
            {/* Meta description for SEO */}
            <meta name="description" content="Leading digital marketing company in Dehradun & top digital marketing company near Mussoorie. We are a full-service digital marketing and advertising agency offering SEO, SEM, SMM, web development services." />
      <meta name="keywords" content="digital marketing, digital and marketing, digital marketing agency, agency marketing digital, marketing agency digital, digital agency marketing, digital marketing and advertising agency, digital marketing ad agency, digital marketing services, digital marketing company, digital marketing firms, marketing agency, advertising agency, top digital marketing company in dehradun, leading digital marketing company in Dehradun, top digital marketing company near mussoorie" />
      
          <div className="container secondary-font">
          <NavBar />
      </div>
      <Template
        title={"Search Engine Optimization (SEO)"}
        desc={
          "Optimize your website to rank higher on search engines and drive organic traffic. Our SEO experts develop tailored strategies to improve your site's visibility, ensuring it ranks higher in search results. We focus on keyword research, on-page optimization, link building, and content creation to enhance your online presence and drive more traffic to your site."
        }
        // Using a more relevant marketing campaign image that shows strategy and planning
        image={"https://images.unsplash.com/photo-1552664730-d307ca884978"}
      />
    </div>
  );
};

export default Campaign;
