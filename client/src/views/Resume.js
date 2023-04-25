import React, { useState, useRef, useEffect } from 'react'
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { Helmet } from 'react-helmet'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Resume = (props) => {
    const [extLinks] = useState({gitHub: 'https://github.com/Remontz', linkedIn: 'https://www.linkedin.com/in/kacy-gilbert-225324aa', resume: 'https://docs.google.com/document/d/1HJO2ahlkwIAlqlPvwz_KgdtOdTX_rp2VO11dXUUQVqY/edit', portfolio: 'https://kacy-gilbert-devportfolio.netlify.app/'})
    const printRef = useRef();

    // const [downloading, setDownloading] = useState(false)

        // //Convert HTML content to PDF
        // const convertToPDF = async (e) => {
        //     e.preventDefault();
        //     console.log('downloading')
        //     let doc = new jsPDF('landscape', 'pt', 'a4', true);

        //     // Source: Resume element
        //     const resElement = document.querySelector('#resume');
        //     doc.html(resElement, {
        //         callback: function(doc) {
        //             doc.save('kacy-gilbert-resume.pdf');
        //         },
        //         margin: [10, 10, 10, 10],
        //         autoPaging: 'text',
        //         x: 0,
        //         y: 0,
        //         width: 200,
        //         windowWidth: 1097
        //     });
        // }

        // v2.0 of converting HTML to PDF
        // const convertToPDF = async (e) => {
        //     e.preventDefault();
        //     console.log('downloading');
        //     const imgData = html2canvas.toDataUrl('image/png');
        //     const imgWidth = 210;
        //     const pageHeight = 295;
        //     const imgHeight = html2canvas.height * imgWidth / html2canvas.width;
        //     let heightLeft = imgHeight;
            
        //     let doc = new jsPDF('l', 'mm', 'a4', true);
        //     let pos = 0;

        //     doc.addImage(imgData, 'PNG', 0, pos, imgWidth, imgHeight);
        //     heightLeft -= pageHeight;

        //     while(heightLeft >= 0) {
        //         pos = heightLeft - imgHeight;
        //         doc.addPage();
        //         doc.addImage(imgData, 'PNG', 0, pos, imgWidth, imgHeight);
        //         heightLeft -= pageHeight
        //     }
        //     doc.save('kacy-gilbert-resume.pdf')
        //  }

        // v3.0
        // const convertToPDF = async (e) => {
        //     e.preventDefault();
        //     let doc = new jsPDF();

        //     console.log('downloading');

        //     await html2canvas(document.getElementById('resume'), {
        //         useCORS: true,
        //         allowTaint: true,

        //     }).then((canvas) => {


        //         doc.addImage(canvas.toDataURL('image/png'), 'PNG', 5, 5, 500, 200)
        //     })
        //     doc.save('resume.pdf')



        //     console.log('downloaded')
        // }

        //v4.0 
        // HTML & CSS -> PNG (html2canvas)
        // PNG -> Add to PDF (jspdf)
        // Download PDF (jsPDF)

        const convertToPDF = async (e) => {
            document.getElementById('button').innerHTML = 'Currently Downloading'

            const resToDownload = document.getElementById('resume');
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = ((document.getElementById('resume').offsetHeight) * 25.4)/96;
            
            let doc = new jsPDF('l', 'mm', 'a4', true);
            let pos = 5;
            
            await html2canvas(resToDownload, {
                allowTaint: true,
                useCors: true,
            }).then((canvas) => {
                let heightLeft = imgHeight;
                console.log(pageHeight, heightLeft)
                // canvas convert to png
                doc.addImage(canvas.toDataURL('image/png'), 'PNG', 5, pos, imgWidth, imgHeight);
                
                heightLeft -= (pageHeight - 100);
                while(heightLeft >= 0) {
                    pos = heightLeft - imgHeight;
                    doc.addPage();
                    doc.addImage(canvas.toDataURL('image/png'), 'PNG', 5, pos, imgWidth, imgHeight);
                    heightLeft -= pageHeight
                }

                doc.save('resume.pdf')
            })
            document.getElementById('button').innerHTML = 'Downloaded'
        }


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
        <div ref={printRef} className='resume gray' id='resume'>
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
            <div className='sections'>
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
            <div className='divider'></div>
            <section className='projects'>
                <h4>Projects</h4>
                <div id='projects-list'>
                    <a href='https://scribblers-sanctuary.netlify.app'>
                    <section>
                        <h5>Scribbler's Sanctuary</h5>
                        <p><small>A full-stack web app using the MERN stack to provide a modern/intuitive UI/UX design with Reactjs functional components.  The backend utilizes a custom restfulAPI, node, express and MongoDB. </small></p>
                        <ul>
                            <li>MERN Stack</li>
                            <li>UI/UX</li>
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
            <div className='divider'></div>
            <section className='education'>
                <h4>Education</h4>
                <div id='education-list'>
                    <section>
                        <h5>Coding Dojo</h5>
                        <p>
                            Immersive Frontend & Backend Curriculum<br />
                            Java, Python, Spring, Flask, DBMS and MERN<br />
                            Numerous individual & collaborative Projects<br />
                        </p>
                        <ul>
                            <li>&bull; Full Stack Web Development &bull;</li>
                            <li><small>MAR '22 - JAN '23</small></li>
                            <small><a href='https://app.diplomasafe.com/en-US/diploma/dc97a5868cdcba220d15e0ed2bb0d09d53bed719d'>Certification Received</a></small>
                        </ul>
                    </section>
                    <section>
                        <h5>Frontend Masters</h5>
                        <p>
                            Curriculum based around emerging Frontend Technologies and Practices<br />
                            Advanced HTML, CSS and JavaScript Projects<br />
                            Advanced React, Node.js, Express.js Workshops<br />
                        </p>
                        <ul>
                            <li>&bull; Full Stack Web Development &bull;</li>
                            <li><small>NOV '22 - &infin;</small></li>
                            <small><a href='https://frontendmasters.com/u/DEV_KacyGilbert/'>Learners Profile</a></small>
                        </ul>
                    </section>
                    <section>
                        <h5>Arizona State University</h5>
                        <p>
                            Information Technology, Cyber Security Curriculum<br />
                            Computer Science w/Introductions to Python, Java and MySQL<br />
                            Worked on several collaborative team projects using git to organize workflow<br />
                        </p>
                        <ul>
                            <li>&bull; Information Technology  &bull;</li>
                            <li><small>MAY '19 - N/A</small></li>
                        </ul>
                    </section>
                </div>
            </section>
            <div className='divider'></div>
            <section className='experience'>
                <h4>Experience</h4>
                <div id='exp-div'>
                    <div className='experience-list'>
                    <section>
                        <h5><br/>Phoenix Communications</h5>
                        <p>
                            &#9732;A/V & Home Automation installation, configuration and troubleshooting <br />
                            &#9732;Utilize specialized software tools for programming automation & control <br />
                            &#9732;Communication, Teamwork & Attention to Detail<br />
                            <br />&#9881; JUL '21 - Present   &#9881; Bartlett, TN<br />
                        </p>
                        <p><h5>&#9881; Home Automation Technician &#9881;</h5></p>
                    </section>
                    <section>
                        <h5><br/>Cetacea Sound Inc</h5>
                        <p>
                            &#9732;Wireless & Telemetry Equipment installation, troubleshooting and repair <br/>
                            &#9732;Communicated technical concepts to customers verbally & documenting <br/>
                            &#9732;Attention to Detail, Problem Solving & Customer Service  <br/>
                            <br />&#9881; NOV '17 - FEB '20  &#9881; Memphis, TN<br/>
                        </p>
                        <p><h5>&#9881; Service Technician &#9881;</h5></p>
                    </section>
                    </div>
                    <div className='experience-list'>
                    <section>
                        <h5><br/>Canon Solutions America</h5>
                        <p>
                            &#9732;Diagnose, troubleshoot and repair digital imaging hardware and software systems <br />
                            &#9732;Adapted to new software tools and platforms to improve productivity<br/>
                            &#9732;Identify & resolve issues through customer communication<br />
                            <br/>&#9881; JAN '15 - DEC '16  &#9881; Memphis, TN<br/>
                        </p>
                        <p><h5>&#9881; Field Service Technician &#9881;</h5></p>
                    </section>
                    <section>
                        <h5><br/>U.S. Army</h5>
                        <p>
                            &#9732;Operated complex aerial system performing RSTA operations<br/>
                            &#9732;Constant, Effective communication with several teams under high pressure<br/>
                            &#9732;Developed strong problem-solving skills and attention to detail<br/>
                            <br />&#9881; JUN '08 - MAY '12 &#9881; Ft. Lewis, WA<br />
                        </p>
                        <p><h5>&#9881; TUAS Operator [15W] &#9881;</h5></p>
                    </section>
                    </div>
                </div>
            </section>
            <div className='divider'></div>
            </div>
        </div>
        <section className='summary resume'>
                <h4>Summary</h4>
                <div>
                    <p>With a strong background in electronics troubleshooting, military UAV Operations, and technical support, I bring a unique perspective and problem-solving skills to software development.  A recent graduate of a Full-Stack Web Development program, I am excited to utilize my proficiency in programming languages, project management, and teamwork to contribute to dynamic and innovative development teams. </p>
                </div>
        </section>
        <div className='dark-green'>
            <button id='button' type='button' onClick={convertToPDF}>Download to PDF</button>
        </div>        
        <div className='gradient'></div>
        <Footer />
      </div>
    </div>
  )
}

export default Resume