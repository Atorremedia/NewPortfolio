import React from 'react'
import styles from '../scss/components/_pres.module.scss'


function Presentation() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.presContainer}>
        <div className={styles.option1}>
        </div>
        <div className={styles.presCard}>
          <h1>Hi there!</h1>
          <div className={styles.presSubcontainer}>
            <img src="src/assets/august.webp" width="200px" alt="August Ollé profile image" />
            <p className={styles.salute}>My name is August Ollé. I am a frontend developer skilled in HTML, CSS, Javascript and React, as main technologies. I am always pushing my limits.<br/><br/>Thanks for visiting me!</p>
          </div>
        </div>
        <div className={styles.option2}>
        </div>
      </div>
      <div className={styles.option3}>
      </div>
    </div>
  )
}

export default Presentation