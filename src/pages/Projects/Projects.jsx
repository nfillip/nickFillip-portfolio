//component import
import ProjectCard from '../../components/projectCard/projectCard';

//react-bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

//horizontal images
import devRow from '../../assets/images/projectsImages/devRow.jpg'
import harryPotter from '../../assets/images/projectsImages/harryPotter.jpg'
import myPortfolio from '../../assets/images/projectsImages/portfolio.jpg'
import socialMediaDB from '../../assets/images/projectsImages/social-network.jpg'
import noteTaker from '../../assets/images/projectsImages/note-taker.jpg'
import jsQuiz from '../../assets/images/projectsImages/javascriptQuiz.jpg'
import snif from '../../assets/images/projectsImages/snif.jpg'
import snifLong from '../../assets/images/projectsImages/snifLong.jpg'

//vertical images
import devRowLong from '../../assets/images/projectsImages/devRowLong.jpg';
import hpLong from '../../assets/images/projectsImages/hplong.jpg'
import portfolioLong from '../../assets/images/projectsImages/portfoliolong.jpg'
import socialLong from '../../assets/images/projectsImages/socialnetlong.jpg'
import noteTakeLong from '../../assets/images/projectsImages/note-takelong.jpg';
import quizLong from '../../assets/images/projectsImages/quizlong.jpg'
//local CSS
import "./Project.css";

const cardInfo = [
    {   title: 'Snif',
        about: '(Full Stack) - Tinder For Dogs/playdates',
        skills: ['REACT', 'GraphQL', 'Tailwind CSS','express', 'node.js', 'javaScript', 'CSS', 'HTML', 'Git'],
        image: snif,
        imageLong: snifLong,
        website: "https://stormy-mesa-49272-df30e734d644.herokuapp.com/",
        description: "Match with other users and their pets to grant chat access to then allow for play-dates/meetups.",
        myRole: "Full Stack - server connection, resolver/typdefs GraphQL, Chat page, front end styling",
        githubRepo: "https://github.com/nlad218/dog-dating-app"
    },
    {   title: 'Dev Row Records',
        about: '(Full Stack) Mock record label',
        skills: ['express.js', 'mySQL', 'sequelize', 'node.js', 'javaScript', 'CSS', 'HTML', 'Git'],
        image: devRow,
        imageLong: devRowLong,
        website: "https://dev-row-records-63d750921ea0.herokuapp.com/",
        description: "Welcome to the Dev Row Records online music platform, where you can discover and support the talented artists represented by our record label. This platform provides an interactive and engaging experience for users to explore artists, albums, merchandise, and more.",
        myRole: "Full Stack - handlebars, CSS, express routes",
        githubRepo: "https://github.com/PRich57/dev-row-records"

    },
    {   title: 'Harry Potter',
        about: '(Front End) Harry Potter fanpage - CSS Showcase!',
        skills: ['CSS', 'javaScript', 'HTML'],
        image: harryPotter,
        imageLong: hpLong,
        website: "https://nfillip.github.io/harrypotter-fanpage/",
        description: "As a Harry Potter fanatic, I want to access character information, test my Harry Potter knowledge, and see the weather in different parts of the Harry Potter universe so that I am prepared for when I get my Hogwarts letter.",
        myRole: "Sole Creater of the Quiz, bootstrap layout, CSS styling, popup-ad",
        githubRepo: "https://github.com/nfillip/harrypotter-fanpage"
    },
    {   title: 'My Portfolio',
        about: "(Full Stack) - Take a look at the guts; I'm proud of it!",
        skills: ['REACT', 'node.js', 'CSS'],
        image: myPortfolio,
        imageLong: portfolioLong,
        website: "https://nick-fillip-portfolio.netlify.app/",
        description: "Welcome to the Dev Row Records online music platform, where you can discover and support the talented artists represented by our record label. This platform provides an interactive and engaging experience for users to explore artists, albums, merchandise, and more.",
        myRole: "Solo App",
        githubRepo: "https://github.com/nfillip/nickFillip-portfolio"
    }, 
    {   title: 'Social Network Database',
        about: '(Back End) - Display my proficiency in mongoDB',
        skills: ['mongoDB', 'express.js', 'node.JS'],
        image: socialMediaDB,
        imageLong: socialLong,
        website: null,
        description: "Back End application that allows for database manipulation through mongoDB, mongoose, compass.",
        myRole: "Solo App",
        githubRepo: "https://github.com/nfillip/social-network-mongoDB"
    },
    {   title: 'Note Taker',
        about: '(Full Stack) - Note taking website',
        skills: ['express.js', 'node.js', 'javaScript'],
        image: noteTaker,
        imageLong: noteTakeLong,
        website: "https://note-take-express-js-8f46d967182f.herokuapp.com/",
        description: "Program that utilizes express.js and shipped modules to take user inputs and display them as notes through modularized file paths.",
        myRole: "Solo App",
        githubRepo: "https://github.com/nfillip/note-take-express.js"
    },
    
]

function Projects() {
  return (
    <>
      <Container fluid className = "projectContainer">
        <div className = "projectsTitleDiv">
            <h1 className = "projectsTitle">My Projects</h1>
        </div>
        
        <Row>
            {cardInfo.map(project => (
            <Col sm = {12}md = {6} lg = {4} className = "projectCardCol">
                <ProjectCard project = {project} className = "projectCardMain"/>
            </Col>
            )
            )}
        </Row>
      </Container>
    </>
  );
}

export default Projects;
