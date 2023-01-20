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
          <img src="/src/assets/icons/sun.png" width="35px" alt="light mode" className={`${styles.modeImg}  ${theme} sun`} />
        <div className={`${styles.toggleSwitch} ${theme} toggle`} onClick={handleClick}>
            <div className={styles.toggleBall}>
            </div>
        </div>
          <img src="/src/assets/icons/moon.png" width="25px" alt="dark mode" className={`${styles.modeImg}  ${theme} moon`} />
    </div>
  )
}

export default Darktoggle;