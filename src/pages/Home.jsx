import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import home from "../images/home.png";
import React from "react";
import Common from "../components/Common";

const Home = () => {
  return (
    <>
     <Common 
     heading="Grow Your Business With"
        btn="Get Started"
        visit="/service"
        img={home}
        />
    </>
  );
};

export default Home;
