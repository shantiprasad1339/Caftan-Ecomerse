import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SetRoute from '../src/components/Routes/SetRoute.jsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <SetRoute />
  </StrictMode>,
)
