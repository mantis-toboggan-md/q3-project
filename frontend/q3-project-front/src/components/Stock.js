import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import StockItem from './StockItem'
import { fetchPlants } from '../actions'

class Stock extends React.Component{
  componentWillMount(){
    this.props.fetchPlants()
  }
  render(){
    let items = this.props.plants.map(plant=>{
      return <StockItem key = {plant.id} item = {plant}/>
    })
    if (!this.props.isLogged) {
      return <Redirect to="/login" />;
    }else {
      return(
        <div>
          {items}
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged,
  plants: state.plants.all
})

const mapDispatchToProps = dispatch=>{
  return{
    fetchPlants: ()=>{
      dispatch(fetchPlants())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stock)
