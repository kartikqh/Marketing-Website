import Template from "./Template";
import NavBar from "../components/NavBar";
import app1 from "../img/googleadds.jpg";

const GoogleAds = () => {
  return (
    <div>
      {/* Meta description for SEO */}
      <meta
        name="description"
        content="Expert Google Ads management services in Dehradun. Drive targeted traffic and increase ROI with our professional PPC advertising solutions. Specialized in Google Ads campaigns, keyword research, and ad optimization."
      />
      <meta
        name="keywords"
        content="google ads, PPC advertising, google adwords, paid search marketing, SEM services, google ads management, PPC management, digital advertising, google ads agency dehradun, google ads expert, paid advertising, search engine marketing, google ads optimization, PPC campaigns"
      />

      <div className="container secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Google Ads Services"}
        desc={
          "Maximize your online visibility and ROI with our expert Google Ads management services. We create targeted campaigns that drive qualified traffic to your website, optimize ad spend, and deliver measurable results. Our team specializes in keyword research, ad copy optimization, and performance tracking to ensure your PPC campaigns succeed."
        }
        image={app1} // You'll need to replace this with your actual image path
      />
    </div>
  );
};

export default GoogleAds; 