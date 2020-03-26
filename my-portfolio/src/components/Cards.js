import React, { Component } from 'react';
import { Card, CardColumns, ListGroup, ListGroupItem} from "react-bootstrap";
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

<CardColumns>

          
  <Card className="text-center p-3" >
    <Card.Img variant="top" src={remote} />
    <blockquote className="blockquote mb-0 card-body">
    <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>Pass the Remote</Card.Title>
    <Card.Text>
    Using relevant movie and rating databases we created a quick questionnaire that tailors your ideal movie or show and randomly generates a result.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>jQuery/JS/API</ListGroupItem>
    </ListGroup>
  <Card.Body>
    <Card.Link href='https://github.com/mr-andersen523/pass-the-remote'><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </Card.Link>
    <Card.Link href="https://mr-andersen523.github.io/pass-the-remote/">View</Card.Link>
  </Card.Body>
    </blockquote>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={workout} />
    <blockquote className="blockquote mb-0 card-body">
    <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>Fitness Tracker</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Mongo/Mongoose/Express</ListGroupItem>
    </ListGroup>
  <Card.Body>
  <Card.Link href='https://github.com/mr-andersen523/homework17'><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </Card.Link>
    <Card.Link href="https://fitness-tracker-hw.herokuapp.com/">Heroku</Card.Link>
  </Card.Body>
    </blockquote>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={empdirect} />
    <blockquote className="blockquote mb-0 card-body">
    <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>Employee Directory</Card.Title>
    <Card.Text>
          A simple directory of "employees" using the RandomUserAPI. The user is able to search for a specific employee or filter/sort people.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>React/API</ListGroupItem>
    </ListGroup>
  <Card.Body>
  <Card.Link href='https://github.com/mr-andersen523/homework19'><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </Card.Link>
    <Card.Link href="https://employee-directory-hw.herokuapp.com/">Heroku</Card.Link>
  </Card.Body>
    </blockquote>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={burger} />
    <blockquote className="blockquote mb-0 card-body">
    <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>Eat-Da-Burger</Card.Title>
    <Card.Text>
    Eat-Da-Burger is a simple burger logger that lets users input the names of burgers they'd like to eat.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Node/Express/MySQL/ORM</ListGroupItem>
    </ListGroup>
  <Card.Body>
  <Card.Link href='https://github.com/mr-andersen523/burger'><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </Card.Link>
    <Card.Link href="https://eat-da-burgers-node-app.herokuapp.com/">Heroku</Card.Link>
  </Card.Body>
    </blockquote>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={empteam} />
    <blockquote className="blockquote mb-0 card-body">
    <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>Team Generator</Card.Title>
    <Card.Text>
    A Node application creates an engineering team with some simple prompts! Generates HTML page with results.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Node</ListGroupItem>
    </ListGroup>
  <Card.Body>
  <Card.Link href='https://github.com/mr-andersen523/homework10'><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </Card.Link>
  </Card.Body>
    </blockquote>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={lab2} />
    <blockquote className="blockquote mb-0 card-body">
    <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>theLab</Card.Title>
    <Card.Text>
    A creative, collaborative, shared space for developers to come together and be a creator of their own ideas, get help from other developers to make those ideas come to life.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>UI Kit/Node/JS/Express<br></br>Passport/MySQL/Sequalize</ListGroupItem>
    </ListGroup>
  <Card.Body>
  <Card.Link href='https://github.com/programmerkim/theLab'><FontAwesomeIcon icon={['fab', 'github']} size="2x" /> </Card.Link>
    <Card.Link href="#">Heroku</Card.Link>
  </Card.Body>
    </blockquote>
  </Card>
  
</CardColumns>


//             <CardDeck>

//   <Card>
//     <Card.Img variant="top" src={remote} />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>


//   <Card>
//     <Card.Img variant="top" src={burger} />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>


//   <Card>
//     <Card.Img variant="top" src={workout} />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>

//   <Card>
//     <Card.Img variant="top" src={workout} />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>



// </CardDeck>


        );
    }
}

export default Cards;