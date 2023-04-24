import React from 'react'
import PROJ_1_IMG from '../images/Owl_Logo.png'

const Projects = () => {
  return (
    <section id='projects'>
        <h2>Projects I'm proud of</h2>
        <article id='project-1'>
            <div className='text'>
                <h4>Latest Project</h4>
                <h3><a href='https://scribblers-sanctuary.netlify.app'>Scribbler's Sanctuary</a></h3>
                <p className='blackbox'>
                  <span>Scribbler's Sanctuary</span> is a web app built using the MERN stack that provides a platform for writer's to share and showcase their work.  With a modern and intuitive UI/UX design, users can browse through a variety of written works and engage with other writers by leaving comments, rating works, and sharing their own pieces. Perfect place for beginning writers to hone their skills and connect with others.  As the sole developer, I have gained valuable experience in developing a full-stack app, including proficiency in using MongoDB for data storage, Express for creating a RESTful API, React for building a dynamic and interactive front-end, and Node.js for server-side scripting.  This project allows me to showcase my ability to work on a complex project independently and develop key technical skills. As well as, my understanding of building a project, focusing on user experience and community building.
                </p>
                <h4>Technologies used include:</h4>
                <ul>
                  <li>React</li>
                  <li>MongoDB</li>
                  <li>Node</li>
                  <li>Express</li>
                </ul>
            </div>
            <img src= {PROJ_1_IMG} alt='project screenshot: Scribblers Sanctuary Header Logo'/>
        </article>
        <div className='black-line'></div>
        <article id='project-2'>
        <div className='text'>
                <h4>Bootcamp Project</h4>
                <h3>Title of Project</h3>
                <p className='blackbox'>
                  <span>Description of Project:</span>
                  Description goes here.
                </p>
                <h4>Technologies used include:</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
            </div>
            <img alt='project screenshot'/>
        </article>
        <div className='black-line'></div>
        <article id='project-3'>
        <div className='text'>
                <h4>Project</h4>
                <h3>Title of Project</h3>
                <p className='blackbox'>
                  <span>Description of Project:</span>
                  Description goes here.
                </p>
                <h4>Technologies used include:</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
            </div>
            <img alt='project screenshot'/>
        </article>
    </section>
  )
}

export default Projects