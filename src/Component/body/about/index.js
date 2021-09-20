import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello I am
          <br /> <span className="info-name"> Rahul Kumar.</span>
          <br /> I love experimenting with the web.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../Assets/imageresume.jpg").default}
            alt=""
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
