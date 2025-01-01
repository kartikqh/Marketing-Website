
import Template from "./Template";
import NavBar from "../components/NavBar";

const WebDevelopment = () => {
  return (
    <div>
            {/* Meta description for SEO */}
            <meta name="description" content="Leading digital marketing company in Dehradun & top digital marketing company near Mussoorie. We are a full-service digital marketing and advertising agency offering SEO, SEM, SMM, web development services." />
      <meta name="keywords" content="digital marketing, digital and marketing, digital marketing agency, agency marketing digital, marketing agency digital, digital agency marketing, digital marketing and advertising agency, digital marketing ad agency, digital marketing services, digital marketing company, digital marketing firms, marketing agency, advertising agency, top digital marketing company in dehradun, leading digital marketing company in Dehradun, top digital marketing company near mussoorie" />
      
          <div className="container secondary-font">
          <NavBar />
      </div>
      <Template
        title={"Social Media Marketing"}
        desc={
          "Boost your brand's social media presence with our comprehensive SMM services. We create engaging content, manage communities, and implement data-driven strategies across platforms like Facebook, Instagram, Twitter, and LinkedIn. Our team helps you build meaningful connections with your audience, increase engagement, and drive conversions through effective social media campaigns."
        }
        image={"https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a"}
      />
    </div>
  );
};

export default WebDevelopment;
