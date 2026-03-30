import React, { lazy, Suspense } from 'react'


import Guarantee from '../components/Guarantee';
import InspiCollection from '../components/InspiCollection';
import Bys from '../components/Bys'
import Hiwsection from '../components/Hiwsection';
import Herosection from '../components/Herosection'
import Spinner from '../components/Spinner';
import Lookroom from '../components/Lookroom';
import Footer from '../Components/Footer';
import Ourgallery from '../Components/Ourgallery';
import Navbar from '../Components/Navbar';



// const InspiCollection = () => lazy(() => import ('../Components/InspiCollection'));

const Home = () => {
  
  return (
    <div>
      <Navbar/>
      <Herosection />
      <Guarantee/>
      <Suspense fallback={<Spinner/>}>
        <InspiCollection/>
      </Suspense>
      
      <Bys/>
      <Ourgallery/>
      <Suspense fallback={<Spinner/>}>
        <Hiwsection/>
      </Suspense>
    <Lookroom/>
      <Footer />
      
      
    </div>
  )
}

export default Home;