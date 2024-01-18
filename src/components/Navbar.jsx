import './Navbar.css';
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [highlightedIcon, setHighlightedIcon] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className='NavBarItems'>
      <li>
        <div
          onClick={() => navigate('/')}
          title="Home"
        >
          <img
            src={location.pathname === '/' || highlightedIcon === 'home' ? "src/assets/Home.png" : "src/assets/HomeUnselected.png"}
            className={`NavIcon ${highlightedIcon === 'home' ? 'highlighted' : ''}`}
            onMouseEnter={() => setHighlightedIcon('home')}
            onMouseLeave={() => setHighlightedIcon(null)}
          />
        </div>
      </li>
      <li>
        <div
          onClick={() => navigate('/AboutMe')}
          title="About Me"
        >
          <img
            src={location.pathname === '/AboutMe' || highlightedIcon === 'aboutMe' ? "src/assets/AboutMe.png" : "src/assets/AboutMeUnselected.png"}
            className={`NavIcon ${highlightedIcon === 'aboutMe' ? 'highlighted' : ''}`}
            onMouseEnter={() => setHighlightedIcon('aboutMe')}
            onMouseLeave={() => setHighlightedIcon(null)}
          />
        </div>
      </li>
      <li>
        <div
          onClick={() => navigate('/Projects')}
          title="Projects"
        >
          <img
            src={location.pathname === '/Projects' || highlightedIcon === 'projects' ? "src/assets/Projects.png" : "src/assets/ProjectsUnselected.png"}
            className={`NavIcon ${highlightedIcon === 'projects' ? 'highlighted' : ''}`}
            onMouseEnter={() => setHighlightedIcon('projects')}
            onMouseLeave={() => setHighlightedIcon(null)}
          />
        </div>
      </li>
      <li>
        <div
          onClick={() => navigate('/ContactMe')}
          title="Contact Me"
        >
          <img
            src={location.pathname === '/ContactMe' || highlightedIcon === 'contactMe' ? "src/assets/ContactMe.png" : "src/assets/ContactMeUnselected.png"}
            className={`NavIcon ${highlightedIcon === 'contactMe' ? 'highlighted' : ''}`}
            onMouseEnter={() => setHighlightedIcon('contactMe')}
            onMouseLeave={() => setHighlightedIcon(null)}
          />
        </div>
      </li>
    </div>
  );
}

export default Navbar;