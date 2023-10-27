import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import profilePic from "../assets/images/mainImage/profileDarkBlue.jpg"
import '../styles/Home.css'

function Home() {
    return (
        <>
        <Container fluid className = "mainMainContainer">
            <Row>
		        <Col md = {5} className = "d-flex justify-content-center align-items-center">
                <Image className = "profilePic" src={profilePic} fluid />
                </Col>
		        <Col md = {7} className = "d-flex align-items-start flex-column justify-content-center"  >
                    <div className = "d-flex align-items-start flex-column justify-content-center p-5 verbiageDiv">
                    <h1 className = "homeName"> &mdash; I'm Nick Fillip.</h1>
                    <h1 className = "homeNameTitle">Software Developer</h1>
                    <p>I'm a chemical engineer turned software engineer. I am passionate about my work and strive to work with driven and engaged teams to build the best product possible!</p>
                    </div>
                </Col>
            </Row>

       </Container>
       </>
    )
}

export default Home