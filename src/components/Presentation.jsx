import React, {useContext} from 'react'
import styles from '../css/_presentation.module.css'
import {themeContext} from '../contexts/ThemeContext';


function Presentation() {

  const {theme} = useContext(themeContext);

  return (
    <div className={`${styles.presentationContainer} ${theme}`}>
        <div className={`${styles.presentationCard} ${theme} pres`}>
          <h1 className={`${styles.mainTitle}  ${theme} presTitle`}>Hello world!</h1>
          <p className={styles.mainTitleEmoji}>🖐️</p>
          <div className={`${styles.presentationSubcontainer} ${theme} presText`}>
            <img src="/assets/vportrait.png" width="200px" alt="August Ollé profile image" />
            <div className={`${styles.presentationTextWrapper} ${theme}`}>
              <p className={styles.salute}>My name is <strong>August Ollé</strong>.<br/> I am a frontend developer.<br/>Welcome to my portfolio.</p>
              <p className={styles.typewriter}>Let's build something great together!</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Presentation