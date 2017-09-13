import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <BrowserRouter >
      <App />
    </BrowserRouter>
    ,
    document.getElementById('app')
  )
})
