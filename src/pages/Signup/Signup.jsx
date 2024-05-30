import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

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
          
          <div className="flex border-gray-400 border-2 items-center justify-between bg-input-bg rounded-md mb-2">
            <input
              className="h-12 w-full bg-input-bg px-2 rounded-md"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            {showPassword ? (
              <FaEyeSlash
                onClick={togglePasswordVisibility}
                className="absolute right-12"
              />
            ) : (
              <FaEye
                onClick={togglePasswordVisibility}
                className="absolute right-12"
              />
            )}
          </div>

          <div className="flex border-gray-400 border-2 items-center justify-between bg-input-bg rounded-md">
            <input
              className="h-12 w-full bg-input-bg px-2 rounded-md"
              type={showConfirmPassword ? "text" : "password"}
              id="confirm_password"
              name="password"
              placeholder="Confirm Password"
            />
            {showConfirmPassword ? (
              <FaEyeSlash
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-12"
              />
            ) : (
              <FaEye
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-12"
              />
            )}
          </div>
          <button className="bg-button text-white p-3 rounded-md w-full mt-2">
            Sign Up
          </button>
        </form>

        <span className="text-center w-full mt-4 font-[400] text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-[600]">
            Sign In
          </Link>
        </span>
      </div>
    </>
  );
};

export default Signup;
