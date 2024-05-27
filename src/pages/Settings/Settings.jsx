import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { MdEdit } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Settings = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar currentPage="settings" />

      <div className="flex flex-col py-2 px-8 absolute mt-[100px] w-full">
        <Link
          to="/profile"
          className="flex justify-between items-center border-2 border-black p-4"
        >
          <div className="flex gap-2 items-center">
            <div className="border-2 border-black rounded-[50%] p-2">
              <MdEdit size={20} />
            </div>
            <h2 className="text-lg">Edit Profile</h2>
          </div>
          <FaChevronRight />
        </Link>

        <div className="flex flex-col mt-4">
          <Link
            to="/profile"
            className="flex justify-between items-center border-2 border-black p-4"
          >
            <div className="flex items-center">
              <h2 className="text-lg">See Schedule</h2>
            </div>
            <FaChevronRight />
          </Link>

          <Link
            to="/profile"
            className="flex justify-between items-center border-2 border-black p-4"
          >
            <div className="flex items-center">
              <h2 className="text-lg">My Condos</h2>
            </div>
            <FaChevronRight />
          </Link>

          <Link
            to="/profile"
            className="flex justify-between items-center border-2 border-black p-4"
          >
            <div className="flex items-center">
              <h2 className="text-lg">Help</h2>
            </div>
            <FaChevronRight />
          </Link>

          <Link
            to="/profile"
            className="flex justify-between items-center border-2 border-black p-4"
          >
            <div className="flex items-center">
              <h2 className="text-lg">Privacy Policy</h2>
            </div>
            <FaChevronRight />
          </Link>
        </div>
        <button
          className="bg-black text-white p-3 w-full mt-4 font-bold"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Settings;
