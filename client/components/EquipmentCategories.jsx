import React from 'react'
import { Link } from 'react-router-dom'
import dbdata from '../../data.js'


function categories(props) {
  return (
    <div className='categories'>
      <div className='top-banner'>
      </div>
      <div className='info-box'>
        <p>
          Choose one of the Classes Below to be taken to a page that shows a comparison between classes.
                </p>
      </div>
      <div className='categories columns'>
        {props.categories.map((category) => {
          return (
            <div className='category card' key={category.id} >
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
        })}
      </div>
    </div>
  )
}
export default categories
