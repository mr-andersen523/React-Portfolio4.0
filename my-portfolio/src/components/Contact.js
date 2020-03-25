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
        <p style={{color: "gray", fontWeight:"bold", marginLeft:"11em", textAlign:"left",paddingTop:"5em", fontFamily:'Campton', fontSize:"30px"}}>
                <Fade bottom cascade> Reach out to me!</Fade>
        </p>
        <Fade bottom>
        <div style={{ display:'inline-block'}}>
            <h1 style={{textAlign:"center"}}><a href="mailto:chasea523@gmail.com?Subject=Hello!" id="email">chasea523@gmail.com</a></h1>
                <br></br>
                <br></br>
            <ul style={{ paddingTop:"5em", marginBottom:"2em", textAlign:"center"}}>
                
                <li><a href='https://github.com/mr-andersen523'><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </a></li>
                <li><a href='https://www.linkedin.com/in/chase-andersen-26275290/'><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/> </a></li>
                <li><a href='https://codepen.io/mr-andersen523'><FontAwesomeIcon icon={['fab', 'codepen']} size="2x" /> </a></li>
                <li><a href='https://dribbble.com/mr-andersen523'><FontAwesomeIcon icon={['fab', 'dribbble']} size="2x" /> </a></li>
                <li><a href='https://www.instagram.com/mr_andersen523/'><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /> </a></li>
                <li><a href='https://www.behance.net/chaseandersen'><FontAwesomeIcon icon={['fab', 'behance']} size="2x" /> </a></li>
            </ul>
        </div>
        </Fade>
        </div>);
    }
}

export default Contact;