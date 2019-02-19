import { combineReducers } from 'redux'
import { PLANTS_RECEIVED, FETCHING, FILTER_BY} from '../actions'
import { ADD_TO_CART, UPDATE_QUANTITY } from '../actions/cart'



function plants(state = {all: [], isFetching: false, filtered: []}, action){
  switch (action.type){
    case PLANTS_RECEIVED:
      return {
        ...state,
        all: action.plants,
        filtered: action.plants
      }
    case FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case FILTER_BY:
      return{
        ...state,
        filtered: action.plants
      }
    default:
      return state
  }
}

function cart(state = {cart: []}, action){
  switch(action.type){
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.cart
      }
    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: action.cart
      }
    default:
      return state
  }
}


export default combineReducers({
  plants,
  cart
})
