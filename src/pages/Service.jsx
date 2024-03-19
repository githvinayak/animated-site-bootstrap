import React from "react";
import Card from "../components/Card";
import Data from "../Data";
const Service = () => {
  return (
    <>
      <div className="my-4" id="services">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="conatainer_fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              { Data.map((currVal,index)=>{
                return <Card
                key={`${index}`}
                    imgSrc={currVal.imgSrc}
                    title={currVal.title}
                />
               })}
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Service;
