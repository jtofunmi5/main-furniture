import ig1 from "../assets/IG-1.jpg"
import ig2 from "../assets/IG-2.jpg"
import ig3 from "../assets/IG-3.jpg"
import ig4 from "../assets/IG-4.jpg"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Lookroom = () => {
  return (
    <section className='flex flex-col lg:flex-row bg-[#213038] py-12 px-6 md:px-12 gap-10 items-center lg:items-start'>
      
      {/* Text Content */}
      <div className='flex flex-col max-w-md space-y-4 text-center lg:text-left'>
        <h2 className='font-bold text-3xl text-white tracking-tight'>Lookroom</h2>
        <p className='text-gray-300 leading-relaxed text-sm md:text-base'>
          At Shine Luxury Furniture, beauty goes beyond the surface. We're here to help you feel confident, radiant, and empowered every day.
          Have questions or want to share your glow-up journey?
          Connect with us on social media for tips, tutorials, and exclusive updates.
        </p>
        
        {/* Added Social Icons since you imported them */}
        <div className="flex justify-center lg:justify-start gap-5 text-white text-xl pt-2">
          <FaInstagram className="hover:text-pink-400 cursor-pointer transition-colors" />
          <FaFacebook className="hover:text-blue-400 cursor-pointer transition-colors" />
          <FaTwitter className="hover:text-blue-300 cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Instagram Grid Section */}
      <div className='flex flex-col w-full'>
        <h2 className='mb-6 font-bold text-2xl text-white text-center lg:text-left'>
          Instagram Shop
        </h2>
        
        {/* Grid Logic:
            - 2 columns on mobile (grid-cols-2)
            - 4 columns on large screens (lg:grid-cols-4)
        */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className="overflow-hidden rounded-lg group">
            <img src={ig1} alt="IG-1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img src={ig2} alt="IG-2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img src={ig3} alt="IG-3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-lg group">
            <img src={ig4} alt="IG-4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lookroom;