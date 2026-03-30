import React from 'react'
import img4 from "../assets/img4.png"
import img5 from "../assets/Image-living room.png"
import img6 from "../assets/img5.png"
import { Link } from 'react-router-dom'

const Ourgallery = () => {
  return (
    <section className='my-12 px-6 md:px-16'>
     
      <div className='flex flex-col mb-10 text-center justify-center items-center'> 
        <h2 className='font-bold text-3xl text-[#054C73]'>Our Gallery</h2>
        <p className='text-gray-500 mt-2'>Where Style Lives, Explore Our Gallery</p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        
       
        <Link to="/dining" className='group'>
          <div className='flex flex-col items-center space-y-3'>
            <div className="overflow-hidden rounded-2xl shadow-sm bg-gray-100 aspect-square">
              <img 
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                src={img4} 
                alt='Dining sets'
              />
            </div>
            <p className='font-semibold text-[#054C73] group-hover:underline'>Dining sets</p>
          </div>
        </Link>

       
        <Link to="/living" className='group'>
          <div className='flex flex-col items-center space-y-3'>
            <div className="overflow-hidden rounded-2xl shadow-sm bg-gray-100 aspect-square">
              <img 
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                src={img5} 
                alt='Living sets'
              />
            </div>
            <p className='font-semibold text-[#054C73] group-hover:underline'>Living sets</p>
          </div>
        </Link>

        
        <Link to="/bedroom" className='group'>
          <div className='flex flex-col items-center space-y-3'>
            <div className="overflow-hidden rounded-2xl shadow-sm bg-gray-100 aspect-square">
              <img 
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                src={img6} 
                alt='Room Set'
              />
            </div>
            <p className='font-semibold text-[#054C73] group-hover:underline'>Room Set</p>
          </div>
        </Link>

        {/* Kitchen Sets */}
        <Link to="/kitchen" className='group'>
          <div className='flex flex-col items-center space-y-3'>
            <div className="overflow-hidden rounded-2xl shadow-sm bg-gray-100 aspect-square">
              <img 
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                src={img4} 
                alt='Kitchen Set'
              />
            </div>
            <p className='font-semibold text-[#054C73] group-hover:underline'>Kitchen Set</p>
          </div>
        </Link>

      </div>
    </section>
  )
}

export default Ourgallery;