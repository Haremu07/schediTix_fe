import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contex from './global/Contex.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contex>

    <App />
    </Contex>
  </StrictMode>,
)
