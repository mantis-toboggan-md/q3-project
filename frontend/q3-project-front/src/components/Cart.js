import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import {updateQuantity} from '../actions/cart'
import {
  Table
} from 'reactstrap'

class Cart extends React.Component {



  render(){
    let cartItems = this.props.cart.map(item=>{
      return <CartItem key = {item.plant.id} item = {item} updateItem = {this.props.updateItem}/>
    })
    return(
      <div className='shopping-cart'>
        <h4>Your Cart</h4>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
              {cartItems}
          </tbody>
        </Table>
        <div className = 'totals'>

        </div>
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
