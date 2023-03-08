// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Confirm from './pages/Confirm'; 


function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/confirm" element={<Confirm />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
