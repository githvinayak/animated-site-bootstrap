import React from "react";
import { NavLink} from "react-router-dom";
import {Link} from "react-scroll";
const Navbar = () => {
  return (
    <>
    <header id="navigation">
      <div className="conatainer_fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <Link className="navbar-brand " to="main">
                  Navbar
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink 
                       activeclassname="active"  className="nav-link"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <Link  activeclassname="active" className="nav-link" to="services">
                        Service
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeclassname="active" className="nav-link" to="about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link  activeclassname="active" className="nav-link" to="contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                  </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default Navbar;
