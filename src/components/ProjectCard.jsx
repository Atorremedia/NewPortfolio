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
                    <div className={`${styles.cardCtaContainer}`}>
                        <a className={`${styles.cardCta}  ${theme} cardCta ${styles.cardCta1}`} href={linkpath}>
                            <h3 className={`${styles.cardCtaText}`}>
                                Visit project
                            </h3>
                        </a>
                        <a className={`${styles.cardCta} ${theme} cardCta ${styles.cardCta2}`} href={github}>
                            <h3 className={`${styles.cardCtaText}`}>
                                Check repository in Github
                            </h3>
                        </a>
                    </div>
                </div>
                    <img  className={`${styles.projectPreview}`} src={cardImg} alt="Project preview" />
            </div>
        </div>
    )
}

export default ProjectCard

