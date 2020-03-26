import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFilePdf } from '@fortawesome/free-regular-svg-icons'
import {faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'



class Header extends Component {

    render() {
        return (<div>
        <img src="../ca.svg"alt="" className='heading-background'></img>
            <Fade bottom>
            <p className='header-title'>
            <span style={{color:'#F3B95A'}}>Chase</span> <span style={{color:'#49b2ad'}}>Andersen</span>
            <br></br>
            Full-Stack Developer
            <br></br>
            <FontAwesomeIcon icon={faMapMarkerAlt}  /> Portland, OR
            <br></br>
            <br></br>
            <a className="hvr-grow" href='https://drive.google.com/file/d/1E0QkxEkOXJdASCym1vjTy8CzKUJdu7oN/view?usp=sharing' id='resume-btn' ><FontAwesomeIcon icon={faFilePdf}  /> Resume </a>
                </p>
    
            </Fade>



        </div>);
    }
}

export default Header;