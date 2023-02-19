import React, {useContext} from "react";
import styles from '../css/footer.module.css'
import {themeContext} from '../contexts/ThemeContext';


function Footer() {

  const {theme} = useContext(themeContext);


  return (
    <div className={`${styles.footer} ${theme} footer`}>
      <h4 className={styles.footerText}>Credits</h4>
      <a href="https://www.flaticon.com/free-icons/blog" title="blog icons">Icons created by Freepik - Flaticon</a>
      <p>Foto de <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Spiske</a> en <a href="https://unsplash.com/es/fotos/cvBBO4PzWPg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
      <p>Foto de <a href="https://unsplash.com/@juanjodev02?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Juanjo Jaramillo</a> en <a href="https://unsplash.com/es/fotos/mZnx9429i94?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </div>
  )
}

export default Footer