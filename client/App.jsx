import React from 'react'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import { render, ReactDOM } from 'react-dom'

import db from '../db.js'

import Header from './components/Header'
import Home from './components/Home'
import EquipmentCategories from './components/Classes'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fillerState: 0
    }
  }
  //state call functions go here

  render() {
    return (
      <Router>
        <div id='container'>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/categories' component={EquipmentCategories} />
        </div>
      </Router>
    )
  }
}



export default App