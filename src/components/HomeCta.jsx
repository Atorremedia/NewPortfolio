import React from 'react'
import MainButton from './MainButton'
import styles from '../css/_homeCtaStyles.module.css'
import buttons from './buttons'


function HomeCta() {
  const displayedButtons = [];
  for(let i = 0; i<buttons.buttons.length; i++){
      displayedButtons.push(
    <MainButton key={buttons.buttons[i].title} buttonTitle={buttons.buttons[i].title} buttonImg={buttons.buttons[i].img} linkpath={buttons.buttons[i].ref} />
      )
      console.log(displayedButtons);
  }
  return (
    <div className= {styles.buttons}>
    {displayedButtons}
    </div>
  )
}

export default HomeCta