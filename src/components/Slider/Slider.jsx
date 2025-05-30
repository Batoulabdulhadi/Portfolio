
import React, { useState } from "react";
import './Slider.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Link } from "react-router-dom";


const Slider = () => {
    
  const [count, setCount] = useState(0);
  const slides =
  [{
    projectImage:'/assets/images/EduePressBlue.png',
      projectTitle:"EduPress Project",
       projectTools:"Html-Css3-Vanilla javscript",
       id:1
  }
,
{
  projectImage:"/assets/images/blogsBlue.png",
  projectTitle:"Blogs Project",
   projectTools:"Html-Css3-Vanilla React",
   id:2
},
{
  projectImage:"/assets/images/toDoAppBlue.png",
  projectTitle:"To Do App",
   projectTools:"Html-Css3-javscript",
   id:3
},
{
  projectImage:"/assets/images/traveProject.png",
  projectTitle:"manage Post",
   projectTools:"Html-Css3-Vanilla javscript",
   id:4
},
{
  projectImage:"/assets/images/skiingBlue.png",
  projectTitle:"Skiing Project",
   projectTools:"Html-Css3-Vanilla ",
   id:5
},
{
  projectImage:"/assets/images/cochStoreBlue.png",
  projectTitle:"Coche Project Project",
   projectTools:"Html-Css3-Vanilla javscript",
   id:6
},
]
  const slidesToShow = 3;
  const maxIndex = slides.length - slidesToShow;

  const nextSlide = () => {
    setCount((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <div className="slider-container" style={{ overflow: "hidden", width: "100%", position: "relative" }}>
      <div className='hader-slider'>
        <div className='header-text-slider'>
          <div className="subject">Portfolio</div>
          <h1>
            The Best <span>Projects</span>
          </h1>
        </div>
        <div className="slider-btns">
          <div className="back-btn slider-btn" onClick={prevSlide}>
            <SlArrowLeft className="slid-arrow back" />
          </div>
          <div className="next-btn slider-btn" onClick={nextSlide}>
            <SlArrowRight className="slid-arrow after" />
          </div>
        </div>
      </div>

      <div
        className="slider"
        style={{
          paddingTop:"50px",
          display: "flex",
          gap:"30px",
          paddingRight:"70px",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${count * (100 / slidesToShow)}%)`,
        }}
      >
        {slides.map((slide , id) => (
          <div
            key={slide.id}
            className="slide"
            style={{
              flex: `0 0 ${100 / slidesToShow}%`,
             
            }}
          >
             <Link  onClick={() => window.scrollTo(0, 0)} to={`/project/${slide.id}`}  key={slide.id}> <ProjectCard key={id} projectImage={slide.projectImage} projectTitle={slide.projectTitle} projectTools={slide.projectTools} /></Link>
        
    
        
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

