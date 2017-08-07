import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import catalogue from '../../catalogue'

const Fins = catalogue.Fins

class FinList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
      return (
      <div className='masks'>
        <div className='category-items'>
          Fins
          
        </div>
      </div >
    )
  }
}

export default FinList