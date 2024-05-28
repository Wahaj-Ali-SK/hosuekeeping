import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-around fixed bottom-0 w-full bg-button z-50 px-2 py-4 border-t-2 border-black text-[#ffe4c4]">
      <Link to='/'><IoHomeSharp size={20}/></Link>
      <Link to="/add-task"><FaPlusCircle size={20}/></Link>
      <MdDateRange size={20}/>
    </div>
  );
};

export default Footer;
