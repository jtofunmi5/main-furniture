import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Signin = () => {
  const [activeTab, setActiveTab] = useState("customer");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real MERN app, you'd call your API here
    navigate("/");
  };

  return (
    <section className="min-h-screen bg-[#F2F5FF] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <Navbar />

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#054C73] rounded-full blur-3xl"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[#054C73] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 z-10 mt-20">
        {/* Tabs - Modern Pill Style */}
        <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
          <button
            onClick={() => setActiveTab("customer")}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
              activeTab === "customer"
                ? "bg-[#054C73] text-white shadow-md"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Customer
          </button>
          <button
            onClick={() => setActiveTab("vendor")}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
              activeTab === "vendor"
                ? "bg-[#054C73] text-white shadow-md"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Vendor
          </button>
        </div>

        {/* Customer Login */}
        {activeTab === "customer" && (
          <form onSubmit={handleLogin} className="animate-fadeIn">
            <h1 className="text-center mb-6 font-bold text-2xl text-[#054C73]">
              Welcome Back
            </h1>

            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#054C73]/20 focus:border-[#054C73] transition-all"
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#054C73]/20 focus:border-[#054C73] transition-all"
                placeholder="********"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-customer"
                  className="h-4 w-4 text-[#054C73] border-gray-300 rounded focus:ring-[#054C73]"
                />
                <label htmlFor="remember-customer" className="ml-2 block text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <Link to="#" className="text-sm text-[#054C73] hover:underline">Forgot password?</Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#054C73] text-white font-bold py-3 rounded-xl hover:bg-[#033950] shadow-lg active:scale-[0.98] transition-all"
            >
              SIGN IN
            </button>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">Don't have an account?</p>
              <Link to="/signup" className="text-[#054C73] font-bold hover:underline">
                Create a Free Account
              </Link>
            </div>
          </form>
        )}

        {/* Vendor Login */}
        {activeTab === "vendor" && (
          <form className="animate-fadeIn">
            <h1 className="text-center mb-6 font-bold text-2xl text-[#054C73]">
              Vendor Portal
            </h1>

            <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Store Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#054C73]/20 focus:border-[#054C73] transition-all"
                    placeholder="e.g. Jtom Luxury Outlet"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#054C73]/20 focus:border-[#054C73] transition-all"
                    placeholder="vendor@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#054C73]/20 focus:border-[#054C73] transition-all"
                    placeholder="********"
                  />
                </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-[#054C73] text-white font-bold py-3 rounded-xl hover:bg-[#033950] shadow-lg active:scale-[0.98] transition-all"
            >
              LOG IN TO DASHBOARD
            </button>

            <div className="text-center mt-6 border-t pt-4">
              <p className="text-sm text-gray-500 italic">Interested in selling with us?</p>
              <Link to="/vendor-signup" className="text-[#054C73] font-bold hover:underline">
                Register Your Store
              </Link>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Signin;