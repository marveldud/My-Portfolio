import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5 className='get'>What Skills I Have</h5>
      <h2 className='get'>My Experience</h2>

        <div className="container experience_container">
          <div className="experience_frontend">
           <h3>Frontend Development</h3>
           <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>JAVASCRIPT</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>BOOTSTRAP</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>TAILWIND</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>REACT.JS</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
           </div>
          </div>

          {/* END OF FRONTEND */}
          {/* START BACKEND */}
          <div className="experience_backend">
          <h3>Backend Development</h3>
           <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Node.Js</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MongoDb</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Express.js</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>C/C++</h4>
              <small className='text-light'>Basic</small>
             </div>
            </article>
          
           </div>
            
          </div>
          <div className="experience_other">
          <h3>Others</h3>
           <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>SEO</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Graphic Designing</h4>
              <small className='text-light'>Basic</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>3D Modeling</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Ms Office</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          
           </div>
          </div>

        </div>
      
    </section>
  )
}

export default Experience
