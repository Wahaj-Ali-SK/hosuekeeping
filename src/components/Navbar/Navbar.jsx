import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = ({ currentPage }) => {
  return (
    <>
      <div className="grid grid-cols-5 border-b-2 border-black py-4 px-2 fixed w-full bg-white z-50">
        <div className="self-center">
          {currentPage === "signup" && (
            <Link to="/" className="flex items-center">
              <IoMdArrowRoundBack size={20} />
            </Link>
          )}
          {currentPage === "settings" && (
            <Link to="/signup" className="flex items-center">
              <IoMdArrowRoundBack size={20}/>
            </Link>
          )}
        </div>
        <h1 className="justify-self-center col-span-3	text-2xl font-bold">
          Condocare
        </h1>
      </div>
    </>
  );
};

export default Navbar;
