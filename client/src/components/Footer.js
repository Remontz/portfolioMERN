import React, { useState } from 'react'

const Footer = (props) => {
    const [extLinks, /*setExtLinks*/] = useState({gitHub: 'https://github.com/Remontz', linkedIn: 'https://www.linkedin.com/in/kacy-gilbert-225324aa', resume: 'https://docs.google.com/document/d/1HJO2ahlkwIAlqlPvwz_KgdtOdTX_rp2VO11dXUUQVqY/edit'})
  return (
    <div className='footer'>
        <h2>Kacy Gilbert - Software Developer</h2>
        <ul className='footer-list'>
            <li>
                <a href={extLinks.linkedIn} target='_blank' rel='noreferrer'>
                    <span className='fa-brands fa-linkedin' aria-hidden='true'></span>
                    <span className='sr-only'>LinkedIn</span>
                </a>
            </li>
            <li>
                <a href={extLinks.gitHub} target='_blank' rel='noreferrer'>
                    <span className='fa-brands fa-github' aria-hidden='true'></span>
                    <span className='sr-only'>GitHub</span>
                </a>
            </li>
            <li>
            {/* <a href="mailto: Mike Myers"
onclick="this.href=this.href.replace(' Mike ','MikeMy'); this.href=this.href.replace('Myers','ers@vwx.yz')"> */}
                <a href='mailto: Kacy Gilbert' onClick="this.href=this.href.replace(' Kacy ', 'gilbertka'); this.href=this.href.replace('Gilbert', 'cy90@gmail.com')">
                    <span className='fa-solid fa-envelope' aria-hidden='true'></span>
                    <span className='sr-only'>Email</span>
                </a>
            </li>
        </ul>
        <p><small>&copy;2023 Kacy Gilbert. All Rights Reserved.</small></p>
    </div>
  )
}

export default Footer