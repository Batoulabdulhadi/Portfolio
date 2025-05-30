import { useParams } from 'react-router-dom';
import './MoreProjectDetails.css'
const lastProjects =[{
  projectImage:'/public/assets/images/EduePressBlue.png',
    projectTitle:"EduPress Project",
    projectDate:"5/10/2024"  ,
    projectDescription:"edupress is an online learning platform offering high quality courses across various fields like technology business and languages with expert instructors and flexible learning tools edupress helps you grow at your own pace learn anytime anywhere and earn certificates that showcase your skills ",
    projectLanguage:"Html-Css3-VanillaJavscript",
    projectFramework:"Bootstrap",
    projectLibraries:"React",
    repoProject:"https://github.com/Batoulabdulhadi/EduPress_website" ,
    demoProject:"https://batoulabdulhadi.github.io/EduPress_website/",
     id:1
}
,
{
projectImage:"/public/assets/images/blogsBlue.png",
projectTitle:"Blogs Project",
projectDate:"6/10/2021"  ,
projectDescription:"A clean and responsive blog front-end layout featuring post previews with images, titles, and short descriptions. Includes search, category filtering, and a user-friendly reading experience across all devices.",
projectLanguage:"Html-Css3-VanillaJavscript",
projectFramework:"Bootstrap",
projectLibraries:"React",
repoProject:"https://github.com/Batoulabdulhadi/EduPress_website" ,
demoProject:"https://batoulabdulhadi.github.io/EduPress_website/",
 id:2
},
{
projectImage:"/public/assets/images/toDoAppBlue.png",
projectTitle:"To Do App",
projectDate:"6/9/2024"  ,
projectDescription:"A simple and interactive To-Do list application built with JavaScript. Users can add, delete, and mark tasks as completed. The app updates in real-time and stores tasks locally using the browser's localStorage for data persistence.",
projectLanguage:"Html-Css3-VanillaJavscript",
projectFramework:"Bootstrap",
projectLibraries:"React",
repoProject:"https://github.com/Batoulabdulhadi/EduPress_website" ,
demoProject:"https://batoulabdulhadi.github.io/EduPress_website/",
 id:3
},
{
projectImage:"/public/assets/images/traveProject.png",
projectTitle:"travel project ",
projectDate:"8/1/2023",
projectDescription:"A responsive travel booking form built with HTML, CSS, and JavaScript. Users can enter personal details, select destinations, travel dates, and preferences. Designed with a user-friendly layout to enhance the booking experience.",

 projectLanguage:"Html-Css3-VanillaJavscript",
projectFramework:"Bootstrap",
projectLibraries:"React",
repoProject:"https://github.com/Batoulabdulhadi/EduPress_website" ,
demoProject:"https://batoulabdulhadi.github.io/EduPress_website/",
 id:4
},
{
projectImage:"/public/assets/images/skiingBlue.png",
projectTitle:"Skiing Project",
projectDate:"24/6/2022",
projectDescription:'A modern and responsive front-end website for a skiing resort or service. It features high-quality visuals, information about ski packages, slopes, rentals, and booking options. Designed to provide an engaging and user-friendly experience across all devices.',
projectLanguage:"Html-Css3-VanillaJavscript",
projectFramework:"Bootstrap",
projectLibraries:"React",
repoProject:"https://github.com/Batoulabdulhadi/EduPress_website" ,
demoProject:"https://batoulabdulhadi.github.io/EduPress_website/",
 id:5
},
{
projectImage:"/public/assets/images/cochStoreBlue.png",
projectTitle:"Coche store Project ",
projectDate:"24/6/2022",
projectDescription:"A sleek and responsive front-end website for a car dealership. It showcases car listings with images, prices, and specifications. Users can browse, filter, and view detailed information about each vehicle in an intuitive and modern layout.",
projectLanguage:"Html-Css3-VanillaJavscript",
projectFramework:"Bootstrap",
projectLibraries:"React",
repoProject:"https://github.com/Batoulabdulhadi/EduPress_website" ,
demoProject:"https://batoulabdulhadi.github.io/EduPress_website/", id:6
},
]
const MoreProjectDetails = () => {
  const { id } = useParams();
  const project = lastProjects.find((c) => c.id === parseInt(id));
  return (
    <div className='container'>
        <div className='project-details'>
            <img className="project-img" src={project.projectImage}/>
            <div  className='more-project-details'>
            <div className='project-ifo-gorepo'>
            <div className='project-details-date-title'>
                <h1>{project.projectTitle}</h1>
                <p>{project.projectDate}</p>
            </div>
            <a href="{project.demoProject}" target='_blank'><img src="/public/assets/images/go-project.svg"/> </a>
            </div>
          <p className='details-text-info'>{project.projectDescription}</p>
          <div className='language-libraries-framework'>
          <p>Basic Languages : <span>{project.projectLanguage} </span> </p>
          <p>Framework : <span>{project.projectFramework}</span> </p>
          <p>Libraries : <span>{project.projectLibraries}</span> </p>
          </div>
          <button className='primary-btn repo-btn'><a href="{project.repoPoject}" target='_blank' className='git-hub-link'>Github Repo</a></button>
            </div>
          
       
        </div>
      
    </div>
  )
}

export default MoreProjectDetails
