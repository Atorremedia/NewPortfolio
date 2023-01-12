import React, {useState, useEffect} from 'react'
import MainButton from './MainButton'
import styles from '../css/_homeCtaStyles.module.css'
import buttons from './buttons'


function HomeCta({lightMode}) {
  const displayedButtons = [];
  const [mode, setMode] = useState('light');

  useEffect(() => {
    if (lightMode === false) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [lightMode])



    for(let i = 0; i<buttons.buttons.length; i++){
      displayedButtons.push(
    <MainButton className={`button${i}`} key={buttons.buttons[i].title} buttonTitle={buttons.buttons[i].title} buttonImg={buttons.buttons[i].img} linkpath={buttons.buttons[i].ref} mode={mode}/>
      )
    }

  

  return (
    <div className= {styles.buttons}>
    {displayedButtons}
    </div>
  )
}

export default HomeCta