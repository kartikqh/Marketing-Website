
import Template from "./Template";
import NavBar from "../components/NavBar";

const Seo = () => {
  return (
    <div>
      <div className="secondary-font">
        <NavBar />
      </div>
      <Template
        title={"Search Engine Marketing (SEM)"}
        desc={
          "Drive targeted traffic and boost conversions with paid search advertising. Our SEM experts create and optimize data-driven campaigns across platforms like Google Ads and Bing Ads to maximize your ROI. We focus on strategic keyword targeting, compelling ad copy, and continuous optimization to help you reach your ideal customers and achieve your business goals."
        }
        image={"https://images.unsplash.com/photo-1460925895917-afdab827c52f"}
      />
    </div>
  );
};

export default Seo;
