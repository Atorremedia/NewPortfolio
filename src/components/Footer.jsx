import React, {useContext} from "react";
import styles from '../css/footer.module.css'
import {themeContext} from '../contexts/ThemeContext';
import { Link } from "react-router-dom";


function Footer() {

  const {theme} = useContext(themeContext);


  return (
    <div className={`${styles.footer} ${theme} footer`}>
      <div className={styles.footerColumns}>
        <div className={styles.footerColumn1}>
          <h3 className={styles.footerName}>&#169; 2023 August Ollé</h3>
          <Link to='/contact'>
          <button className={`${styles.contactButton} contactButton ${theme}`}>
            Contact me
          </button>
          </Link>
        </div>
        <div className={styles.separator}>
        </div>
        <div className={styles.footerNav}>
          <Link to='/' className={styles.footerLink}>Home</Link>
          <Link to='/blog' className={styles.footerLink}>Blog</Link>
          <Link to='/projects' className={styles.footerLink}>Projects</Link>
          <Link to='/about' className={styles.footerLink}>About</Link>
          <Link to='/contact' className={styles.footerLink}>Contact</Link>
        </div>
        <div className={styles.separator}>
        </div>
        <div className={styles.socialIconContainer}>
          <a href="https://www.linkedin.com/in/Augustolle">
          <img className={styles.socialIcon} src="/assets/logo-linkedin.webp" width="30px" alt="Linkedin"/>
          </a>
          <a href="https://www.github.com/Atorremedia">
          <img className={styles.socialIcon} src="/assets/logo-github.webp" width="30px" alt="Github"/>
          </a>
          <a href="https://www.twitter.com/AugustOlle">
          <img className={styles.socialIcon} src="/assets/logo-twitter.webp" width="30px" alt="Twitter"/>
          </a>
        </div>
      </div>
      <hr></hr>
      <div className={styles.credits}>
        <div>
          <a href="http://jigsaw.w3.org/css-validator/check/referer">
            <img width="88px" height="31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
            title="Valid CSS!"
            alt="Valid CSS!" />
          </a>
            <img width="88px" height="31px"
            src="https://upload.wikimedia.org/wikipedia/commons/b/bb/W3C_HTML5_certified.png"
            title="Valid HTML!"
            alt="Valid HTML!" />
        </div>
        <h4 className={styles.creditsTitle}>Credits:</h4>
        <a href="https://www.flaticon.com/free-icons/blog" title="blog icons">Icons created by Freepik - Flaticon 
        </a>
        <p>Background images from <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Spiske</a> and <a href="https://unsplash.com/@juanjodev02?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Juanjo Jaramillo</a> from <a href="https://unsplash.com/es/fotos/cvBBO4PzWPg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
      </div>
    </div>
  )
}

export default Footer