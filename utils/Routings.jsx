import { Route, Routes, Navigate } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import TermsOfService from "../src/pages/TermsOfService";
import Home from "../src/components/Home";
import AppDevelopment from "../src/services/AppDevelopment";
import WebDevelopment from "../src/services/Sem";
import Seo from "../src/services/Seo";
import Campaign from "../src/services/Smm";
import ProductsTemp from "../src/portfolioProducts/ProductsTemp";
import app1 from "../src/img/portfolio/app-1.jpg";
import app2 from "../src/img/portfolio/app-2.jpg";
import app3 from "../src/img/portfolio/app-3.jpg";
import product1 from "../src/img/portfolio/product-1.jpg";
import product3 from "../src/img/portfolio/product-3.jpg";
import branding1 from "../src/img/portfolio/branding-1.jpg";
import book1 from "../src/img/portfolio/books-1.jpg";
import book2 from "../src/img/portfolio/books-2.jpg";
import book3 from "../src/img/portfolio/books-3.jpg";
import Hireus from "../src/services/Hireus";
import ComingSoon from "../src/services/ComingSoon";  
// Import new components
import GoogleAds from "../src/services/GoogleAds";
import YoutubeAds from "../src/services/YoutubeAds";
import MetaAds from "../src/services/MetaAds";
import ShopifyAds from "../src/services/ShopifyAds";
import AwsCloud from "../src/services/AwsCloud";
import GoogleShoppingAds from "../src/services/GoogleShoppingAds";
import GoogleBusiness from "../src/services/GoogleBusiness";
import GoogleAnalytics from "../src/services/GoogleAnalytics";
import DisplayAdvertising from "../src/services/DisplayAdvertising";
import PrivacyPolicy from "../src/pages/PrivacyPolicy";

const Routings = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<AppDevelopment />} />
        <Route path="/sem" element={<WebDevelopment />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/smm" element={<Campaign />} />
        <Route path="/hireus" element={<Hireus />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      {/* New routes for advertising services */}
        <Route path="/google-ads" element={<GoogleAds />} />
        <Route path="/youtube-ads" element={<YoutubeAds />} />
        <Route path="/meta-ads" element={<MetaAds />} />
        <Route path="/shopify-ads" element={<ShopifyAds />} />
        <Route path="/aws-cloud" element={<AwsCloud />} />
        <Route path="/google-shopping" element={<GoogleShoppingAds />} />
        <Route path="/google-business" element={<GoogleBusiness />} />
        <Route path="/google-analytics" element={<GoogleAnalytics />} />
        <Route path="/display-advertising" element={<DisplayAdvertising />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/portfolio">
          <Route path="app1" element={<ProductsTemp img={app1} />} />
          <Route path="product1" element={<ProductsTemp img={product1} />} />
          <Route path="brand1" element={<ProductsTemp img={branding1} />} />
          <Route path="book1" element={<ProductsTemp img={book1} />} />
          <Route path="app2" element={<ProductsTemp img={app2} />} />
          <Route path="book3" element={<ProductsTemp img={book3} />} />
          <Route path="product3" element={<ProductsTemp img={product3} />} />
          <Route path="book2" element={<ProductsTemp img={book2} />} />
          <Route path="app3" element={<ProductsTemp img={app3} />} />
        </Route>
        <Route path="*" element={<Navigate to="/hireus" replace />} />
      </Routes>
    </div>
  );
};

export default Routings;
