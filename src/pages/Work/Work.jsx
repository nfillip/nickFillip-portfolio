import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import workPic from "../../assets/images/workImages/fsp.jpg";
import tyedye from "../../assets/images/workImages/tyedye.jpg";
import pepsico from "../../assets/images/workImages/pepsico.jpg";
import "./Work.css";

function WorkExperience() {
  return (
    <>
      <Container fluid className = "workContainer">
        <Row>
          
          <Col
            md={5}
            className="d-flex justify-content-center align-items-center workImageCol"
          >
  
            <Image className = "workPics" src={workPic} fluid />
            {/* <Carousel>
              <Carousel.Item>
              <Image className = "workPics" src={workPic} fluid />
              </Carousel.Item>
              <Carousel.Item>
              <Image className = "workPics"  src={tyedye} fluid />
              </Carousel.Item>
              <Carousel.Item>
              <Image className = "workPics"  src={pepsico} fluid/>
              </Carousel.Item>
            </Carousel> */}

          </Col>
          <Col
            md={7}
            className="d-flex align-items-start flex-column justify-content-center workImageCol"
          >
            <div className="d-flex align-items-start flex-column justify-content-center p-5 workVerbiageDiv">
              <h1 className = "workCompany">Anheuser-Busch</h1>
              <h2 className = "workLocation">Fort Collins Brewery</h2>
              <p className = "workSum">
                I spent 5 years in a fast-paced manufacturing environment where
                I lead and empowered my team to improve operator safety, product
                quality, and production line efficiency through
                route-cause-analysis,and SCRUM events.
              </p>
              <ul className = "workUl">
                {" "}
                ROLES
                <li className = "workLi">(2023) Packaging Technical Engineer 1</li>
                <li className = "workLi">(2019-2022) Process Engineer Manager</li>
              </ul>
              <ul className = "workUl">
                SKILLS:
                <li className = "workLi">
                  Operation Management, Technical Problem Solving, Leadership,
                  SCRUM Master, Public Speaking, Empowering Teams, Driving KPIs{" "}
                </li>
              </ul>
              <a target = "_blank" href = "https://docs.google.com/document/d/1rE64RknFGj4CufIDCUFSaU_fK_mV6zbNbC2lEyJmH30/edit?usp=sharing"><Button className="workResumeButton">My Resume</Button></a>
              
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WorkExperience;
