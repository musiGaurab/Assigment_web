import React from "react";
import star from "../assets/Star.svg";
import shield from "../assets/shield.svg";
import send from "../assets/Send.svg";
import gyms4 from "../assets/gym4.webp";
const About = () => {
  return (
    <>
      <div className="mt-20 p-[10px] flex justify-center items-center gap-10 max-w-6xl mx-auto">
        <div className="flex flex-col w-[50%] justify-center gap-10">
          <div className="flex flex-col gap-5">
            <span className="text-5xl font-bold">About Fit Gurukul</span>
          </div>
          <p className="w-[80%] discount">
            Experience fitness excellence with us. Our gym combines cutting-edge
            equipment, personalized training, and a motivating atmosphere to
            elevate your fitness journey. Join our community and unlock your
            potential with tailored workouts and expert guidance, making every
            step towards wellness rewarding and enjoyable
          </p>
          <div>
            <button className="gyms p-2 rounded text-white">Get started</button>
          </div>
        </div>
        <div className="flex w-[40%] flex-col gap-5">
          <img src={gyms4} alt="gyms" className="w-[80%]" />
          {/* <div className="flex items-center gap-5">
            <img src={star} alt="star" />
            <div className="flex flex-col gap-3">
              <h1>Rewards</h1>
              <p className="discount leading-7">
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 bg-gray-900 p-2 rounded-lg">
            <img src={shield} alt="star" />
            <div className="flex flex-col gap-3">
              <h1>100% Secured</h1>
              <p className="discount leading-7">
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={send} alt="star" />
            <div className="flex flex-col gap-3">
              <h1>Balance Transfer</h1>
              <p className="discount leading-7">
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
