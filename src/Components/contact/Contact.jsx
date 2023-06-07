import React, {useRef} from 'react'
import "./Contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {AiOutlineWhatsApp} from "react-icons/ai"
import emailjs from "emailjs-com"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_45xzuan', 'template_0uzs8lp', form.current, '5Il_bYsRF_L_Giusp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return (
    <section id='contact'>
      <h5>Book Show And</h5>
      <h2>Connect To Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact___option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>theabhissengar@gmail.com</h5>
            <a href="mailto:theabhissengar@gmail.com" rel="noreferrer" target='_blank'>Send a Messsage</a>
          </article>
          <article className='contact___option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>theabhissengar</h5>
            <a href="https://m.me/abhishek.sengar.7739" rel="noreferrer" target='_blank'>Send a Messsage</a>
          </article>
          <article className='contact___option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>theabhissengar@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone+918957872513" rel="noreferrer" target='_blank'>Send a Messsage</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Enter name of show to book it' required ></textarea>
          <button type='submit' className='btn btn-primary'>Book Show</button>
        </form>
      </div>
    </section>
  )
}

export default Contact