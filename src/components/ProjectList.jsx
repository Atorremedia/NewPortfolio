import React, {useContext} from 'react';
import styles from '../css/_presentation.module.css'
import {themeContext} from '../contexts/ThemeContext';
import projectCards from '../../public/data/projectCards'
import ProjectCard from './ProjectCard'

function ProjectList() {

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
        <div className={`${styles.cardsContainer}`}>
          {displayedCards}
        </div>
      </div>
  )
}

export default ProjectList