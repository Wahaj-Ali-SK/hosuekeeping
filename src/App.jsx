import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css'
import SubscriptionBox from './pages/SubscriptionBox/SubscriptionBox';
import TheMagazine from './pages/TheMagazine/TheMagazine';
import Merchandise from './pages/Merchandise/Merchandise';

function App() {

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/our-subscription-box' element={<SubscriptionBox />} />
          <Route path='/the-magazine' element={<TheMagazine />} />
          <Route path='/merchandise' element={<Merchandise />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
