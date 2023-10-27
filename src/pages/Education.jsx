import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import utLogo from "../assets/images/educationImages/ut-logo-blue.jpg";
import utPic from "../assets/images/educationImages/ut.jpg";
import "../styles/Education.css";

function Education() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center imageDiv"
          >
              <Image src={utPic} fluid className = "utPic" />
       
          </Col>
          <Col
            md={7}
            className="d-flex align-items-start flex-column justify-content-center pe-5 verbiageCol"
          >
            <div className = "verbiageDi d-flex flex-column justify-content-center">
                <div className = "d-flex justify-content-center">
                    <Image src={utLogo} fluid className = "utlogo"/>
                </div>
            
              <h1>University of Denver</h1>
              <h2>Full Stack Web Development Certification (2023)</h2>
              <h1>University of Texas @Austin </h1>
              <h2>B.S. Chemical Engineering (2014-2018)</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Education;
