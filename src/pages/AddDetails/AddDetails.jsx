import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddDetails = () => {
  const [openRight, setOpenRight] = useState(false);
  const [formData, setFormData] = useState({
    unitNumber: "",
    squareFootage: "",
  });

  const navigate = useNavigate();
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/condo-details", { state: { formData } });
  };

  return (
    <>
      <Navbar currentPage="add-details" />
      <div className="flex flex-col py-2 px-8 absolute mt-16 w-full">
      <h2 className="text-lg font-[600] mb-2">Condo Details</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          
          <div className="flex flex-col mb-4">
            <h2>Select Building:</h2>
            <button
              className="flex justify-between items-center w-full bg-input-bg border-grey-400 border-2 p-3 text-black"
              type="button"
              onClick={openDrawerRight}
            >
              Select your builidng <FaAngleDoubleLeft />
            </button>
          </div>

          <div className="flex flex-col mb-4">
            <label for="unit_number">Add Unit Number:</label>
            <input
              className="border-gray-300 border-2 h-12 px-2 bg-input-bg"
              type="text"
              id="unitNumber"
              name="unitNumber"
              placeholder="Enter your unit number"
              value={formData.unitNumber}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label for="squareFootage">Approximate Square Footage:</label>
            <input
              className="border-gray-300 border-2 h-12 px-2 bg-input-bg"
              type="text"
              id="squareFootage"
              name="squareFootage"
              placeholder="Enter square footage"
              value={formData.squareFootage}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="flex justify-center items-center w-full bg-button border-2 p-3 rounded-md text-white"
          >
            Next
          </button>
        </form>
      </div>

      {/* drawer */}
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>

      {/* drawer end */}

      <Footer />
    </>
  );
};

export default AddDetails;
