import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import db from '../../public/dbs/db'
import catalogue from '../catalogue'

class Compare extends Component {
  
  
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      catalogue: catalogue,
    }
  }

  render() {
    return (
      <div className='compare'>
        {/*<div className='compare-filters'>
          fins name
            </div>*/}
        <div className='category-items'>
          Place to mount items.
          <br />
          {this.props.match.params = "Masks" ? null : <div>masks </div>}
          {this.props.match.params = "Fins" ? null: <div>fins </div> }
          {this.props.match.params = "Tanks" ? null : <div>tanks </div>}
        </div>
      </div >
    )
  }
}
// based on category, must pull different data from db and set it to props / state.
// must map out db data into boxes.
//add checkbox / select state for comparing items
//have function to show only those items that are viewed.
 /*something = somethin ? action to takeif correct*/
//  can either turnerary mount component or render certain functions
export default Compare