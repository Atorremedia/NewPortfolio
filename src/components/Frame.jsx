import React, {useContext} from 'react'
import {themeContext} from '../contexts/ThemeContext';
import styles from '../css/_frameStyles.module.css'

function Frame({}) {

  const {theme} = useContext(themeContext);

  return (
    <div >
      <div className={`${styles.background} ${theme} back`}>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
      </div>
    </div>
  )
}

export default Frame