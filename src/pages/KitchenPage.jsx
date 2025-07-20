import React from 'react'
import Kitchen from '../components/Kitchen'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const KitchenPage = () => {
  return (
    <div>
      <Navbar/>
        <Kitchen/>
        <Footer/>
    </div>
  )
}

export default KitchenPage