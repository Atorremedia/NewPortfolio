import React from 'react'
import styles from '../css/projectCard.module.css'


function ProjectCard({cardTitle, cardText, cardImg, linkpath, github, isNew}) {


    
  return (
    <div className={`${styles.projectCard}`}>
        {isNew && 
        <div className={`${styles.newTag} new ${theme}`}>New!</div>
        }
        <div className={`${styles.projectTitle}`}>
            <h2 className={`${styles.projectName}`}>{cardTitle}</h2>
        </div>
        <div className={`${styles.projectInfo}`}>
            <p className={`${styles.projectDescription}`}>{cardText}</p>
            <img  className={`${styles.projectPreview}`} src={cardImg} alt="Project preview" />
        </div>
        <div>
            <a href={linkpath}>Visit project</a>
            <a href={github}>Check ropository in Github</a>
        </div>
    </div>
  )
}

export default ProjectCard

