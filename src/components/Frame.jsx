import React, {useContext} from 'react'
import {themeContext} from '../contexts/ThemeContext';
import styles from '../css/_frameStyles.module.css'

function Frame({}) {

  const {theme} = useContext(themeContext);

  return (
    <div className={`${styles.top}`} >
      <div className={`${styles.background} ${theme} back`}>
      </div>
    </div>
  )
}

export default Frame