import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import workPic from "../assets/images/workImages/fsp.jpg";
import tyedye from "../assets/images/workImages/tyedye.jpg";
import pepsico from "../assets/images/workImages/pepsico.jpg";
import "../styles/Work.css";

function WorkExperience() {
  return (
    <>
      <Container>
        <Row>
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center imageCol"
          >
            <div className = "carouselDiv d-flex justify-content-center">
            <Carousel>
              <Carousel.Item>
              <Image className="pugPic" src={workPic} fluid />
              </Carousel.Item>
              <Carousel.Item>
              <Image className="pugPic" src={tyedye} fluid />
              </Carousel.Item>
              <Carousel.Item>
              <Image className="pugPic" src={pepsico} fluid />
              </Carousel.Item>
            </Carousel>
            </div>
          </Col>
          <Col
            md={7}
            className="d-flex align-items-start flex-column justify-content-center"
          >
            <div className="d-flex align-items-start flex-column justify-content-center p-5 verbiageDiv">
              <h1>Anheuser-Busch</h1>
              <h2>Fort Collins Brewery</h2>
              <p>
                I spent 5 years in a fast-paced manufacturing environment where
                I lead and empowered my team to improve operator safety, product
                quality, and production line efficiency through
                route-cause-analysis,and SCRUM events.
              </p>
              <ul>
                {" "}
                ROLES
                <li>(2023) Packaging Technical Engineer 1</li>
                <li>(2019-2022) Process Engineer Manager</li>
              </ul>
              <ul>
                SKILLS:
                <li>
                  Operation Management, Technical Problem Solving, Leadership,
                  SCRUM Master, Public Speaking, Empowering Teams, Driving KPIs{" "}
                </li>
              </ul>
              <Button className="resumeButton">My Resume</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WorkExperience;
