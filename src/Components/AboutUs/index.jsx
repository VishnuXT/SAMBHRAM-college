import React from "react";
import "./style.css";
import logo from "../../Assests/images/aboutus.png";

const AboutUs = () => {
  return (
    <div className="bg-about" id="aboutus">
      <div className="aboutimg">
        <img src={logo} alt="clg" height={600} />
      </div>
      <div className="aboutus">
        <div></div>
        <div className="textcontent">
          <div className="header">ABOUT US</div>
          <div className="aboutcontent">
            <div></div>
            <div>
              <p>
                Sambhram Academy of Management Studies (SAMS) is an educational
                initiative of the Sambhram Group. SAMS is located in the silicon
                city, Bangalore, a technology hub and home to many leading
                national and multinational corporations. The college is situated
                within the sprawling Sambhram campus. Set in an idyllic
                atmosphere rich in greenery, the campus is ideal for academic,
                research, cultural and sports activities. SAMS is accredited by
                NAAC.
              </p>
              <p>
                School of Management, the Post Graduate Management wing of
                Sambhram Academy of Management Studies runs MBA and M. Com
                Programs of Bangalore City University since 1999. NAAC
                Accredited, the School has been rated as one of the best
                B-Schools in South India by various B-School Ranking
                Institutions.Also it’s accredited by the Global Accrediting
                Organization IAO.The MBA and M. Com Programs are the most sought
                after making it highly preferential by the potential employers
                and it is the best offering from School of Management to the
                aspiring youth to step into the discerning Management Academics
                that is in tune with the changing world. The School has academic
                collaboration with Accounting Research Institute, Malaysia; De
                Montfort University, United Kingdom and Wroclaw University of
                Science and Technology, Poland.
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AboutUs;
