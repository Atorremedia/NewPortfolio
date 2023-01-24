import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from './contexts/ThemeContext';
import RoutesConfig from './routes/RoutesConfig';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RoutesConfig/>
    </ThemeProvider>
  </React.StrictMode>,
)
