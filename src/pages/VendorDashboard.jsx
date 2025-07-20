import React, { useState } from "react";
import {
  Bell,
  Settings,
  ShoppingCart,
  Box,
  Home,
  LogOut,
  Plus,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";

const VendorDashboard = () => {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fundAmount, setFundAmount] = useState(0);

  const handleFund = () => {
    const config = {
      reference: new Date().getTime().toString(),
      email: "felix@example.com",
      amount: fundAmount * 100,
      publicKey: "pk_test_064d1ab7c7420892a19045c5b4caf8d26ed5c5ab",
    };

    const onSuccess = () => {
      setWalletBalance((prev) => prev + fundAmount);
      setIsModalOpen(false);
      setFundAmount(0);
      alert("Wallet funded successfully!");
    };

    const onClose = () => {
      alert("Transaction was canceled.");
    };

    const paystack = usePaystackPayment(config);
    paystack(onSuccess, onClose);
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#054C73] text-white flex flex-col">
        <div className="text-2xl font-bold p-6 border-b border-white/20">
          Vendor Portal
        </div>
        <nav className="flex-1 px-6 py-4 space-y-4">
          <a href="#" className="flex items-center gap-3 hover:text-gray-200">
            <Home size={18} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-gray-200">
            <Box size={18} /> Products
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-gray-200">
            <ShoppingCart size={18} /> Orders
          </a>
          <a href="#" className="flex items-center gap-3 hover:text-gray-200">
            <Settings size={18} /> Settings
          </a>
          <a
            href="/"
            className="flex items-center gap-3 mt-10 text-red-300 hover:text-red-100"
          >
            <LogOut size={18} /> Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto relative">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Welcome, Felix
          </h2>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell size={22} className="text-gray-700" />
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-blue-300"></div>
          </div>
        </div>

        {/* Wallet Section */}
        <div className="mb-6 flex items-center justify-between">
          <div className="bg-white p-4 rounded-xl shadow flex items-center gap-4">
            <Wallet className="text-[#054C73]" />
            <div>
              <p className="text-gray-500 text-sm">Wallet Balance</p>
              <p className="text-xl font-semibold text-[#054C73]">
                ₦{walletBalance.toLocaleString()}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Withdraw Fund
          </button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            { label: "Total Sales", value: "₦1,250,000" },
            { label: "New Orders", value: "34" },
            { label: "Products", value: "120" },
            { label: "Pending Shipments", value: "5" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow transform transition-transform hover:scale-105"
            >
              <h4 className="text-sm text-gray-500">{item.label}</h4>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        <Link to="/add-product">
          <button className="mb-3 flex justify-end items-center gap-2 bg-[#054C73] text-white px-4 py-2 rounded-lg hover:bg-[#043c5c]">
            <Plus size={18} /> Add Product
          </button>
        </Link>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
            <ul className="space-y-4">
              {["Order #4521", "Order #4520", "Order #4519"].map(
                (order, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {order}
                      </p>
                      <p className="text-xs text-gray-400">3 items • ₦21,000</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded">
                      Delivered
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Top Products */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">Top Products</h3>
            <ul className="space-y-4">
              {["Office Chair", "Dining Set", "Shoe Rack"].map(
                (product, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        {product}
                      </p>
                      <p className="text-xs text-gray-400">Sold 145 units</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
                      ₦45,000
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Store Status */}
        <div className="mt-6 bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Store Status</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700">
            <div>
              <p className="text-gray-500">Store Name</p>
              <p className="font-medium">FurniWorld</p>
            </div>
            <div>
              <p className="text-gray-500">Store ID</p>
              <p className="font-medium">VEN-4210</p>
            </div>
            <div>
              <p className="text-gray-500">Account Status</p>
              <p className="font-medium text-green-600">Active</p>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4">
                Enter Amount to Withdraw
              </h2>
              <input
                type="number"
                placeholder="e.g. 5000"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                value={fundAmount}
                onChange={(e) => setFundAmount(Number(e.target.value))}
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleFund}
                  disabled={!fundAmount || fundAmount < 100}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                >
                  Confirm & Send
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default VendorDashboard;
