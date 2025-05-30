
import './ProjectCard.css'

const ProjectCard = ({projectImage , projectTitle, projectTools }) => {
  return (

    <div className='card-container'>
      <div className='img-container'><img src={projectImage}/></div>  
        <div className='project-info'> 
          <div className='projext-text-details'>
          <h2>{projectTitle}</h2>
          <p className='project-tools' >{projectTools}</p>
          </div>
        <img src="/assets/images/go-project.svg"/>
        </div>
      
    </div>


    
  )
}

export default ProjectCard
