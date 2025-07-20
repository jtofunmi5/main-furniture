import React from 'react'
import collection1 from "../assets/collection1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

const InspiCollection = () => {
  return (
    <section className='m-8'>
      <div className='flex flex-col m-8 text-center justify-center items-center'> 
        <h1 className=' font-bold text-2xl'>Inspiration Collection</h1>
        <p>Breathe Life Into Your Living Space and let Your Space Tell Your Story</p>
      </div>
      <div className='flex justify-center space-x-5 '>
        <img className='mt-8 h-[35%]' src={collection1} alt='img1'/>
        <img className=' h-[35%]'  src={img2} alt='img2'/>
        <img className='mt-7 h-[35%]'  src={img3} alt='img3'/>
      </div>
    </section>
  )
}

export default InspiCollection;