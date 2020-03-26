import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Cards from "./Cards";





class Work extends Component {
    render() { 
        return (
        <div id="work">
            <h1 id='work-heading'>
                <Fade bottom cascade> Work.</Fade>
            </h1>
            <div id="cards">
            <Cards />
            </div>
        </div>
        );
    }
}

export default Work;