import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Settings from "./pages/Settings/Settings";
import AddTask from "./pages/AddTask/AddTask";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/add-task" element={<AddTask />} />
          {/* 
          
          <Route path="/merchandise" element={<Merchandise />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
