import React from 'react'
import { createRoot } from 'react-dom/client'
import HandModalApp from './HandModalApp.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HandModalApp />
  </React.StrictMode>
)
