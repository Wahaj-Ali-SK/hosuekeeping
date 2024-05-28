import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Navbar currentPage="signup" />
      <div className="flex flex-col py-2 px-8 absolute mt-16">
        <h1 className="text-center font-bold text-lg">Sign Up</h1>
        <p className="text-center">Please enter the required information</p>
        <form action="submit" className="mt-2">
          <input
            type="text"
            className="border-gray-400 border-2 rounded-md bg-input-bg h-12 px-2 mb-2 w-full"
            placeholder="Name"
          />
          <input
            type="email"
            className="border-gray-400 border-2 rounded-md bg-input-bg h-12 px-2 mb-2 w-full"
            placeholder="Email"
          />
          <input
            className="border-gray-400 border-2 rounded-md bg-input-bg h-12 px-2 mb-2 w-full"
            type="password"
            id="pasword"
            name="pasword"
            placeholder="Password"
          />
          <button className="bg-blue-700 text-white p-3 rounded-md w-full mt-2">Sign Up</button>
        </form>

        <span className="text-center w-full mt-4 font-[400] text-gray-500">
          Already have an account? <Link to="/" className="text-blue-500 font-[600]">Sign In</Link>
        </span>
      </div>
    </>
  );
};

export default Signup;
