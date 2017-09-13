import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import catalogue from '../../catalogue'

const Masks = catalogue.Masks

class MaskList extends Component {
  render (props) {
    return (
      <div className='column'>
        {Masks.map((mask) => {
          const isSelected = this.props.selected.includes(mask.id)
          return (
            < div className={classNames('columns card', { active: isSelected })} key={mask.id} onClick={(e) => { this.props.toggle(mask.id) }}>
              <div className="card-image">
                <figure className="image">
                  <img src="http://via.placeholder.com/300x300" alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4" key={mask.id}>{mask.model_id}</p>
                <div className="content">
                  <p>{mask.frame}</p>
                  <p>{mask.lense}</p>
                  <p>{mask.skirt}</p>
                  <p>{mask.buckels}</p>
                  <p>{mask.mask_volume}</p>
                  <p>{mask.lense_material}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div >
    )
  }
}

export default MaskList
