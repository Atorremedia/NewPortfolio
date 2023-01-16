import React, {useContext} from 'react'
import styles from '../css/_toggleStyles.module.css'
import {themeContext} from '../contexts/ThemeContext';


function Darktoggle() {

  const {theme, setTheme} = useContext(themeContext);


  function handleClick(){
    if (theme === 'light'){
    setTheme('dark');
  } else {
      setTheme('light');
    }
  }

  return (
    <div className={styles.toggleContainer}>
        <div className={`${styles.toggleSwitch} ${theme}`} onClick={handleClick}>
            <div className={styles.toggleBall}>
            </div>
        </div>
    </div>
  )
}

export default Darktoggle;