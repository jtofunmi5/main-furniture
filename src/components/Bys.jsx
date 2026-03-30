import React from 'react'
import Elipse from "../assets/Ellipse5.png"
import woman from "../assets/woman.png"
import { Link } from "react-router-dom";

const Bys = () => {
  return (
    <section className='flex flex-col md:flex-row items-center bg-[#F2F5FF] min-h-[80vh] md:h-[100vh] py-12 md:py-0 overflow-hidden'>
     
      <div className='flex flex-col w-full md:w-[50%] px-6 md:pl-20 md:pr-10 space-y-6 text-center md:text-left order-2 md:order-1'>
        <h2 className='font-bold text-3xl md:text-4xl text-[#054C73]'>
          Beautify Your Space
        </h2>
        <p className='text-gray-700 leading-relaxed text-sm md:text-base'>
          Turn every corner of your home into a reflection of your style. Whether you're refreshing a single room or redesigning your entire space, our furniture adds warmth, character, and elegance. From bold statement pieces to subtle accents, we help you create a home that feels as beautiful as it looks.
        </p>
        <Link to="/services" className='flex justify-center md:justify-start'>
          <button className='bg-[#054C73] w-full md:w-[40%] rounded-full py-4 px-8 text-white font-medium hover:bg-[#033a59] transition shadow-lg active:scale-95'>
            LEARN MORE
          </button>
        </Link>
      </div>

      
      <div className='w-full md:w-[50%] relative flex justify-center items-center mb-10 md:mb-0 order-1 md:order-2 px-6'>
        
        <img 
          className='relative h-auto max-w-[80%] md:max-w-none md:h-[70vh] z-10' 
          src={woman} 
          alt='Interior design inspiration'
        />
        
       
        <img 
          className='absolute z-0 w-[60%] md:w-[45%] top-[20%] right-[10%] md:right-[20%] opacity-80' 
          src={Elipse} 
          alt='background-decor'
        />
      </div>
      
    </section>
  )
}

export default Bys;