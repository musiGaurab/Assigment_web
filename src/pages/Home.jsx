import discount from "../assets/Discount.svg";
import hand from "../assets/hand.png";
import arrow from "../assets/arrow.svg";
import vector from "../assets/vector.svg";
import gyms from "../assets/gyms3.avif";
const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[70vh] max-w-6xl m-auto">
        <div className="flex w-[80%] flex-col justify-end gap-6 relative">
          <p className="pr-6 pl-2 flex items-center gap-1 w-fit discount-bg rounded-md text-[15px]">
            {/* <img src={discount} alt="discount" /> */}
            20%<span className="discount">DISCOUNT FOR</span>1 MONTH
            <span className="discount flex ">MEMBERSHIP</span>
          </p>
          <div className="flex flex-col gap-6">
            <span className="text-5xl font-bold">The Next</span>
            <span className="text-5xl font-bold text-red-500">Generation</span>
            <span className="text-5xl font-bold">Fitness Program.</span>
          </div>
          <p className="w-[75%] discount">
            Discover fitness at its finest. Our gym offers top notch facilities,
            expert guidance, and a vibrant community to fuel your journey to a
            healthier you.
          </p>
          <div className="w-[100px] h-[100px] rounded-full  flex flex-col items-center justify-center absolute top-12 lg:right-[20%]">
            <span className="flex items-center text-red-500">
              Get <img src={arrow} alt="arrow" />
            </span>
            <span className="text-red-500">Started</span>
          </div>
          <div className="blurs1 absolute top-0 left-[-90px]"></div>
        </div>
        <div className="relative">
          {/* <div className="w-[100px] h-[100px]">
          </div> */}
          <img className="ml-10 w-[100%]" src={gyms} alt="vector" />
          {/* <div className="relative">
            <img
              className="ml-10 w-[5%] absolute bottom-[40%] left-20"
              src={vector}
              alt="vector"
            />
            <img
              className="ml-10 w-[10%] absolute bottom-[60%] right-20"
              src={vector}
              alt="vector"
            />
            <img className="w-[90vh] relative" src={hand} alt="hand" />
            <div className="blurs absolute left-[35%] bottom-20"></div>
          </div> */}
        </div>
      </div>
      <div className="mt-5 flex items-start justify-evenly max-w-6xl mx-auto">
        <div className="flex items-center gap-5">
          <h1 className="text-2xl">180+</h1>
          <p className="text-red-500">USER ACTIVE</p>
        </div>
        <span className="w-[2px] h-[20px] border bg-white"></span>
        <div className="flex items-center gap-5">
          <h1 className="text-2xl">30+</h1>
          <p className="text-red-500">TRUSTED BY COMPANY</p>
        </div>
        <span className="w-[2px] h-[20px] border bg-white"></span>
        <div className="flex items-center gap-5">
          <h1 className="text-2xl">400+</h1>
          <p className="text-red-500">MEMBERS</p>
        </div>
      </div>
    </>
  );
};

export default Home;
