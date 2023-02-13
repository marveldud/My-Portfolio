import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub}  from 'react-icons/bs';
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
       <a href="https://linkdin.com" target="__blank"><BsLinkedin/></a>
       <a href="https://github.com" target="__blank"><BsGithub /></a>
       <a href="https://dribbble.com" target="__blank"><FiDribbble/></a>

    </div>
  )
}

export default HeaderSocials;
