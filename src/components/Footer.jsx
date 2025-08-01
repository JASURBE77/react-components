import React from 'react'
import bgikki from '../assets/bg2.png' 
import footerlogo from '../assets/header-logo.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='bg-cover bg-no-repeat h-[516px]' style={{backgroundImage: `url(${bgikki})`}}>
                <div className='max-w-[100%]'>
                  <h1 className='text-center text-5xl text-white font-bold pt-[140px]'>Download the app now.</h1>
                  <p className='text-center text-2xl text-white pt-5 font-medium'>Available on your favorite store. Start your premium experience now</p>
                  <div className="flex items-center justify-center gap-[34px] mt-20">
                        <button className="bg-[#FA4A0C] text-white w-30 h-20 rounded-xl text-xs sm:w-35 sm:text-xl lg:w-[236px] lg:rounded-2xl lg:text-2xl ">Playstore</button>
                    <button className="border-2 text-white w-30 h-20 rounded-xl text-xs  sm:w-35 sm:text-xl lg:w-[236px] lg:rounded-2xl lg:text-2xl">Appstore</button>
                </div>
                </div>
            </div>
            <div className='flex justify-around items-center p-10'>
              <img src={footerlogo} alt="" />
    <div className='flex items-center gap-5'>
                <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
    </div>
    <p className='text-[#5C5C5C]'>Copywright 2020 Bella Onojie.com</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer