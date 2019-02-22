import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import {updateQuantity} from '../actions/cart'
import { Link } from 'react-router-dom'
import {
  Table,
  Button
} from 'reactstrap'

class Cart extends React.Component {



  render(){
    let cartItems = this.props.cart.map(item=>{
      return <CartItem key = {item.plant.id} item = {item} updateItem = {this.props.updateItem}/>
    })
    let total = this.props.cart.reduce((total, item)=>{
      return total += item.plant.price * item.quantity
    }, 0)
    return(
      <div className='shopping-cart'>
        <h4>Your Cart</h4>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
              {cartItems}
          </tbody>
        </Table>
        <div className = 'totals'>
          subtotal: ${total}
        </div>
        <Link to = '/checkout'>Checkout</Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
})

const mapDispatchToProps = dispatch =>{
  return {
    updateItem: (plant, quantity)=>{
      dispatch(updateQuantity(plant,quantity))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
