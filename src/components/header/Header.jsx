import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assest/me.png'
import HeaderSocials from './HeaderSocials'
import FaGithub from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>RajShankar</h1>
        <h5 className="text-light">FullStack Developer (MERN)</h5>
        <CTA />
        <HeaderSocials />
        

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Downnnnn</a>
      </div>
    </header>
  )
}

export default Header