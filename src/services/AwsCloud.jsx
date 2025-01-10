import Template from "./Template";
import NavBar from "../components/NavBar";
import app1 from "../img/aws.png";
const AwsCloud = () => {
  return (
    <div>
      <meta
        name="description"
        content="Expert AWS cloud management and advertising solutions by Onkar Digital in Dehradun. Leverage cloud technology for your business with our comprehensive AWS services, including infrastructure management, optimization, and cloud marketing strategies."
      />
      <meta
        name="keywords"
        content="aws services, cloud management, aws cloud expert, cloud computing services, aws advertising, cloud solutions dehradun, onkar digital cloud services, aws certified partner"
      />

      <div className="container secondary-font">
        <NavBar />
      </div>
      <Template
        title={"AWS Cloud Management & Advertising Solutions"}
        desc={
          "Harness the power of cloud computing with Onkar Digital's AWS expertise. Our certified cloud professionals provide end-to-end AWS solutions, from infrastructure setup to optimization and marketing integration. We help businesses leverage AWS services for scalable, secure, and cost-effective digital operations while maximizing their cloud advertising potential."
        }
        image={app1}
      />
    </div>
  );
};

export default AwsCloud; 