import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import catalogue from '../../catalogue'

const Masks = catalogue.Masks

import Masks from './gear/Masks'
import Fins from './gear/Fins'
import Tanks from './gear/Tanks'

class MaskList extends Component {
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

export default MaskList