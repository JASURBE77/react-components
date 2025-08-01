import React from "react";
import phone3 from "../assets/phone3.png";
const Section3 = () => {
  return (
    <div>
      <section className="mt-30 xl:mt-0">
        <div className="max-w-[100%] w-[85%] m-auto">
          <div className="flex justify-center  items-center flex-wrap">
            <div className="flex  flex-col  gap-2.5 sm:gap-5">
              <p className="text-[#FA4A0C] text-center font-bold text-xl sm:text-2xl md:text-start ">
               Explore varieties
              </p>
              <p className="text-[#252B42] font-bold text-center md:text-start sm:text-3xl lg:text-[40px] lg:w-[560px] text-2xl w-[350px]">
               Shop for your favorites
meal as e dey hot.
              </p>
              <p className="text-[#737373] text-center font-medium  md:text-start sm:text-xl w-[300px]">
               Shop for your favorite meals or drinks
and enjoy while doing it.
              </p>
            </div>
            <figure>
              <img src={phone3} alt="" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
