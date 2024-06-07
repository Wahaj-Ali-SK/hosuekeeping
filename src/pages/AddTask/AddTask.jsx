import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
import Footer from "../../components/Footer/Footer";
import { Checkbox, Switch } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { getATask } from "../../apiroutes/apiroutes";
import axios from "axios";

const AddTask = () => {

  const [selectedTask, setSelectedTask] = useState("");
  const [selectedTaskSchedule, setSelectedTaskSchedule] = useState([]);

  const condoTasks = useSelector(state => state.user.userTasks);
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

  const handleTaskChange = async (event) => {
    console.log(event.target.value);
    setSelectedTask(event.target.value);

    try {
        const token = localStorage.getItem('jwt');
        console.log(token, 'jwt token')

        const headers = {
            "Authorization": `Bearer ${token}`,
        };
        console.log(headers, 'header with jwt');
        
        const response = await axios.get(`${getATask}/${event.target.value}?populate=*`, { headers });
        // Do something with response.data here
        // console.log(response.data);
        const {schedule} = response.data.data.attributes;
        console.log(schedule,'task schedule');
        setSelectedTaskSchedule(schedule);

        return schedule;
    } catch (error) {
        // Handle error
        console.error(error);
    }
};
console.log(selectedTaskSchedule);

  return (
    <>
      <Navbar currentPage="add-task" />
      <div className="flex flex-col py-2 px-8 absolute my-16 w-full inset-0 overflow-auto">
        <h2 className="font-bold text-2xl">Add Task</h2>

        <div className="flex flex-col mt-4">
          <select
            className="border-gray-300 border-2 p-4"
            name="cars"
            id="cars"
            
            value={selectedTask}
            onChange={handleTaskChange}>
            <option selected="selected">
              Select a task
            </option>
            {condoTasks.map((task, index) => (
              <option key={index} value={task.id}>{task.name}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col justify-between mt-5 gap-1">
          <h3 className="font-bold text-lg">Select Days:</h3>
          <div
            className="flex justify-between items-center border-2 border-gray-300 p-4 bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Monday</p>
            </div>
            <Switch checked={!monday} onChange={() => handleToggleChange(monday, setMonday, "monday")} />
          </div>

          <div
            className="flex justify-between items-center border-2 border-gray-300 p-4 bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Tuesday</p>
            </div>
            <Switch checked={!tuesday} onChange={() => handleToggleChange(tuesday, setTuesday, "tuesday")} />
          </div>

          <div
            className="flex justify-between items-center border-2 border-gray-300 p-4 bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Wednesday</p>
            </div>
            <Switch checked={!wednesday} onChange={() => handleToggleChange(wednesday, setWednesday, "wednesday")} />
          </div>

          <div
            className="flex justify-between items-center border-2 border-gray-300 p-4 bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Thursday</p>
            </div>
            <Switch checked={!thursday} onChange={() => handleToggleChange(thursday, setThursday, "thursday")} />
          </div>

          <div
            className="flex justify-between items-center border-2 border-gray-300 p-4 bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Friday</p>
            </div>
            <Switch checked={!friday} onChange={() => handleToggleChange(friday, setFriday, "friday")} />
          </div>

          <div
            className="flex justify-between items-center border-2 border-gray-300 p-4 bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Saturday</p>
            </div>
            <Switch checked={!saturday} onChange={() => handleToggleChange(saturday, setSaturday, "saturday")} />
          </div>

          <div
            className="flex justify-between items-center border-2 border-gray-300 p-4 bg-input-bg"
          >
            <div className="flex items-center">
              <p className="text-lg">Sunday</p>
            </div>
            <Switch checked={!sunday} onChange={() => handleToggleChange(sunday, setSunday, "sunday")} />
          </div>
        </div>

        <div className="mt-4">
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

        <div className="flex justify-center items-center mt-2">
          <button className="bg-button text-white w-full p-4">Add Task</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddTask;
