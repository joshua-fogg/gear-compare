import React from 'react'
import { Link } from 'react-router-dom'

const Compare = (props) => {
  const firstProduct = props.params.match.id1
  const secondProduct = props.params.match.id2
  const thirdProduct = props.params.match.id3

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