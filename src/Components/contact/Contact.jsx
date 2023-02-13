import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sh7d3g5', 'template_twyymlj', form.current, 'bCh0nkqs8MbFEzRCv')
     
    e.target.reset();

  };

  return (
    <section id="contact">
      <h5 className='get'>Get In Touch</h5>
      <h2 className='get'>Contact</h2>

      <div className="container contact_container">
        <div className="contact_options">
         <article className='contact_option '>
          <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>qaziwaqas144@gmail.com</h5>
          <a href="mailto:qaziwaqas144@gmail.com" target='_blank'>Send a Message</a>
         </article>
         <article className='contact_option '>
          <RiMessengerLine className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>qaziwaqas144@gmail.com</h5>
          <a href="https://m.me/profile.php?id=100008958499296" target='_blank'>Send a Message</a>
         </article>
         <article className='contact_option '>
          <BsWhatsapp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+92 03242665257</h5>
          <a href="https://wa.me/+9203242665257" target='_blank'>Send a Message</a>
         </article>
        </div>
            {/* END OF CONTACT OPTION */}
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required />
              <input type="email" name='email' placeholder='Your Email' required />
              <textarea name="messege"  rows="7" placeholder='Your Messege' required></textarea>
              <button type='submit' className='btn btn-primary' >Send Messege</button>

            </form>
      </div>
    </section>
  )
}

export default Contact
