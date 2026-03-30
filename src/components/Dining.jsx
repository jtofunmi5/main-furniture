import React from 'react'
import diningProducts from '../catalog/dining';
import ProductCard from './ProductCard';

const Dining = () => {
  return (
    <>
      {/* Hero Section - Using a Dining-related background */}
      <div
        className="mb-10 flex flex-col h-[300px] bg-cover bg-center text-center justify-center gap-4 relative"
        style={{ backgroundImage: "url('/images/livingRoom/sofa.jpeg')" }} 
      >
        <div className="absolute inset-0 bg-black/40"></div> 
        <h1 className="font-bold text-5xl md:text-6xl text-white z-10">Dining Collection</h1>
      </div>

      
      <div className="px-6 md:px-14 mb-7 text-sm">
        <a href="/" className="hover:text-[#054C73]">Home</a> 
        <span className="mx-2">/</span> 
        <span className="opacity-70">Dining Sets</span>
      </div>

      
      <div className="grid gap-6 px-6 md:px-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {diningProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      
      <div className="p-6 md:p-14 bg-white" >
        <div className="mb-12">
          <h2 className="font-bold text-3xl mb-6 text-[#054C73]">Elevate Your Dining Experience</h2>
          <p className="opacity-70 leading-relaxed max-w-4xl">
            The dining room is where family traditions begin and stories are shared. 
            At Shine Luxury, our dining sets are crafted to provide the perfect 
            balance of comfort and sophistication for your home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-semibold text-2xl mb-4">Choosing the Perfect Set</h3>
            <p className="opacity-70 mb-6">Consider these factors before your purchase:</p>
            <ul className="opacity-70 list-disc pl-5 space-y-3">
              <li><b>Space:</b> Measure your room to ensure comfortable traffic flow around the table.</li>
              <li><b>Seating:</b> From intimate 4-seaters to grand 12-seat banquet tables.</li>
              <li><b>Material:</b> Choose between solid hardwood, tempered glass, or luxury marble tops.</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
             <img src="/images/dining/dining-detail.jpg" alt="Dining Detail" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-14 py-16 mt-20 bg-gray-100 border-t">
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-[#054C73]">Free Delivery</h4>
          <p className="text-sm text-gray-600">On orders above 700k within major cities.</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-[#054C73]">Free Installation</h4>
          <p className="text-sm text-gray-600">Expert setup in Abuja, Kano, Lagos & Enugu.</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-[#054C73]">100% Guarantee</h4>
          <p className="text-sm text-gray-600">Dedicated after-sale support for every client.</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-[#054C73]">Secure Payment</h4>
          <p className="text-sm text-gray-600">Flexible transfers or in-store payments.</p>
        </div>
      </div>
    </>
  );
};

export default Dining;