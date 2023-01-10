import React from 'react'
import styles from '../css/_pres.module.css'

function Presentation() {
  return (
        <div className={styles.presCard}>
          <h1 className={styles.mainTitle}>Hi there! 🖐️ </h1>
          <div className={styles.presSubcontainer}>
            <img src="src/assets/august.webp" width="200px" alt="August Ollé profile image" />
            <p className={styles.salute}>My name is August Ollé. I am a frontend developer. I love to create while coding.<br/> Let's build something great together!</p>
          </div>
        </div>
  )
}

export default Presentation