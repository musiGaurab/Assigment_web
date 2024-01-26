import React from "react";
import logo from "../assets/logo.svg";
import media from "../assets/media.png";
const Footer = () => {
  return (
    <>
      <div className="footer p-3 mt-10 flex flex-col items-center justify-center gap-7 max-w-6xl m-auto">
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-10">
            <div className="flex gap-1 items-center">
              {/* <img src={logo} alt="logo" /> */}
              <a className="flex items-center gap-0 text-[40px]" href="/">
                {/* <img src={logo} alt="logo" /> */}
                Ft<span className="text-red-600 text-[20px]">Gurukul</span>
              </a>
            </div>
            <p className="font-[300] w-[65%] discount">
              Experience fitness excellence with us. Our gym combines
              cutting-edge equipment, personalized training, and a motivating
              atmosphere to elevate your fitness journey.
            </p>
          </div>
          <div className="flex items-start gap-20">
            <div className="flex flex-col gap-5">
              <h1>Usefull Links</h1>
              <div className="discount text-[14px]">
                <p>Content</p>
                <p>How it Works</p>
                <p>Create</p>
                <p>Explore</p>
                <p>Terms & Services</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1>Community</h1>
              <div className="discount text-[14px]">
                <p>Help Center</p>
                <p>Partners</p>
                <p>Suggestions</p>
                <p>Blog</p>
                <p>Newsletters</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1>Partner</h1>
              <div className="discount text-[14px]">
                <p>Our Partner</p>
                <p>Become a Partner</p>
              </div>
            </div>
          </div>
        </div>
        <div className="line flex items-center justify-center w-[75%] h-1"></div>
        <div className="flex items-center justify-around w-screen">
          <h1 className="discount">
            Copyright &#169; 2023 HooBank. All Rights Reserved.
          </h1>
          <img src={media} alt="media" />
        </div>
      </div>
    </>
  );
};

export default Footer;
