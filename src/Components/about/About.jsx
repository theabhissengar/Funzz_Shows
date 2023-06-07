import React from 'react'
import "./About.css"
import photo from "../../Images/photo.jpg"
import {AiOutlineStar} from "react-icons/ai"
import {MdOutlineLanguage} from "react-icons/md"
import {GiFilmStrip} from "react-icons/gi"

const About = () => {
  return (
    <section id="about">
      <h5>About</h5>
      <h2>Funzz Shows</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={photo} alt="profile" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <AiOutlineStar className='about__icon'/>
              <h5>Shows</h5>
              <small className='smalls'>Are the famous ones </small>
            </article>
            <article className='about__card'>
              <MdOutlineLanguage className='about__icon'/>
              <h5>Languages</h5>
              <small>2+ of Worldwide</small>
            </article>
            <article className='about__card'>
              <GiFilmStrip className='about__icon'/>
              <h5>Titles</h5>
              <small>3+ Complete</small>
            </article>
          </div>
          <p>
            Our applications provides variety of shows recommended by tvmaze and you can book them.
            All the movies provided are one of the most famous films available.
            Enjoy them to as much as you want.
          </p>
          <a href="#contact" className='btn btn-primary'>Book Show</a>
        </div>
      </div>
    </section>
  )
}

export default About