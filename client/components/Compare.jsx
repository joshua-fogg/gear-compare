import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import db from '../../public/dbs/db'
import catalogue from '../catalogue'

const Compare = (props) => {
  const category = props.params.match.category.toLowerCase()
  const firstProduct = props.params.match.id1
  const secondProduct = props.params.match.id2
  const thirdProduct = props.params.match.id3

  return (
    <div className='compare'>
      <div className='compare-filters'>
        fins name
        {console.log(category)}
            </div>
      <div className='category-items'>
        {catalogue.category.map((categoryItem) => {
          return (
            <div className='card'>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="http://via.placeholder.com/300x300" alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{categoryItem.brand}</p>
                  </div>
                </div>
                <div className="content">
                  {categoryItem.model}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}
// based on category, must pull different data from db and set it to props / state.
// must map out db data into boxes.
//add checkbox / select state for comparing items
//have function to show only those items that are viewed.
export default Compare