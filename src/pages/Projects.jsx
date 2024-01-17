import React, { useState, useEffect, useRef } from 'react';
import './style/Projects.css'
import image1 from '../assets/myHeadshot.png';

const Projects = () => {
  const [hovered, setHovered] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a short description of project 1.',
      detailedDescription: 'This is a more detailed description of project 1.',
      image: image1
    },
    {
      title: 'Project 2',
      description: 'This is a short description of project 2.',
      detailedDescription: 'This is a more detailed description of project 2.',
      image: image1
    },
    {
      title: 'Project 2',
      description: 'This is a short description of project 2.',
      detailedDescription: 'This is a more detailed description of project 2.',
      image: image1
    },
  ];

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
        <h2 className={`centeredTextP ${scrollPosition > 50 ? 'small' : 'large'}`}>&#60;Projects&#47;&#62;</h2>
        <h3 className={`centeredTextP ${scrollPosition > 50 ? 'small2' : 'large2'}`}>Things I Do To Keep Me Sane....</h3>
        <h4 className={`scrollText ${scrollPosition > 50 ? 'hidden' : 'visible'}`}>scroll down &#11015;</h4>
      </div>

      <div className={`bodyP ${scrollPosition > 50 ? 'visible' : 'hidden'}`}>
        <div className='projectContainer'>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project ${hovered === index ? 'hovered' : ''} ${expanded === index ? 'expanded' : ''}`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              <div className="project-text">
                <h3 className="project-text">{project.title}</h3>
                <p className="project-text">{project.description}</p>
              </div>
              
              <div className='project-expanded'>
              {expanded === index && <hr />}
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
                {expanded === index && <p className='detailedDiscription'>{project.detailedDescription}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;