import React, {useContext} from 'react'
import MainButton from './MainButton'
import styles from '../css/_homeCtaStyles.module.css'
import buttons from './buttons'
import {themeContext} from '../contexts/ThemeContext';


function HomeCta() {
  const displayedButtons = [];

  const {theme} = useContext(themeContext);

    for(let i = 0; i<buttons.buttons.length; i++){
      displayedButtons.push(
    <MainButton className={`button${i} ${theme}`} key={buttons.buttons[i].title} buttonTitle={buttons.buttons[i].title} buttonImg={buttons.buttons[i].img} linkpath={buttons.buttons[i].ref}/>
      )
    }

  

  return (
    <div className= {styles.buttons}>
    {displayedButtons}
    </div>
  )
}

export default HomeCta