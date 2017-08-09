import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import catalogue from '../../catalogue'

const Masks = catalogue.Masks

class MaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='masks'>
        {Masks.map((mask) =>
          <div className='category-items'>
            <div className='category card' key={mask.id} >
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="http://via.placeholder.com/300x300" alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4" key={mask.id}>{mask.model_id}</p>
                  </div>
                </div>
                <div className="content">
                 <p></p>
                 <p></p>
                 <p></p>
                 <p> {mask.buckels} </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div >
    )
  }
}

export default MaskList