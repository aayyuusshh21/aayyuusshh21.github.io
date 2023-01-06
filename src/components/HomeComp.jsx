import React from "react";
import "./HomeComp.css";
import { TypeAnimation } from "react-type-animation";

const HomeComp = () => {
  return (
    <div className="home">
      <div className="details">
        <p>Hi I Am</p>
        <h1>AYUSH SINGH</h1>
        <h1>
          <TypeAnimation
            sequence={[
              "FULL STACK WEB DEVELOPER",
              1000,
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
      </div>
      <div className="gif">
        <img
          className="png"
          src="https://user-images.githubusercontent.com/69011963/137184767-79a13ec7-1bb3-4341-a6da-3a149c9c159a.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeComp;
