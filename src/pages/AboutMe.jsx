import React, { useState, useEffect, useRef } from 'react';
import './style/AboutMe.css'
const AboutMe = () =>{
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
        <h2 className={`centeredText ${scrollPosition > 50 ? 'small' : 'large'}`}>About Me</h2>
        <h3 className={`centeredText ${scrollPosition > 50 ? 'small2' : 'large2'}`}>A Few Things You Should Know...</h3>
      </div>

      <div className={`bodyA ${scrollPosition > 50 ? 'visible' : 'hidden'}`}>
        <div className='txt'>
          <h4 className='aboutHeadings'>Intro:</h4>
          <p className='centeredText'>
            Greetings! I'm Nireep Vishnubhatla, a dedicated computer science student at Adelaide University, 
            where I am immersed in the ever-evolving world of technology. My journey in the realm of computing 
            has been driven by a relentless passion for cybersecurity and networking. This website serves as 
            my digital portfolio, showcasing not only my academic achievements but also my practical skills 
            and projects. As I gear up to enter the professional sphere, I am excited about the prospect of 
            collaborating with like-minded individuals and organizations in the IT space.
          </p>  
        </div>
        
        <div className='txt'>
          <h4 className='aboutHeadings'>Academics:</h4>
          <p className='centeredText'>
            Currently pursuing my studies in computer science, I am honing my skills in software development, 
            data structures, and algorithms. The dynamic curriculum at Adelaide University has provided me with a 
            robust foundation to tackle real-world IT challenges.
          </p>
        </div> 
        
        <div className='txt'>
          <h4 className='aboutHeadings'>Goals:</h4>
          <p className='centeredText'>
            My academic endeavors are complemented by a deep interest in cybersecurity and networking. I am 
            enthusiastic about exploring ways to secure digital landscapes and optimize network infrastructures. 
            Through hands-on projects and continuous learning, I aim to contribute meaningfully to the ever-expanding 
            field of IT security. In this fast-paced industry, I understand the importance of staying on top of 
            the latest technological trends. I am committed to continuous learning and professional development, 
            ensuring that I can navigate the dynamic landscape of IT with agility and adaptability.
          </p>
        </div>
        
        <div className='txt'>
          <h4 className='aboutHeadings'>Connect:</h4>
          <p className='centeredText'>
            I am always open to networking and collaboration opportunities. Whether you are a fellow enthusiast, 
            a potential employer, or someone with shared interests, feel free to reach out. Let's explore the vast 
            possibilities within the realm of computer science together.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;