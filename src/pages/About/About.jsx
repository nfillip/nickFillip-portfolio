import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pugPic from "../../assets/images/aboutImages/piper.jpg"
import './About.css'

function About() {
    return (
        <>
        <Container fluid className = "pageMainContainer">
            <Row>
		        <Col lg = {5} className = "d-flex justify-content-center flex-column align-items-center">
                    <h1 className = "aboutHide">About Me</h1>
                <Image className = "pugPic" src={pugPic} fluid />
                </Col>
		        <Col lg = {7} className = "d-flex align-items-start flex-column justify-content-center"  >
                    <div className = "d-flex align-items-start flex-column justify-content-center p-3 aboutVerbiageDiv">
                    <ul className = "aboutUl"> <u>My Links:</u>
                        <li className = "aboutListItem">Github: <a  className = "aboutAnchor" target = "_blank" href = "https://github.com/nfillip">/nfillip</a></li>
                        <li className = "aboutListItem"> LinkedIn: <a  className = "aboutAnchor" target = "_blank" href = "https://www.linkedin.com/in/nicholas-fillip/">/nicholas-fillip/</a></li>
                        <li className = "aboutListItem">Email: <a className = "aboutAnchor"target = "_blank" href = "mailto:nick.m.fillip@gmail.com">nick.m.fillip@gmail.com</a></li>
                    </ul>
                    <ul className = "aboutUl"> <u>Get to know me:</u>
                        <p className = "aboutP">I am very hard working, a great team player and work efficiently under pressure. I love pugs, hiking, volleyball, and skiing. A perfect day for me is spending time with friends or family while doing an activity or sport we all enjoy.</p>
                    </ul>
                    </div>
                </Col>
            </Row>

       </Container>
       </>
    )
}

export default About