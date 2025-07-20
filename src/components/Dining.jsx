import React from 'react'
import diningProducts from '../catalog/dining';
import ProductCard from './ProductCard';

const Dining = () => {
  return (
    <>
      <div
        className=" mb-10 flex flex-col h-[300px] bg-cover bg-center  text-center justify-center gap-8"
        style={{ backgroundImage: "url('/images/livingRoom/sofa.jpeg')" }}
      >
        <h1 className="font-bold text-6xl text-white">Dining</h1>
       
        {/* <div>
          <img src="/images/livingRoom/still-sofa.webp"  alt="stillPic"/>
        </div> */}
      </div>
      <div className="px-14 mb-7">
        <a>Home</a> / <a className="opacity-70">Dining sets</a>
      </div>
      <div className="grid gap-6 px-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {diningProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <div className="p-14" >
      <div className="mb-8">
        <h1 className="font-semibold text-3xl mb-8 " >Living Room and Sofa Sets</h1>
        <p className="opacity-70 ">
          The living room is the heart of the home, and the sofa set is often
          the centerpiece of the living room. A well-chosen sofa set can provide
          a comfortable and stylish place to relax, entertain guests, and enjoy
          family time.
        </p>
      </div>
      <div>
        <h1 className="font-semibold text-3xl mb-8">Types of Sofa Sets</h1>
        <p className="opacity-70 mb-8">
          There are many different types of sofa sets available, so it's
          important to choose one that is the right size, style, and function
          for your needs. Here are a few of the most popular types of sofa sets:
        </p>
        <ul className="opacity-70 list-disc mb-3">
          <li>
            <b>Sectional sofas:</b> Sectional sofas are a great option for large
            families or people who entertain frequently. They can be configured
            in a variety of ways to fit your space and needs.
          </li>
          <li>
          <b>  Traditional sofa sets:</b> Traditional sofa sets typically include a
            sofa and loveseat. They are a good choice for people who prefer a
            classic look.
          </li>
          <li>
           <b> Modern sofa sets:</b> Modern sofa sets have clean lines and a minimalist
            aesthetic. They are a good choice for people who want a contemporary
            look in their living room.
          </li>
          <li>
           <b> Reclining sofa sets:</b> Reclining sofa sets are a good choice for
            people who want a comfortable place to relax and watch TV or read a
            book.
          </li>
        </ul>
      </div>
      <div>
        <img src="/images/livingRoom/sofa.jpg" alt="sofa" />
        <h1 className="font-semibold text-2xl mb-5">Choosing the Right Sofa Set</h1>
        <p className="opacity-70 mb-8">When choosing a sofa set, there are a few things to keep in mind:</p>
        <ul className="opacity-70 list-disc">
          <li>
           <b> Size:</b> Make sure to measure your living room space before you
            purchase a sofa set. You want to make sure that the sofa set will
            fit comfortably in the space and leave enough room for other
            furniture and traffic flow.
          </li>
          <li>
          <b>  Style:</b> Choose a sofa set that complements the style of your living
            room. If you have a traditional living room, you may want to choose
            a traditional sofa set. If you have a modern living room, you may
            want to choose a modern sofa set.
          </li>
          <li>
           <b> Function:</b> Consider how you will use the sofa set. If you entertain
            frequently, you may want to choose a sofa set that is durable and
            easy to clean. If you have young children or pets, you may want to
            choose a sofa set that is made of a durable fabric.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-2xl mb-6 mt-5">Popular Sofa Set Materials</h2>
        <p className="opacity-70 mb-6">Sofa sets are typically made from a variety of materials, including:</p>
        <ul className="opacity-70 list-disc ">
          <li > <b>Fabric:</b> Fabric sofa sets are the most popular type of sofa set. They are available in a wide variety of colors and styles.</li>
          <li> <b>Leather:</b> Leather sofa sets are durable and easy to clean. They are a good choice for people with young children or pets.</li>
          <li><b>Microfiber:</b> Microfiber sofa sets are also durable and easy to clean. They are a good choice for people who want a sofa set that is resistant to stains.</li>
        </ul>
      </div>
      <div>
        <h1 className="font-semibold text-2xl mb-6 mt-5">Caring for Your Sofa Set</h1>
        <p className="opacity-70 mb-6">To keep your sofa set looking its best, it's important to care for it properly. Here are a few tips:</p>
      <ul className="opacity-70 list-disc ">
        <li>Vacuum your sofa set regularly to remove dirt and dust.</li>
        <li>Spot clean spills immediately.</li>
        <li>Avoid placing hot or cold items directly on your sofa set.</li>
      <li>Have your sofa set professionally cleaned every 1-2 years.</li>
      </ul>
      <p className="opacity-70 mt-5">By following these tips, you can choose the right sofa set for your needs and keep it looking its best for years to come.</p>
      </div>
      </div>
      <div className="flex justify-between px-14 py-[80px] mt-20 bg-gray-400">
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
    </>
  );
};


export default Dining;