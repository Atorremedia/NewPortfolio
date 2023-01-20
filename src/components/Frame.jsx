import React, {useContext} from 'react'
import Presentation from './Presentation'
import HomeCta from './HomeCta'
import Footer from './Footer'
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
      <Footer />
    </div>
  )
}

export default Frame