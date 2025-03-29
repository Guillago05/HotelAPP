import React from 'react'
import ReactDOM from 'react-dom/client'
import { HotelApp } from './HotelApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HotelApp />
    </BrowserRouter>
  </React.StrictMode >,
)
