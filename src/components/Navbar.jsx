import './Navbar.css';
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar= () => {
  const [highlightedIcon, setHighlightedIcon] = useState(null);
  const location = useLocation();

  return (
    <div className='NavBarItems'>
      <li>
        <Link to="/">
          <img 
            src={location.pathname === '/' || highlightedIcon === 'home' ? "src/assets/Home.png" : "src/assets/HomeUnselected.png"} 
            className={`NavIcon ${highlightedIcon === 'home' ? 'highlighted' : ''}`} 
            onMouseEnter={() => setHighlightedIcon('home')}
            onMouseLeave={() => setHighlightedIcon(null)}
          />
        </Link>
      </li>
      <li>
        <Link to="/AboutMe">
          <img 
            src={location.pathname === '/AboutMe' || highlightedIcon === 'aboutMe' ? "src/assets/AboutMe.png" : "src/assets/AboutMeUnselected.png"} 
            className={`NavIcon ${highlightedIcon === 'aboutMe' ? 'highlighted' : ''}`} 
            onMouseEnter={() => setHighlightedIcon('aboutMe')}
            onMouseLeave={() => setHighlightedIcon(null)}
          />
        </Link>
      </li>
      <li>
        <Link to="/Projects">
          <img 
            src={location.pathname === '/Projects' || highlightedIcon === 'projects' ? "src/assets/Projects.png" : "src/assets/ProjectsUnselected.png"} 
            className={`NavIcon ${highlightedIcon === 'projects' ? 'highlighted' : ''}`} 
            onMouseEnter={() => setHighlightedIcon('projects')}
            onMouseLeave={() => setHighlightedIcon(null)}
          />
        </Link>
      </li>
      <li>
        <Link to="/ContactMe">
          <img 
            src={location.pathname === '/ContactMe' || highlightedIcon === 'contactMe' ? "src/assets/ContactMe.png" : "src/assets/ContactMeUnselected.png"} 
            className={`NavIcon ${highlightedIcon === 'contactMe' ? 'highlighted' : ''}`} 
            onMouseEnter={() => setHighlightedIcon('contactMe')}
            onMouseLeave={() => setHighlightedIcon(null)}
          />
        </Link>
      </li>
    </div>
  );
}

export default Navbar;