import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Settings from "./pages/Settings/Settings";
import AddTask from "./pages/AddTask/AddTask";
import AddDetails from "./pages/AddDetails/AddDetails";
import CondoDetails from "./pages/CondoDetails/CondoDetails";
import Home from "./pages/Home/Home";
import TodayTasks from "./pages/TodayTasks/TodayTasks";
import TaskScheduler from "./pages/TasksScheduler/TaskScheduler";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('jwt') !== null;
  const location = useLocation();

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate
      replace={true}
      to="/login"
      state={{ from: `${location.pathname}${location.search}` }}
    />
  );
};

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute> <Settings /> </PrivateRoute>} />
          <Route path="/add-task" element={<PrivateRoute> <AddTask /> </PrivateRoute>} />
          <Route path="/add-details" element={<PrivateRoute> <AddDetails /> </PrivateRoute>} />
          <Route path="/condo-details" element={<PrivateRoute> <CondoDetails /> </PrivateRoute>} />
          <Route path="/scheduled-tasks" element={<PrivateRoute> <TodayTasks /> </PrivateRoute>} />
          <Route path="/calender" element={<PrivateRoute> <TaskScheduler /> </PrivateRoute>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
