import React from "react";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";

const Signin = () => {
  return (
    <div className="py-2 px-8">
      <h1 className="text-center text-3xl font-bold my-8">
        Sign In To Manage Your Tasks
      </h1>
      <div className="flex flex-col items-start">
        <form className="flex flex-col w-full" action="/action_page.php">
          <div className="flex flex-col mb-4">
            <label for="fname">Email:</label>
            <input
              className="border-2 border-black h-12 px-2"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label for="lname">Password:</label>
            <input
              className="border-2 border-black h-12 px-2"
              type="password"
              id="pasword"
              name="pasword"
              placeholder="Enter your password"
            />
          </div>

          <button className="bg-black text-white p-3">Log In</button>

          <p className="text-center my-2">Forgot Password</p>
        </form>

        <div class="flex items-center justify-center w-full">
          <div class="border-b border-gray-500 w-full mr-4"></div>
          <p class="text-center">OR</p>
          <div class="border-b border-gray-500 w-full ml-4"></div>
        </div>

        <div className="flex flex-col w-full gap-5">
          <button className="bg-black text-white p-3">Google</button>
          <button className="bg-black text-white p-3">Facebook</button>
        </div>

        <Link to="/signup" className="text-center w-full mt-4">Create an account</Link>
      </div>
    </div>
  );
};

export default Signin;
