import React, {useContext} from 'react'
import styles from '../css/projectsPresentation.module.css'
import {themeContext} from '../contexts/ThemeContext';
import projectCards from '../data/projectCards'
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
        />
    )
}



  return (
    <div className={`${styles.presentationContainer} ${theme}`}>
        <div className={`${styles.presentationCard} ${theme} pres`}>
          <h1 className={`${styles.mainTitle}  ${theme} presTitle`}>Projects</h1>
          {/* <p className={styles.mainTitleEmoji}>🖐️</p> */}
          <div className={`${styles.presentationSubcontainer} ${theme} presText`}>
            {/* <img src="src/assets/vportrait.png" width="200px" alt="August Ollé profile image" /> */}
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