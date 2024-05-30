import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = ({ currentPage }) => {
  return (
    <>
      <div className="grid grid-cols-5 border-b-2 border-black py-4 px-2 fixed w-full z-50 bg-button text-white">
        <div className="self-center">
          {currentPage === "signup" && (
            <Link to="/login" className="flex items-center">
              <IoMdArrowRoundBack size={25} color="#ffe4c4" />
            </Link>
          )}
          {currentPage === "settings" && (
            <Link to="/signup" className="flex items-center">
              <IoMdArrowRoundBack size={25} color="#ffe4c4" />
            </Link>
          )}
          {(currentPage === "add-details" || currentPage === "today's-tasks") && (
            <Link to="/" className="flex items-center">
              <IoMdArrowRoundBack size={25} color="#ffe4c4" />
            </Link>
          )}
          {currentPage === "condo-details" && (
            <Link to="/add-details" className="flex items-center">
              <IoMdArrowRoundBack size={25} color="#ffe4c4" />
            </Link>
          )}
        </div>
        <h1 className="justify-self-center col-span-3	text-2xl font-bold">
          Condocare
        </h1>
        <div className="self-center flex justify-end">
          {(currentPage === "home" || currentPage === "add-task") && (
            <Link to="/settings" className="flex items-center">
              <IoIosSettings size={25} color="#ffe4c4" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
