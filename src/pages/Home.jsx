import React, { lazy, Suspense } from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Guarantee from '../components/Guarantee';
import InspiCollection from '../components/InspiCollection';
import Bys from '../components/Bys'
import Hiwsection from '../components/HiwSection';
import OurGallery from '../components/OurGallery';
import Spinner from '../components/Spinner';
import Lookroom from '../components/Lookroom';
import Footer from '../components/Footer';


// const InspiCollection = () => lazy(() => import ('../Components/InspiCollection'));

const Home = () => {
  
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Guarantee/>
      <Suspense fallback={<Spinner/>}>
        <InspiCollection/>
      </Suspense>
      
      <Bys/>
      <OurGallery/>
      <Suspense fallback={<Spinner/>}>
        <Hiwsection/>
      </Suspense>
    <Lookroom/>
      <Footer/>
      
      
    </div>
  )
}

export default Home;