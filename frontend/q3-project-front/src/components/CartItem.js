import React from 'react'
import {connect} from 'react-redux'
import { Button, InputGroup, Input, Row, Col} from 'reactstrap'

class CartItem extends React.Component{
  state = {
    quantity: this.props.item.quantity
  }
  handleChange = (e)=>{
    this.setState({quantity: e.target.value})
  }
  update = ()=>{
    if(this.props.item.plant.stock >= this.state.quantity){
      this.props.updateItem(this.props.item.plant, this.state.quantity)
      this.setState({error: ''})
    } else {
      this.setState({error: `Only ${this.props.item.plant.stock} in stock`})
    }
  }
  render(){
    let errmsg = this.state.error ? <span className = 'cart-error'>{this.state.error}</span> : ''
    return(
      <tr>
        <td>{this.props.item.plant.name}</td>
        <td>
          ${(this.props.item.quantity * this.props.item.plant.price).toFixed(2)}<br/>
        <span className = 'muted'>(${this.props.item.plant.price})</span>
        </td>
        <td>
          <Col id = 'update-col'>
            <Input className = 'update-quantity' onChange = {this.handleChange} value = {this.state.quantity}/>
            <Button outline color="info" onClick = {this.update} size = 'sm'>Update</Button>
            {errmsg}
          </Col>
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
