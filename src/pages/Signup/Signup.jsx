import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Navbar currentPage="signup" />
      <div className="flex flex-col py-2 px-8 absolute mt-16">
        <h1 className="text-left font-bold text-lg">Sign Up</h1>
        <form action="submit" className="mt-2">
          <input
            type="text"
            className="border-2 border-black h-12 px-2 mb-2 w-full"
            placeholder="Name"
          />
          <input
            type="email"
            className="border-2 border-black h-12 px-2 mb-2 w-full"
            placeholder="Email"
          />
          <input
            className="border-2 border-black h-12 px-2 mb-2 w-full"
            type="password"
            id="pasword"
            name="pasword"
            placeholder="Password"
          />
          <button className="bg-black text-white p-3 w-full mt-2">Sign Up</button>
        </form>

        <Link to="/" className="text-center w-full mt-4">Sign In</Link>
      </div>
    </>
  );
};

export default Signup;
