import "./HeroImgStyles.css";
import introImg from "../assets/intro-bg.jpg";
import React from "react";
import { TypeAnimation } from "react-type-animation";

import "../index.css";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={introImg} alt="Intro Image" />
      </div>
      <div className="content">
        <p>Hi I Am</p>
        <h1>AYUSH SINGH</h1>
        <h1>
          <TypeAnimation
            sequence={[
               // Waits 2s
              "FULL STACK WEB DEVELOPER",
              1000, // Types 'Three' without deleting 'Two'
              " ",
              1000,
              () => {
                console.log("Done typing!"); // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ color: "white" }}
          />
        </h1>

        <div>
          <a href="" className="btn">
            Projects
          </a>
          <a href="" className="btn-light">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
