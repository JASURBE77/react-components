import React from "react";
import bg from "../assets/bg.png";
import phone from '../assets/phone.png'
const Section1 = () => {
  return (
    <div>
      <section>
        <div
          className="w-full h-[719px] bg-repeat bg-cover"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="max-w-[100%] w-[85%] m-auto">
            <p className="font-bold text-2xl text-white text-center pt-[73px]">
              Food app
            </p>
            <h1 className="font-bold text-3xl text-white text-center m-auto  pt-[30px] w-[250px] sm:w-[400px] md:w-[537px] md:text-4xl lg:text-6xl lg:w-[937px]">
              Why stay hungry when you can order form Bella Onojie
            </h1>
                <p className="text-[#F6F6F6] text-center pt-[40px] sm:text-xl md:text-2xl">Download the bella onoje’s food app now on</p>
                <div className="flex items-center justify-center gap-[34px] mt-20">
                        <button className="bg-[#FA4A0C] text-white w-30 h-20 rounded-xl text-xs sm:w-35 sm:text-xl lg:w-[236px] lg:rounded-2xl lg:text-2xl ">Playstore</button>
                    <button className="border-2 text-white w-30 h-20 rounded-xl text-xs  sm:w-35 sm:text-xl lg:w-[236px] lg:rounded-2xl lg:text-2xl">Appstore</button>
                </div>
          </div>
        </div>
        <div className="flex justify-center">
        <img className="absolute -mt-40 sm:-mt-80 " src={phone} alt="" />

        </div>
              </section>
    </div>
  );
};

export default Section1;
