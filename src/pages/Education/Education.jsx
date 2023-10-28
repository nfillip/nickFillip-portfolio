import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import utLogo from "../../assets/images/educationImages/ut-logo-blue.jpg";
import utPic from "../../assets/images/educationImages/ut.jpg";
import duLogo from "../../assets/images/educationImages/DU.svg";
import "./Education.css";

function Education() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center"
          >
              <Image src={utPic} fluid className ="utPic" />
       
          </Col>
          <Col
            md={7}
            className="d-flex align-items-start flex-column justify-content-center pe-5"
          >
            <div className = "eduVerbiageDi d-flex flex-column justify-content-center">
                <div className = "d-flex justify-content-around">
                    <Image src={utLogo} fluid className = "utlogo"/>
                    <Image src={duLogo} fluid className = "utlogo"/>
                </div>
            
              <h1 className = "schoolName">University of Denver</h1>
              <h2 className = "degreeName">Full Stack Web Development Certification (2023)</h2>
              <h1 className = "schoolName">University of Texas @Austin </h1>
              <h2 className = "degreeName">B.S. Chemical Engineering (2014-2018)</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Education;
