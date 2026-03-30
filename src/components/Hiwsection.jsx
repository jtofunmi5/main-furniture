import React from 'react'
import PurchaseImage from "../assets/Purchase Securely.png"
import Shipfrom from "../assets/Ships From Warehouse.png"
import Styleyour from "../assets/Style Your Room.png"

const Hiwsection = () => {
  return (
    <section className='mx-6 md:mx-16 border-t-2 py-12'>
      {/* Header Section */}
      <div className='flex flex-col mb-12 text-center justify-center items-center'> 
          <h2 className='font-bold text-3xl text-[#054C73]'>How It Works</h2>
          <p className='text-gray-500 mt-2'>Here’s how we make your dream home happen</p>
      </div>

      {/* Steps Grid */}
      <article className='grid grid-cols-1 md:grid-cols-3 gap-12'>
        
        {/* Step 1 */}
        <div className='flex flex-col items-center group'>
          <div className="overflow-hidden rounded-2xl mb-4 bg-gray-50">
            <img 
              src={PurchaseImage} 
              alt="Purchase Securely" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className='text-center px-4'>
            <h3 className='font-bold text-xl text-[#054C73] mb-2'>Purchase Securely</h3>
            <p className='text-gray-600 text-sm'>Safe, seamless, and secure purchases every time.</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className='flex flex-col items-center group'>
          <div className="overflow-hidden rounded-2xl mb-4 bg-gray-50">
            <img 
              src={Shipfrom} 
              alt="Ships From Warehouse" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className='text-center px-4'>
            <h3 className='font-bold text-xl text-[#054C73] mb-2'>Ships From Warehouse</h3>
            <p className='text-gray-600 text-sm'>From our warehouse to you, fast and hassle-free.</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className='flex flex-col items-center group'>
          <div className="overflow-hidden rounded-2xl mb-4 bg-gray-50">
            <img 
              src={Styleyour} 
              alt="Style Your Room" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className='text-center px-4'>
            <h3 className='font-bold text-xl text-[#054C73] mb-2'>Style Your Room</h3>
            <p className='text-gray-600 text-sm'>Style your room with timeless elegance.</p>
          </div>
        </div>

      </article>
    </section>
  )
}

export default Hiwsection;