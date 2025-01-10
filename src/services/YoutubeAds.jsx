import Template from "./Template";
import NavBar from "../components/NavBar";
import app1 from "../img/youtube.jpg";

const YoutubeAds = () => {
  return (
    <div>
      {/* Meta description for SEO */}
      <meta
        name="description"
        content="Professional YouTube advertising services in Dehradun. Reach millions of viewers with engaging video ads. Expert campaign management, targeting, and optimization for maximum brand visibility and engagement."
      />
      <meta
        name="keywords"
        content="youtube advertising, video ads, youtube marketing, video marketing, youtube ad campaign, youtube promotion, video advertising services, youtube ads management, digital video marketing, youtube ads expert, video content marketing, youtube advertising agency dehradun"
      />

      <div className="container secondary-font">
        <NavBar />
      </div>
      <Template
        title={"YouTube Advertising Services"}
        desc={
          "Connect with your audience through powerful YouTube advertising campaigns. Our expert team creates and manages targeted video ads that capture attention and drive engagement. From in-stream ads to discovery ads, we help you leverage YouTube's massive platform to reach your ideal customers and achieve your marketing goals."
        }
        image={app1} // You'll need to replace this with your actual image path
      />
    </div>
  );
};

export default YoutubeAds; 