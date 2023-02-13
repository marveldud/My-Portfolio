import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id="services">
      <h5 className='get'>What I Offer</h5>
      <h2 className='get'>Services</h2>

      <div className="container services_container">
        <article className='service'>
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service_list">
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Plan and Implement new designs</p>
              </li>
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Optimize existing user interface designs</p>
              </li>
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Test for intuitivity and experience</p>
              </li>
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Create prototypes for new product ideas</p>
              </li>
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Conduct an ongoing user research</p>
              </li>
            </ul>
        </article>
                        {/* END OF UI/UX */}
                        <article className='service'>
            <div className="service_head">
              <h3>Web Development</h3>
            </div>
            <ul className="service_list">
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>All type of Websites</p>
              </li>
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Andriod Applications</p>
              </li>
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Desktop Applications</p>
              </li>
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>All type of Softwares</p>
              </li>
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>3D Games</p>
              </li>
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>2D Games</p>
              </li>
            </ul>
        </article>
                        {/* END OF web development */}<article className='service'>
            <div className="service_head">
              <h3>SEO</h3>
            </div>
            <ul className="service_list">
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Content Writting</p>
              </li>
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Friendly Keyword Research</p>
              </li>
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Blog Websites</p>
              </li>
              <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Create Backlinks</p>
              </li>
              
            </ul>
        </article>
                        {/* END OF SEO */}
      </div>
    </section>
  )
}

export default Services
