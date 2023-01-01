import React from 'react'
import styles from '../scss/components/_toggleStyles.module.scss'


function Darktoggle() {
  return (
    <div className={styles.toggleContainer}>
        <div className={styles.toggleSwitch}>
            <div className={styles.toggleBall}>
            </div>
        </div>
    </div>
  )
}

export default Darktoggle;