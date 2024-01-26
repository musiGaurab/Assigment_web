import React from "react";
// import ball from "../assets/first.png";
// import love from "../assets/love.png";
// import netflix from "../assets/netflix.png";
// import vector from "../assets/Vector.png";
// import green from "../assets/green.png";
// import paypal from "../assets/paypal.png";
// import tick from "../assets/tick.png";
import gym from "../assets/gymkophoto.webp";
import yoga from "../assets/gyms5.avif";
import zumba from "../assets/zumbakophoto2.jpg";
import sauna from "../assets/saunakophoto.png";

const Trans = () => {
  return (
    <>
      <div className="mt-10 p-4 flex flex-col items-center gap-36 max-w-6xl mx-auto">
        <div className="relative flex-1 flex justify-center">
          <h1 className="text-center text-5xl font-bold">About Courses</h1>
        </div>
        <div className="flex flex-1 flex-col gap-10">
          <div className="flex items-center justify-between gap-10 w-[100%]">
            <div className="w-full h-[340px] bg-gray-800 rounded-md relative">
              <img src={gym} alt="gym" className="rounded-lg" />
              <h1 className="p-2 text-yellow-500">GYM</h1>
              <p className="text-red-500 ml-2">Rs: 5000</p>
              <p className="p-2 text-[13px]">
                A fitness facility equipped with various machines and equipment
                designed for strength training, cardio workouts, and overall
                physical exercise.
              </p>
            </div>
            <div className="w-full h-[340px] bg-gray-800 rounded-md">
              <img src={zumba} alt="zumba" className="rounded-lg" />
              <h1 className="p-2 text-yellow-500">ZUMBA</h1>
              <p className="text-red-500 ml-2">Rs: 5000</p>
              <p className="p-2 text-[13px]">
                A dance fitness program that incorporates Latin and
                international music with dance movements. Its a fun way to
                exercise and improve cardiovascular fitness
              </p>
            </div>
            <div className="w-full h-[340px] bg-gray-800 rounded-md">
              <img src={yoga} alt="yoga" className="rounded-lg" />
              <h1 className="p-2 text-yellow-500">YOGA</h1>
              <p className="text-red-500 ml-2">Rs: 5000</p>
              <p className="p-2 text-[13px]">
                An ancient practice that combines physical postures, breathing
                exercises, and meditation. It aims to promote mental and
                physical well-being, flexibility, strength.
              </p>
            </div>
            <div className="w-full h-[340px] bg-gray-800 rounded-md">
              <img src={sauna} alt="" className="rounded-lg" />
              <h1 className="p-2 text-yellow-500">SAUNA</h1>
              <p className="text-red-500 ml-2">Rs: 1500</p>
              <p className="p-2 text-[13px]">
                A room or small house designed for heat sessions, often using
                dry heat to induce perspiration and promote relaxation. Its
                believed to have various health benefits and others.
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col gap-5">
            <span className="font-[600] text-5xl">Easily control your</span>
            <span className="font-bold text-5xl">billing & invoicing.</span>
          </div>

          <p className="discount w-[70%]">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>

          <div className="flex items-center justify-around">
            <img src={google} alt="google" />
            <img src={app} alt="app" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Trans;
