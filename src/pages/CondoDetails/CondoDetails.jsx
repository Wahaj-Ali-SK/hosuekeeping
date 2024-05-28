import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { Checkbox } from "@material-tailwind/react";
import Footer from "../../components/Footer/Footer";

const CondoDetails = () => {
  const location = useLocation();
  const formData = location.state.formData;

  const { unitNumber, squareFootage } = formData;
  console.log(formData);

  const [bedrooms, setBedrooms] = useState(0);
  const [halfBathrooms, setHalfBathrooms] = useState(0);
  const [fulBathrooms, setFullBathrooms] = useState(0);
  const [occupants, setOccupants] = useState(0);
  const [balcony, setBalcony] = useState(true);
  const [pets, setPets] = useState(true);

  const handleBalconyChange = () => {
    setBalcony(!balcony);
    console.log(balcony, "balcony state");
  };

  const handlePetsChange = () => {
    setPets(!pets);
    console.log(pets, "pets state");
  };

  const handleInputChange = (e, setValue) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };

  const increment = (setValue) => () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decrement = (setValue) => () => {
    setValue((prevValue) => prevValue - 1);
  };

  return (
    <>
      <Navbar currentPage="condo-details" />
      <div className="flex flex-col py-2 px-8 absolute mt-16 w-full">
        <h2 className="text-lg font-[600]">Condo Details</h2>

        <div className="flex flex-col mt-2 h-full">
          <div className="flex justify-between items-center border-gray-400 border-2 border-b-0 rounded-t-md bg-input-bg p-2">
            <p>Number of Bedrooms</p>
            <div className="flex items-center">
              <button
                onClick={decrement(setBedrooms)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-md focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                className="w-16 px-3 py-1 text-center bg-gray-100 focus:outline-none"
                value={bedrooms}
                onChange={(e) => handleInputChange(e, setBedrooms)}
              />
              <button
                onClick={increment(setBedrooms)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-md focus:outline-none"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center border-gray-400 border-2 border-b-0  bg-input-bg p-2">
            <p>Number of Half Bathrooms</p>
            <div className="flex items-center">
              <button
                onClick={decrement(setHalfBathrooms)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-md focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                className="w-16 px-3 py-1 text-center bg-gray-100 focus:outline-none"
                value={halfBathrooms}
                onChange={(e) => handleInputChange(e, setHalfBathrooms)}
              />
              <button
                onClick={increment(setHalfBathrooms)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-md focus:outline-none"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center border-gray-400 border-2 border-b-0  bg-input-bg p-2">
            <p>Number of Full Bathrooms</p>
            <div className="flex items-center">
              <button
                onClick={decrement(setFullBathrooms)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-md focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                className="w-16 px-3 py-1 text-center bg-gray-100 focus:outline-none"
                value={fulBathrooms}
                onChange={(e) => handleInputChange(e, setFullBathrooms)}
              />
              <button
                onClick={increment(setFullBathrooms)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-md focus:outline-none"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center border-gray-400 border-2 border-b-0 bg-input-bg p-2">
            <p>Balcony</p>
            <Checkbox checked={!balcony} onChange={handleBalconyChange} />
          </div>

          <div className="flex justify-between items-center border-gray-400 border-2 border-b-0 bg-input-bg p-2">
            <p>Pets?</p>
            <Checkbox checked={!pets} onChange={handlePetsChange} />
          </div>

          <div className="flex justify-between items-center border-gray-400 border-2 border-b-0 bg-input-bg p-2">
            <p>Number of Occupants</p>
            <div className="flex items-center">
              <button
                onClick={decrement(setOccupants)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-md focus:outline-none"
              >
                -
              </button>
              <input
                type="text"
                className="w-16 px-3 py-1 text-center bg-gray-100 focus:outline-none"
                value={occupants}
                onChange={(e) => handleInputChange(e, setOccupants)}
              />
              <button
                onClick={increment(setOccupants)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-md focus:outline-none"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center border-gray-400 border-2 border-b-0  bg-input-bg p-2">
            <label for="buzzerCode">Buzzer Code:</label>
            <input
              className="border-gray-400 border-2 h-12 px-2 rounded-md bg-white"
              type="text"
              id="buzzerCode"
              name="buzzerCode"
              placeholder="Enter the code"
            />
          </div>

          <div className="flex justify-between items-center border-gray-400 border-2 rounded-b-md  bg-input-bg p-2">
            <label for="keyLocation">Key Location:</label>
            <input
              className="border-gray-400 border-2 h-12 px-2 rounded-md bg-white"
              type="text"
              id="keyLocation"
              name="keyLocation"
              placeholder="Enter the key location"
            />
          </div>
        </div>

        <div className="mt-4 h-[200px]">
          <label className="font-bold" for="w3review">
            Special Instructions:
          </label>

          <textarea
            className="border-gray-400 border-2 rounded-md p-2 w-full"
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
          ></textarea>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CondoDetails;
