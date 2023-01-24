import React, {useContext} from 'react';
import styles from '../css/_mainButtonsStyles.module.css'
import {themeContext} from '../contexts/ThemeContext';
import {Link} from 'react-router-dom';



function MainButton({ className, buttonNumber, buttonTitle, buttonImg, linkpath, isNew}) {
  
  const {theme} = useContext(themeContext);
  return (
    <Link className={`${styles.mainCta} ${className} ${theme}`} to={linkpath}>
      {isNew && 
      <div className={`${styles.newTag} new ${theme}`}>New!</div>
      }
      <img className={`${theme} ${styles.buttonImg} button${buttonNumber}`} src={buttonImg} height='60px' alt={buttonTitle}/>
      <h2 className={styles.title}>{buttonTitle}</h2>
    </Link>
  )
}

export default MainButton