import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import chaseabout from '../images/chase-about.jpeg'



class About extends Component {
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p>Portland based since 2014. Completed University of Oregon's Full Stack Development Bootcamp in April, 2020. Very eager to begin my career. I have expressed a strong affinity for CSS, Design, UI, and all things Front-End. </p>
                    <p>Exposed to HTML5, CSS3, JavaScript, jQuery, Bootstrap, NodeJS, MySQL, MongoDB, Express, Handelbars.js, ReactJS</p>
            </Fade>
            </div>
            <img src={chaseabout} alt='about iamge'></img>
            

        </div>  );
    }
}

export default About;
