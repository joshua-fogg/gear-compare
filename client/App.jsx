import React from 'react'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import { render } from 'react-dom'
import questions from '../../public/data/questions'
import people from '../../public/data/people'

import Home from './FinalPage'
// import MainPage from './MainPage'
// import Question from './Question'
// import StartPage from './StartPage'
// import TextQuestions from './TextQuestions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //shit to access
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
var view = helloTemplate(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)

export default App