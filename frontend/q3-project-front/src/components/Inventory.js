import React from 'react'
import { connect } from 'react-redux'
import Plant from './Plant'

class Inventory extends React.Component {

  render(){
    const plantElems = this.props.plants.map(plant=>{
      return(
        <Plant key = {plant.id} plant = {plant}/>
      )
    })
    return(
      <div>
        {plantElems}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  plants: state.plants.filteredNames
})

export default connect(
  mapStateToProps
)(Inventory)
