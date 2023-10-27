import {Link, useLocation} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/NavBar.css'
// const styles = {
//   nav: {
//     border: ".2rem solid red",
//     width: "100%"
//   },
//   name: {
//     fontSize: "4rem"
//   },
//   h1Main: {

//     fontSize: "6rem",
//     color: "white"
//   },
//   h2Main: {
//     fontSize: "2rem",
//     color: "black"
//   }
// }
function NavTab() {
    const currentPage = useLocation().pathname;
    return (<>
        <Navbar expand="lg" className = "navMainDiv" >
          <Container  className = "d-flex justify-content-end text-align-right" >
            <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className = "navbar-dark text-align-right justify-content-end" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link>
                <Link to = '/' className = {"navItem"}>Home </Link>
                </Nav.Link>
                <Nav.Link>
                <Link to = '/Projects' className = {"navItem"}>Projects </Link>
                </Nav.Link>
                <Nav.Link>
                <Link to = '/About' className = {"navItem"}> About </Link>
                </Nav.Link>
                <Nav.Link>
                <Link to = '/WorkExperience' className = {"navItem"}>Work-Experience </Link>
                </Nav.Link>
                <Nav.Link>
                <Link to = '/Education' className = {"navItem"}> Education </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>

        </>
      );
}



export default NavTab;