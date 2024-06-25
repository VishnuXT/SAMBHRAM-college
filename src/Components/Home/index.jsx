import React from "react";
import "./style.css";
import Nav from "../Navbar";
import logo from "../../Assests/images/Group 3.png";

const Home = () => {
  return (
    <div className="bg" id="home">
      <div className="content">
        <div className="home">
          <div></div>
          <div>
            <span className="t1">Welcome to</span>
            <div className="t2">
              <spam className="t2-1">Sambhram Group </spam>

              <spam className="t2-2">Of Institutions</spam>
            </div>

            <div className="t3">
              Through technological advancements, we're making a significant
              impact on the world. We're changing the world with technology Our
              efforts in technology are reshaping the world.
            </div>
          </div>
          <div className="logo">
            <img src={logo} alt="clg" height={600} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
