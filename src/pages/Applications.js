import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import {Container, Col, Row} from "react-bootstrap";  
import zikirmatik from '../asset/zikirmatik.png';  
import hadis from "../asset/hadis.jpg";  
import pomodoro from "../asset/pomodoro.png";  
import deyim from "../asset/deyim.png";  
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Applications(){
    return(
        <Container style={{display:"flex",  flexWrap:"wrap"  }}>  
        <Col className="m-sm-3">  
        <Card style={{ height:"360px"}}  >
          <Card.Img  variant="top" src={zikirmatik} style={{width : "100px", marginLeft:"auto", marginRight:"auto", marginTop:"5px" }} />
          <Card.Body>
            <Card.Title style={{textAlign:"center"}}>Zikirmatik</Card.Title>
            <Card.Text style={{justifyContent:"center" }}>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </Col>

        <Col className="m-sm-3">
        <Card style={{ height:"360px"}}   >
          <Card.Img variant="top" src={hadis} style={{width : "100px", marginLeft:"auto", marginRight:"auto", marginTop:"5px" }}/>
          <Card.Body>
            <Card.Title style={{textAlign:"center" }}>Hadis Deryası</Card.Title>
            <Card.Text style={{justifyContent:"center" }}>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </Col>

        <Col className="m-sm-3">
        <Card style={{ height:"360px"}}   >
          <Card.Img variant="top" src={pomodoro} style={{width : "100px", marginLeft:"auto", marginRight:"auto", marginTop:"5px" }}/>
          <Card.Body>
            <Card.Title style={{textAlign:"center" }}>Pomodoro</Card.Title>
            <Card.Text style={{justifyContent:"center" }}>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </Col>

        <Col className="m-sm-3">
        <Card style={{ height:"360px"}}  >
          <Card.Img variant="top" src={deyim} style={{width : "100px", marginLeft:"auto", marginRight:"auto", marginTop:"5px" }}/>
          <Card.Body>
            <Card.Title style={{textAlign:"center" }}>Deyim ve Atasözleri</Card.Title>
            <Card.Text style={{justifyContent:"center" }}>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        </Col> 
      
        </Container>  
    )
}