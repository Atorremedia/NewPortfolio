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
            <div className={styles.profileContainer}>
              <img className={styles.profileBackground} src="/assets/profileBackground.jpg" width="180px" />
              <img className={styles.profilePic} src="/assets/profilePic.gif" width="170px" alt="August Ollé profile image" />
            </div>
            <div className={`${styles.presentationTextWrapper} ${theme}`}>
              <p className={styles.salute}>My name is <strong>August Ollé</strong>. I am a frontend developer and I love to use code to create. Welcome to my portfolio.</p>
              <p className={styles.typewriter}>Let's build something great together!</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Presentation