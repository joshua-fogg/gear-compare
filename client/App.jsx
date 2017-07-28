import React from 'react'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import { render, ReactDOM } from 'react-dom'

import Home from './Home'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //states to access
    }
  }

  render() {
    return (
      <Router>
        <div id='page'>
          <Route exact path='/' component={Home} />
      </div>
      </Router>
        )
  }
}

var data = {name: 'mix' }


var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

export default App