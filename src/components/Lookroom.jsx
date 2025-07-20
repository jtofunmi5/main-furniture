
import ig1 from "../assets/IG-1.jpg"
import ig2 from "../assets/IG-2.jpg"
import ig3 from "../assets/IG-3.jpg"
import ig4 from "../assets/IG-4.jpg"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Lookroom = () => {
  return (
    <section className=' flex mt-5  bg-[#213038] py-7'>
      <div className='flex  flex-col max-w-sm mx-10  space-y-3 items-align'>
        <h2 className='font-semibold text-2xl text-white'>Lookroom</h2>
        <p className='text-white'>At Shine Luxury Furniture, beauty goes beyond the surface. We're here to help you feel confident, radiant, and empowered every day.
        Have questions or want to share your glow-up journey?
        Connect with us on social media for tips, tutorials, and exclusive updates.</p>
        
        </div>

      <div className='flex flex-col '>
        <h2 className='mb-3 font-semibold text-2xl text-white'>Instagram Shop</h2>
        <div className='flex gap-3'>
          <img src={ig1}/>
          <img src={ig2}/>
          <img src={ig3}/>
          <img src={ig4}/>
        </div>
      </div>
    </section>
  )
}

export default Lookroom;