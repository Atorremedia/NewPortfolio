import './App.css'
import Darktoggle from './components/Darktoggle'
import Frame from './components/Frame'
import HomeCta from './components/HomeCta'
import Presentation from './components/Presentation'
import styles from '/src/app.css'


function App() {

  return (
    <div className="app">
      <Darktoggle />
      {/* <Frame /> */}
      <Presentation />
      <HomeCta />
    </div>
  )
}

export default App
