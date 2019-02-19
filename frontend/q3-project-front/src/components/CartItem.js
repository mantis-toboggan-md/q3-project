import React from 'react'
import {connect} from 'react-redux'
import { Button, InputGroup, Input} from 'reactstrap'

class CartItem extends React.Component{
  state = {
    quantity: 0
  }
  handleChange = (e)=>{
    this.setState({quantity: e.target.value})
  }
  update = ()=>{
    this.props.updateItem(this.props.item.plant, this.state.quantity)
  }
  render(){
    return(
      <tr>
        <td>{this.props.item.plant.name}</td>
        <td>
          ${this.props.item.plant.price} <span className="text-muted">(x{this.props.item.quantity})</span>
          <InputGroup>
            <Input  onChange = {this.handleChange} value = {this.state.quantity}/>
          </InputGroup>
        <Button outline color="warning" onClick = {this.update} size = 'sm'>Update</Button>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
})

// const mapDispatchToProps = dispatch =>{
//   return {
//     updateItem: (plant, quantity)=>{
//       dispatch(updateQuantity(plant,quantity))
//     }
//   }
// }

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(CartItem)
