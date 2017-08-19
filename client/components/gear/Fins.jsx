import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import catalogue from '../../catalogue'

const Fins = catalogue.Fins

class FinList extends Component {
  render () {
    return (
      <div className='column'>
        {Fins.map((fin) => {
          const isSelected = this.props.selected.includes(fin.id)
          return (
            <div className={classNames('columns card', {active:isSelected})} key={fin.id} onClick={(e)=>{this.props.equip(fin.id)}}>
              <div className="card-image">
                <figure className="image">
                  <img src="http://via.placeholder.com/300x300" alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4">{fin.brand}</p>
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
