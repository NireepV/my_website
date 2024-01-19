import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import bounty from 'bounty';
import 'react-toastify/dist/ReactToastify.css';
import './style/Toast.css'
import myPicture from '../assets/myHeadshot.png';
import './style/Home.css'
import githubUS from '../assets/githubUnselected.png';
import github from '../assets/github.png';
import instagramUS from '../assets/InstagramUnselected.png';
import instagram from '../assets/Instagram.png';

const email = "Nireep.Vishnubhatla@gmail.com";

function formatTime(date) {
  return date.toLocaleTimeString('en-AU', {
    timeZone: 'Australia/Adelaide',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}

const Home = () => {
  const [isGithubHovered, setGithubHovered] = useState(false);
  const [isInstagramHovered, setInstagramHovered] = useState(false);
  const [time, setTime] = useState(formatTime(new Date()));
  const [coordinates, setCoordinates] = useState('Adelaide ∘ 34.9285° S, 138.6007° E');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      toast.success('Copied To Clipboard 🥳🎉');
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timeDiv = document.getElementById('timeDiv');
    if (timeDiv) {
      bounty({
        el: timeDiv,
        value: time,
        lineHeight: 1.5,
        letterSpacing: 1.05,
        styles: {
          color: '#fff',
        },
      });
    }
  }, [time]);

  useEffect(() => {
    const coordinatesDiv = document.getElementById('coordinatesDiv');
    if (coordinatesDiv) {
      bounty({
        el: coordinatesDiv,
        value: coordinates,
        lineHeight: 1.5,
        letterSpacing: 1.05,
      });
    }
  }, [coordinates]);

  return (
    <div className='mainDiv'>
      <ToastContainer />
      <div id='timeDiv'>
        <h4 id='time' className='animated-text'>{time}</h4>
      </div>
      <div id='photoDiv'>
        <img className='myHeadshot' src={myPicture} alt="Me" />
      </div>
      <div className='body'>
        <div><h2 className="centeredText" id='title'>Nireep Vishnubhatla</h2></div>
        <div><h3 className="centeredText" id='profession'>Aspiring Pen-Tester | Adelaide University</h3></div>
        <div className='centerDiv'>
          <div id='socialDiv'>
            <a onClick={() => window.open("https://github.com/NireepV", "_blank")} rel="noopener noreferrer" title="GitHub">
              <li className='socials'
                onMouseEnter={() => setGithubHovered(true)}
                onMouseLeave={() => setGithubHovered(false)}
              >
                <img src={isGithubHovered ? github : githubUS} className='socials' id='github' />
              </li>
            </a>
            <a onClick={() => window.open("https://www.instagram.com/nireepog", "_blank")} rel="noopener noreferrer" title="Instagram">
              <li className='socials'
                onMouseEnter={() => setInstagramHovered(true)}
                onMouseLeave={() => setInstagramHovered(false)}
              >
                <img src={isInstagramHovered ? instagram : instagramUS} className='socials' id='instagram' />
              </li>
            </a>
          </div>
          <div id='emailDiv'>
            <a href="/ContactMe" onClick={() => navigate('/ContactMe')}>
              <li className='emailItem1'>Contact Me &#128225;</li>
            </a>
            <p className='emailText'>or</p>
            <li className='emailItem2' onClick={copyEmailToClipboard}>Copy Email &#128233;</li>
          </div>
        </div>
        <div>
          <div id='coordinatesDiv'>
            <h4 className='animated-text'>{coordinates}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;