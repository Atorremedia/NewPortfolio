import React from 'react'
import MainButton from './MainButton'
import styles from '../css/_homeCtaStyles.module.css'
import buttons from '../../public/data/buttons'

function HomeCta() {
  const displayedButtons = [];

    for(let i = 0; i<buttons.buttons.length; i++){
      displayedButtons.push(
    <MainButton className={`button${i}`} key={buttons.buttons[i].buttonNumber} number={buttons.buttons[i].buttonNumber} buttonTitle={buttons.buttons[i].title} buttonImg={buttons.buttons[i].imgSrc} linkpath={buttons.buttons[i].linkpath} isNew={buttons.buttons[i].isNew}/>
      )
    }

  return (
    <div className= {styles.buttons}>
    {displayedButtons}
    </div>
  )
}

export default HomeCta