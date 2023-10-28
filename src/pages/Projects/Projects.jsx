import projectCard from '../../components/projectCard/projectCard';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import Card from 'react-bootstrap/Card';
// import utLogo from "../../assets/images/educationImages/ut-logo-blue.jpg";
// import utPic from "../../assets/images/educationImages/ut.jpg";
// import duLogo from "../../assets/images/educationImages/DU.svg";
import "./Project.css";



const cardInfo = [
    {   title: 'Dev Row Records',
        about: 'Mock record label website displaying its clients products',
        skills: 'express.js, mySQL, sequelize, node.js',
        image: 'asdfa'
    },
    {   title: 'Social Network MongoDb',
        about: 'Mock record label website displaying its clients products',
        skills: 'express.js, mySQL, sequelize, node.js',
        image: 'asdfa'
    },
    {   title: 'e-commerce',
        about: 'Mock record label website displaying its clients products',
        skills: 'express.js, mySQL, sequelize, node.js',
        image: 'asdfa'
    },
    {   title: 'Harry Potter',
        about: 'Mock record label website displaying its clients products',
        skills: 'express.js, mySQL, sequelize, node.js',
        image: 'asdfa'
    },
    {   title: 'Project 3',
        about: 'Mock record label website displaying its clients products',
        skills: 'express.js, mySQL, sequelize, node.js',
        image: 'asdfa'
    },
    {   title: 'Work Day Scheduler',
        about: 'Mock record label website displaying its clients products',
        skills: 'express.js, mySQL, sequelize, node.js',
        image: 'asdfa'
    },
]

function Projects() {
  return (
    <>
      <Container fluid>
        <h1>My Projects</h1>
        <Row>
          <Col>
            <projectCard />
          </Col>
          <Col>
            <projectCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
