import Template from "./Template";
import NavBar from "../components/NavBar";
import app1 from "../img/shopify.webp";
const ShopifyAds = () => {
  return (
    <div>
      <meta
        name="description"
        content="Professional Shopify advertising and e-commerce solutions by Onkar Digital in Dehradun. Boost your online store's performance with our expert Shopify marketing services, including store optimization, product listing ads, and conversion rate optimization."
      />
      <meta
        name="keywords"
        content="shopify advertising, shopify marketing, e-commerce advertising, shopify store optimization, shopify experts dehradun, onkar digital shopify services, e-commerce marketing, shopify ads management"
      />

      <div className="container secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Shopify Advertising & E-commerce Solutions"}
        desc={
          "Elevate your e-commerce success with Onkar Digital's comprehensive Shopify advertising services. Our team combines technical expertise with marketing innovation to optimize your Shopify store, create converting product campaigns, and drive sustainable growth. From store setup to advanced marketing automation, we're your trusted partner in e-commerce excellence."
        }
        image={app1}
      />
    </div>
  );
};

export default ShopifyAds; 