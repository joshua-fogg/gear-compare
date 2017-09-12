import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { render, ReactDOM } from 'react-dom'

import Header from './components/Header'
import Home from './components/Home'
import Categories from './components/EquipmentCategories'
import Compare from './components/Compare'
import Footer from './components/Footer'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fillerState: 0,
      categories: [{ id: 1, name: 'Masks', summary: 'Take a closer look at diving masks', picture: '' }, { id: 2, name: 'Fins', summary: 'Take a closer look at diving masks', picture: '' }, { id: 3, name: 'Tanks', summary: 'Take a closer look at dive tanks', picture: '' }]
    }
  }
  render () {
    return (
      <div className='container'>
        <div className='sub-container'>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/categories' render={() => (
            <Categories categories={this.state.categories} />
          )} />
          <Route path='/compare/:id' render={(props) => (
            <Compare {...props}/>
          )} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
