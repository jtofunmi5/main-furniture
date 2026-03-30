import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import LivingRoomPage from "./pages/LivingRoomPage";
import BedroomPage from "./pages/BedroomPage";
import KitchenPage from "./pages/KitchenPage";
import DiningPage from "./pages/DiningPage";
import { CartProvider } from "./components/CartContext";
import Details from "./pages/Details";
import Carts from "./pages/Carts";
import Checkouts from "./pages/Checkouts";
import CartSidebar from "./components/CartSidebar";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import VendorDashboard from "./pages/VendorDashboard";
import VendorProducts from "./pages/VendorProduct";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <CartProvider>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/living" element={<LivingRoomPage />} />
        <Route path="/bedroom" element={<BedroomPage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/dining" element={<DiningPage />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/checkout" element={<Checkouts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/add-product" element={<VendorProducts />} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
      <CartSidebar />
    </CartProvider>
  );
}

export default App;
