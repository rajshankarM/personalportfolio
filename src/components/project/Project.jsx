import React from 'react'
import './project.css'
// import IMG1 from '../../assest/portfolio1.png'
import IMG1 from '../../assest/portfolio1.jpg'
import IMG2 from '../../assest/portfolio2.jpg'
import IMG3 from '../../assest/portfolio3.jpg'
import IMG4 from '../../assest/portfolio4.jpg'

const Project = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Project</h2>

      <div className="container project__container">
        <article className='project__item'>
            <div className='project__item-image'>
              <img src={IMG1} alt="" />
            </div>
            <h3>Chat App</h3>
              <div className='project__item-cta'>
              <a href="https://github.com/rajshankarM/chat-frontend" className='btn' target='_blank'>GitHub</a>
            <a href="https://github.com/rajshankarM/server" className='btn' target='_blank'>GitHub</a>
            <a href="https://shanchat.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              <div>
             <h3>Description :</h3>
           <p>This Chat Application developed by using ReactJs as a FrontEnd and NodeJS as a BackEnd This Particular Project is using
             react-router-dom,SocketIo package in frontend and using express,cors and nodemon package in backend.
           </p>
           </div>
        </article>
        <article className='project__item'>
            <div className='project__item-image'>
              <img src={IMG2} alt="" />
            </div>
            <h3>Bike Rent Portal</h3>
           <div className='project__item-cta'>
           <a href="https://github.com/rajshankarM/bike-rent" className='btn' target='_blank'>GitHub</a>
            <a href="https://github.com/rajshankarM/bike-rent" className='btn' target='_blank'>GitHub</a>
            <a href="https://ssrental.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
           <div>
             <h3>Description :</h3>
           <p>This Particular Project developed by using ReactJs, NodeJs and Mongo dB this application Designed Help the User to Find and Select
               The Bike Rental as Per there Requirement they can select this bike rental daily basis monthly basis with the affordable price.</p>
           </div>

        </article>
        <article className='project__item'>
            <div className='project__item-image'>
              <img src={IMG3} alt="" />
            </div>
            <h3>Pricing Cart</h3>
            <div className='project__item-cta'>
            <a href="https://github.com/rajshankarM/pricing-cart" className='btn' target='_blank'>GitHub</a>
            {/* <a href="https://github.com/rajshankarM" className='btn' target='_blank'>GitHub</a> */}
            <a href="https://dashboardcart.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
            <div>
             <h3>Description :</h3>
           <p>This pricing cart App created for the user to create read update and delete the items listed and displayed in the UI.
              This app developed with the help of React JS technology using Hooks and react components.</p>
           </div>
        </article>
        <article className='project__item'>
            <div className='project__item-image'>
              <img src={IMG4} alt="" />
            </div>
            <h3>Authentication</h3>
              <div className='project__item-cta'>
              <a href="https://github.com/rajshankarM/authentication-frontend" className='btn' target='_blank'>GitHub</a>
            <a href="https://github.com/rajshankarM/authentication-backend" className='btn' target='_blank'>GitHub</a>
            <a href="https://authlogin.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              <div>
             <h3>Description :</h3>
           <p>This Authentication app is designed and developed by technology like ReactJs as front-end, NodeJs as backend and mongo dB as database This particular project is using react-router-Dom, 
             MaterialUI and Tostify package in Front-end and Using bcrypt, cors, express, jsonwebtoken, mongoose and nodemon in Back-end</p>
           </div>
        </article>
      </div>
    </section>
  )
}

export default Project