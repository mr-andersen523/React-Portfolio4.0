import React, { Component } from 'react';
import { Card, CardDeck, CardColumns} from "react-bootstrap";
import burger from '../images/burger.png'
import remote from '../images/remote.png'
import lab from '../images/lab.png'
import empteam from '../images/emp-team.png'
import empdirect from '../images/emp-direct.png'
import workout from '../images/workout.png'



class Cards extends Component {
    render() { 
        return (

<CardColumns>

          
  <Card className="text-center p-3">
    <Card.Img variant="top" src={remote} />
    <blockquote className="blockquote mb-0 card-body">
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
    </blockquote>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={workout} />
    <blockquote className="blockquote mb-0 card-body">
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
    </blockquote>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={empdirect} />
    <blockquote className="blockquote mb-0 card-body">
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
    </blockquote>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={burger} />
    <blockquote className="blockquote mb-0 card-body">
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
    </blockquote>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={empteam} />
    <blockquote className="blockquote mb-0 card-body">
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
    </blockquote>
  </Card>


  <Card className="text-center p-3">
  <Card.Img variant="top" src={lab} />
    <blockquote className="blockquote mb-0 card-body">
    <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
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