import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Signin />} />
          {/* <Route path="/our-subscription-box" element={<SubscriptionBox />} />
          <Route path="/the-magazine" element={<TheMagazine />} />
          <Route path="/merchandise" element={<Merchandise />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
