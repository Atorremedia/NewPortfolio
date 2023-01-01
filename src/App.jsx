import './App.css'
import Darktoggle from './components/Darktoggle'
import Frame from './components/Frame'
import Presentation from './components/Presentation'
import styles from '/src/app.css'


function App() {

  return (
    <div className="App">
          <Darktoggle />
      <Frame />
      <div className={styles.wrapper}>
          <Presentation />
      </div>
    </div>
  )
}

export default App
