import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pugPic from "../assets/images/aboutImages/piper.jpg"
import '../styles/About.css'

function About() {
    return (
        <>
        <Container fluid>
            <Row>
		        <Col md = {5} className = "d-flex justify-content-center align-items-center">
                <Image className = "pugPic" src={pugPic} fluid />
                </Col>
		        <Col md = {7} className = "d-flex align-items-start flex-column justify-content-center"  >
                    <div className = "d-flex align-items-start flex-column justify-content-center p-5 verbiageDiv">
                    <ul> <u>My Links:</u>
                        <li className = "listItem">Github: <a target = "_blank" href = "https://github.com/nfillip">/nfillip</a></li>
                        <li>LinkedIn: <a target = "_blank" href = "https://www.linkedin.com/in/nicholas-fillip/">/nicholas-fillip/</a></li>
                        <li>Email: <a target = "_blank" href = "mailto:nick.m.fillip@gmail.com">nick.m.fillip@gmail.com</a></li>
                    </ul>
                    <ul> <u>Get to know me:</u>
                        <p>I like pugs, long walks on the beach, and playing volleyball.</p>
                    </ul>
                    </div>
                </Col>
            </Row>

       </Container>
       </>
    )
}

export default About