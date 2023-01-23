import React, {useContext} from 'react';
import styles from '../css/_mainButtonsStyles.module.css'
import {themeContext} from '../contexts/ThemeContext';


function MainButton({ className, buttonNumber, buttonTitle, buttonImg, linkpath, isNew}) {
  
  const {theme} = useContext(themeContext);
  return (
    <a className={`${styles.mainCta} ${className} ${theme}`} href={linkpath}>
      {isNew && 
      <div className={`${styles.newTag} new ${theme}`}>New!</div>
      }
      <img className={`${theme} ${styles.buttonImg} button${buttonNumber}`} src={buttonImg} height='60px' alt={buttonTitle}/>
      <h2 className={styles.title}>{buttonTitle}</h2>
    </a>
  )
}

export default MainButton