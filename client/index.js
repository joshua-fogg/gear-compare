import React from 'react'
import ReactDOM from 'react-dom'
//import {applyMiddleware} from redux?
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render( < App / > , 
    //compose(applyMiddleware(thunkMiddleware), window)
    document.getElementById('root')
    )
})