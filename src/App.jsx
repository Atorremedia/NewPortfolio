// import './App.css'
import React, { useState } from 'react'
import Darktoggle from './components/Darktoggle'
import Frame from './components/Frame'
import HomeCta from './components/HomeCta'
import Presentation from './components/Presentation'
import styles from './App.css?inline'


function App() {


  const [lightMode, setLightMode] = useState(true);



  return (
    <div className={styles.app}>
      <Frame lightMode={lightMode} />
      <Darktoggle lightMode={lightMode} setLightMode={setLightMode} />
      <Presentation lightMode={lightMode} />
      <HomeCta lightMode={lightMode} />
    </div>
  )
}

export default App
