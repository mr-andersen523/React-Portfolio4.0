import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fab)

class Contact extends Component {
    render() { 
        return (  
        <div>
        <p id="reach-out">
                <Fade bottom cascade> Reach out to me!</Fade>
        </p>
        <Fade bottom>
        <div style={{ display:'inline-block'}}>
            <h1 style={{textAlign:"center"}} className="hvr-grow"><a href="mailto:chasea523@gmail.com?Subject=Hello!" id="email">chasea523@gmail.com</a></h1>
                <br></br>
                <br></br>
                
                <span id="icon-list">
                <a className="hvr-grow icon" href='https://github.com/mr-andersen523' ><FontAwesomeIcon icon={['fab', 'github']} size="3x" /> </a>
                <a className="hvr-grow icon" href='https://www.linkedin.com/in/chase-andersen-26275290/'><FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/> </a>
                <a className="hvr-grow icon" href='https://codepen.io/mr-andersen523'><FontAwesomeIcon icon={['fab', 'codepen']} size="3x" /> </a>
                <a className="hvr-grow icon" href='https://dribbble.com/mr-andersen523'><FontAwesomeIcon icon={['fab', 'dribbble']} size="3x" /> </a>
                <a className="hvr-grow icon" href='https://www.instagram.com/mr_andersen523/'><FontAwesomeIcon icon={['fab', 'instagram']} size="3x" /> </a>
                <a className="hvr-grow icon" href='https://www.behance.net/chaseandersen'><FontAwesomeIcon icon={['fab', 'behance']} size="3x" /> </a>
                </span>
        
        </div>
        </Fade>
        </div>);
    }
}

export default Contact;