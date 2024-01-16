import React, { useState, useEffect, useRef } from 'react';
import './style/Projects.css'
const Projects = () =>{
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className='primDiv'>
      <div className='head'>
        <h2 className={`centeredTextC ${scrollPosition > 50 ? 'small' : 'large'}`}>Projects</h2>
        <h3 className={`centeredTextC ${scrollPosition > 50 ? 'small2' : 'large2'}`}>Things I Do To Keep Me Sane....</h3>
        <h4 className={`scrollText ${scrollPosition > 50 ? 'hidden' : 'visible'}`}>scroll down &#11015;</h4>
      </div>

      <div className={`bodyC ${scrollPosition > 50 ? 'visible' : 'hidden'}`}>

      </div>
    </div>
  );
}
export default Projects;