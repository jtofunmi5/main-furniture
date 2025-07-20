import React, { createContext, useState } from 'react';
import PRODUCTS from '../data/product'; 

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    setIsCartOpen(true);
  };

  const subFromCart = (id) => {
    setCartItems((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  const removeFromCart = (id) => {
    const updated = { ...cartItems };
    delete updated[id];
    setCartItems(updated);
  };

  const totalAmount = () => {
    return Object.entries(cartItems).reduce((sum, [id, qty]) => {
      const product = PRODUCTS.find((p) => String(p.id) === String(id));
      return product ? sum + qty * product.price : sum;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        subFromCart,
        removeFromCart,
        totalAmount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
