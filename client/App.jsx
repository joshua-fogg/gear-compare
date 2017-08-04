import React from 'react'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import { render, ReactDOM } from 'react-dom'

import db from '../db.js'

import Header from './components/Header'
import Home from './components/Home'
import EquipCats from './components/EquipmentCategories.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fillerState: 0
      // define state here
    }
  }
  // state call functions go here

  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/categories' component={EquipCats} />
        </div>
      </Router>
    )
  }
}

export default App
