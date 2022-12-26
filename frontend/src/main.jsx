import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/output.css'
import { WorkoutContextProvider } from './context/WorkoutContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkoutContextProvider>
      <App />
    </WorkoutContextProvider>
  </React.StrictMode>,
)
