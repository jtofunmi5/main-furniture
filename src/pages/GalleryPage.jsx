// import React from 'react'
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import Ourgallery from '../Components/Ourgallery';

// const GalleryPage = () => {
//   return (
//     <>
//     <Navbar/>
//     <div className='mt-20'>
//     <Ourgallery/>
//     </div>
    
//     <Footer/>
//     </>
//   )
// };

// export default GalleryPage;


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
