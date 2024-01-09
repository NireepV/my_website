import './Navbar.css';
import React from 'react';
import { Link } from "react-router-dom";


const Navbar= () =>{
  return (
    <div className='NavBarItems'>
      <li>
        <Link to="/"><img src="src/assets/HomeUnselected.png" className='NavIcon'/></Link>
      </li>
      <li>
        <Link to="/AboutMe"><img src="src/assets/AboutMeUnselected.png" className='NavIcon'/></Link>
      </li>
      <li>
        <Link to="/Projects"><img src="src/assets/ProjectsUnselected.png" className='NavIcon'/></Link>
      </li>
      <li>
        <Link to="/ContactMe"><img src="src/assets/ContactMeUnselected.png" className='NavIcon'/></Link>
      </li>
    </div>
  );
}
export default Navbar;