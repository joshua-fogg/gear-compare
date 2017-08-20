import React from 'react'

import Masks from './gear/Masks'
import Fins from './gear/Fins'
import Tanks from './gear/Tanks'

class Compare extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      category: '',
      selectedEquipment: [] // active Equipment
    }
    this.addToStore = this.toggleToStore.bind(this)
    this.removeFromStore = this.removeFromStore.bind(this)
  }

  toggleToStore (EId) {
    let selectedEQ = [...this.state.selectedEquipment]
    if (selectedEQ.includes(EId)) {
      return (EId === id)
    } else {
      selectedEQ.push(EId)
    }
    this.setState({ selectedEquipment: selectedEQ })
  }

  removeFromStore (EId) {
    let equipmentList = [...this.state.selectedEquipment].filter((equipment) => {
      return equipment !== EId
    })
    this.setState({selectedEquipment: equipmentList})
  }

  render () {
    return (
      <div className='compare'>
        {this.props.match.params.id === 'Masks' && <Masks
          equip={this.addToStore}
          selected={this.state.selectedEquipment}
          unequip={this.removeFromStore}
        />}
        {this.props.match.params.id === 'Fins' && <Fins
          equip={this.addToStore}
          selected={this.state.selectedEquipment}
          unequip={this.removeFromStore}
        />}
        {this.props.match.params.id === 'Tanks' && <Tanks
          equip={this.addToStore}
          selected={this.state.selectedEquipment}
          unequip={this.removeFromStore}
        />}
        <div>
          <br />
          <br />
        </div>
      </div >
    )
  }
}

export default Compare

//add ins: have buttons on bottom of page for equipment categories?
//change ID'd to be unique / class specific => condense state to be 1 state => can be loadout
//turn each state changer into a toggler function


  // addFinToStore(fin) {
  //   let selectedFins = [...this.state.selectedFins]
  //   //'...' makes state immutable
  //   selectedFins.push(fin)
  //   // addes new id to array
  //   this.setState({ selectedFins: selectedFins })
  //   //sets new array to state
  // }