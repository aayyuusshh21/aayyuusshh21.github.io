import "./AboutContentStyles.css";
import profilePic from "../assets/profile-pic.png";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <img src={profilePic} />
      </div>
      <div className="right">
        <h1 style={{ color: "white" }}>About Me</h1>
        <p>
          A passionate aspiring Full Stack Developer skilled in MERN stack.
          Strong in design and integration with intuitive problem-solving
          skills. Proficient in HTML, CSS, JavaScript, React, and Redux. Ability
          to translate business requirements into technical solutions.Looking
          forward to making a significant contribution to an organization
          through dedicated effort.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
