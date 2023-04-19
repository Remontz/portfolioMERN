import React, { useState } from 'react'
import aboutPic from '../images/aboutPic.jpeg'
import { Helmet } from 'react-helmet'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Resume = (props) => {
    const [extLinks] = useState({gitHub: 'https://github.com/Remontz', linkedIn: 'https://www.linkedin.com/in/kacy-gilbert-225324aa', resume: 'https://docs.google.com/document/d/1HJO2ahlkwIAlqlPvwz_KgdtOdTX_rp2VO11dXUUQVqY/edit', portfolio: 'https://kacy-gilbert-devportfolio.netlify.app/'})
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
        <div className='gray resume'>
            <section className="header">
                <h2 id="name">Kacy Gilbert</h2>
                <h3 id="title">Software Developer</h3>
                <p id="location">Southaven, MS</p>
                <ul>
            <li>
                <a href={extLinks.linkedIn} target='_blank' rel='noreferrer'>LinkedIn</a>
            </li>
            <li>
                <a href={extLinks.gitHub} target='_blank' rel='noreferrer'>GitHub</a>
            </li>
            <li>
                <a href={extLinks.portfolio} target='_blank' rel='noreferrer'>Portfolio</a>
            </li>
                </ul>
            </section>
            <div className='black-line'></div>
            <section className='skills'>
                <h4>Skills</h4>
                <div id='skills-list'>
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
                </div>
            </section>
            <section className='projects'>
                <h4>Projects</h4>
                <div id='projects-list'>
                    <a href="https://github.com/Remontz/Closet">
                    <section>
                        <h5>Closet Organization App</h5>
                        <p>An inventory management centered around organizing a user's wardrobe.</p>
                        <ul>
                            <li>MERN Stack</li>
                            <li>Netlify</li>
                        </ul>
                    </section>
                    </a>
                    <a href="https://github.com/Remontz/iSport">
                    <section>
                        <h5>iSport</h5>
                        <p>A local pickup game finder.</p>
                        <ul>
                            <li>MERN Stack</li>
                            <li>Netlify</li>
                        </ul>
                    </section>
                    </a>
                    <a href="https://github.com/Remontz/JAVA-Work">
                    <section>
                        <h5>Book Broker</h5>
                        <p>An ebook e-Commerce platform, where users can sell, purchase and review ebooks.</p>
                        <ul>
                            <li>Java</li>
                            <li>Spring</li>
                            <li>mySQL</li>
                        </ul>
                    </section>
                    </a>
                </div>
            </section>
            <section className='education'>
                <h4>Education</h4>
                <div id='education-list'>
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
                </div>
            </section>
            <section className='experience'>
                <h4>Experience</h4>
                <div id='experience-list'>
                    <section>
                        <div>
                            <div id='position'>
                                <h5>Phoenix Communications</h5>
                                <p>&bull;Home Automation Technician&bull;</p>
                            </div>
                            <div id='spanner'>
                                <p>JUL '21 - Present</p>
                                <span>Bartlett, TN</span>
                            </div>
                        </div>
                        <ul>
                            <li><span>Skilled in working with audio and video equipment, hardware installation and configuration, and troubleshooting technical issues.</span></li>
                            <li><span>Experienced with specialized software tools for programming, automation, and control.</span></li>
                            <li><span>Soft skills such as communication, teamwork, and attention to detail, which are valuable in a junior developer role.</span></li>
                        </ul>
                    </section>
                    <section>
                        <div>
                            <div id='position'>
                                <h5>Cetacea Wireless</h5>
                                <p>&bull;Service Technician&bull;</p>
                            </div>
                            <div id='spanner'>
                                <p>NOV '17 - FEB '20</p>
                                <span>Memphis, TN</span>
                            </div>
                        </div>
                    <ul>
                        <li>Proficient in diagnosing and finding solutions to complex problems.</li>
                        <li>Communicated technical concepts in a clear and concise manner through interactions with clients and customers.</li>
                        <li>Demonstrated attention to detail, troubleshooting, and problem solving through installation/repair of various equipment.</li>
                    </ul>
                    </section>
                    <section>
                        <div>
                            <div id='position'>
                                <h5>Canon Solutions America</h5>
                                <p>&bull;Service Technician&bull;</p>
                            </div>
                            <div id='spanner'>
                                <p>JAN '15 - DEC '16</p>
                                <span>Memphis, TN</span>
                            </div>
                        </div>
                        <ul>
                            <li>Proficiently diagnosed issues with hardware and software systems.</li>
                            <li>Quick adaptability to new software tools and platforms in a fast-paced development environment.</li>
                            <li>Experience in working with customers to identify and resolve issues.</li>
                        </ul>
                    </section>
                    <section>
                        <div>
                            <div id='position'>
                                <h5>U.S. Army</h5>
                                <p>&bull;TUAS Operator (15W)&bull;</p>
                            </div>
                            <div id='spanner'>
                                <p>JUN '08 - MAY '12</p>
                                <span>Ft Lewis, WA</span>
                            </div>
                        </div>
                        <ul>
                            <li>Operated complex systems with precision and attention to detail.</li>
                            <li>Communicated effectively with team members, Air Traffic Control, and ground forces as Mission Coordinator.</li>
                            <li>Developed strong problem-solving skills and attention to detail in high-pressure, fast-changing environments.</li>
                        </ul>
                    </section>
                </div>
            </section>
            <section className='summary'>
                <h4>Summary</h4>
                <div>
                    <p>With a strong background in electronics troubleshooting, military UAV Operations, and technical support, I bring a unique perspective and problem-solving skills to software development.  A recent graduate of a Full-Stack Web Development program, I am excited to utilize my proficiency in programming languages, project management, and teamwork to contribute to dynamic and innovative development teams. </p>
                </div>
            </section>
        </div>
        <div className='gradient'></div>
        <Footer />
      </div>
    </div>
  )
}

export default Resume