import React from 'react'
import './about.css'
import ME from '../../assest/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscSettings} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
          <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>3+ Months Learning In Guvi IITM</small>
                </article>

                <article className="about__card">
                  <VscSettings className='about__icon'/>
                  <h5>Project</h5>
                  <small>4+ FullStack</small>
                </article>
              </div>

              <p>
              Hello! I am a Fresher from Chennai, having good knowledge in Web development and always ready to learn new technologies.<br></br>
              Dedicated to creating and optimizing interactive, user-friendly and feature-rich web applications, <br></br>
              Exposure to both Front-end and Back-end web development.MMMMMMMMMM
              </p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About