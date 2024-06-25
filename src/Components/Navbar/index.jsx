import React from "react";
import "./style.css";
import nav from "../../Assests/icons/Sambhram-Academy-of-Management-Studies.jpg";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="navbar-loc">
      <nav className="navbar navbar-expand-lg nav-css ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={nav} alt="clg logo" height={35} />
          </a>

          <div id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                
                className="nav-link active"
                to="home"
                smooth={true}
                duration={100}
              >
                Home
              </Link>

              <Link
                className="nav-link active"
                to="aboutus"
                smooth={true}
                duration={100}
              >
                AboutUs
              </Link>
              <Link
                className="nav-link active"
                to="courses"
                smooth={true}
                duration={100}
              >
                Courses
              </Link>
              <Link
                className="nav-link active"
                to="placement"
                smooth={true}
                duration={100}
              >
                Placement
              </Link>
              <Link
                className="nav-link active"
                to="facilities"
                smooth={true}
                duration={100}
              >
                Facilities
              </Link>
              <Link
                className="nav-link active"
                to="contactus"
                smooth={true}
                duration={100}
              >
                ContactUs
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
