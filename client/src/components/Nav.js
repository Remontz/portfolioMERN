import React, { useState } from 'react'
import KG_logo from '../images/KG_logo.jpg'
import { HashLink as Link } from 'react-router-hash-link'


const Nav = (props) => {
    const [extLinks, /*setExtLinks*/] = useState({gitHub: 'https://github.com/Remontz', linkedIn: 'https://www.linkedin.com/in/kacy-gilbert-225324aa', resume: 'https://docs.google.com/document/d/1HJO2ahlkwIAlqlPvwz_KgdtOdTX_rp2VO11dXUUQVqY/edit'})

  return (
    <div className='nav'>
        <ul>
            <li>
                <h1>
                    <Link to='/'>
                        <img src={KG_logo} alt='KG-Logo' />
                        <span id='name'>Kacy Gilbert</span>
                    </Link>
                </h1>
            </li>
            <li>
                <Link to='/about'>
                    <div className='icon'>
                        <span className='fa-solid fa-user-ninja fa-fade' ></span>
                        <span>About</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link to='/#contact'>
                    <div className='icon'>
                        <span className='fa-regular fa-address-card fa-fade'></span>
                        <span>Contact</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link to='/resume' className='button'>
                    <div className='icon'>
                        <span className='fa-brands fa-google-drive fa-flip'></span>
                        <span>Resume</span>
                    </div>
                </Link>
            </li>
            <li>
                <Link to='/#projects' className='button'>
                    <div className='icon'>
                        <span className='fa-solid fa-laptop-code fa-flip'></span>
                        <span>Projects</span>
                    </div>
                </Link>
            </li>
            <li>
                <a href={extLinks.gitHub} target='_blank' rel='noreferrer'>
                    <div className='icon'>
                        <span className='fa-brands fa-github fa-beat'></span>
                        <span>GitHub</span>
                    </div>
                </a>
            </li>
            <li>
                <a href={extLinks.linkedIn} target='_blank' rel='noreferrer'>
                    <div className='icon'>
                        <span className='fa-brands fa-linkedin fa-beat' aria-hidden='true'></span>
                        <span>LinkedIn</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Nav