import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './styles/index.css'
import './styles/normalizer.css'
import './styles/palette.css'
import './styles/class.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
