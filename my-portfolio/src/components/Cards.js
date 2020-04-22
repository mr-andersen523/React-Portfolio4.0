import React, { Component } from 'react';
import { Card, CardDeck, Row, ListGroup, ListGroupItem} from "react-bootstrap";
import burger from '../images/burger.png'
import remote from '../images/remote.png'
import lab2 from '../images/lab2.png'
import empteam from '../images/emp-team.png'
import empdirect from '../images/emp-direct.png'
import workout from '../images/workout.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Cards extends Component {
    render() { 
        return (

<>
<Row>
<CardDeck>

          
  <Card className="text-center p-3" >
    <Card.Img variant="top" src={remote} />
    <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>Pass the Remote</Card.Title>
    <Card.Text>
    Using relevant movie and rating databases we created a quick questionnaire that tailors your ideal movie or show and randomly generates a result.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>jQuery/JS/API</ListGroupItem>
    </ListGroup>
  <Card.Footer>
    <Card.Link className="hvr-grow" href='https://github.com/mr-andersen523/pass-the-remote'><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </Card.Link>
    <Card.Link className="hvr-grow" href="https://mr-andersen523.github.io/pass-the-remote/">View</Card.Link>
  </Card.Footer>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={workout} />
    <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>Fitness Tracker</Card.Title>
    <Card.Text>
      Track your daily workouts! Log your excercises and have them display your progress to your stats page, using Plotly.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Mongo/Mongoose/Express</ListGroupItem>
    </ListGroup>
  <Card.Footer>
  <Card.Link className="hvr-grow" href='https://github.com/mr-andersen523/homework17'><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </Card.Link>
    <Card.Link className="hvr-grow" href="https://fitness-tracker-hw.herokuapp.com/">Heroku</Card.Link>
  </Card.Footer>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={empdirect} />
    <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>Employee Directory</Card.Title>
    <Card.Text>
          A simple directory of "employees" using the RandomUserAPI. The user is able to search for a specific employee or filter/sort people.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>React/API</ListGroupItem>
    </ListGroup>
  <Card.Footer>
  <Card.Link className="hvr-grow" href='https://github.com/mr-andersen523/homework19'><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </Card.Link>
    <Card.Link className="hvr-grow" href="https://employee-directory-hw.herokuapp.com/">Heroku</Card.Link>
  </Card.Footer>
  </Card>


  </CardDeck>
        </Row>

<br></br>

        <Row>
<CardDeck>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={burger} />
    <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>Eat-Da-Burger</Card.Title>
    <Card.Text>
    Eat-Da-Burger is a simple burger logger that lets users input the names of burgers they'd like to eat.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Node/Express/MySQL/ORM</ListGroupItem>
    </ListGroup>
  <Card.Footer>
  <Card.Link className="hvr-grow" href='https://github.com/mr-andersen523/burger'><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </Card.Link>
    <Card.Link className="hvr-grow" href="https://eat-da-burgers-node-app.herokuapp.com/">Heroku</Card.Link>
  </Card.Footer>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={empteam} />
    <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>Team Generator</Card.Title>
    <Card.Text>
    A Node application creates an engineering team with some simple prompts! Generates HTML page with results.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Node</ListGroupItem>
    </ListGroup>
  <Card.Footer>
  <Card.Link className="hvr-grow" href='https://github.com/mr-andersen523/homework10'><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </Card.Link>
  </Card.Footer>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={lab2} />
    <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>theLab</Card.Title>
    <Card.Text>
    A creative, collaborative, shared space for developers to come together and be a creator of their own ideas, get help from other developers to make those ideas come to life.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>UI Kit/Node/JS/Express<br></br>Passport/MySQL/Sequalize</ListGroupItem>
    </ListGroup>
  <Card.Footer>
  <Card.Link className="hvr-grow" href='https://github.com/programmerkim/theLab'><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </Card.Link>
    <Card.Link className="hvr-grow" href="#">Heroku</Card.Link>
  </Card.Footer>
  </Card>
  
  </CardDeck>
    </Row>
      </>

        );
    }
}

export default Cards;


