import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/harshnegi1434/" target='_blank' rel='noopener noreferrer' ><BsLinkedin/></a>
        <a href="https://github.com/harshnegi1434" target='_blank' rel='noopener noreferrer' ><BsGithub/></a>
        <a href="https://twitter.com/hnegi1434" target='_blank' rel='noopener noreferrer'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials