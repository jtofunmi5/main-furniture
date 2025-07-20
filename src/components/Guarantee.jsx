import React from 'react'
import { FaShippingFast } from 'react-icons/fa';
import { Ri24HoursFill } from 'react-icons/ri';
import { SiAuth0 } from 'react-icons/si';

const Guarantee = () => {
  return (
    <section className=' bg-[#F2F5FF] '>
      <div className=' flex justify-between items-center mx-10 '>
        <div className='flex space-x-1 mt-5 mb-5'>
        <FaShippingFast className='w-[35px] h-[35px]'/>
        <div className='text-sm'>
          <p className='font-semibold'>Free Delivery</p>
          <span>Your Dream Furniture, Delivered Free.</span>
        </div>
      </div>

      <div className='flex space-x-1 mt-5 mb-5'>
        <Ri24HoursFill className='w-[35px] h-[35px]'/>
        <div className='text-sm'>
          <p className='font-semibold'>Suport 24/7</p>
          <span>Anytime You Need Us, We're Just a Message Away</span>
        </div>
      </div>

      <div className='flex space-x-1 mt-5 mb-5'>
        <SiAuth0 className='w-[35px] h-[35px]'/>
        <div className='text-sm'>
          <p className='font-semibold'>100% Authentic</p>
          <span>Guaranteed 100% Authentic Craftsmanship</span>
        </div>
      </div>

      </div>
      
      
    </section>
  )
}

export default Guarantee;