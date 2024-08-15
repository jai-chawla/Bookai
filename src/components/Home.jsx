import React from "react";
import vid from "../video/vid.mp4";
import vid2 from '../video/vid2.webm'
import Navbar from "./Navbar";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Last from "./Last";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center'"
          src={vid2}
          autoPlay
          loop
          muted
        />
      </div>

      <div className="absolute inset-0 bg-[rgb(29,5,49)] opacity-[0.89] z-10"></div>
      <div className="relative z-20">
      <Navbar />
      <First />
      <Second />
      <Third/>
      <Last/>
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
