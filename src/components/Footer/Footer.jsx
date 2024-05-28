import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-around items-center fixed bottom-0 w-full bg-button z-50 px-2 py-4 border-t-2 border-black text-white">
      <Link to='/'><IoHomeSharp size={22}/></Link>
      <Link to="/add-task"><FaPlusCircle size={28}/></Link>
      <MdDateRange size={22}/>
    </div>
  );
};

export default Footer;
