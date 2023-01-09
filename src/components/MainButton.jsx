import React from 'react';
import styles from '../scss/components/_pres.module.scss'



function MainButton({buttonTitle, buttonImg, buttonRef}) {

  return (
    <div className={styles.option1}>
      <h2>{buttonTitle}</h2>
      <img src={buttonImg} alt={buttonTitle}/>
    </div>
  )
}

export default MainButton