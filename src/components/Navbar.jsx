import React, { useContext, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoIosMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { FaCartPlus, FaServicestack } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleNavbar = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <nav className=" fixed top-0 left-0 w-full py-4 shadow-md bg-[#ffff] z-50 flex items-center justify-between  mb-5 px-6">
        <Link to="/">
        <h1 className="text-[#054C73] font-bold text-2xl">SHINE LUXURY FURNITURE</h1>
        </Link>
        

        <ul className="hidden  text-lg font-bold md:flex gap-20 items-center">
          
          <Link to="/services">
          <li className="flex items-center gap-2"> <FaServicestack /> Service</li>
          </Link>
          
          <Link to="/gallery">
            <li className="flex items-center gap-2"> <TfiGallery /> Gallery</li>
          </Link>
          <Link to="/cart">
            <li className="flex items-center gap-2"> <FaCartPlus /> Cart</li>
          </Link>
          <Link to="/contact">
            <li className="flex items-center gap-2"><FaPhone />  Contact Us</li>
          </Link>
          <Link to="/signin">
            <li className="text-white bg-[#054C73] hover:bg-[#054c7391] font-medium rounded-lg text-sm px-5 py-2.5">
              Sign in
            </li>
          </Link>
        </ul>

        {mobileNav ? (
          <LiaTimesSolid
            onClick={toggleNavbar}
            className="md:hidden text-3xl z-50"
          />
        ) : (
          <IoIosMenu
            onClick={toggleNavbar}
            className="md:hidden text-3xl z-50"
          />
        )}
      </nav>

      {mobileNav && (
        <aside
          className="flex flex-col gap-6 px-6 py-12 bg-white shadow-lg w-[70%] h-screen fixed right-0 top-0 md:hidden"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <ul className="space-y-6">
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/services">
              <li>Service</li>
            </Link>

            <Link to="/gallery">
              <li>Gallery</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>
            <Link to="/signin">
              <li className="text-white bg-[#054C73] hover:bg-[#054c7391] font-medium rounded-lg text-sm px-5 py-2.5">
                Sign in
              </li>
            </Link>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Navbar;
