import React from 'react'
import ReactDOM from 'react-dom'
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
        <
        App / >
        // </Provider>
        ,
        document.getElementById('root')
    )
})