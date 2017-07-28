import React from 'react'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import { render, ReactDOM } from 'react-dom'

import Header from './components/Header'
import Home from './Home'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filler: 0
    }
  }
  //state call functions go here

  render() {
    return (
      <Router>
        <div id='container'>
          <Header />
          <Route exact path='/' component={Home} />
      </div>
      </Router>
        )
  }
}



export default App