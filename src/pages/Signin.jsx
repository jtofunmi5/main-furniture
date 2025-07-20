import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useUser } from "../userContext";

const Signin = () => {
  const [activeTab, setActiveTab] = useState("customer");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/")
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-8">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab("customer")}
            className={`px-4 py-2 font-semibold rounded-t-lg ${
              activeTab === "customer"
                ? "bg-[#054C73] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setActiveTab("vendor")}
            className={`px-4 py-2 font-semibold rounded-t-lg ml-2 ${
              activeTab === "vendor"
                ? "bg-[#054C73] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Vendor
          </button>
        </div>

        {/* Customer Login */}
        {activeTab === "customer" && (
          <form>
            <h1 className="text-center mb-5 font-bold text-2xl text-[#054C73]">
              Customer Sign in
            </h1>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="********"
              />
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <button
              onClick={handleLogin}
              type="submit"
              className="w-full bg-[#054C73] text-white font-medium py-2 px-4 rounded hover:bg-[#033950]"
            >
              Sign in
            </button>

            <div className="text-center mt-4">
              <p className="text-sm">Don't have an account?</p>
              <Link to="/signup">
                <button className="mt-2 bg-[#054C73] text-white py-2 px-4 rounded hover:bg-[#033950]">
                  Create Account
                </button>
              </Link>
            </div>
          </form>
        )}

        {/* Vendor Login */}
        {activeTab === "vendor" && (
          <form>
            <h1 className="text-center mb-5 font-bold text-2xl text-[#054C73]">
              Vendor Sign in
            </h1>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Store Name
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g. Jumia Outlet"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Store ID / Phone
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="08012345678 or store-0021"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="vendor@example.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="********"
              />
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <Link to="/vendor-dashboard">
              <button
                type="submit"
                className="w-full bg-[#054C73] text-white font-medium py-2 px-4 rounded hover:bg-[#033950]"
              >
                Sign in as Vendor
              </button>
            </Link>

            <div className="text-center mt-4">
              <p className="text-sm">Not registered as a vendor?</p>
              <Link to="/vendor-signup">
                <button className="mt-2 bg-[#054C73] text-white py-2 px-4 rounded hover:bg-[#033950]">
                  Register Store
                </button>
              </Link>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Signin;
