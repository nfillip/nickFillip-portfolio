import './NavBar.css'
import {Link, useLocation} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import ContactForm from '../ContactForm/ContactForm'

function NavTab() {
    const currentPage = useLocation().pathname;
    return (<>
        <Navbar expand="lg" className = "navMainDiv navContainer monkey" id = "bootstrap-override-NavTab">
          <Container  className = "navContainer" >
            <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className = "navbar-dark" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link>
                <Link to = '/' className ="navItem">
                  {currentPage === '/'? (<u>Home</u>):(<>Home</>)}
                  </Link>
                </Nav.Link>
                <Nav.Link>
                <Link to = '/Projects' className = "navItem">{currentPage === '/Projects'? (<u>Projects</u>):(<>Projects</>)} </Link>
                
                </Nav.Link>
                <Nav.Link>
                <Link to = '/About' className = "navItem"> {currentPage === '/About'? (<u>About</u>):(<>About</>)} </Link>
                </Nav.Link>
                <Nav.Link>
                <Link to = '/WorkExperience' className = "navItem">{currentPage === '/Work'? (<u>Work-Experience</u>):(<>Work-Experience</>)} </Link>
                </Nav.Link>
                <Nav.Link>
                <Link to = '/Education' className = "navItem"> {currentPage === '/Education'? (<u>Education</u>):(<>Education</>)} </Link>
                </Nav.Link>
                <Nav.Link>
                <ContactForm />
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