import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Nav from "../nav/Nav"
import Contact from '../contact/Contact';
import About from '../about/About';
import Footer from "../footer/Footer"
import { useGlobalContext } from './context';

const Buy = () => {
  const {movie} = useGlobalContext()
  return (
          <>
                  <Nav/>
                  <About/>
                  <section id='view'>
                <h5>Swipe To View</h5>
                <h2>More About Shows</h2>
                <Swiper className="container view__container">
                  {movie.map((item) =>{
                    return(
                          <SwiperSlide key={item.show.id} className="view">
                            <div className="show___avatar">
                              <img src={item.show.image.original} alt="show" />
                            </div>
                            <h5 className='show__name'>{item.show.name}</h5>
                            <small className="show__view">
                            {item.show.summary.replace(/[<p>,</p>,<b>,</b>]/g, "")}
                            </small>
                          </SwiperSlide>
                      )
                  })}
                </Swiper>
              </section>
              <Contact/>
              <Footer/>
          </>













      // <div>
      //     <Nav/>
      //                       <About/>
      //                       <section id='view'>
      //                     <h5>Swipe To View</h5>
      //                     <h2>More About Shows</h2>
      //                     <Swiper className="container view__container">
      //                       {items.map((item) =>{
      //                         return(
      //                           <SwiperSlide key={item.show.id} className="view">
      //                             <div className="show___avatar">
      //                               <img src={item.show.image.medium} alt="show" />
      //                             </div>
      //                             <h5 className='show__name'>{item.show.name}</h5>
      //                             <small className="show__view">
      //                             {item.show.summary.replace(/[<p>,</p>,<b>,</b>]/g, "")}
      //                             </small>
      //                           </SwiperSlide>
      //                           )
      //                       })}
      //                     </Swiper>
      //                   </section>
      //                   <Contact/>
      // </div>
  )
}

export default Buy