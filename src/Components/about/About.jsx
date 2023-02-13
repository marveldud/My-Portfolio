import React from 'react'
import './about.css'
import ME from "../../assets/qazi5.png";
import {FaAward} from 'react-icons/fa'
import {FiUserPlus} from 'react-icons/fi';
import {AiFillFolder} from 'react-icons/ai'

const About = () => {
  return (
   <section id='about'>
    <h5 className='get'>Get To Know</h5>
    <h2 className='get'>About Me</h2>

    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="about-image" />
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
          </article>

          <article className='about_card'>
              <FiUserPlus className='about_icon'/>
              <h5>Clients</h5>
              <small>20+ WorldWide</small>
          </article>

          <article className='about_card'>
              <AiFillFolder className='about_icon'/>
              <h5>Projects</h5>
              <small>18+ Completed</small>
          </article>
        </div>
        <p>
          Motivated and hard working Software Engineer with excellent communication skills, seeking a position as a MernStack Developer.Proven experience with Nodejs, Expressjs, Reactjs and MongoDB. Proficient in web development techniques and creating web applications such as JavaScript, CSS and HTML.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>
   </section>

  )
}

export default About
