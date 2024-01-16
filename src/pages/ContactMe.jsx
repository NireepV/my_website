import React, { useState, useEffect, useRef } from 'react';
import './style/ContactMe.css';

const ContactMe = () =>{
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
        <h2 className={`centeredText ${scrollPosition > 50 ? 'small' : 'large'}`}>Contact Me</h2>
        <h3 className={`centeredText ${scrollPosition > 50 ? 'small2' : 'large2'}`}>Let's Get To Know Each Other</h3>
      </div>

      <div className={`contact ${scrollPosition > 50 ? 'visible' : 'hidden'}`}>
        <div className='details'>
          <input type="text" name="email" id="email" placeholder="Email@Example.com"></input>
          <input type="text" name="subject" id="subject" placeholder="A Very Important Subject"></input>
        </div>
        <div className='textareaWrapper'>
          <textarea name="content" id="content" cols="30" rows="10" placeholder="Type Away My Fellow Email Enthusist ....."></textarea>
        </div>
        <button type='submit'>Send</button>
      </div>
    </div>
  );
}
export default ContactMe;