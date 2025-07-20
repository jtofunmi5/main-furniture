import React from "react";
import bedroomProducts from "../catalog/bedroom";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Bedroom = () => {
  return (
    <>
    <div>
      <div
        className=" mb-10 flex flex-col h-[300px] bg-cover bg-center  text-center justify-center gap-8"
        style={{ backgroundImage: "url('/images/livingRoom/sofa.jpeg')" }}
      >
        <Link to="/bedroom" >
        <h1 className="font-bold text-6xl text-white">Bedroom Sets</h1> 
        </Link>
     
      {/* <div>
      <img src="/images/livingRoom/still-sofa.webp"  alt="stillPic"/>
    </div> */}
    </div><div className="px-14 mb-7">
        <a>Home</a> / <a className="opacity-70">Bedroom Sets</a>
      </div><div className="grid gap-6 px-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {bedroomProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div><div className="p-12">
        <div>
          <h3 className="font-semibold text-2xl mb-5">Best Bedroom Furniture Sets</h3>
          <p className="opacity-75 mb-4">
            The best bedroom furniture sets are a blend of style, comfort, and
            functionality. When considering the location where you begin and
            conclude each day it becomes evident how crucial it is to have a space
            that genuinely embodies your personality.
          </p>
          <p className="opacity-75 mb-4">
            The best bedroom furniture sets seamlessly combine aesthetics with
            practicality. Whether you appreciate designs, with lines and
            minimalistic features or you have a preference for classic and
            intricate styles there's a wide range of furniture sets available that
            will resonate with your personal taste.
          </p>
          <p className="opacity-75 mb-14">
            The choice of materials is also significant. You can opt for hardwoods
            like oak and mahogany. Explore modern options such, as metal and
            glass. Moreover the finishing touches, whether its a polish matte
            appearance or distressed look can add a charm to the furniture set.
            Remember, the finest sets go beyond aesthetics; they create an
            ambiance that truly complements your space.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-2xl mb-4">What Comes in a Bedroom Set</h3>
          <p className="opacity-75 mb-4">
            When considering what comes in a bedroom set, it's important to keep
            in mind that these furniture sets are created with the intention of
            giving your bedroom an harmonious appearance.
          </p>
          <p className="opacity-75 mb-4">
            Typically a standard set will consist of a bed frame, which can range
            from a platform bed to an intricate canopy or sleigh bed. Additionally
            you'll usually find one or two nightstands that're perfect, for
            placing your bedtime reading materials, lamps and alarm clock.
          </p>
          <p className="opacity-75 mb-4">
            A dresser is another piece included in sets offering ample storage
            space for your clothing and accessories. Some sets may also include a
            matching mirror that can be either attached to the dresser or hung
            separately on the wall. For those who require storage options there
            might be pieces, like a chest of drawers or an armoire included in the
            set. You may also be interested in our furniture.
          </p>
          <p className="opacity-75 mb-14">
            The beauty of these sets lies in their design ensuring that each piece
            complements the others perfectly.So, when you ask what comes in a
            bedroom set, you're inquiring about a harmonious bedroom environment.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-2xl mb-4">How Much is a Bedroom Set?</h3>
          <p className="opacity-75 mb-4">
            Discussing how much is a bedroom set requires diving into various
            factors that influence the price. The material used is a factor to
            consider. Sets made of wood are known for their durability and
            timeless appeal.
          </p>
          <p className="opacity-75 mb-4">
            They often come with a higher price tag compared to sets made from
            engineered wood or metal. The brand and its reputation also play a
            role, in determining the cost. Known brands that are associated with
            quality and craftsmanship often come with a price.
          </p>
          <p className="opacity-75 mb-4">
            Additionally the design details such as patterns, hand carved elements
            or decorative inlays can contribute to the cost. The number of pieces
            included in the set is another consideration. A basic three piece set
            will naturally be more affordable, than a seven piece collection.
          </p>
        </div>
      </div><div className="flex justify-between px-14 py-[80px] mt-20 bg-gray-400">
        <div className="w-76">
          <h1 className="text-lg font-semibold">Free Delivery</h1>
          <p className="text-lg">
            Above 700k purchase within Abuja, Kano, Lagos & Enugu
          </p>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Free Installation</h1>
          <p className="text-lg">within Abuja, Kano, Lagos & Enugu</p>
        </div>
        <div>
          <h1 className="text-lg font-semibold">100% Guarantee</h1>
          <p className="text-lg">After sale customer service</p>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Secure Payment</h1>
          <p className="text-lg">Pay at store or transfer via bank</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Bedroom;
