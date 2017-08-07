import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Masks from './gear/Masks'
import Fins from './gear/Fins'
import Tanks from './gear/Tanks'

class Compare extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    console.log(props.match.params)
  }


  render() {
    return (
      <div className='compare'>
        <div className='category-items'>
          <div> place to mount items. </div>
          {this.props.match.params.id === 'Masks' && <Masks />}
          {this.props.match.params.id === 'Fins' && <Fins />}
          {this.props.match.params.id === 'Tanks' && <Tanks />}
        </div>
      </div >
    )
  }
}

export default Compare

// based on category, must pull different data from db and set it to props / state.
// must map out db data into boxes.
//add checkbox / select state for comparing items
//have function to show only those items that are viewed.
/*something = somethin ? action to takeif correct*/
//  can either turnerary mount component or render certain functions