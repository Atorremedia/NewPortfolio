import React, {useContext} from 'react'
import styles from '../css/projectsPresentation.module.css'
import {themeContext} from '../contexts/ThemeContext';
import projectCards from '../../public/data/projectCards'
import ProjectCard from './ProjectCard'

function ProjectsPresentation() {

  const {theme} = useContext(themeContext);
  
  const displayedCards = [];

  for(let i = 0; i<projectCards.cards.length; i++){
    displayedCards.push(
        <ProjectCard
        className={`${styles.card} projectCards${i}`}
        key={projectCards.cards[i].cardNumber}
        number={projectCards.cards[i].cardNumber}
        cardTitle={projectCards.cards[i].title}
        cardText={projectCards.cards[i].text}
        cardImg={projectCards.cards[i].cardImg}
        linkpath={projectCards.cards[i].linkpath}
        github={projectCards.cards[i].github}
        isNew={projectCards.cards[i].isNew}
        tags={projectCards.cards[i].tags}
        />
    )
}

  return (
    <div className={`${styles.presentationContainer} ${theme}`}>
        <div className={`${styles.presentationCard} ${theme} pres`}>
          <h1 className={`${styles.mainTitle}  ${theme} presTitle`}>Projects</h1>
          <div className={`${styles.presentationSubcontainer} ${theme} presText`}>
            <div className={`${styles.presentationTextWrapper} ${theme}`}>
              <p className={styles.introText}>These are some of the frontend developement projects I have been working on. This list is being updated frequently.<br/>Feel free to navigate each project and review its repository.</p>
            </div>
          </div>
        </div>
        <div className={`${styles.cardsContainer}`}>
          {displayedCards}
        </div>
      </div>
  )
}

export default ProjectsPresentation