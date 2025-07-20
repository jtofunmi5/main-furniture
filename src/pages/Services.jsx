import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Services = () => {
  return (
    <>
    <Navbar/>
    <section className='flex flex-col  bg-[rgb(242,245,255)] h-[100vh] gap-9 mt-20'>
    <h2 className='mt-3 flex items-center font-bold text-2xl justify-center'>🛠️ Our Furniture Services</h2>
    <p className='flex text-center '>At Furniture, we don’t just sell furniture, we provide complete solutions to help you create the perfect space. Whether you're styling a single room or furnishing an entire home, our services are designed to make the process smooth and satisfying.</p>
    <div className='text-center '>
       <p className='font-semibold text-xl'>🪑Custom Furniture Design</p>
    <p>Looking for something unique? We craft tailor-made pieces to match your space, style, and needs.</p>
    </div>
   <div  className='text-center '>
     <p className='font-semibold text-xl'>🚚 Fast & Safe Delivery</p>
    <p>Enjoy prompt, reliable delivery right to your doorstep—handled with care by our experienced logistics team.</p>
   </div>
   <div className='text-center '>
      <p className='font-semibold text-xl'>🧰 Assembly & Installation</p>
    <p>Skip the hassle. Our experts will assemble and install your furniture exactly where you want it.</p>
   </div>

    <div className='text-center '>
    <p className='font-semibold text-xl'>Interior Styling Support</p>
    <p>Need help visualizing your space? Our in-house design consultants are here to help you style and plan your layout.</p>
    </div>
    <div className='text-center '>
    <p className='font-semibold text-xl'>🔁 Furniture Refinishing & Repairs</p>
    <p>Give your old favorites a new life with our restoration, reupholstery, or repair services.</p>
    </div>
     
    

    </section>
    <Footer/>
    </>
  )
}

export default Services;