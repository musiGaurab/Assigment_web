import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.png";

const Testimonial = () => {
  return (
    <>
      <h1 className="font-bold text-5xl text-center mt-20">Testomonial</h1>
      <div className="testimonial-container p-5 flex items-center justify-center max-w-6xl mx-auto mb-20">
        {/* Testimonial 1 */}
        <div className="testimonial-content p-5 flex flex-1 flex-col items-center gap-5">
          {/* <div className="flex flex-col gap-5">
            <span className="font-bold text-5xl">What People Say</span>
            <span className="font-bold text-5xl">About Us</span>
          </div> */}
          <div className="flex-1 flex items-center justify-center">
            <img className="w-[90%] rounded-full" src={photo1} alt="Person 1" />
          </div>

          <p className="testimonial-text w-[80%] discount">
            Discovering a better card deal has never been this effortless! The
            Find a better card deal in a few easy steps feature on the website
            is a game-changer. The user-friendly interface and step-by-step
            guidance make the process seamless.
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-content p-5 flex flex-1 flex-col items-center gap-5">
          {/* <div className="flex flex-col gap-5">
            <span className="font-bold text-5xl">More Happy Customers</span>
          </div> */}
          <div className="flex-1 flex items-center justify-center">
            <img className="w-[40%] rounded-full" src={photo2} alt="Person 2" />
          </div>

          <p className="testimonial-text w-[80%] discount">
            I stumbled upon this platform, and it exceeded my expectations!
            Finding the best card deal was a breeze. The simplicity of the
            process, combined with the wealth of information provided, made my
            decision-making much easier.
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
