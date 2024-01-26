import first from "../assets/1.webp";
import sec from "../assets/2.jpg";
import thr from "../assets/3.jpg";
const Coach = () => {
  return (
    <>
      <div className="mt-10 p-4 flex flex-col items-center gap-36 max-w-4xl mx-auto">
        <div className="relative flex-1 flex justify-center">
          <h1 className="text-center text-5xl font-bold">Our Coaches</h1>
        </div>
        <div className="flex flex-1 flex-col gap-10">
          <div className="flex items-center justify-between gap-10 w-[100%]">
            <div className="w-[60%] h-[340px] bg-gray-800 rounded-md relative">
              <img src={first} alt="gym" className="rounded-lg" />
              <h1 className="p-2 text-yellow-500">Alexis Strong</h1>
              <p className="p-2 text-[13px]">
                Alexis has a background in competitive bodybuilding and
                powerlifting. With years of experience, they specialize in
                strength training.
              </p>
            </div>
            <div className="w-[60%] h-[340px] bg-gray-800 rounded-md">
              <img src={sec} alt="zumba" className="rounded-lg" />
              <h1 className="p-2 text-yellow-500">Marina Wellness</h1>
              <p className="p-2 text-[13px]">
                A dance fitness program that incorporates Latin and
                international music with dance movements. Its a fun way to
                exercise.
              </p>
            </div>
            <div className="w-[70%] h-[340px] bg-gray-800 rounded-md">
              <img src={thr} alt="yoga" className="rounded-lg" />
              <h1 className="p-2 text-yellow-500">Chris Cardio</h1>
              <p className="p-2 text-[13px]">
                An ancient practice that combines physical postures, breathing
                exercises, and meditation. It aims to promote mental and
                physical well-being.
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

export default Coach;
