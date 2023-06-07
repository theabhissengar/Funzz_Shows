import React from 'react'
import "./Footer.css"
import {BiCameraMovie} from "react-icons/bi"
import {FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <h2>Funzz Shows</h2>
      <div className='footer__socials'>
        <a href="https://www.tvmaze.com" target="blank"><BiCameraMovie/></a>
        <a href="https://github.com/theabhissengar" target="blank"><FaGithub/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Funzz Shows. All rights are reserved.</small>
      </div>
    </footer>
  )
}

export default Footer