import React, { useRef } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import MoreProjectDetails from '../../components/MoreProjectDetails/MoreProjectDetails'
import BreakBar from '../../components/BreakBar/BreakBar'
import Slider from '../../components/Slider/Slider'
import { useEffect } from 'react'

const Projects = () => {

    const projectRef = useRef(null);
   
  
    const sectionRefs = {
     
      project: projectRef,
      
    };
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
     
  return (
    <>
      <NavBar name="Batoul" refs={sectionRefs} />
    <MoreProjectDetails/>
    <BreakBar/>
    <Slider/>
    </>
  )
}

export default Projects
