import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {

  return (
    <div>
        <article className="movie__item">
          <div className="movie__item-image">
            <img src={props.image} alt="logo" />
          </div>
          <h3>{props.name}</h3>
          <div className="movie__item-cta">
            <button className='btn btn-primary'>{props.language}</button>
            <Link to='/book'><button className='btn ' >BOOK IT</button></Link>
            <a href={props.show} className='btn btn-primary' rel="noreferrer" target= '_blank'>Watch It</a>
          </div>
        </article>
    </div>
  )
}

export default Card
