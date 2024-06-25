import React from "react";
import "./style.css";
import mba from "../../Assests/images/mba.jpg";
import mcom from "../../Assests/images/mcom.jpg";
import mca from "../../Assests/images/mca.jpg";
import bba from "../../Assests/images/bba.jpg";
import bca from "../../Assests/images/bca.jpg";
import ba from "../../Assests/images/ba.jpg";
import bcom from "../../Assests/images/bcom.jpg";

const Course = () => {
  return (
    <div id="courses" className="faci">
      <div className="header">Courses</div>
      <br />
      <p className="course-text">
        The management course equipped participants with essential skills in
        leadership, decision-making, and team dynamics
      </p>
      <div className="course">
        <div>
          <div class="card ">
            <img
              src={mba}
              class="cardsize card-img-top"
              alt="clg"
              height={300}
            />

            <div class="card-body">
              <p class="card-text">MASTER OF BUSINESS ADMINISTRATION-(BCU)</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <img src={mcom} class="card-img-top" alt="clg" height={300} />
            <div class="card-body">
              <p class="card-text">MASTER OF COMMERCE-(BCU)</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <img src={mca} class="card-img-top" alt="clg" height={300} />
            <div class="card-body">
              <p class="card-text">MASTER OF COMPUTER APPLICATIONS (MCA)</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <img src={bba} class="card-img-top" alt="clg" height={300} />
            <div class="card-body">
              <p class="card-text">BACHELOR OF BUSINESS ADMINISTRATION-(BCU)</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <img src={bca} class="card-img-top" alt="clg" height={300} />
            <div class="card-body">
              <p class="card-text">BCA- BACHELOR OF COMPUTER APPLICATIONS</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card">
            <img src={bcom} class="card-img-top" alt="clg" height={300} />
            <div class="card-body">
              <p class="card-text">BACHELOR OF COMMERCE-(BCU)</p>
            </div>
          </div>
        </div>

        <div>
          <div class="card">
            <img src={ba} class="card-img-top" alt="clg" height={300} />
            <div class="card-body">
              <p class="card-text">BBA AVIATION MANAGEMENT-(BCU)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
