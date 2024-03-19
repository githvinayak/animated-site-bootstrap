import React from 'react'
import Home from "../pages/Home";
import Service from "../pages/Service";
import About from "../pages/About";
import Contact from "../pages/Contact";
const Content = () => {
  return (
    <div id="mainContent">
        <Home/>
        <Service/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Content