import React, {useContext} from "react";
import Darktoggle from "./Darktoggle";
import styles from '../css/_header.module.css'
import {themeContext} from '../contexts/ThemeContext';
import BurguerMenu from "./BurguerMenu";


function Header() {

  const {theme, setTheme} = useContext(themeContext);


  return (
    <div className={`${styles.header} ${theme} header`}>
      <BurguerMenu/>
      <Darktoggle theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default Header