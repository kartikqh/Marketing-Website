import Template from "./Template";
import NavBar from "../components/NavBar";
const ComingSoon = () => {
    return (
      <div>
              {/* Meta description for SEO */}
      <meta name="description" content="Leading digital marketing company in Dehradun & top digital marketing company near Mussoorie. We are a full-service digital marketing and advertising agency offering SEO, SEM, SMM, web development services." />
      <meta name="keywords" content="digital marketing, digital and marketing, digital marketing agency, agency marketing digital, marketing agency digital, digital agency marketing, digital marketing and advertising agency, digital marketing ad agency, digital marketing services, digital marketing company, digital marketing firms, marketing agency, advertising agency, top digital marketing company in dehradun, leading digital marketing company in Dehradun, top digital marketing company near mussoorie" />
      
        <div className="container secondary-font">
          <NavBar />
        </div>
        <Template
          title={"Coming Soon..."}
          desc={
            "We're currently working on something awesome! This page is under construction and will be updated soon with fresh content. Thank you for your patience as we work to bring you the best possible experience."
          }
          image={"https://images.unsplash.com/photo-1589998059171-988d887df646"} // Changed to a more generic "coming soon" type image
        />
      </div>
    );
  };
  
  export default ComingSoon;