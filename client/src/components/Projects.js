import React from 'react'

const Projects = () => {
  return (
    <section id='projects'>
        <h2>Projects I'm proud of</h2>
        <article id='project-1'>
            <div className='text'>
                <h4>Latest Project</h4>
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