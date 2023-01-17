import React, {useContext} from 'react'
import HomeCta from './HomeCta'
import Presentation from './Presentation'
import {themeContext} from '../contexts/ThemeContext';


import styles from '../css/_frameStyles.module.css'
import Header from './Header'

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
      <Header />
      <Presentation />
      <HomeCta />
    </div>
  )
}

export default Frame