
import Template from "./Template";
import NavBar from "../components/NavBar";

const AppDevelopment = () => {
  return (
    <div>
            {/* Meta description for SEO */}
            <meta name="description" content="Leading digital marketing company in Dehradun & top digital marketing company near Mussoorie. We are a full-service digital marketing and advertising agency offering SEO, SEM, SMM, web development services." />
      <meta name="keywords" content="digital marketing, digital and marketing, digital marketing agency, agency marketing digital, marketing agency digital, digital agency marketing, digital marketing and advertising agency, digital marketing ad agency, digital marketing services, digital marketing company, digital marketing firms, marketing agency, advertising agency, top digital marketing company in dehradun, leading digital marketing company in Dehradun, top digital marketing company near mussoorie" />
      
    <div className="container  secondary-font">
    <NavBar />
      </div>
      <Template
        title={"Web/App Development"}
        desc={
          "We specialize in building cutting-edge mobile applications for iOS and Android platforms. Our expert team delivers custom solutions with intuitive UX/UI design, robust backend integration, and seamless performance. From concept to deployment, we create apps that drive business growth and user engagement."
        }
        image={"https://images.unsplash.com/photo-1551650975-87deedd944c3"}
      />
    </div>
  );
};

export default AppDevelopment;
