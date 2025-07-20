import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Ourgallery from '../Components/Ourgallery';

const Gallery = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-20'>
    <Ourgallery/>
    </div>
    
    <Footer/>
    </>
  )
}

export default Gallery;