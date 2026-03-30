import React from 'react'
import { FaShippingFast } from 'react-icons/fa';
import { Ri24HoursFill } from 'react-icons/ri';
import { SiAuth0 } from 'react-icons/si';

const Guarantee = () => {
  return (
    <section className='bg-[#F2F5FF] py-10 px-6'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        
        
        <div className='flex items-center space-x-4 justify-center md:justify-start'>
          <div className="bg-white p-3 rounded-full shadow-sm">
            <FaShippingFast className='w-[28px] h-[28px] text-[#054C73]'/>
          </div>
          <div className='text-sm'>
            <p className='font-bold text-[#054C73]'>Free Delivery</p>
            <span className="text-gray-600">Your Dream Furniture, Delivered Free.</span>
          </div>
        </div>

       
        <div className='flex items-center space-x-4 justify-center md:justify-start'>
          <div className="bg-white p-3 rounded-full shadow-sm">
            <Ri24HoursFill className='w-[28px] h-[28px] text-[#054C73]'/>
          </div>
          <div className='text-sm'>
            <p className='font-bold text-[#054C73]'>Support 24/7</p>
            <span className="text-gray-600">We're just a message away.</span>
          </div>
        </div>

        
        <div className='flex items-center space-x-4 justify-center md:justify-start'>
          <div className="bg-white p-3 rounded-full shadow-sm">
            <SiAuth0 className='w-[28px] h-[28px] text-[#054C73]'/>
          </div>
          <div className='text-sm'>
            <p className='font-bold text-[#054C73]'>100% Authentic</p>
            <span className="text-gray-600">Guaranteed premium craftsmanship.</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Guarantee;