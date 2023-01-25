import React, {useContext} from 'react'
import styles from '../css/projectCard.module.css'
import {themeContext} from '../contexts/ThemeContext';


function ProjectCard({cardTitle, cardText, cardImg, linkpath, github, isNew}) {

    const {theme} = useContext(themeContext);

    return (
        <div className={`${styles.projectCard}`}>
            {isNew && 
            <div className={`${styles.newTag} new ${theme}`}>New!</div>
            }
            <div className={`${styles.projectTitle} title ${theme}`}>
                <h2 className={`${styles.projectName}`}>{cardTitle}</h2>
            </div>
            <div className={`${styles.projectInfo}`}>
                <div className={`${styles.infoContainer}`}>
                    <p className={`${styles.projectDescription}`}>{cardText}</p>
                    <div className={`${styles.cardCta}`}>
                        <a href={linkpath}>
                            <div className="cardCta">
                                Visit project
                            </div>
                        </a>
                        <a href={github}>
                            <div className="cardCta">
                                Check repository in Github
                            </div>
                        </a>
                    </div>
                </div>
                    <img  className={`${styles.projectPreview}`} src={cardImg} alt="Project preview" />
            </div>
        </div>
    )
}

export default ProjectCard

