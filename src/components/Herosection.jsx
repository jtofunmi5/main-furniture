import Herobg from "../assets/Mask Group.png";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <section className="relative min-h-[80vh] md:h-[90vh] flex items-center justify-center md:justify-end">
      
      <div className="absolute inset-0 z-0">
        <img 
          className="h-full w-full object-cover" 
          src={Herobg} 
          alt="Hero Luxury Furniture" 
        />
        
        <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>
      </div>

      <div className="relative z-10 w-[90%] md:w-[40%] lg:w-[35%] bg-[#DFE9F4]/95 md:bg-[#DFE9F4] p-6 md:px-8 md:py-10 md:mr-12 shadow-2xl rounded-xl md:rounded-md space-y-4 md:space-y-6 transform transition-all">
        
        <span className="text-[#054C73] font-semibold uppercase tracking-[0.2em] text-xs md:text-sm">
          New Arrival
        </span>

        <div className="min-h-[100px] md:min-h-[120px]">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#054C73] leading-tight">
            <Typewriter
              words={["Discover Our New Collection."]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Step into a world of style, comfort, and craftsmanship. 
            Our curated furniture collection blends modern design with 
            timeless appeal—perfect for every room.
          </p>

          <Link to="/gallery" className="inline-block">
            <button className="rounded-full py-3 px-10 bg-[#054C73] text-white font-medium hover:bg-[#043d5c] active:scale-95 transition-all shadow-md">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Herosection;