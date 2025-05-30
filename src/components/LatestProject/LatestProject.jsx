import { Link } from 'react-router-dom';
import HeadTitleSec from '../HeadTitleSec/HeadTitleSec';
import ProjectCard from '../ProjectCard/ProjectCard';
import './LatestProject.css'

const LatestProject = ({educationRef}) => {
  
  const lastProjects =[{
    projectImage:'/public/assets/images/EduePressBlue.png',
      projectTitle:"EduPress Project",
       projectTools:"Html-Css3-Vanilla javscript",
       id:1
  }
,
{
  projectImage:"/public/assets/images/blogsBlue.png",
  projectTitle:"Blogs Project",
   projectTools:"Html-Css3-Vanilla React",
  
   id:2
},
{
  projectImage:"/public/assets/images/toDoAppBlue.png",
  projectTitle:"To Do App",
   projectTools:"Html-Css3-javscript",

   id:3
},
{
  projectImage:"/public/assets/images/traveProject.png",
  projectTitle:"manage Post",
   projectTools:"Html-Css3-Vanilla javscript",

   id:4
},
{
  projectImage:"/public/assets/images/skiingBlue.png",
  projectTitle:"Skiing Project",
   projectTools:"Html-Css3-Vanilla ",

   id:5
},
{
  projectImage:"/public/assets/images/cochStoreBlue.png",
  projectTitle:"Coche Project Project",
   projectTools:"Html-Css3-Vanilla javscript",

   id:6
},
]
  return (
    <div>
      <HeadTitleSec titleSec="Portfolio"  titleDetails="My Creative Works Latest " spanWord="Projects"  btnSub="View Github" btnImage="/public/assets/images/arrow-up-btn-icon.svg"/>
    <div className='container-projects' ref={educationRef}>
      <div className='cards-box'>
      {lastProjects?.map((item)=>{
     return  (<Link to={`/project/${item.id}`}  key={item.id}>
          <ProjectCard  projectImage={item.projectImage} projectTitle={item.projectTitle} projectTools={item.projectTools} />
          </Link>
        ) 
     })}

      </div>
    </div>
    </div>
  )
}

export default LatestProject
