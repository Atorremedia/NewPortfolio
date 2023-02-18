import React, {useState, useContext} from "react";
import styles from '../css/burguerMenu.module.css'
import {themeContext} from '../contexts/ThemeContext';
import { Link } from "react-router-dom";

function BurguerMenu() {

  const {theme} = useContext(themeContext);
    const [active, setActive] = useState(false)
    const [menuState, setMenuState] = useState('inactive')

    const handleClick = () => {
        setActive((cur)=>!cur)
        if (menuState === 'inactive'){
        setMenuState('active')
    } else {
        setMenuState('inactive')
    }
    }

  return (
    <div className={`${styles.menuContainer} ${theme}`}>
        <button className={`${styles.burguerContainer} ${theme} ${menuState} burguerContainer`} onClick={handleClick}>
            <div className={`${styles.burguerLine} ${theme} burguerLine ${menuState} burguerLine1`}></div>
            <div className={`${styles.burguerLine} ${theme} burguerLine ${menuState} burguerLine2`}></div>
            <div className={`${styles.burguerLine} ${theme} burguerLine ${menuState} burguerLine3`}></div>
        </button>
        {active && (
        <nav className={`${styles.menuNav} ${theme} burguerNav`}>
            <Link className={`${styles.menuOptionLink} ${theme} menuOption`} to="/">
                <div className={`${styles.menuOptionContainer} ${theme} menuOptionContainer`}>
                    <p className={`${styles.menuOptionText} ${theme} menuOptionText`}>Home</p>
                </div>
            </Link>
            <Link className={`${styles.menuOptionLink} ${theme} menuOption`} to="/blog">
                <div className={`${styles.menuOptionContainer} ${theme} menuOptionContainer`}>
                    <p className={`${styles.menuOptionText} ${theme} menuOptionText`}>Blog</p>
                </div>
            </Link>
            <Link className={`${styles.menuOptionLink} ${theme} menuOption`} to="/projects">
                <div className={`${styles.menuOptionContainer} ${theme} menuOptionContainer`}>
                    <p className={`${styles.menuOptionText} ${theme} menuOptionText`}>Projects</p>
                </div>
            </Link>
            <Link className={`${styles.menuOptionLink} ${theme} menuOption`} to="/about">
                <div className={`${styles.menuOptionContainer} ${theme} menuOptionContainer`}>
                    <p className={`${styles.menuOptionText} ${theme} menuOptionText`}>About me</p>
                </div>
            </Link>
            <Link className={`${styles.menuOptionLink} ${theme} menuOption`} to="/contact">
                <div className={`${styles.menuOptionContainer} ${theme} menuOptionContainer`}>
                    <p className={`${styles.menuOptionText} ${theme} menuOptionText`}>Contact</p>
                </div>
            </Link>
        </nav>
        )}
    </div>
  )
}

export default BurguerMenu