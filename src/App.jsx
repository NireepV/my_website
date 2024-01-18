import './App.css';
import Home from "./pages/Home.jsx"
import AboutMe from "./pages/AboutMe.jsx"
import Projects from "./pages/Projects.jsx"
import ContactMe from "./pages/ContactMe.jsx"
import Edit from "./pages/projectEdit.jsx"
import Navbar from "./components/Navbar.jsx"
import {  BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/ContactMe' element={<ContactMe />} />
        <Route path='/Edit' element={<Edit />} />
      </Routes>

      <div className='Navdiv'>
        <Navbar/>
      </div>
    </Router>


  );
}

export default App;