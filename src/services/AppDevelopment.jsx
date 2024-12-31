
import Template from "./Template";
import NavBar from "../components/NavBar";

const AppDevelopment = () => {
  return (
    <div>
      <div className="secondary-font">
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
