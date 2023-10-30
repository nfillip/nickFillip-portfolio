import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import profilePic from "../../assets/images/mainImage/profileDarkBlue.jpg"
import './Home.css'

function Home() {
    return (
        <>
        <Container className="homeContainer" fluid >
            <Row className = "homeRow">
		        <Col lg = {5} md = {12}  className = "mainImageCol">
                <Image className = "profilePic" src={profilePic} fluid />
                </Col>
		        <Col lg = {7} md = {12}className = "d-flex align-items-start flex-column justify-content-center mainVerbiageCol"  >
                    <div className = "d-flex align-items-start flex-column justify-content-center homeVerbiageDiv">
                    <h1 className = "homeName"> &mdash; I'm Nick Fillip.</h1>
                    <h1 className = "homeNameTitle">Software Developer</h1>
                    <p className = "elevatorPitch">I'm a <u>chemical engineer</u> turned <u>software engineer</u>. I am passionate about my work and strive to collaborate with driven and engaged teams to build the best product possible!</p>
                    <a target = "_blank" href = "https://docs.google.com/document/d/1rE64RknFGj4CufIDCUFSaU_fK_mV6zbNbC2lEyJmH30/edit?usp=sharing"><Button className="homeResumeButton">My Resume</Button></a>
                    </div>
                </Col>
            </Row>

       </Container>
       </>
    )
}

export default Home