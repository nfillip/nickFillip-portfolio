import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useNavigate} from "react-router-dom"
import './ProjectCard.css'
function ProjectCard({project}) {
    const {title, about, highlightSkills, skills, image, website, imageLong, description, myRole, githubRepo} = project
    const navigate = useNavigate();
    const singleProjectPage = (project) => {
        navigate('/SingleProject', {state: project})
    
    }

  return (<>
    <Card className = "projectCardMain">

      <Card.Img variant="top" src= {image} className = "projectCardImage" />
      <Card.Body className = "projectCardBody">
        <Card.Title className = "projectsCardTitle">{title}</Card.Title>
        <Card.Text className = "projectsCardAbout">
          {about}
        </Card.Text>
       
          <Card.Text className="projectsCardAbout"> <u>Highlight Skills:</u><> </>
          {highlightSkills.map(skill => ( <>{skill}. </>
            ))}
            
          </Card.Text>
      
        {/* <Card.Text className="projectsCardAbout"> <u>Highlight Skills:</u> {skills[0]}, {skills[1]}, {skills[2]}, {skills[3]}, {skills[4]}, {skills[5]}
      </Card.Text> */}
        {website ? (<>
        <div className = "projectCardButtonDiv">
        <a href = {website} target = "_blank">
            <Button className = "projectCardBWeb"variant="primary">Go to website</Button>
        </a>
            <Button onClick = {() => singleProjectPage(project)}className = "projectCardBMore"variant="primary">Learn More</Button>

        </div>
        
        </>):(<><div className = "projectCardButtonDiv d-flex justify-content-end">
            <Button onClick = {() => singleProjectPage(project)}className = "projectCardBMore"variant="primary">Learn More</Button>
        </div></>)}
        
      </Card.Body>
    </Card>
    </>
  );
}

export default ProjectCard;