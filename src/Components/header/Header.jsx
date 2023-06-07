import React from 'react'
import "./Header.css"
import CTA from './CTA'
import me from "../../Images/show.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
    <div className="container header__container">
      <h5>Welcome to</h5>
      <h1>FunZ Shows</h1>
      <h5 className='text-light'>Enjoy Your Visit</h5>
      <CTA/>
      <HeaderSocials/>

      <div className="me">
        <img src={me} alt="me" />
      </div>
    </div>
    </header>
  )
}

export default Header