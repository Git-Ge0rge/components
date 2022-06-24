import React from 'react'
import "./WorkCard.css"
import { NavLink } from "react-router-dom"
import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.png"
import project3 from "../../assets/project3.png"

// add hover animation for details

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={project1} alt="Project 1" />
                <h2 className='project-title'> Project Title </h2>
                <div className="project-details">
                  <p> This is text.</p>
                  <div className="project-btns">
                    <NavLink to="addURL" className="btn"> 
                      View 
                    </NavLink>
                    <NavLink to="addURL" className="btn">
                      Source 
                    </NavLink>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard