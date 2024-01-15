import React from 'react';
import './style/ContactMe.css';

const ContactMe = () =>{
  
  return (
    <div className='primDiv'>
      <div className='head'>
        <h2 className='centeredText'>Contact Me</h2>
        <h3 className='centeredText'>Let's Get To Know Each Other</h3>
      </div>

      <div id='contact'>
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