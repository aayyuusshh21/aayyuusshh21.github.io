import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";
import HomeComp from "../components/HomeComp";

const Home = () => {
  return (
    <div>
      <Navbar />
      <br />
      <HomeComp />
      <div id="about">
        <AboutContent />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
