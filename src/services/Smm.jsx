
import Template from "./Template";
import NavBar from "../components/NavBar";

const WebDevelopment = () => {
  return (
    <div>
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
