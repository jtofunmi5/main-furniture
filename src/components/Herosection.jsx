import Herobg from "../assets/Mask Group.png";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <section className="relative">
      <img className="h-[90vh] w-full object-cover" src={Herobg} alt="Hero" />

      <div className="absolute w-[35%] h-[70%] right-12 bottom-20 bg-[#DFE9F4] px-5 py-6 items-center space-y-4 shadow-lg rounded-md">
        <span className="text-[#054C73] font-medium uppercase tracking-widest">
          New Arrival
        </span>
        <div className="">
          <h1 className="font-semibold text-5xl text-[#054C73] leading-snug">
          <Typewriter
            words={["Discover Our New Collection."]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </h1>

        </div>
        
        <div className="space-y-5">
           <p className="text-gray-700 ">
          Step into a world of style, comfort, and craftsmanship.
          Our curated furniture collection blends modern design with timeless appeal perfect for every room and every lifestyle.
        </p>

        <Link to="/gallery">
        <button className="rounded-3xl py-3 px-8 mt-4 bg-[#054C73] text-white hover:bg-[#043d5c] transition">
          Buy Now
        </button>
        </Link>

        </div>
       
        
      </div>
    </section>
  );
};

export default Herosection;
