import React, {useContext} from 'react'
import styles from '../css/pagePresentation.module.css'
import {themeContext} from '../contexts/ThemeContext';

function PagePresentation({view}) {

  const {theme} = useContext(themeContext);

  if (view === 'projects') {

    return (
      <div className={`${styles.presentationContainer} ${theme}`}>
          <div className={`${styles.presentationCard} ${theme} pres`}>
            <h1 className={`${styles.mainTitle}  ${theme} presTitle`}>Projects</h1>
            <div className={`${styles.presentationSubcontainer} ${theme} presText`}>
              <div className={`${styles.presentationTextWrapper} ${theme}`}>
                <p className={styles.introText}>These are some of the web developement projects I have been working on lately. This list is being updated frequently.<br/>Feel free to navigate each project and review its repository.</p>
              </div>
            </div>
          </div>
        </div>
    )
  } else if (view === 'about') {

    return (
      <div className={`${styles.presentationContainer} ${theme}`}>
          <div className={`${styles.presentationCard} ${theme} pres`}>
            <h1 className={`${styles.mainTitle}  ${theme} presTitle`}>About me</h1>
            <div className={`${styles.presentationSubcontainer} ${theme} presText`}>
              <div className={`${styles.presentationTextWrapper} ${theme}`}>
                <p className={styles.introText}>Frontend Developer. <br />Coding since kid, now I use code to create well designed interfaces and useful applications. </p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default PagePresentation