import React, {useContext} from 'react'
import HomeCta from './HomeCta'
import Presentation from './Presentation'
import {themeContext} from '../contexts/ThemeContext';


import styles from '../css/_frameStyles.module.css'
import Header from './Header'

function Frame({}) {

  const {theme} = useContext(themeContext);

  return (
    <div className={`${styles.bg} ${theme} back`} >
      <Header />
        <Presentation />
        <HomeCta />
    </div>
  )
}

export default Frame