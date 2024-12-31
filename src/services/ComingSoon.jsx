import Template from "./Template";
import NavBar from "../components/NavBar";
const ComingSoon = () => {
    return (
      <div>
        <div className="container secondary-font">
          <NavBar />
        </div>
        <Template
          title={"Coming Soon..."}
          desc={
            "We're currently working on something awesome! This page is under construction and will be updated soon with fresh content. Thank you for your patience as we work to bring you the best possible experience."
          }
          image={"https://images.unsplash.com/photo-1589998059171-988d887df646"} // Changed to a more generic "coming soon" type image
        />
      </div>
    );
  };
  
  export default ComingSoon;