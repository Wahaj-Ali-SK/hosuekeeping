import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
import Footer from "../../components/Footer/Footer";

const AddTask = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const [endDate, setEndDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col py-2 px-8 absolute mt-16 w-full">
        <h2 className="font-bold text-xl">Add Task</h2>

        <div className="flex flex-col mt-4">
          <select className="border-black border-2 p-4" name="cars" id="cars">
            <option disabled value="default">
              Select a task
            </option>
            <option value="saab">Task 1</option>
            <option value="mercedes">Task 2</option>
            <option value="audi">Task 3</option>
          </select>
        </div>

        <div className="flex justify-between mt-5">
          <h3 className="font-bold">Scheduled Cleaning</h3>
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex justify-between my-4">
          <h3 className="font-bold">Start Time</h3>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            excludeTimes={[
              setHours(setMinutes(new Date(), 0), 17),
              setHours(setMinutes(new Date(), 30), 18),
              setHours(setMinutes(new Date(), 30), 19),
              setHours(setMinutes(new Date(), 30), 17),
            ]}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>

        <div className="flex justify-between my-4">
          <h3 className="font-bold">End Time</h3>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showTimeSelect
            excludeTimes={[
              setHours(setMinutes(new Date(), 0), 17),
              setHours(setMinutes(new Date(), 30), 18),
              setHours(setMinutes(new Date(), 30), 19),
              setHours(setMinutes(new Date(), 30), 17),
            ]}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>

        <div className="flex justify-between mt-5">
          <h3 className="font-bold">Repeat Scheduled</h3>
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <h3 className="font-bold">Task Tags:</h3>
          <div className="flex flex-wrap justify-between gap-2">
            <div class="text-xs inline-flex justify-center items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full w-[80px]">
              Cleaning
            </div>

            <div class=" text-xs inline-flex justify-center items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full w-[80px]">
              Personal
            </div>

            <div class=" text-xs inline-flex justify-center items-center font-bold leading-sm uppercase px-3 py-1 bg-orange-200 text-orange-700 rounded-full w-[80px]">
              Family
            </div>

            <div class=" text-xs inline-flex justify-center items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full w-[80px]">
              Social
            </div>

            <div class=" text-xs inline-flex justify-center items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border w-[80px]">
              Work
            </div>

            <div class=" text-xs inline-flex justify-center items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border w-[80px]">
              Health
            </div>

            <div class=" text-xs inline-flex justify-center items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border w-[80px]">
              Travel
            </div>

            <div class="text-xs inline-flex justify-center items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full w-[80px]">
              Special
            </div>
          </div>
        </div>

        <div className="mt-4 h-[200px]">
          <label className="font-bold" for="w3review">
            Additional Notes:
          </label>

          <textarea
            className="border-black border-2 p-2 w-full"
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
