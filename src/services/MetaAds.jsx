import Template from "./Template";
import NavBar from "../components/NavBar";
import app1 from "../img/Meta.jpg";
const MetaAds = () => {
  return (
    <div>
      <meta
        name="description"
        content="Expert Meta (Facebook & Instagram) advertising services in Dehradun by Onkar Digital. Leverage our expertise in social media marketing to reach your target audience across Facebook, Instagram, and Messenger platforms. Proven track record of successful campaigns and ROI optimization."
      />
      <meta
        name="keywords"
        content="meta advertising, facebook ads, instagram ads, social media advertising, meta ads agency, facebook marketing, instagram marketing, social media marketing dehradun, meta ads expert, onkar digital meta advertising, social media advertising agency dehradun"
      />

      <div className="container secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Meta Advertising Services"}
        desc={
          "Transform your social media presence with Onkar Digital's expert Meta advertising services. Our certified team specializes in creating high-converting campaigns across Facebook, Instagram, and Messenger platforms. With years of experience and proven success stories, we help businesses in Dehradun and beyond achieve exceptional ROI through strategic targeting, compelling ad creatives, and data-driven optimization."
        }
        image={app1}
      />
    </div>
  );
};

export default MetaAds; 