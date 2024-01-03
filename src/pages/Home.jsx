import React from 'react';
import './Style/Home.css'
import myPicture from '../assets/myHeadshot.png';

const Home = () => {
  return (
    <div className='mainDiv'>
      <img className='myHeadshot' src={myPicture} alt="Me" />
      <h2 className="centeredText">Nireep Vishnubhatla</h2>
      <p>This is my Portfolio website.</p>
    </div>
  );
}

export default Home;