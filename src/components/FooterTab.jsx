import {Link, useLocation} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import jsIcon from "../assets/icons/node.png"
import expressIcon from "../assets/icons/express-js.png"
import mongoDB from "../assets/icons/mongoDB.png"
import mySQL from "../assets/icons/mysql.png"
import reactLogo from "../assets/icons/reactLogo.png"
import graphQL from "../assets/icons/graphQL.png"
import '../styles/FooterBar.css';
function FooterTab() {
    const currentPage = useLocation().pathname;
    return (<>
          <Container fluid className = "footerContainer" >
            <Row className = "justify-content-end me-4">
              <Col lg = {1} md = {2} sm = {4} xs ={4}  className = "iconCol" >
              <a href = "https://nodejs.org/en/about"> <Image src = {reactLogo} className = "iconImage" /></a></Col>
              <Col lg = {1} md = {2} sm = {4} xs ={4} className = "iconCol" >
              <a href = "https://nodejs.org/en/about"> <Image src = {jsIcon} className = "iconImage" /></a>
              </Col>
              <Col lg = {1} md = {2} sm = {4} xs ={4} className = "iconCol" >
              <a href = "https://www.mongodb.com/"> <Image src = {mongoDB} className = "iconImage" /></a>
              </Col>
              <Col lg = {1} md = {2} sm = {4} xs ={4} className = "iconCol">
              <a href = "https://www.mysql.com/"> <Image src = {mySQL} className = "iconImage" /></a>
              </Col>
              <Col lg = {1} md = {2} sm = {4} xs ={4}  className = "iconCol" >
              <a href = "https://expressjs.com/"> <Image src = {expressIcon} className = "iconImage" /></a>
              </Col>
              <Col lg = {1} md = {2} sm = {4}xs ={4} className = "iconCol" >
              <a href = "https://graphql.org/"> <Image src = {graphQL} className = "iconImage" /></a>
              </Col>
            </Row>
            <div>
             
              
              
              
              
              
            </div>
          </Container>
        </>
      );
}



export default FooterTab;