import React from 'react'
import Header from "../header/Header"
import Card from '../movie/Card';
import { useGlobalContext } from './context';
import Footer from '../footer/Footer';


const Home=() =>{
  const {movie} = useGlobalContext()
  return(
    <>
            <Header/>
            <section id='movie'>
              <h5>Watch and Book</h5>
              <h2>Movies</h2>
              <div className="container movie__container">
                {movie.map((cards) => {
                  return(<Card
                      key={cards.show.id}
                      image={cards.show.image.medium}
                      type={cards.show.type}
                      name={cards.show.name}
                      show={cards.show.url}
                      language={cards.show.language}
                  />)
                })}
              </div>
            </section>
            <Footer/>
    </>
  )
}
export default Home