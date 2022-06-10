import React from "react";
import "./project.css";
import IMG1 from "../../img/portfolio1.jpg";
import IMG2 from "../../assest/portfolio2.jpg";
import IMG3 from "../../img/portfolio3.png";
import IMG4 from "../../img/portfolio4.jpg";

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Project</h2>

      <div className="Credentials">
        <h2 className="Credentials-head">Credentials: </h2>
        <div>
          <h3>Admin</h3>
          <p>demo@gmail.com, Password:123456</p>
        </div>
        <div>
          <h2>User</h2>
          <p>demo, Password:123456</p>
        </div>
      </div>

      <div className="container project__container">
        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>ECommerce App</h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/rajshankarM/Ecommerce-Frontend"
              className="btn"
              target="_blank"
            >
              FrontEnd
            </a>
            <a
              href="https://github.com/rajshankarM/Ecommerce-Backend"
              className="btn"
              target="_blank"
            >
              BackEnd
            </a>
            <a
              href="https://ecommerce-devshan-app.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live
            </a>
          </div>
          <div>
            <h3>Description :</h3>
            <p>
              This ECommerce App is developed by Using ReactJs as frontEnd and
              NodeJS, MongoDB as Backend
            </p>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Booking App</h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/rajshankarM/Room-Booking-Frontend"
              className="btn"
              target="_blank"
            >
              FrontEnd
            </a>
            <a
              href="https://github.com/rajshankarM/Booking-Backend-Api"
              className="btn"
              target="_blank"
            >
              BackEnd
            </a>
            <a
              href="https://devshan-booking-app.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live
            </a>
          </div>
          <div>
            <h3>Description :</h3>
            <p>
              This Booking App is designed and developed by technology like
              ReactJs as front-end, NodeJs as backend and mongo dB as database
              This particular project is using react-router-Dom and MaterialUI
              in Front-end and Using Axios, cors, express, mongoose and nodemon
              in Back-end
            </p>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Chat App</h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/rajshankarM/chat-frontend"
              className="btn"
              target="_blank"
            >
              FrontEnd
            </a>
            <a
              href="https://github.com/rajshankarM/server"
              className="btn"
              target="_blank"
            >
              BackEnd
            </a>
            <a
              href="https://shanchat.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live
            </a>
          </div>
          <div>
            <h3>Description :</h3>
            <p>
              This Chat Application developed by using ReactJs as a FrontEnd and
              NodeJS as a BackEnd This Particular Project is using
              react-router-dom,SocketIo package in frontend and using
              express,cors and nodemon package in backend.
            </p>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Blog</h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/rajshankarM/blog-frontend"
              className="btn"
              target="_blank"
            >
              FrontEnd
            </a>
            <a
              href="https://github.com/rajshankarM/blog-backend"
              className="btn"
              target="_blank"
            >
              BackEnd
            </a>
            <a
              href="https://blog-devshan.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live
            </a>
          </div>
          <div>
            <h3>Description :</h3>
            <p>
              The Blog App developed by using ReactJs in frontend nodejs and
              mongoDb in backend.This particular Project is using to add our own
              blogs
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
