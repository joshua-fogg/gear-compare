import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import db from '../../public/dbs/db'
import catalogue from '../../public/dbs/catalogue'

const Compare = (props) => {
  const category = props.match.params.match.category
  const firstProduct = props.params.match.id1
  const secondProduct = props.params.match.id2
  const thirdProduct = props.params.match.id3


  if (isNaN(category) === false) { //reroute to categoryPage
    console.log('category is number')
  } else {//has category
    // assess category & mount component
    //map category
    console.log('category is string')
  }

  // based on category, must pull different data from db and set it to props / state.
  // must map out db data into boxes.
  //add checkbox / select state for comparing items
  //have function to show only those items that are viewed.

  return (
    <div className='compare'>
      <div className='compare-filters'>
        filters to apply
            </div>
      {}<div className='#'>
        Panel for listing gear
            </div>
    </div >
  )
}
export default Compare