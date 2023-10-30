import React from 'react';
import {Link,useLocation} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './SingleProject.css'
function SingleProject() {
    const location = useLocation();
    console.log(location)
    const {title, about, skills, imageLong, website, description, myRole, githubRepo} = location.state
  
    return (
        <>
        <Container fluid className = "singleProjectMain">
             <Row>
		        <Col lg = {5} md = {12} className = "d-flex justify-content-center align-items-center singleProjectImageDiv">
                <Image className = "singleImage"src={imageLong} fluid />
                </Col>
		        <Col lg = {7} md = {12} className = "d-flex align-items-start flex-column justify-content-center"  >
                    <div className = "d-flex align-items-start flex-column justify-content-center singleVerbiageDiv">
                        <h1 className = "singleProjectTitle">{title}</h1>
                        <ul className = "singleUl"><u>Description</u>
                            <li className = "singleLi">{description}</li>
                        </ul>
                        <ul className = "singleUl"> <u>Skills</u>
                            <li className = "singleLi">{skills.map(skill => (skill + " , "))}
                            </li>
                        </ul>
                        <ul className = "singleUl"> <u>My Role</u>
                            <p className = "singleLi">{myRole}</p>
                        </ul>
                        <div className = "singleButtonDiv">
                            <a href = {website} target = "_blank">
                                <Button className = "singleButtonW"variant="primary">Go to website</Button>
                            </a>
                            <a href = {githubRepo} target = "_blank">
                                <Button className = "singleButtonG"variant="primary">Github Repo</Button>
                            </a>
                        </div>
                        
                    </div>
                </Col>
            </Row>

       </Container>
       </>
    )
}

export default SingleProject