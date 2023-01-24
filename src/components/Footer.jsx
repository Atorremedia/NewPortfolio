import React, {useContext} from "react";
import styles from '../css/footer.module.css'
import {themeContext} from '../contexts/ThemeContext';


function Footer() {

  const {theme} = useContext(themeContext);


  return (
    <div className={`${styles.footer} ${theme} footer`}>
      <h4 className={styles.footerText}>Credits</h4>
      <a href="https://www.flaticon.com/free-icons/blog" title="blog icons">Icons created by Freepik - Flaticon</a>
    </div>
  )
}

export default Footer