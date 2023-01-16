import React, {useContext} from 'react';
import styles from '../css/_mainButtonsStyles.module.css'
import {themeContext} from '../contexts/ThemeContext';


function MainButton({ className, buttonTitle, buttonImg, linkpath}) {
  
  const {theme} = useContext(themeContext);

  return (
    <a className={`${styles.mainCta} ${className} ${theme}`} href={linkpath}>
      <img className={theme} src={buttonImg} width='50px' alt={buttonTitle}/>
      <h2 className={styles.title}>{buttonTitle}</h2>
    </a>
  )
}

export default MainButton