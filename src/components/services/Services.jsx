import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
            <div className="service__head">
              <h3>UI</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>whether Api</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Pricing Cart</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>To Do List</p>
              </li>
            </ul>
        </article>
{/* ================================================= */}
        <article className="services">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Chat Application</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Authentication</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Bike Rent Portal</p>
              </li>
            </ul>
        </article>
{/* ===================================================== */}
        {/* <article className="services">
            <div className="service__head">
              <h3>UI</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>whether Api</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Pricing Cart</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>To List</p>
              </li>
            </ul>
        </article> */}
      </div>
    </section>
  )
}

export default Services