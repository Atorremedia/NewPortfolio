import React from 'react'
import styles from '../css/_presentation.module.css'

function Presentation({lightMode}) {
  return (
        <div className={`${styles.presentationCard} ${lightMode}`}>
          <h1 className={styles.mainTitle}>Hello world!</h1>
          <p className={styles.mainTitleEmoji}>🖐️</p>
          <div className={styles.presentationSubcontainer}>
            <img src="src/assets/vportrait.png" width="200px" alt="August Ollé profile image" />
            <div className={styles.presentationTextWrapper}>
              <p className={styles.salute}>My name is August Ollé. I am a frontend developer. I love to create while coding.</p>
              <p className={styles.typewriter}>Let's build something great together!</p>
            </div>
          </div>
        </div>
  )
}

export default Presentation