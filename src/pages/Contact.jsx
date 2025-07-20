import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <section className='flex flex-col mt-20  bg-[rgb(242,245,255)] h-[100vh] gap-9 '>
    <h2 className='mt-3 flex items-center font-bold text-2xl justify-center'>📞 Contact Us</h2>
    <p className=' text-center items-center '>We’d love to hear from you!
    Whether you have questions, need help choosing the right piece, or want to customize your order, our team is here to assist</p>
    <div className='text-center '>
       <p className='font-semibold text-xl'>📧 Email:</p>
    <p>furniture@gmail.com</p>
    </div>
   <div  className='text-center '>
     <p className='font-semibold text-xl'>📱 Phone:</p>
    <p>+2349067657890, +2348156789878</p>
   </div>
   <div className='text-center '>
      <p className='font-semibold text-xl'>📍 Visit Us:</p>
    <p>123 Furniture Lane, Home City, Country</p>
   </div>

    <div className='text-center '>
    <p className='font-semibold text-xl'>🕒 Business Hours:</p>
    <p>Monday – Saturday | 9:00 AM – 6:00 PM</p>
    </div>
   
  
    </section>
    <Footer/>
    </>
  )
}

export default Contact