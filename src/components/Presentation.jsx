import React from 'react'
import styles from '../scss/components/_pres.module.scss'
import MainButton from './MainButton'

const button1 = {
  title : 'About me',
  img : '../assets/august.webp',
  ref : '',
}
const button2 = {
  title : 'My projects',
  img : '../assets/august.webp',
  ref : '',
}
const button3 = {
  title : 'Get in touch',
  img : '../assets/august.webp',
  ref : '',
}


function Presentation() {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.presContainer}>
        <MainButton className={styles.option1} buttonTitle = {button1.title} buttonImg = {button1.img} buttonRef = {button1.ref} />
        <div className={styles.presCard}>
          <h1>Hi there!</h1>
          <div className={styles.presSubcontainer}>
            <img src="src/assets/august.webp" width="200px" alt="August Ollé profile image" />
            <p className={styles.salute}>My name is August Ollé. I am a frontend developer skilled in HTML, CSS, Javascript and React, as main technologies. I am always pushing my limits.<br/>Thanks for visiting me!</p>
          </div>
        </div>
        <MainButton className={styles.option2} buttonTitle = {button2.title} buttonImg = {button2.img} buttonRef = {button2.ref} />
        <MainButton className={styles.option3} buttonTitle = {button3.title} buttonImg = {button3.img} buttonRef = {button3.ref} />
      </div>
    </div>
  )
}

export default Presentation