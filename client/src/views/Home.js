import React from 'react'
import { Helmet } from 'react-helmet';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Intro from '../components/Intro';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

const Home = (props) => {
  return (
    <div>
        <Helmet>
        <meta charSet='UTF-8' />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel='stylesheet' href="./styles/style.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Teko&family=Ubuntu+Condensed&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

        <title>Kacy Gilbert Portfolio</title>
      </Helmet>
      <div className="app-body">
        <Nav />
        <div className="gradient"></div>
        <div id="intro">
          <Intro />
        </div>
        <div className="gradient"></div>
        <div className="lite-gray">
          <Projects />
        </div>
        <div className="gradient"></div>
        <div className="dark-green">
          <Contact />
        </div>
        <div className="gradient"></div>
        <Footer />
      </div> 
    </div>
  )
}

export default Home