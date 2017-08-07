import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import catalogue from '../../catalogue'

const Tanks = catalogue.Tanks

class TankList extends Component {


  constructor(props) {
    super(props)
    this.state = {}
    console.log(props.match.params)
  }


  render() {
      return (
      <div className='masks'>
        <div className='category-items'>
          Place to mount items.
          
        </div>
      </div >
    )
  }
}

export default TankList