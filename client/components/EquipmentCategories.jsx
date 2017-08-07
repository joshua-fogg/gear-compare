import React from 'react'
import { Link } from 'react-router-dom'

//way to link  each card to compare component

const categories = (props) => {
  return (
    <div className='categories'>
      <div className='top-banner'>
      </div>
      <div className='info-box'>
        <p className='info-box-p'>
          Choose which equipment class you would like to look at bellow.
        </p>
      </div>
      <div className='categories columns'>
        {props.categories.map((category) => {
          return (
            <div className='category card' key={category.id} >
              <Link to={`/compare/` + category.name}>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="http://via.placeholder.com/300x300" alt="Image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{category.name}</p>
                    </div>
                  </div>
                  <div className="content">
                    {category.summary}
                  </div>
                </div>
              </Link>
            </div>

          )
        })}
      </div>
    </div >
  )
}

export default categories
