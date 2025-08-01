import React from "react";
import phone2 from "../assets/phone2.png";
const Section2 = () => {
  return (
    <div>
      <section className="mt-[600px]">
        <div className="max-w-[100%] w-[85%] m-auto">
          <hr className="text-[#E4E4E4] bg-[#E4E4E4] h-1" />
          <h2 className="text-center text-xl md:text-2xl md:font-semibold lg:text-3xl xl:text-4xl xl:font-semibold 2xl:text-[44px] mt-10">
            How the app works
          </h2>
          <div className="flex justify-center  items-center flex-wrap">
           <figure>
             <img src={phone2} alt="" />
           </figure>
            <div className="flex  flex-col  gap-2.5 sm:gap-5">
              <p className="text-[#FA4A0C] text-center font-bold text-xl sm:text-2xl md:text-start ">Create an account</p>
                <p className="text-[#252B42] font-bold text-center md:text-start sm:text-3xl lg:text-[40px] lg:w-[560px] text-2xl w-[350px]">Create/login to an existing account to get started</p>
              <p className="text-[#737373] text-center font-medium  md:text-start sm:text-xl w-[300px]">
                An account is created with your email and a desired password
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
