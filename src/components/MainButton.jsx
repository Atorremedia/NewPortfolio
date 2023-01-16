import React from 'react';
import styles from '../css/_mainButtonsStyles.module.css'


function MainButton({ className, buttonTitle, buttonImg, linkpath, mode}) {
  
  return (
    <a className={`${styles.mainCta} ${className} ${mode}`} href={linkpath}>
      <img src={buttonImg} width='50px' alt={buttonTitle}/>
      <h2 className={styles.title}>{buttonTitle}</h2>
    </a>
  )
}

export default MainButton