import React from 'react'
import Herobg from "../assets/Mask Group.png"
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Signup = () => {
  return ( 
    // min-h-screen ensures the background covers the whole page
    // bg-[#F2F5FF] matches your other pages
    <section className="min-h-screen bg-[#F2F5FF] flex flex-col">
      <Navbar />

      {/* pt-32: This adds the space you need below the fixed Navbar.
        pb-10: Adds space at the bottom so the card doesn't touch the edge.
        px-4: Ensures the card doesn't touch the screen edges on small phones.
      */}
      <div className="pt-32 pb-10 px-4 flex-grow flex items-center justify-center">
        
        <form className="w-full max-w-md bg-white shadow-xl px-6 py-10 md:px-10 border border-gray-100 rounded-2xl">
          <h1 className='text-center mb-8 font-bold text-3xl text-[#054C73]'>Sign up</h1>
          
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
              Your Full Name
            </label>
            <input 
              type="text" 
              id="name" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#054C73] focus:border-[#054C73] block w-full p-2.5"
              placeholder="Jtom Luxury" required 
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <input 
              type="email" 
              id="email" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#054C73] focus:border-[#054C73] block w-full p-2.5"
              placeholder="name@gmail.com" required 
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" name="password" className="block mb-2 text-sm font-medium text-gray-900">
              Your password
            </label>
            <input
              type="password"
              id="password" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#054C73] focus:border-[#054C73] block w-full p-2.5"
              required 
            />
          </div>

          <div className="mb-5">
            <label htmlFor="confirm-password" name="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#054C73] focus:border-[#054C73] block w-full p-2.5"
              required 
            />
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input 
                id="remember" 
                type="checkbox" 
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required 
              />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-600">
              I agree to the Terms and Conditions
            </label>
          </div>

          <Link to="/"> 
            <button className="text-white bg-[#054C73] hover:bg-[#043d5c] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full px-5 py-3 text-center transition-all shadow-md active:scale-95">
              CREATE ACCOUNT
            </button>
          </Link>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? <Link to="/signin" className="text-[#054C73] font-bold hover:underline">Sign in</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Signup;