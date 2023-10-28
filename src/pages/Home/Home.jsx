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
        <Container fluid className="homeContainer">
            <Row>
		        <Col md = {5} className = "d-flex justify-content-center align-items-center">
                <Image className = "profilePic" src={profilePic} fluid />
                </Col>
		        <Col md = {7} className = "d-flex align-items-start flex-column justify-content-center"  >
                    <div className = "d-flex align-items-start flex-column justify-content-center p-5 homeVerbiageDiv">
                    <h1 className = "homeName"> &mdash; I'm Nick Fillip.</h1>
                    <h1 className = "homeNameTitle">Software Developer</h1>
                    <p className = "elevatorPitch">I'm a chemical engineer turned software engineer. I am passionate about my work and strive to collaborate with driven and engaged teams to build the best product possible!</p>
                    <a target = "_blank" href = "https://docs.google.com/document/d/1rE64RknFGj4CufIDCUFSaU_fK_mV6zbNbC2lEyJmH30/edit?usp=sharing"><Button className="workResumeButton">My Resume</Button></a>
                    </div>
                </Col>
            </Row>

       </Container>
       </>
    )
}

export default Home