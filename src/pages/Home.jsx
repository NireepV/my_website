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
          <li className='socials'>github</li>
          <li className='socials'>linkdin</li>
          <li className='socials'>instagram</li>  
        </div>
        <div>
        </div>
        <div><h4 className="centeredText">Coordinates</h4></div>
      </div>
    </div>
  );
}

export default Home;