import store from '../store'

export const ADD_TO_CART = 'ADD_TO_CART'
export function addToCart(plant, quantity){
  let oldCart = store.getState().cart.cart
  let newCart = [...oldCart, {plant: plant, quantity: quantity}]
  return({
    type: ADD_TO_CART,
    cart: newCart
  })
}

export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
export function updateQuantity(plant, quantity){
  let oldCart = store.getState().cart.cart
  if(quantity == 0 ){
    var newCart = oldCart.filter((item)=>{
      return item.plant.name !== plant.name
    })
  } else {
    var newCart = oldCart.map((item)=>{
      if(item.plant.name === plant.name){
        return {
          plant: plant,
          quantity: quantity
        }
      } else {
        return item
      }
    })
  }
  return({
    type: UPDATE_QUANTITY,
    cart: newCart
  })
}
