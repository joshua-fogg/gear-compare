import React, { Component } from 'react'

import Masks from './gear/Masks'
import Fins from './gear/Fins'
import Tanks from './gear/Tanks'

class Compare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: '',
      selectedEquipment: [], //active Equipment
    }
    this.toggleToStore = this.toggleToStore.bind(this)
    // this.removeFromStore = this.removeFromStore.bind(this)
  }

  toggleToStore(EId) {
    const { selectedEquipment } = this.state
    if (selectedEquipment.includes(EId)) {
      this.setState({
        selectedEquipment: selectedEquipment.filter(id => id !== EId)
      })
    } else {
      this.setState({
        selectedEquipment: [
          ...selectedEquipment,
          EId
        ]
      })
    }
    // let selectedEQ = [...this.state.selectedEquipment]
    // console.log('EID:', EId, 'selectedEQ:', selectedEQ)
    // if (selectedEQ.includes(EId)) {
    //   let selectedEQ = selectedEQ.filter(id => EId !== id)
    // } else {
    //   selectedEQ.push(EId)
    // }
    // this.setState({ selectedEquipment: selectedEQ })
  }

  // removeFromStore(EId) {
  //   let equipmentList = [...this.state.selectedEquipment].filter((equipment) => {
  //     return equipment != EId;
  //   })
  //   this.setState({selectedEquipment: equipmentList})
  // }

  render() {
    const category = this.props.match.params.id
    return (
      <div className='compare'>
        {category === 'Masks' && <Masks
          toggle={this.toggleToStore}
          selected={this.state.selectedEquipment}
          unequip={this.removeFromStore}
        />}
        {category === 'Fins' && <Fins
          toggle={this.toggleToStore}
          selected={this.state.selectedEquipment}
        />}
        {category === 'Tanks' && <Tanks
          toggle={this.toggleToStore}
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