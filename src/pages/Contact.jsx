import { useState } from "react";
import React from "react";
const Contact = () => {
    const [data,setData]=useState({
        username:"",
        email:"",
        phone:"",
        messsage:""
    });

    const inputEvent=(event)=>{
        console.log(event.target.value);
        const {name,value}= event.target;
        setData((prev)=>{return {...prev,[name]:value}});
    }
    const onSubmit=()=>{

    }
  return (
    <>
    <div className="contact" id="contact">
      <div className="my-4">
        <h1 className="text-center">Get In Touch</h1>
      </div>
      <div className="conatainer contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="form-floating mb-3">
                <input
                name="username"
                value={data.username}
                onChange={inputEvent}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="username"
                />
                <label for="floatingInput">User Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                name="email"
                value={data.email}
                onChange={inputEvent}
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                name="phone"
                value={data.phone}
                onChange={inputEvent}
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="+91**********"
                />
                <label for="floatingInput">Phone Number</label>
              </div>
              <div class="form-floating mb-3">
                <textarea
                name="messsage"
                value={data.messsage}
                onChange={inputEvent}
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                ></textarea>
                <label for="floatingTextarea2">Comments</label>
              </div>

              <div class="col-auto">
                <button type="submit" onSubmit={onSubmit} class="btn btn-outline-primary mb-3">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
