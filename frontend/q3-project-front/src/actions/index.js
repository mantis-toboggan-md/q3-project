import store from '../store'

//change store state isFetching to true when data is being pulled from backend
export const FETCHING = 'FETCHING'
export function fetching(isFetching){
  return({
    type: FETCHING,
    isFetching: isFetching
  })
}

//get all plants from inventory
export const PLANTS_RECEIVED = 'PLANTS_RECEIVED'
export function fetchPlants(){
  return async (dispatch)=>{
    dispatch(fetching(true))
    const response = await fetch('http://localhost:8082/plants')
    const json = await response.json()
    dispatch(fetching(false))
    dispatch({
      type: PLANTS_RECEIVED,
      plants: json
    })
  }
}
