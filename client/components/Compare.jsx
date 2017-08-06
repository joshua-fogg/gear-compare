import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import db from '/database/db'
import catalogue from '/database/catalogue'

const Compare = (props) => {
  const category = props.match.params.match.category
  const firstProduct = props.params.match.id1
  const secondProduct = props.params.match.id2
  const thirdProduct = props.params.match.id3


  function assessCategory(category) {
    if (isNaN(category) === false) { //no category, = number
      //render all categories
    } else {//has category
      catalogue.data.category.map((itemInfo) => {
        return (
          <div className='category card' key={itemInfo.id} >
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="http://via.placeholder.com/300x300" alt="Image" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{category.name}</p>
                </div>
              </div>
              <div class="content">
                {category.summary}
              </div>
            </div>
          </div>
        )
      })
      //map category
    }
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