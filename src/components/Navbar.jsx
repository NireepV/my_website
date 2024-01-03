import './Navbar.css';
import React from 'react';
import { Link } from "react-router-dom";


const Navbar= () =>{
  return (
    <div className='NavBarItems'>
      <li>
        <Link to="/"><img src="src/assets/Home.png" className='NavIcon'/></Link>
      </li>
      <li>
        <Link to="/AboutMe"><img src="src/assets/AboutMe.png" className='NavIcon'/></Link>
      </li>
      <li>
        <Link to="/Projects"><img src="src/assets/Projects.png" className='NavIcon'/></Link>
      </li>
      <li>
        <Link to="/ContactMe"><img src="src/assets/ContactMe.png" className='NavIcon'/></Link>
      </li>
    </div>
  );
}
export default Navbar;