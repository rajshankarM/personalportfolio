import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {SiGithub} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mr5qvm9', 'template_7kf8tcw', form.current, '8AhP5Qm_urOurvNEn')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rajshankar607@gmail.com</h5>
            <a href='mailto:rajshankar607@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>rajshankar</h5>
            <a href='https://www.linkedin.com/in/raj-shankar-27a58b15b/' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <SiGithub className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rajshankar</h5>
            <a href='https://github.com/rajshankarM' target='_blank'>Send a message</a>
          </article>
        </div>
{/* End Contact Options */}


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact