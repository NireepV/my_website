import './Navbar.css';
import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import HomeUS from '../assets/HomeUnselected.png';
import Home from '../assets/Home.png';
import aboutMeUS from '../assets/AboutMeUnselected.png';
import aboutMe from '../assets/AboutMe.png';
import projectsUS from '../assets/ProjectsUnselected.png';
import projects from '../assets/Projects.png';
import contactMeUS from '../assets/ContactMeUnselected.png';
import contactMe from '../assets/ContactMe.png';


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
            src={location.pathname === '/' || highlightedIcon === 'home' ? Home : HomeUS}
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
            src={location.pathname === '/AboutMe' || highlightedIcon === 'aboutMe' ? aboutMe : aboutMeUS}
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
            src={location.pathname === '/Projects' || highlightedIcon === 'projects' ? projects : projectsUS }
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
            src={location.pathname === '/ContactMe' || highlightedIcon === 'contactMe' ? contactMe : contactMeUS}
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