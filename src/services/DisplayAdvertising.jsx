import Template from "./Template";
import NavBar from "../components/NavBar";
import app1 from "../img/woocomerce.png";

const DisplayAdvertising = () => {
  return (
    <div>
      <meta
        name="description"
        content="Strategic display advertising services by Onkar Digital in Dehradun. Reach your target audience across the web with engaging display ads, remarketing campaigns, and programmatic advertising solutions. Expert campaign management for maximum brand visibility."
      />
      <meta
        name="keywords"
        content="display advertising, banner ads, remarketing, programmatic advertising, display ad design, google display network, onkar digital display ads, visual advertising dehradun"
      />

      <div className="container secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Display Advertising Services"}
        desc={
          "Capture attention and drive results with Onkar Digital's display advertising expertise. Our comprehensive display ad services include creative design, audience targeting, remarketing campaigns, and programmatic advertising. We help businesses build brand awareness and generate leads through strategic placement across the Google Display Network and other premium platforms."
        }
        image={app1}
      />
    </div>
  );
};

export default DisplayAdvertising; 