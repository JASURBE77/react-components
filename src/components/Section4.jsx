import React from 'react'
import phone4 from "../assets/phone4.png";

const Section4 = () => {
  return (
    <div>
        <div className='max-w-[100%] w-[85%] mx-auto'>
             <div className="flex justify-center  items-center flex-wrap">
                       <figure>
                         <img src={phone4} alt="" />
                       </figure>
                        <div className="flex  flex-col  gap-2.5 sm:gap-5">
                          <p className="text-[#FA4A0C] text-center font-bold text-xl sm:text-2xl md:text-start ">Checkout</p>
                            <p className="text-[#252B42] font-bold text-center md:text-start sm:text-3xl lg:text-[40px] lg:w-[560px] text-2xl w-[350px]">When you done check out
and get it delivered.</p>
                          <p className="text-[#737373] text-center font-medium  md:text-start sm:text-xl w-[300px]">
                           When you done check out and get it 
delivered with ease.
                          </p>
                        </div>
                      </div>
        </div>
    </div>
  )
}

export default Section4