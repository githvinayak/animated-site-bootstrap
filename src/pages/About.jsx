import about from "../images/about.png";
import React from 'react';
import Common from '../components/Common';
const About=()=> {
  return (
    <div id="about">
     <Common
        heading="Welcome to About Page"
        btn="Contact Now"
        visit="/contact"
        img={about}
     />
    </div>
  );
}

export default About;