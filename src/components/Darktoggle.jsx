import React, {useState, useEffect} from 'react'
import styles from '../scss/components/_toggleStyles.module.scss'


function Darktoggle({lightMode, setLightMode}) {

  const [mode, setMode] = useState('light');

  useEffect(() => {
    if (lightMode === false) {
      setMode('dark');
    } else {
      setMode('light');
    }

  }, [lightMode])
  


  function handleClick(){
    setLightMode(!lightMode);
  }

  return (
    <div className={styles.toggleContainer}>
        <div className={`${styles.toggleSwitch} ${mode}`} onClick={handleClick}>
            <div className={styles.toggleBall}>
            </div>
        </div>
    </div>
  )
}

export default Darktoggle;