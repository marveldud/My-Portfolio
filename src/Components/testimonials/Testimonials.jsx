import React from 'react';
import './testimonials.css'
import AV1 from '../../assets/m1.jpg'
import AV2 from '../../assets/c2.png'
import AV3 from '../../assets/m2.jpg'
import AV4 from '../../assets/m3.jpg'
import {Navigation, Pagination, Scrollbar} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'




const data = [
  {
    avatar : AV1,
    name : 'Stan Wilkes',
    review :'I would highly recommend Thrive Internet Marketing. They are great to work with. The traffic to our website has increased thanks to their SEO program to many of our partners. The Thrive team is heads and shoulders above their competition, and we are very thankful that they call Downtown Arlington home.'

  },
  {
    avatar : AV2,
    name : 'David McDurham',
    review :'Thrive Internet Marketing excels at turning your website dreams into reality. We are so proud of the work they’ve done for us that we have already recommended them to many of our partners. The Thrive team is heads and shoulders above their competition, and we are very thankful that they call Downtown Arlington home.'

  },
  {
    avatar : AV3,
    name : 'Eric Beich',
    review :'We re-did our website twice in a 12 month period. There was no comparison between the first company and Thrive. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Thrive the first time I would not have had to do it twice.'

  },
  {
    avatar : AV4,
    name : 'Aaron Miller',
    review :'I went to Thrive with a basic “feel” I wanted in a website. They helped flush out the visual layout and content. Thrive’s services are bargain when you weigh the cost versus the product you receive. I will be using them again in future endeavors. Thanks again!'

  }
]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5 className='get'>Reviews From Clients</h5>
      <h2 className='get'>Testimonials</h2>

      <Swiper className="container testimonials_container" 
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable : true}} >
        {
          data.map(({avatar,name,review},index)=>{
            return(
          <SwiperSlide key={index} className='testimonial'>
          <div className="client_avatar">
            <img src={avatar}  />
          </div>
          <h5 className='client_name'>{name}</h5>
          <small className='client_review'>
           {review}
          </small>
        </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials
