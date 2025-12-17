import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InitialScreen from './screens/initialScreen'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InitialScreen />
  </StrictMode>,
)
