import React from 'react'
import Elipse from "../assets/Ellipse5.png"
import woman from "../assets/woman.png"
import { Link } from "react-router-dom";

const Bys = () => {
  return (
    <section className='flex items-center bg-[rgb(242,245,255)] h-[100vh] gap-9 '>
      <div className=' flex flex-col w-[100%] mx-20 space-y-2'>
        <h1 className='font-bold text-2xl '>Beautify Your Space</h1>
        <p className='pr-8'>Turn every corner of your home into a reflection of your style. Whether you're refreshing a single room or redesigning your entire space, our furniture adds warmth, character, and elegance. From bold statement pieces to subtle accents, we help you create a home that feels as beautiful as it looks.</p>
        <Link to="/services">
        <button className='bg-[#054C73] w-[35%] rounded-3xl py-3 text-white'>LEARN MORE</button>
        </Link>
        
      </div>
      <div className=' w-[100%] relative flex my-10'>
        <img className='h-fit w-[60vh] pl-5 z-40'src={woman}/>
        <img className='h-[45%] absolute z-0 top-20 right-[25%] ' src={Elipse}/>
        
      </div>
      
    </section>
  )
}

export default Bys;