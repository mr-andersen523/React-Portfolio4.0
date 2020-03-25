import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';


library.add(fab)

class Contact extends Component {
    render() { 
        return (  
        <div>
        <p style={{color: "gray", fontWeight:"bold", marginLeft:"11em", paddingTop:"9em", fontFamily:'Campton', fontSize:"30px"}}>
                <Fade bottom cascade> Reach out to me!</Fade>
        </p>
        <Fade bottom>
        <div>
            <h1><a href="mailto:chasea523@gmail.com?Subject=Hello!" id="email">chasea523@gmail.com</a></h1>
                <br></br>
                <br></br>
            <ul style={{ paddingTop:"12em", marginBottom:"2em"}}>
                
                <li><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </li>
                <li><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/> </li>
                <li><FontAwesomeIcon icon={['fab', 'codepen']} size="2x" /> </li>
                <li><FontAwesomeIcon icon={['fab', 'dribbble']} size="2x" /> </li>
                <li><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /> </li>
                <li><FontAwesomeIcon icon={['fab', 'behance']} size="2x" /> </li>
            </ul>
        </div>
        </Fade>
        </div>);
    }
}

export default Contact;