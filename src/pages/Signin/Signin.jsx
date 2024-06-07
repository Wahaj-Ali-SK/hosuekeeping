import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/icons/google.svg";
import fb from "../../assets/icons/facebook.svg";
import logo from '../../assets/icons/logo.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loginUser, userDetails } from "../../Store/UserSlicer";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let userCredentails={
      identifier, password
    };
    dispatch(loginUser(userCredentails)).then((result)=> {
      if(result.payload){
        setIdentifier('');
        setPassword('');
        navigate('/');
        dispatch(userDetails());
      }
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col py-2 px-8">
      <img src={logo} alt="App logo" className="w-[90px] self-center" />
      <h1 className="text-center text-2xl font-[600] mb-2">
        Sign In To Manage Your Tasks
      </h1>
      <div className="flex flex-col items-start">
        <form className="flex flex-col w-full" onSubmit={handleLogin}>
          <div className="flex flex-col mb-4">
            <label for="email">Email:</label>
            <input
              className="border-gray-300 border-2 h-12 px-2 bg-input-bg"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password">Password:</label>
            <div className="flex border-gray-300 border-2 items-center justify-between bg-input-bg">
              <input
                className="h-12 w-full bg-input-bg px-2"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <FaEyeSlash onClick={togglePasswordVisibility} className="absolute right-12" />
              ) : (
                <FaEye onClick={togglePasswordVisibility} className="absolute right-12" />
              )}
            </div>
          </div>

          <p className="text-right mb-2 font-[600]">Forgot Password?</p>

          <button className="bg-button text-white p-3 rounded-md" type="submit">Log In</button>


        </form>

        <div class="flex items-center justify-center w-full">
          <div class="border-b border-gray-500 w-full mr-4"></div>
          <p class="text-center my-2">OR</p>
          <div class="border-b border-gray-500 w-full ml-4"></div>
        </div>

        <div className="flex flex-col w-full gap-5">
          <button className="flex bg-white text-zinc-500 p-1 items-center justify-center gap-4 border-slate-300 border-2 text-lg font-[600]">
            <img src={google} alt="google" className="w-[35px]" />
            Continue with Google
          </button>
          <button className="flex bg-white text-zinc-500	 p-1 items-center justify-center gap-4 border-slate-300 border-2 text-lg font-[600]">
            <img src={fb} alt="google" className="w-[35px]" />
            Continue with Facebook
          </button>
        </div>

        <span className="text-center w-full mt-4 font-[400] text-gray-500">
          Haven't signed up yet? <Link to="/signup" className="text-blue-500 font-[600]">Create an account</Link>
        </span>
      </div>
    </div>
  );
};

export default Signin;
