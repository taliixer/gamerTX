import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layauot from './Components/Layauot.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layauot>
      <App />
    </Layauot>
  </React.StrictMode>,
)
