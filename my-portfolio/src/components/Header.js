import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';



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
                    <button href="mailto:chasea523@gmail.com?Subject=Hello!" id="contact-btn">Contact</button>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;