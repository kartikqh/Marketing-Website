import Template from "./Template";
import NavBar from "../components/NavBar";

const Campaign = () => {
  return (
    <div>
      <div className="secondary-font">
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
