import React, {useContext} from "react";
import styles from '../css/burguerMenu.module.css'
import {themeContext} from '../contexts/ThemeContext';
import { Link } from "react-router-dom";


function BurguerMenu() {

  const {theme} = useContext(themeContext);


  return (
    <div className={`${styles.menuContainer} ${theme} burguerContainer`}>
        <div className={`${styles.burguerContainer} ${theme} burguerContainer`}>
            <div className={`${styles.burguerLine} ${theme} burguerLine`}> </div>
            <div className={`${styles.burguerLine} ${theme} burguerLine`}> </div>
            <div className={`${styles.burguerLine} ${theme} burguerLine`}> </div>
        </div>
        <div className={`${styles.menuNav} ${theme} burguerNav`}>
            <Link className={`${styles.menuOption} ${theme} menuOption`} to="/">
                <p className={`${styles.menuOptionText} ${theme} menuOptionText`}>Home</p>
            </Link>
            <Link className={`${styles.menuOption} ${theme} menuOption`} to="/blog">
                <p className={`${styles.menuOptionText} ${theme} menuOptionText`}>Blog</p>
            </Link>
            <Link className={`${styles.menuOption} ${theme} menuOption`} to="/projects">
                <p className={`${styles.menuOptionText} ${theme} menuOptionText`}>Projects</p>
            </Link>
            <Link className={`${styles.menuOption} ${theme} menuOption`} to="/about">
                <p className={`${styles.menuOptionText} ${theme} menuOptionText`}>About me</p>
            </Link>
            <Link className={`${styles.menuOption} ${theme} menuOption`} to="/contact">
                <p className={`${styles.menuOptionText} ${theme} menuOptionText`}>Contact</p>
            </Link>
        </div>
    </div>
  )
}

export default BurguerMenu