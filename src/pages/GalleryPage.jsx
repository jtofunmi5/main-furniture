import React from 'react'
import Navbar from '../components/Navbar'
import Ourgallery from '../components/Ourgallery'
import Footer from '../components/Footer'

const GalleryPage = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-20'>
          <Ourgallery />
      </div>
      <Footer />
      

      
    </div>
  )
}

export default GalleryPage
