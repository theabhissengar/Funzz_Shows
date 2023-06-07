import React from 'react'
import {BiCameraMovie} from "react-icons/bi"
import {FaGithub} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.tvmaze.com" target="blank"><BiCameraMovie/></a>
        <a href="https://github.com/theabhissengar" target="blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials