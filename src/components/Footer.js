import "./FooterStyles.css";

import React from "react";
import {
  FaFacebook,
  // FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="footer-heading">
            <h1>Get In Touch</h1>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +91 - 9431516391
            </h4>
          </div>
          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              aayyuusshh21@gmail.com
            </h4>
          </div>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />

            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />

            <FaLinkedin
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
