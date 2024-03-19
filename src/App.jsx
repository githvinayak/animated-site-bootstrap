import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Error from "./pages/Error";
const App=()=> {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          {/* <Route path="/new" element={<NewPage/>} /> */}
          <Route exact path="*" element={<Error/>} />
        </Routes>
    </>
  );
}

export default App;
