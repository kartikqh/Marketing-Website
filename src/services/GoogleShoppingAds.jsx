import Template from "./Template";
import NavBar from "../components/NavBar";
import app1 from "../img/shopping.jpg";
const GoogleShoppingAds = () => {
  return (
    <div>
      <meta
        name="description"
        content="Professional Google Shopping Ads management by Onkar Digital in Dehradun. Boost your e-commerce sales with our expert product listing ads management, feed optimization, and campaign strategies. Proven success in driving qualified traffic and increasing ROI."
      />
      <meta
        name="keywords"
        content="google shopping ads, product listing ads, shopping campaigns, e-commerce advertising, google merchant center, shopping feed optimization, onkar digital shopping ads, pla management dehradun"
      />

      <div className="container secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Google Shopping Ads Services"}
        desc={
          "Maximize your e-commerce potential with Onkar Digital's specialized Google Shopping Ads services. Our expert team manages everything from product feed optimization to campaign strategy and bid management. With our data-driven approach and years of experience, we help businesses showcase their products to ready-to-buy customers, ensuring maximum visibility and ROI."
        }
        image={app1}
      />
    </div>
  );
};

export default GoogleShoppingAds; 