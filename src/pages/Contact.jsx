import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className="bg-[#F2F5FF] min-h-screen flex flex-col">
      <Navbar />
      
      <main className='flex-grow pt-32 pb-20 px-6 max-w-5xl mx-auto'>
        <div className="text-center mb-12 space-y-4">
          <h2 className='font-bold text-3xl md:text-4xl text-[#054C73]'>
            📞 Contact Us
          </h2>
          <p className='text-gray-600 max-w-xl mx-auto leading-relaxed'>
            We’d love to hear from you! Whether you have questions, need help choosing 
            the right piece, or want to customize your order, our team is here to assist.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-white p-8 rounded-2xl shadow-sm text-center border border-blue-50'>
            <p className='font-bold text-xl text-[#054C73] mb-2'>📧 Email:</p>
            <p className="text-gray-600">furniture@gmail.com</p>
          </div>

          <div className='bg-white p-8 rounded-2xl shadow-sm text-center border border-blue-50'>
            <p className='font-bold text-xl text-[#054C73] mb-2'>📱 Phone:</p>
            <p className="text-gray-600">012 356 789 9990</p>
            <p className="text-gray-600">012 356 789 9990</p>
          </div>

          <div className='bg-white p-8 rounded-2xl shadow-sm text-center border border-blue-50'>
            <p className='font-bold text-xl text-[#054C73] mb-2'>📍 Visit Us:</p>
            <p className="text-gray-600">123 Furniture Lane, Home City, Country</p>
          </div>

          <div className='bg-white p-8 rounded-2xl shadow-sm text-center border border-blue-50'>
            <p className='font-bold text-xl text-[#054C73] mb-2'>🕒 Business Hours:</p>
            <p className="text-gray-600">Monday – Saturday</p>
            <p className="text-gray-600 font-medium text-[#054C73]">9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;