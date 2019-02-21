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

export const FILTER_BY = 'FILTER_BY'
export function filterPlants(filters){
  let filteredPlants = store.getState().plants.all
  let plantProps = Object.keys(filters)
  for(let i = 0; i < plantProps.length; i++){
    filteredPlants = filteredPlants.filter(plant=>{
      return plant[plantProps[i]] == filters[plantProps[i]]
    })
  }
  return({
    type: FILTER_BY,
    plants: filteredPlants
  })
}

export const FILTER_NAME = 'FILTER_NAME'
export function filterNames(string){
  const regexp = new RegExp(`(${string})`, 'i')
  const filteredPlants = string.length ? store.getState().plants.filtered.filter((plant)=>{
    return plant.name.search(regexp) != -1
  }) : store.getState().plants.filtered
  return ({
    type: FILTER_NAME,
    filteredPlants: filteredPlants,
    filterString: string
  })
}
