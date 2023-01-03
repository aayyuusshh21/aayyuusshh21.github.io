import React from "react";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Navbar from "../components/Navbar";
import AboutContent from "../components/AboutContent";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <div id="about"><AboutContent /></div>
      <Footer />
    </div>
  );
};

export default Home;
