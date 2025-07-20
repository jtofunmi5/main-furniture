
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF,} from 'react-icons/fa6';
import { RxDoubleArrowUp } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <footer className="bg-[#03344F] text-white py-12 ">
      <div className="max-w-7xl max-auto px-4 md:px-8 md:grid-cols-3 grid gap-12 ">
        <div className="pl-[50px]">
          <h2 className="text-[#ffffff] text-xl font-bold  mb-4 ">SHINE LUXURY FURNITURE</h2>
          <p className="text-sm text-gray-100 mb-7 ">
            
            At Shine Luxury Furniture, beauty goes beyond the surface. We're here to help you feel confident, radiant, and empowered every day.
        Have questions or want to share your glow-up journey?
        Connect with us on social media for tips, tutorials, and exclusive updates.
          </p>
          <div className="flex gap-4 mb-7 text-white">
            <FaXTwitter className="hover:text-[#ffffff] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#ffffff] cursor-pointer" />
            <FaInstagram className="hover:text-[#ffffff] cursor-pointer" />
            <FaFacebookF className="hover:text-[#ffffff] cursor-pointer" />
          </div>
          <Link to="/">
          <button className="flex items-center gap-2 mt-4 px-4 py-2 border border-white text-sm hover:bg-white hover:text-[#0E3A35] transition-all duration-500">
              <RxDoubleArrowUp /> BACK TO TOP
          </button>
          </Link>
          
        </div>

        <div className="pl-[96px] ">
          <h4 className="text-white font-semibold  mb-2">Site Map</h4>
          <ul className="space-y-1 text-sm text-gray-300">
           <Link to="services" >
            <li  className="hover:text-[#ffffff] cursor-pointer">Services</li>
            </Link>
            <Link to="gallery">
            <li  className="hover:text-[#ffffff] cursor-pointer">Gallery</li>
            </Link>
             <Link to="cart" >
            <li  className="hover:text-[#ffffff] cursor-pointer">Cart</li>
            </Link>
             <Link to="contact" >
            <li  className="hover:text-[#ffffff] cursor-pointer">Contact us</li>
            </Link>
          </ul>
        </div>

        <div className="">
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li className="hover:text-[#ffffff] cursor-pointer">Privacy Policy</li>
            <li  className="hover:text-[#ffffff] cursor-pointer text">Terms of Services</li>
          </ul>
        </div>
      </div>

      <div className=" bg-[#ffffff]  text-center text-xs text-[#113a36] py-2  mt-8 ">
       Copyright © 2025 Shine Luxury Furniture. All Rights Reserved.
      </div>
  </footer>
  );
};

export default Footer;