import React, { useState, useEffect } from 'react';
import './style/Home.css'
import myPicture from '../assets/myHeadshot.png';

function formatTime(date) {
  return date.toLocaleTimeString('en-AU', {
    timeZone: 'Australia/Adelaide',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
}

const Home = () => {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='mainDiv'>
      <div id='timeDiv'>
        <h4 id='time'>{time}</h4>
      </div>
      <div id='photoDiv'>
        <img className='myHeadshot' src={myPicture} alt="Me" />
      </div>
      <div className='body'>
        <div><h2 className="centeredText">Nireep Vishnubhatla</h2></div>
        <div id='socialDiv'>
          <a href="https://github.com/NireepV" target="_blank" rel="noopener noreferrer">
            <li className='socials'><img src="src/assets/github.png" className='NavIcon'/></li>
          </a>
          <a href="https://www.instagram.com/nireepog" target="_blank" rel="noopener noreferrer">
            <li className='socials'><img src="src/assets/instagram.png" className='NavIcon'/></li>
          </a> 
        </div>
        <div id='emailDiv'>
          <a href="/contactMe">
            <li className='socials'>Contact Me</li>
          </a>
          <li className='socials'>Copy Email</li>
        </div>
        <div><h4 className="centeredText">Coordinates</h4></div>
      </div>
    </div>
  );
}

export default Home;