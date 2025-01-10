import Template from "./Template";
import NavBar from "../components/NavBar";
import app1 from "../img/analytics.png";
const GoogleAnalytics = () => {
  return (
    <div>
      <meta
        name="description"
        content="Advanced Google Analytics services by Onkar Digital in Dehradun. Get detailed insights into your website performance with our expert analytics setup, tracking, and reporting services. Make data-driven decisions for your business growth."
      />
      <meta
        name="keywords"
        content="google analytics, website analytics, data tracking, analytics setup, google analytics 4, analytics reporting, onkar digital analytics, web analytics services dehradun"
      />

      <div className="container secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Google Analytics Services"}
        desc={
          "Transform your data into actionable insights with Onkar Digital's Google Analytics expertise. Our certified analysts provide comprehensive analytics solutions including GA4 setup, custom tracking implementation, conversion tracking, and detailed reporting. We help businesses understand their audience better and make informed marketing decisions through advanced analytics interpretation."
        }
        image={app1}
      />
    </div>
  );
};

export default GoogleAnalytics; 