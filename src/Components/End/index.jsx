import React from "react";
import "./style.css";
import x from "../../Assests/images/x.svg";
import fb from "../../Assests/images/fb.svg";
import ln from "../../Assests/images/in.svg";
import insta from "../../Assests/images/ig.svg";

const End = () => {
  return (
    <div className="footer">
      <div>SAMBHRAM ACADEMY OF MANAGEMENT STUDIES</div>

      <div className="footerpad">Copyright © 2024 Design & Developed by Rinz VargheseRinz and Varghese.</div>
      <div className="footer-main-logo">
        <a href="https://x.com/sambhraminst">
          <img src={x} alt="clg" height={25} />
        </a>
        <a href="https://www.facebook.com/sambhraminstitute">
          <img src={fb} alt="clg" height={25} />
        </a>

        <div className="footer-logo">
          <a href="https://www.linkedin.com/company/sambhraminstitute/">
            <img  src={ln} alt="clg" height={25} />
          </a>
          <a href="https://www.instagram.com/sambhraminstitute/">
            <img src={insta} alt="clg" height={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default End;
