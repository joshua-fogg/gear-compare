import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import catalogue from '../../catalogue'

const Fins = catalogue.Fins

class FinList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='column'>
        {Fins.map((fin) => {
          return (
            <div className='columns card' key={fin.id} >
              <div className="card-image">
                <figure className="image">
                  <img src="http://via.placeholder.com/300x300" alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                {/*<div className="media">*/}
                  {/*<div className="media-content">*/}
                    <p className="title is-4">{fin.brand}</p>
                  {/*</div>*/}
                {/*</div>*/}
                <div className="content">
                  <p>{fin.make}</p>
                  <p>{fin.model}</p>
                  <p>{fin.heel_type}</p>
                  <p>{fin.fin_type}</p>
                  <p>{fin.colours}</p>
                </div>
              </div>
            </div>
          )
        })}

      </div >
    )
  }
}

export default FinList
