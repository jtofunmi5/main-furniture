import React from 'react'
import PurchaseImage from "../assets/Purchase Securely.png"
import Shipfrom from "../assets/Ships From Warehouse.png"
import Styleyour from "../assets/Style Your Room.png"

const Hiwsection = () => {
  return (
    <section className='mx-10 border-t-2 py-4'>
      <div className='flex flex-col m-8 text-center justify-center items-center'> 
            <h1 className=' font-bold text-2xl'>How It Works</h1>
            <p>Here’s How We Make It Happen</p>
      </div>

      <article className='flex gap-8'>
        <div className='w-[30%]'>
        <img src={PurchaseImage}/>
        <div className='text-center'>
          <h1 className='font-semibold text-xl'>Purchase Securely</h1>
          <p>Safe, Seamless, and Secure Purchases Every Time</p>
        </div>
      </div>

      <div className='w-[30%]'>
        <img src={Shipfrom}/>
        <div className='text-center'>
          <h1 className='font-semibold text-xl'>Ships From Warehouse</h1>
          <p>From Our Warehouse to You Fast & Hassle-Free</p>
        </div>
      </div>

      <div className='w-[30%]'>
        <img src={Styleyour}/>
        <div className='text-center'>
          <h1 className='font-semibold text-xl'>Style Your Room</h1>
          <p>Style Your Room with Timeless Elegance.</p>
        </div>
      </div>

      </article>
      
      
    </section>
  )
}

export default Hiwsection;