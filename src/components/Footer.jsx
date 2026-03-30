import { FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import { RxDoubleArrowUp } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03344F] text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-white text-xl font-bold mb-4 tracking-tight">
            SHINE LUXURY FURNITURE
          </h2>
          <p className="text-sm text-gray-200 mb-6 leading-relaxed">
            At Shine Luxury Furniture, beauty goes beyond the surface. We're here to help you feel confident, radiant, and empowered every day. Connect with us on social media for exclusive updates.
          </p>
          <div className="flex gap-5 mb-6 text-xl">
            <FaXTwitter className="hover:text-gray-400 transition-colors cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-400 transition-colors cursor-pointer" />
            <FaInstagram className="hover:text-gray-400 transition-colors cursor-pointer" />
            <FaFacebookF className="hover:text-gray-400 transition-colors cursor-pointer" />
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2 border border-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#03344F] transition-all duration-300 rounded-sm"
          >
            <RxDoubleArrowUp />
          </button>
        </div>

    
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Site Map</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/cart" className="hover:text-white transition-colors">Cart</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

       
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
          </ul>
        </div>
      </div>

    
      <div className="bg-white text-center text-[10px] md:text-xs text-[#03344F] py-4 mt-12 font-medium">
        Copyright © 2026 Shine Luxury Furniture. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;