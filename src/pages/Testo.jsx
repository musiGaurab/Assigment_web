import React from "react";
import sets from "../assets/sets.png";
import kt from "../assets/1.png";
import kta from "../assets/2.png";
import kta2 from "../assets/3.png";

const Testo = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between max-w-6xl mx-auto mt-20">
        <div>
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col gap-6">
              <span className="font-bold text-5xl">What our members say</span>
              <span className="font-bold text-5xl">about our gym</span>
            </div>
            <p className="w-[30%] discount">
              Real stories from real people - our valued gym members.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-around gap-10 mt-32 relative">
          {/* Testimonial 1 */}
          <div className="w-[300px] h-[350px] flex flex-col items-start p-5 justify-around testo">
            <img src={sets} alt="sets" />
            <p className="discount text-white text-[15px]">
              The gym has been my second home. The atmosphere is motivating, and
              the trainers are fantastic.
            </p>
            <div className="flex items-center justify-between gap-5">
              <img src={kt} alt="kt" />
              <div className="flex flex-col gap-1">
                <h1>Katie Thompson</h1>
                <p className="discount">Gym Enthusiast</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="w-[300px] h-[350px] flex flex-col items-start p-5 justify-around">
            <img src={sets} alt="sets" />
            <p className="discount text-white text-[15px]">
              Joining this gym was a game-changer for me. The trainers are
              supportive, and the classes are diverse.
            </p>
            <div className="flex items-center justify-between gap-5">
              <img src={kta} alt="kt" />
              <div className="flex flex-col gap-1">
                <h1>Alex Turner</h1>
                <p className="discount">Fitness Enthusiast</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="w-[300px] h-[350px] flex flex-col items-start p-5 justify-around">
            <img src={sets} alt="sets" />
            <p className="discount text-white text-[15px]">
              This gym is more than just a place to exercise. Its a supportive
              community that has transformed my fitness journey.
            </p>
            <div className="flex items-center justify-between gap-5">
              <img src={kta2} alt="kt" />
              <div className="flex flex-col gap-1">
                <h1>Mark Adams</h1>
                <p className="discount">Fitness Fanatic</p>
              </div>
            </div>
          </div>
          <div className="testOverlay w-[200px] h-[400px] absolute top-0 right-0"></div>
        </div>
      </div>
    </>
  );
};

export default Testo;
