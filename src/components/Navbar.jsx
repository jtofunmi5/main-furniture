import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoIosMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { FaCartPlus, FaServicestack, FaHome } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNavbar = () => {
    setMobileNav(!mobileNav);
  };

  // Close menu when a link is clicked
  const closeMobileNav = () => setMobileNav(false);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full py-4 shadow-md bg-white z-[60] flex items-center justify-between px-6">
        <Link to="/" onClick={closeMobileNav}>
          <h1 className="text-[#054C73] font-bold text-xl md:text-2xl tracking-tight">
            SHINE LUXURY
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden text-lg font-bold md:flex gap-10 items-center">
          <Link to="/services" className="hover:text-[#054C73] transition-colors">
            <li className="flex items-center gap-2"> <FaServicestack /> Service</li>
          </Link>
          <Link to="/gallery" className="hover:text-[#054C73] transition-colors">
            <li className="flex items-center gap-2"> <TfiGallery /> Gallery</li>
          </Link>
          <Link to="/cart" className="hover:text-[#054C73] transition-colors">
            <li className="flex items-center gap-2"> <FaCartPlus /> Cart</li>
          </Link>
          <Link to="/contact" className="hover:text-[#054C73] transition-colors">
            <li className="flex items-center gap-2"><FaPhone /> Contact</li>
          </Link>
          <Link to="/signin">
            <li className="text-white bg-[#054C73] hover:bg-[#033a59] font-medium rounded-lg text-sm px-6 py-2">
              Sign in
            </li>
          </Link>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          {mobileNav ? (
            <LiaTimesSolid onClick={toggleNavbar} className="text-3xl cursor-pointer text-[#054C73]" />
          ) : (
            <IoIosMenu onClick={toggleNavbar} className="text-3xl cursor-pointer text-[#054C73]" />
          )}
        </div>
      </nav>

      {/* Mobile Sidebar Overlay (Backdrop) */}
      {mobileNav && (
        <div 
          className="fixed inset-0 bg-black/50 z-[55] md:hidden" 
          onClick={closeMobileNav}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed right-0 top-0 h-screen w-[75%] bg-white z-[58] shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          <ul className="flex flex-col gap-8 text-xl font-semibold text-gray-800">
            <Link to="/" onClick={closeMobileNav} className="flex items-center gap-4">
              <FaHome className="text-[#054C73]" /> Home
            </Link>
            <Link to="/services" onClick={closeMobileNav} className="flex items-center gap-4">
              <FaServicestack className="text-[#054C73]" /> Services
            </Link>
            <Link to="/gallery" onClick={closeMobileNav} className="flex items-center gap-4">
              <TfiGallery className="text-[#054C73]" /> Gallery
            </Link>
            <Link to="/cart" onClick={closeMobileNav} className="flex items-center gap-4">
              <FaCartPlus className="text-[#054C73]" /> Cart
            </Link>
            <Link to="/contact" onClick={closeMobileNav} className="flex items-center gap-4">
              <FaPhone className="text-[#054C73]" /> Contact Us
            </Link>
            <hr className="border-gray-200" />
            <Link to="/signin" onClick={closeMobileNav}>
              <li className="text-white bg-[#054C73] text-center font-medium rounded-xl py-4 shadow-lg active:scale-95 transition-all">
                Sign in
              </li>
            </Link>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;