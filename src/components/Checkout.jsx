import React, { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import PRODUCTS from "../data/product";
import { PaystackButton } from "react-paystack";

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    city: "",
  });

  const publicKey = "pk_test_064d1ab7c7420892a19045c5b4caf8d26ed5c5ab";
  const amount = totalAmount() * 100;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSuccess = (reference) => {
    alert("Payment successful! Reference: " + reference.reference);
  };

  const handleClose = () => {
    alert("Payment window closed.");
  };

  const componentProps = {
    email: formData.email,
    amount,
    metadata: {
      fullName: formData.fullName,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
    },
    publicKey,
    text: "Pay with Paystack",
    onSuccess: handleSuccess,
    onClose: handleClose,
  };

  const selectedProducts = Object.entries(cartItems)
    .map(([id, quantity]) => {
      const product = PRODUCTS.find((p) => String(p.id) === String(id));
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-12 gap-8">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="md:col-span-8 space-y-6 bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>

        <input
          type="text"
          name="fullName"
          required
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 p-2 rounded"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 p-2 rounded"
        />

        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 p-2 rounded"
        />

        <textarea
          name="address"
          required
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 p-2 rounded"
        />

        <input
          type="text"
          name="city"
          required
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="w-full mt-1 border border-gray-300 p-2 rounded"
        />

        <PaystackButton
          {...componentProps}
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
        />
      </form>

      <div className="md:col-span-4 bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Your Items</h2>
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {selectedProducts.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h4 className="text-sm font-medium">{product.name}</h4>
                <p className="text-sm text-gray-600">
                  ₦{product.price.toLocaleString()} × {product.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 font-semibold text-lg">
          Total: ₦{totalAmount().toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
