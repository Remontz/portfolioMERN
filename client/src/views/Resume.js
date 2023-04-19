import React, { useState } from 'react'
import aboutPic from '../images/aboutPic.jpeg'
import { Helmet } from 'react-helmet'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Resume = (props) => {
    const [extLinks] = useState({gitHub: 'https://github.com/Remontz', linkedIn: 'https://www.linkedin.com/in/kacy-gilbert-225324aa', resume: 'https://docs.google.com/document/d/1HJO2ahlkwIAlqlPvwz_KgdtOdTX_rp2VO11dXUUQVqY/edit'})
  return (
    <div>
        <Helmet>
      <meta charSet='UTF-8' />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel='stylesheet' href="./styles/resumeStyle.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Teko&family=Ubuntu+Condensed&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

        <title>Kacy Gilbert - Resume</title>
      </Helmet>
      <div className='app-body'>
        <Nav />
        <div className='gradient'></div>
        <div className='gray'>
            <h2>RESUME</h2>
        </div>
        <div className='gradient'></div>
        <div className='gray'>
            <section class="header">
            <h2 id="name">Kacy Gilbert</h2>
            <h3 id="title">Software Developer</h3>
            <p id="location">Southaven, MS</p>
            <ul>
                <li>Github</li>
                <li>LinkedIn</li>
                <li>Portfolio</li>
            </ul>
        </section>
        <section>
            <h4>Skills</h4>
            <section>
                <h5>Languages</h5>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Python</li>
                </ul>
            </section>
            <section>
                <h5>Frameworks</h5>
                <ul>
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>Express</li>
                    <li>Bootstrap</li>
                    <li>Spring</li>
                    <li>Flask</li>
                </ul>
            </section>
            <section>
                <h5>Database Management</h5>
                <ul>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </ul>
            </section>
        </section>
        <section>
            <h4>Projects</h4>
            <section>
                <h5>Title</h5>
                <p>Description</p>
                <p>Tech Used</p>
            </section>
            <section>
                <h5>Title</h5>
                <p>Description</p>
                <p>Tech Used</p>
            </section>
            <section>
                <h5>Title</h5>
                <p>Description</p>
                <p>Tech Used</p>
            </section>
        </section>
        <section>
            <h4>Experience</h4>
            <section>
                <h5>Company<span>Position</span></h5>
                <p>Dates<span>Location</span></p>
                <ul>
                    <li>Responsibilities</li>
                    <li>Responsibilities</li>
                    <li>Responsibilities</li>
                </ul>
            </section>
            <section>
                <h5>Company<span>Position</span></h5>
                <p>Dates<span>Location</span></p>
                <ul>
                    <li>Responsibilities</li>
                    <li>Responsibilities</li>
                    <li>Responsibilities</li>
                </ul>
            </section>
            <section>
                <h5>Company<span>Position</span></h5>
                <p>Dates<span>Location</span></p>
                <ul>
                    <li>Responsibilities</li>
                    <li>Responsibilities</li>
                    <li>Responsibilities</li>
                </ul>
            </section>
        </section>
        <section>
            <h4>Education</h4>
            <section>
                <h5>School Name<span>Degree</span></h5>
                <p>Dates<span>Location</span></p>
                <p>Description of curriculum</p>
            </section>
            <section>
                <h5>School Name<span>Degree</span></h5>
                <p>Dates<span>Location</span></p>
                <p>Description of curriculum</p>
            </section>
            <section>
                <h5>School Name<span>Degree</span></h5>
                <p>Dates<span>Location</span></p>
                <p>Description of curriculum</p>
            </section>
        </section>
        </div>
        <div className='gradient'></div>
        <Footer />
      </div>
    </div>
  )
}

export default Resume