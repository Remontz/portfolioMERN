import React from 'react'
import aboutPic from '../images/aboutPic.jpeg'
import { Helmet } from 'react-helmet'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const About = (props) => {
  return (
    <div>
      <Helmet>
      <meta charSet='UTF-8' />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel='stylesheet' href="./styles/style.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Teko&family=Ubuntu+Condensed&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

        <title>Kacy Gilbert- About Me</title>
      </Helmet>
      <div className='app-body'>
        <Nav />
        <div className='gradient'></div>
        <div className='lite-gray'>
          <h2>ABOUT - Kacy Gilbert</h2>
          <article id='about'>
            <div className='text'>
              <h3>Thanks for visiting my website</h3>
              <p className='blackbox'>
                Greetings, I'm Kacy Gilbert, a passionate and detail-oriented software / web developer with a focus on creating immersive digital experiences.  I have a background in audio/video technology, which has honed my skills in problem-solving, project management, and attention to detail.  When I'm not building apps, websites or automating homes, you can find me indulging my love for creative writing under my psuedonym -- and middle name -- 'Remontz'.
                I am a recent graduate of Coding Dojo's Fullstack Web Development bootcamp, where I gained industry-ready proficiency in the MERN Stack, as well as other popular languages like Java and Python.  I am constantly seeking new challenges and opportunities to learn and grow as a developer, and I believe that my passion and dedication would make me an asset to any team looking for a driven and creative individual. 
              </p>
            </div>
            <img src={aboutPic} alt='Kacy Gilbert'/>
          </article>
        </div>
        <div className='gradient'></div>
        <Footer />
      </div>
    </div>
  )
}

export default About