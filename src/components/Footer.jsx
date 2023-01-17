import React, {useContext} from "react";
import Darktoggle from "./Darktoggle";
import styles from '../css/_header.module.css'
import {themeContext} from '../contexts/ThemeContext';


function Header() {

  const {theme} = useContext(themeContext);


  return (
    <div className={`${styles.header} ${theme}`}>
      <Darktoggle lightMode={lightMode} setLightMode={setLightMode} />
    </div>
  )
}

export default Header