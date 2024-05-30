import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
import Footer from "../../components/Footer/Footer";
import { Checkbox, Switch } from "@material-tailwind/react";

const AddTask = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const [endDate, setEndDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const [monday, setMonday] = useState(true);
  const [tuesday, setTuesday] = useState(true);
  const [wednesday, setWednesday] = useState(true);
  const [thursday, setThursday] = useState(true);
  const [friday, setFriday] = useState(true);
  const [saturday, setSaturday] = useState(true);
  const [sunday, setSunday] = useState(true);

  const handleToggleChange = (state, setState, label) => {
    setState(!state);
    console.log(state, label, "state");
  };

  return (
    <>
      <Navbar currentPage="add-task"/>
      <div className="flex flex-col py-2 px-8 absolute mt-16 w-full">
        <h2 className="font-bold text-2xl">Add Task</h2>

        <div className="flex flex-col mt-4">
          <select className="border-gray-500 rounded-md border-2 p-4" name="cars" id="cars">
            <option disabled value="default">
              Select a task
            </option>
            <option value="saab">Task 1</option>
            <option value="mercedes">Task 2</option>
            <option value="audi">Task 3</option>
          </select>
        </div>

        <div className="flex flex-col justify-between mt-5">
          <h3 className="font-bold text-lg">Select Days:</h3>
          <div
            className="flex justify-between items-center border-2 border-gray-500 p-4 rounded-t-md bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Monday</p>
            </div>
            <Switch checked={!monday} onChange={() => handleToggleChange(monday, setMonday, "monday")} />
          </div>

          <div
            className="flex justify-between items-center border-2 border-gray-500 p-4  bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Tuesday</p>
            </div>
            <Switch checked={!tuesday} onChange={() => handleToggleChange(tuesday, setTuesday, "tuesday")} />
          </div>

          <div
            className="flex justify-between items-center border-2 border-gray-500 p-4  bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Wednesday</p>
            </div>
            <Switch checked={!wednesday} onChange={() => handleToggleChange(wednesday, setWednesday, "wednesday")} />
          </div>

          <div
            className="flex justify-between items-center border-2 border-gray-500 p-4  bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Thursday</p>
            </div>
            <Switch checked={!thursday} onChange={() => handleToggleChange(thursday, setThursday, "thursday")} />
          </div>

          <div
            className="flex justify-between items-center border-2 border-gray-500 p-4  bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Friday</p>
            </div>
            <Switch checked={!friday} onChange={() => handleToggleChange(friday, setFriday, "friday")} />
          </div>

          <div
            className="flex justify-between items-center border-2 border-gray-500 p-4  bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Saturday</p>
            </div>
            <Switch checked={!saturday} onChange={() => handleToggleChange(saturday, setSaturday, "saturday")} />
          </div>

          <div
            className="flex justify-between items-center border-2 border-gray-500 p-4 rounded-b-md bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Sunday</p>
            </div>
            <Switch checked={!sunday} onChange={() => handleToggleChange(sunday, setSunday, "sunday")} />
          </div>
        </div>

        <div className="mt-4 h-[200px]">
          <label className="font-bold" for="w3review">
            Additional Notes:
          </label>

          <textarea
            className="border-gray-500 border-2 rounded-md p-2 w-full"
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

export default AddTask;
