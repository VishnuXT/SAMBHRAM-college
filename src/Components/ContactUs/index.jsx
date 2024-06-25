import React from "react";
import "./style.css";

const Contactpage = () => {
  return (
    <div className="contact-body" id="contactus">
      <div className="placemnt-header-2">Get in Touch with Us</div>
      <div className="contact">
        <div className="contact-left">
          <div className="contactus">ContactUs</div>

          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 gaping">
            <label for="" class="form-label">
              Name
            </label>

            <input
              type="text"
              class="form-control"
              placeholder="Enter your Name"
            />
          </div>

          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 gaping">
            <label for="" class="form-label">
              Phone
            </label>

            <input
              type="text"
              class="form-control"
              placeholder="Enter your Phone Number"
            />
          </div>
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 gaping">
            <label for="" class="form-label">
              EMAIL ID
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Email ID"
            />
          </div>
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 gaping">
            <label for="" class="form-label">
              Course
            </label>
            <select name="" id="" class="form-select">
              <option value="select a car Manufacturer">select course</option>

              <option value="A+">MASTER OF BUSINESS ADMINISTRATION</option>
              <option value="AB+">MASTER OF COMMERCE</option>
              <option value="B+">BACHELOR OF BUSINESS ADMINISTRATION</option>
              <option value="AB+">BACHELOR OF COMPUTER APPLICATIONS</option>
              <option value="A+"> BACHELOR OF COMMERCE</option>
              <option value="AB+"> BBA AVIATION MANAGEMENT</option>
              <option value="B+">MASTER OF COMPUTER APPLICATIONS</option>
            </select>
          </div>
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 gaping">
            <label for="" class="form-label">
              Subject
            </label>

            <textarea
              name=""
              id=""
              cols="5"
              rows="2"
              class="form-control"
            ></textarea>
          </div>
          <br />
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 btn-pos ">
            <button type="button" class="btn ">
              SENT
            </button>
            <br />
          </div>
        </div>
        <div></div>
        <div className="contact-right">
          <div className="contact-logo-pad">
            {" "}
            <div className="contact-logo"></div>
          </div>
          <br />
          <div className="h1">SAMBHRAM ACADEMY OF MANAGEMENT STUDIES</div>
          <br />
          <div className="h2">
            <div>
              Amba Bhavani Temple Road, M.S.Palya, Vidyaranyapura Post,
              Bangalore -560097, Karnataka, India.
            </div>
            <br />
            <div>
              Admissions Department - 080-23643618 | 8884440085 | 9449040708 |
              9243458493
            </div>
            <br />
            <div>Principal office: +91 8884440086 </div>
            <div>E-mail: sait@sambhram.org</div>
          </div>
          <div className="h3">
            <p>Principal Dr. K Srinivas Rao (Rtd Wing Commander)</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Contactpage;
