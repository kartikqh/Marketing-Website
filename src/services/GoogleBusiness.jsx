import Template from "./Template";
import NavBar from "../components/NavBar";
import app1 from "../img/wordads.jpg";

const GoogleBusiness = () => {
  return (
    <div>
      <meta
        name="description"
        content="Expert Google Business Profile optimization and management services by Onkar Digital in Dehradun. Enhance your local presence, improve visibility, and attract more customers with our comprehensive Google Business management solutions."
      />
      <meta
        name="keywords"
        content="google business profile, google my business, local seo, business listing optimization, google business expert, local business marketing, onkar digital local seo, google business management dehradun"
      />

      <div className="container secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Google Business Profile Management"}
        desc={
          "Dominate local search results with Onkar Digital's Google Business Profile expertise. Our comprehensive management services include profile optimization, photo management, post scheduling, review management, and local SEO strategies. We help businesses build a strong local presence and connect with customers in their area through effective Google Business Profile management."
        }
        image={app1}
      />
    </div>
  );
};

export default GoogleBusiness; 