import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PRODUCTS from '../data/product';
import { CartContext } from '../components/CartContext';
import { FaShippingFast, FaTools, FaShieldAlt, FaLock } from 'react-icons/fa';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = PRODUCTS.find(item => String(item.id) === String(id));
  const [tab, setTab] = useState("description");
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [showStickyBar, setShowStickyBar] = useState(false);

  const relatedProducts = PRODUCTS.filter(
    (p) =>
      String(p.id) !== String(product?.id) &&
      (
        p.categories?.some((cat) => product.categories?.includes(cat)) ||
        p.tags?.some((tag) => product.tags?.includes(tag))
      )
  ).slice(0, 4);

  useEffect(() => {
    if (!product) return;

    const stored = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    const updated = [product.id, ...stored.filter((pid) => pid !== product.id)].slice(0, 3);
    localStorage.setItem("recentlyViewed", JSON.stringify(updated));
    setRecentlyViewed(updated.filter((pid) => pid !== product.id));
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!product) {
    return <div className="p-4">Product not found.</div>;
  }

  return (
    <>
      <div className="p-20 max-w-8xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[420px] object-cover rounded-xl shadow-lg mb-4"
          />
          <div className="flex space-x-2">
            <img src={product.image} alt="thumb" className="w-24 h-24 object-cover rounded-md" />
            <img src={product.image} alt="thumb" className="w-24 h-24 object-cover rounded-md" />
          </div>
        </div>

        <div className="space-y-4 flex-grow">
          <p className="text-sm text-gray-400">Home &gt; BEDROOM &gt; {product.name}</p>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-700 text-lg">{product.description}</p>

          <p className="text-2xl font-semibold text-green-700">
            ₦{product.price.toLocaleString()}
          </p>

          <a
            href={`https://wa.me/+2349018922313?text=I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white text-center py-3 rounded-lg font-medium hover:bg-green-600"
          >
            ORDER VIA WHATSAPP
          </a>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <FaShippingFast className="text-green-600" />
              <span>Free Delivery<br /><small>Above ₦700k in 4 cities</small></span>
            </div>
            <div className="flex items-center space-x-2">
              <FaTools className="text-green-600" />
              <span>Free Installation<br /><small>Abuja, Kano, Lagos & Enugu</small></span>
            </div>
            <div className="flex items-center space-x-2">
              <FaShieldAlt className="text-green-600" />
              <span>100% Guarantee<br /><small>After-sale support</small></span>
            </div>
            <div className="flex items-center space-x-2">
              <FaLock className="text-green-600" />
              <span>Secure Payment<br /><small>Store or Bank Transfer</small></span>
            </div>
          </div>

          <button
            onClick={() => addToCart(product.id)}
            className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800"
          >
            Add to Cart
          </button>
        </div>
      </div>

     
      <div className="flex gap-4 border-b mb-6 mt-24 justify-center">
        <button
          onClick={() => setTab("description")}
          className={`pb-2 px-4 font-medium ${tab === "description" ? "border-b-2 border-green-600 text-green-700" : "text-gray-500"}`}
        >
          Description
        </button>
        <button
          onClick={() => setTab("delivery")}
          className={`pb-2 px-4 font-medium ${tab === "delivery" ? "border-b-2 border-green-600 text-green-700" : "text-gray-500"}`}
        >
          Delivery & Installation
        </button>
      </div>

      <div className="text-gray-800 text-sm px-10 py-3 border-b-2">
        {tab === "description" && (
          <p className="leading-relaxed">{product.description}</p>
        )}
        {tab === "delivery" && (
          <ul className="list-disc ml-6 space-y-2">
            {product["delivery&Installation"]?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-8">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg overflow-hidden shadow hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                  <p className="text-green-600 font-bold text-sm mb-2">
                    ₦{item.price.toLocaleString()}
                  </p>
                  <Link
                    to={`/product/${item.id}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      
      {recentlyViewed.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Recently Viewed</h2>
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
              {recentlyViewed.map((rid) => {
                const item = PRODUCTS.find((p) => String(p.id) === String(rid));
                if (!item) return null;
                return (
                  <div
                    key={item.id}
                    className="border rounded-lg overflow-hidden shadow hover:shadow-md transition"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                      <p className="text-green-600 font-bold text-sm mb-2">
                        ₦{item.price.toLocaleString()}
                      </p>
                      <Link
                        to={`/product/${item.id}`}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

   
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md py-4 px-6 flex justify-between items-center animate-fadeIn z-50">
          <div className="text-sm text-gray-700">
            <p className="font-semibold">{product.name}</p>
            <p className="text-green-600 font-bold">₦{product.price.toLocaleString()}</p>
          </div>
          <button
            onClick={() => addToCart(product.id)}
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            Add to Cart
          </button>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
