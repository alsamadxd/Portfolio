import React, { useState, useEffect } from "react";
import Navbar from '../Navbar/Navbar'
import bgFull from "../../assets/images/bg-full.jpg";
import bgMobile from "../../assets/images/bg-mobile.jpg";

const Header = () => {
   const [bgImage, setBgImage] = useState("");

   // Set the background image based on screen size
   useEffect(() => {
     const handleResize = () => {
       if (window.innerWidth < 640) {
         setBgImage(bgMobile);
       } else {
         setBgImage(bgFull); 
       }
     };

     handleResize();

     window.addEventListener("resize", handleResize);
   }, []);
  return (
    <div>
      <Navbar />
      <div
        id="header"
        className="px-[5%] py-0 bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="pt-[20vh] text-xl md:text-2xl text-white">
          {/* 
          <p className="font-bold">Web Developer</p> */}
          <h1 className=" text-2xl md:text-5xl">
            Hi, <br />
            I'am <span className="text-[#ff004f]">Al Samad</span>
            <br />
            Front-End Developer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header