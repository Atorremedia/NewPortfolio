import React from 'react'
import styles from '../scss/components/_frameStyles.module.css'

function Frame() {



  return (
    <div className={`${styles.frameBorder} ${styles.wrapper}`} >
        <div className={styles.frameBorder}>
            <div className={styles.frameBorder}>
                <div className={styles.frameBorder}>
                    <div className={styles.frameBorder}>
                    <div className={styles.frameBorder}>
                    </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Frame