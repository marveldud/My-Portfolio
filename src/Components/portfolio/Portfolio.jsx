import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/WP.png'
import IMG2 from '../../assets/messenger.jpg'
import IMG3 from '../../assets/movie.png'
import IMG4 from '../../assets/calculator.jpg'
import IMG5 from '../../assets/EP.jpg'
import IMG6 from '../../assets/ET.png'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Weather App',
    github : 'https://github.com',
    demo : 'https://github.com'
  },
  {
    id:2,
    image: IMG2,
    title: 'Social Media App',
    github : 'https://github.com',
    demo : 'https://github.com'
  },
  {
    id:3,
    image: IMG3,
    title: 'Movie App',
    github : 'https://github.com',
    demo : 'https://github.com'
  },
  {
    id:4,
    image: IMG4,
    title: 'Caculator',
    github : 'https://github.com',
    demo : 'https://github.com'
  },
  {
    id:5,
    image: IMG5,
    title: 'E-Commerce App',
    github : 'https://github.com',
    demo : 'https://github.com'
  },
  {
    id:6,
    image: IMG6,
    title: 'Expense Tracker',
    github : 'https://github.com',
    demo : 'https://github.com'
  }
]






const Portfolio = () => {

  return (
    <section id="portfolio">
      <h5 className='get'>My Recent Work</h5>
      <h2 className='get'>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title,github,demo}) =>{
            return(
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                 <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
             <div className="portfolio_item-cta">
              <a href={github} className='btn' target='__blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
             </div>
            </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio
