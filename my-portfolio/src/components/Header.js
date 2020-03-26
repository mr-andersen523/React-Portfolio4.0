import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFilePdf } from '@fortawesome/free-regular-svg-icons'



class Header extends Component {

    render() {
        return (<div>
        <img src="../ca.svg"alt="" className='heading-background'></img>
            <header>
            </header>
            <Fade bottom>
            <p className='header-title'>
            Chase Andersen
            <br></br>
            Front-End/Full-Stack Developer
            <br></br>
            Portland, OR
            <br></br>
            <hr></hr>
            <a href='https://drive.google.com/file/d/1E0QkxEkOXJdASCym1vjTy8CzKUJdu7oN/view?usp=sharing' id='resume-btn' ><FontAwesomeIcon icon={faFilePdf}  /> Resume </a>
                </p>
    
            </Fade>



        </div>);
    }
}

export default Header;