import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import [createStore] from 'redux'
// import { Provider } from 'react-redux'
import App from './App'


//store = createStore( state = initialstate, action){
// return state
// }

// const store = createStore(reducer)
// console.log(state)

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        // <Provider>
        <BrowserRouter >
        <App />
        </BrowserRouter>
        // </Provider>
        ,
        document.getElementById('root')
    )
})