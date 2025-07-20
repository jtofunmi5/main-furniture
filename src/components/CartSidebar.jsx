import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import PRODUCTS from '../data/product'; 
import { Link } from 'react-router-dom';

const CartSidebar = () => {
  const {
    cartItems,
    subFromCart,
    addToCart,
    removeFromCart,
    totalAmount,
    isCartOpen,
    setIsCartOpen,
  } = useContext(CartContext);

  const handleClose = () => setIsCartOpen(false);

  return (
    <>
      
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
      />

      
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 flex flex-col transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={handleClose} className="text-xl font-bold">×</button>
        </div>

        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {Object.keys(cartItems).length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            Object.entries(cartItems).map(([id, quantity]) => {
              const product = PRODUCTS.find(p => String(p.id) === String(id));
              if (!product) return null;

              const subtotal = product.price * quantity;

              return (
                <div
                  key={id}
                  className="border p-3 rounded shadow-sm bg-gray-50"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  <h3 className="font-semibold text-sm">{product.name}</h3>
                  <p className="text-sm text-gray-600">
                    Unit Price: ₦{product.price.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-700 font-semibold">
                    Subtotal: ₦{subtotal.toLocaleString()}
                  </p>

                  
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => subFromCart(id)}
                      className="px-3 py-1 text-lg bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="font-medium">{quantity}</span>
                    <button
                      onClick={() => addToCart(id)}
                      className="px-3 py-1 text-lg bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(id)}
                      className="ml-auto text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="space-y-3 p-4 border-t sticky bottom-0 bg-white shadow-inner">
          <div className="font-bold mb-2">
            Total: ₦{totalAmount().toLocaleString()}
          </div>
          <div className='space-y-3 flex flex-col'>
           <Link to="/checkout" onClick={handleClose}>
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Checkout
          </button>
          </Link>
          <Link to="/cart"onClick={handleClose} >
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            View Cart
          </button>
          </Link>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
