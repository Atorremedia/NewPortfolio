// import './App.css'
import Frame from './components/Frame'
import {ThemeProvider} from './contexts/ThemeContext';

function App() {



  return (
    <ThemeProvider>
      <Frame />
    </ThemeProvider>
  )
}

export default App
