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
import snifLong from '../../assets/images/projectsImages/sniflong.jpg'

//vertical images
import devRowLong from '../../assets/images/projectsImages/devRowLong.jpg';
import hpLong from '../../assets/images/projectsImages/hplong.jpg'
import portfolioLong from '../../assets/images/projectsImages/portfoliolong.jpg'
import socialLong from '../../assets/images/projectsImages/socialnetlong.jpg'
import noteTakeLong from '../../assets/images/projectsImages/note-takelong.jpg';
import quizLong from '../../assets/images/projectsImages/quizlong.jpg'
import focoFun from '../../assets/images/projectsImages/focofun.jpg'
import focoFunLong from '../../assets/images/projectsImages/focofunlong.jpg'
//local CSS
import "./Project.css";

const cardInfo = [
    {   title: 'FoCo Fun',
        about: "(Full Stack) Fort Collins activity review and social networking site.",
        highlightSkills: ['MongoDB', 'Express', 'React', 'Node', 'GraphQL', 'MaterialUI'],
        skills: ['MongoDB', 'Express', 'React', 'Node', 'GraphQL', 'MaterialUI', 'bCrypt', 'JWT Authentication' ],
        image: focoFun,
        imageLong: focoFunLong,
        website: "https://foco-fun-ea270e6a24d7.herokuapp.com/",
        description: "(Full Stack) Fort Collins activity review and social networking site. In this Yelp clone, you'll post, like, save, blog, make friends, live text chat",
        myRole: "Solo App",
        githubRepo: "https://github.com/nfillip/fort-collins-top-todos"
    },
    {   title: 'Snif',
        about: '(Full Stack) - Tinder For Dogs/playdates',
        highlightSkills: ['MongoDB', 'Express', 'React', 'Node', 'GraphQL', 'Tailwind'],
        skills: ['MongoDB','Express', 'React', 'Node', 'GraphQL', 'Tailwind', 'bCrypt', 'JWT Authentication','JavaScript', 'CSS', 'HTML', 'Git'],
        image: snif,
        imageLong: snifLong,
        website: "https://stormy-mesa-49272-df30e734d644.herokuapp.com/",
        description: "Match with other users and their pets to grant chat access to then allow for play-dates/meetups.",
        myRole: "Full Stack - server connection, resolver/typdefs GraphQL, Chat page, front end styling",
        githubRepo: "https://github.com/nlad218/dog-dating-app"
    },
    {   title: 'Dev Row Records',
        about: '(Full Stack) Mock record label',
        highlightSkills:  ['SQL', 'Express', 'Node', 'Sequelize', 'Bootstrap'],
        skills: ['SQL', 'Express', 'Node', 'Sequelize', 'Bootstrap', 'bCrypt', 'JavaScript', 'CSS', 'HTML', 'Git'],
        image: devRow,
        imageLong: devRowLong,
        website: "https://dev-row-records-63d750921ea0.herokuapp.com/",
        description: "Welcome to the Dev Row Records online music platform, where you can discover and support the talented artists represented by our record label. This platform provides an interactive and engaging experience for users to explore artists, albums, merchandise, and more.",
        myRole: "Full Stack - handlebars, CSS, express routes",
        githubRepo: "https://github.com/PRich57/dev-row-records"

    },
    {   title: 'Harry Potter',
        about: '(Front End) Harry Potter fanpage - CSS Showcase!',
        highlightSkills: ['CSS', 'JavaScript', 'HTML', 'jQuery', 'jQueryUI'],
        skills: ['CSS', 'JavaScript', 'HTML', 'jQuery', 'jQueryUI'],
        image: harryPotter,
        imageLong: hpLong,
        website: "https://nfillip.github.io/harrypotter-fanpage/",
        description: "As a Harry Potter fanatic, I want to access character information, test my Harry Potter knowledge, and see the weather in different parts of the Harry Potter universe so that I am prepared for when I get my Hogwarts letter.",
        myRole: "Sole Creater of the Quiz, bootstrap layout, CSS styling, popup-ad",
        githubRepo: "https://github.com/nfillip/harrypotter-fanpage"
    },
    {   title: 'My Portfolio',
        about: "(Full Stack) - Take a look at the guts; I'm proud of it!",
        highlightSkills: ['React', 'Node', 'Bootstrap'],
        skills: ['React', 'Node', 'JavaScript', 'Bootstrap', 'CSS'],
        image: myPortfolio,
        imageLong: portfolioLong,
        website: "https://nick-fillip-portfolio.netlify.app/",
        description: "Welcome to the Dev Row Records online music platform, where you can discover and support the talented artists represented by our record label. This platform provides an interactive and engaging experience for users to explore artists, albums, merchandise, and more.",
        myRole: "Solo App",
        githubRepo: "https://github.com/nfillip/nickFillip-portfolio"
    }, 
    {   title: 'Note Taker',
        about: '(Full Stack) - Note taking website',
        highlightSkills: ['Express', 'Node', 'JavaScript'],
        skills: ['Express', 'Node', 'JavaScript', 'CSS'],
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
