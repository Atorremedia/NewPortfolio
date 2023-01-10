import React from 'react';
import styles from '../css/_mainButtonsStyles.module.css'


function MainButton({ buttonTitle, buttonImg, linkpath}) {

  return (
    <a className={styles.mainCta} href={linkpath}>
      <h2 className={styles.title}>{buttonTitle}</h2>
      <img src={buttonImg} alt={buttonTitle}/>
    </a>
  )
}

export default MainButton