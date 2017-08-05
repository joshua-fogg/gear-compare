import React from 'react'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import { render, ReactDOM } from 'react-dom'

import db from '../db.js'

import Header from './components/Header'
import Home from './components/Home'
import Categories from './components/EquipmentCategories'
import Compare from './components/Compare'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fillerState: 0,
      categories: [{ id: 1, name: 'Masks', summary: 'Take a closer look at diving masks' }, { id: 2, name: 'Fins', summary: 'Take a closer look at diving masks' }]
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
          <Route path='/categories' render={() => (
            <Categories categories={this.state.categories} />
          )} />
          <Route path='/compare' component={Compare} />
        </div>
      </Router>
    )
  }
}

export default App
