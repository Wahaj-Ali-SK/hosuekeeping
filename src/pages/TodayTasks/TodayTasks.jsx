import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {
  Checkbox,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from '@material-tailwind/react'
import Footer from '../../components/Footer/Footer'
import { useSelector } from 'react-redux';

const getCurrentDayIndex = () => {
  const currentDate = new Date();
  return currentDate.getDay();
};

const TodayTasks = () => {

  const [open, setOpen] = React.useState(false);
  const condoTasks = useSelector(state => state.user.userTasks);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const currentDayIndex = getCurrentDayIndex();
    console.log(currentDayIndex, 'current date');

    const filtered = condoTasks.filter(task => {
      const { schedule } = task;

      if (schedule) {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = daysOfWeek[currentDayIndex];

        if (schedule[currentDay] !== undefined) {
          return schedule[currentDay];
        }
      }

      return false;
    });

    setFilteredTasks(filtered);
  }, [condoTasks]);

  return (
    <>
      <Navbar currentPage="today's-tasks" />
      <div className="flex flex-col py-2 px-8 absolute my-16 w-full inset-0 overflow-auto">
        <h2 className='text-2xl font-[600] text-center my-2'>Scheduled Tasks</h2>

        <div className='flex flex-col mt-2'>
          <h3 className='text-xl font-[600]'>Today's Tasks</h3>

          {filteredTasks.map((task, index) => (
            <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
              <div className='flex flex-col'>
                <h4 className='text-lg'>{task.name}</h4>
                <button onClick={handleOpen}><p className='underline text-lg'>See Notes</p></button>
              </div>
              <Checkbox checked={task.isCompleted} />

              <Dialog Dialog open={open} handler={handleOpen} >
                <DialogHeader>Notes for the task</DialogHeader>
                <DialogBody>
                  {task.notes}
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                </DialogFooter>
              </Dialog>
            </div>
          ))}
        </div>

        <div className='flex flex-col mt-6'>
          <h3 className='text-xl font-[600]'>This Week's Plan</h3>
          <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Monday</h4>
            <p className='underline'>See Details</p>
          </div>
          <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Tuesday</h4>
            <p className='underline'>See Details</p>
          </div>
          <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Wednesday</h4>
            <p className='underline'>See Details</p>
          </div>
          <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Thursday</h4>
            <p className='underline'>See Details</p>
          </div>
          <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Friday</h4>
            <p className='underline'>See Details</p>
          </div>
          <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Saturday</h4>
            <p className='underline'>See Details</p>
          </div>
          <div className='flex mt-2 p-2 justify-between border-b-2 border-black'>
            <h4 className='text-lg'>Sunday</h4>
            <p className='underline'>See Details</p>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default TodayTasks