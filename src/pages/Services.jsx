import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  const serviceList = [
    { title: "🪑 Custom Furniture Design", desc: "Looking for something unique? We craft tailor-made pieces to match your space, style, and needs." },
    { title: "🚚 Fast & Safe Delivery", desc: "Enjoy prompt, reliable delivery right to your doorstep—handled with care by our experienced logistics team." },
    { title: "🧰 Assembly & Installation", desc: "Skip the hassle. Our experts will assemble and install your furniture exactly where you want it." },
    { title: "✨ Interior Styling Support", desc: "Need help visualizing your space? Our in-house design consultants are here to help you style and plan your layout." },
    { title: "🔁 Furniture Refinishing & Repairs", desc: "Give your old favorites a new life with our restoration, reupholstery, or repair services." }
  ];

  return (
    <div className="bg-[#F2F5FF] min-h-screen">
      <Navbar />
      
      <section className='max-w-6xl mx-auto pt-32 pb-20 px-6'>
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className='font-bold text-3xl md:text-4xl text-[#054C73]'>
            🛠️ Our Furniture Services
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            At Shine Luxury, we don’t just sell furniture—we provide complete solutions to help you create the perfect space. Whether you're styling a single room or furnishing an entire home.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {serviceList.map((service, index) => (
            <div 
              key={index} 
              className='bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-blue-50 flex flex-col items-center text-center'
            >
              <p className='font-bold text-xl text-[#054C73] mb-3'>
                {service.title}
              </p>
              <p className='text-gray-600 text-sm leading-relaxed'>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Services;