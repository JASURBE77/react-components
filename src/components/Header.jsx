import React from 'react'
import headerlogo from '../assets/header-logo.png'

const Header = () => {
  return (
    <div>
        <header>
            <div className='max-w-[100%] w-[85%] m-auto p-[10px]'>
                <nav className='flex  items-center justify-between'>
                    <img className='w-[100px] sm:w-[150px]' src={headerlogo} alt="" />
                    <ul className='flex gap-2 sm:gap-6 lg:gap-[40px] xl:gap-[108px]'>
                            <li><a className='hover:text-[#FA4A0C] transition-all sm:text-xl' href="">Home</a></li>
                            <li><a className='hover:text-[#FA4A0C] transition-all sm:text-xl' href="">Product</a></li>
                            <li><a className='hover:text-[#FA4A0C] transition-all sm:text-xl' href="">Faq</a></li>
                            <li><a className='hover:text-[#FA4A0C] transition-all sm:text-xl' href="">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header