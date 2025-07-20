import React, { useContext } from 'react'; 
import { CartContext } from '../components/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import PRODUCTS from '../data/product';

const Cart = () => {
  const {
    cartItems,
    addToCart,
    subFromCart,
    removeFromCart,
    totalAmount,
  } = useContext(CartContext);

  const items = Object.entries(cartItems).filter(([_, qty]) => qty > 0);

  return (
    <div>
      <Navbar />

      <section className="px-4 md:px-10 py-10 min-h-screen">
        <h1 className="mb-8 font-semibold text-2xl">YOUR CART</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center mt-40 space-y-8">
            <span className="text-gray-600 text-lg">You have no items in your cart.</span>
            <Link to="/gallery">
              <button className="text-white bg-[#054C73] hover:bg-[#054c7391] font-medium rounded-lg text-sm px-10 py-2.5">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6 max-w-5xl mx-auto">
            {items.map(([id, quantity]) => {
              const product = PRODUCTS.find((p) => String(p.id) === String(id));
              if (!product) return null;

              return (
                <div key={id} className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-cover rounded"
                  />
                  <div className="flex-grow w-full">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      ₦{product.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => subFromCart(id)} className="px-2 py-1 bg-gray-200 rounded">
                        -
                      </button>
                      <span>{quantity}</span>
                      <button onClick={() => addToCart(id)} className="px-2 py-1 bg-gray-200 rounded">
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(id)}
                        className="ml-auto text-red-500 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="font-bold text-right">
                    ₦{(product.price * quantity).toLocaleString()}
                  </div>
                </div>
              );
            })}

            <div className="flex justify-between items-center border-t pt-6 mt-8">
              <h3 className="text-xl font-bold">Total</h3>
              <p className="text-2xl font-semibold text-green-700">
                ₦{totalAmount().toLocaleString()}
              </p>
            </div>

            <div className="text-right">
              <Link to="/checkout">
                <button className="mt-4 px-6 py-3 bg-blue-700 text-white rounded hover:bg-blue-800">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Cart;
