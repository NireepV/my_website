import React, { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './style/ContactMe.css';

const ContactMe = () =>{
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [formValues, setFormValues] = useState({ email: '', subject: '', content: '' });
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

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

  const handleSendEmail = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('localhost:5000/send', formValues);
      console.log(response.data.message);
      toast("Email Has Been Sent! 🥳🎉");
    } catch (error) {
      toast("There Has Been A Mistake! 😓");
    }
  };
  
  return (
    <div className='primDiv'>
      <ToastContainer />
      <div className='head'>
        <h2 className={`centeredTextC ${scrollPosition > 50 ? 'small' : 'large'}`}>Contact Me</h2>
        <h3 className={`centeredTextC ${scrollPosition > 50 ? 'small2' : 'large2'}`}>Let's Get To Know Each Other....</h3>
        <h4 className={`scrollText ${scrollPosition > 50 ? 'hidden' : 'visible'}`}>scroll down &#11015;</h4>
      </div>

      <div className={`bodyC ${scrollPosition > 50 ? 'visible' : 'hidden'}`}>
        <div className='contact'>
          <div className='details'>
            <input type="text" name="email" id="email" placeholder="Email@Example.com" value={formValues.email} onChange={handleInputChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
            <input type="text" name="subject" id="subject" placeholder="A Very Important Subject" value={formValues.subject} onChange={handleInputChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
          </div>
          <div className='textareaWrapper'>
            <textarea name="content" id="content" cols="30" rows="10" placeholder="Type Away My Fellow Email Enthusist ....." value={formValues.content} onChange={handleInputChange} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
          </div>
          <button className='sendEmail' type='submit' onClick={handleSendEmail}>Send &#128228;</button>
        </div>
        <div className='liveTracking'>
          <h4 className='LTelement'>Watched Values Updated Live:</h4>
          <p className='LTelement'>&#123;</p>
          <p className='LTelement'> &emsp; <q>Email</q> : <q>{formValues.email}</q></p>
          <p className='LTelement'> &emsp; <q>Subject</q> : <q>{formValues.subject}</q></p>
          <p className='LTelement bodyContent'> &emsp; <q>Body</q> : <q>{formValues.content}</q></p>
          <p className='LTelement'>&#125;</p>
        </div>
      </div>
    </div>
  );
}
export default ContactMe;