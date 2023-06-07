import React, { useState } from 'react'
import "./Nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {VscPreview} from "react-icons/vsc"
import {BiMessageSquareDetail} from "react-icons/bi"
import { Link } from 'react-router-dom'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#home')
  const linkStyle = {
    margin: "0",
    padding: "0",
    textDecoration: "none",
  };


  return (
    <nav>
    <Link to="/" style={linkStyle} >
      <a href="#home" onClick={() =>setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a></Link>
      <a href="#about" onClick={() =>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href="#view" onClick={() =>setActiveNav('#view')} className={activeNav === '#view' ? 'active' : ''} ><VscPreview/></a>
      <a href="#contact" onClick={() =>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
