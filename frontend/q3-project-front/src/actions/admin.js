import store from '../store'

export const LOGIN = 'LOGIN'
export const login = (user)=>{
  let userData = JSON.stringify(user)
  return async (dispatch)=>{
    dispatch(fetching(true))
    const response = await fetch('http://localhost:8082/login',
    {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: userData
    })
    dispatch(fetching(false))
    if(response.status == 200){
      dispatch({
        type: LOGIN,
        isLogged: true
      })
    } else {
      let errmsg = await response.text()
      alert(errmsg)
      dispatch({
        type: LOGIN,
        isLogged: false
      })
    }
  }
}

export const FETCHING = 'FETCHING'
export function fetching(isFetching){
  return({
    type: FETCHING,
    isFetching: isFetching
  })
}

export const UPDATE_PLANT = 'UPDATE_PLANT'
export function updatePlant(plant){
  return async (dispatch)=>{
    let data = await JSON.stringify(plant)
    const response = await fetch(`http://localhost:8082/plants/${plant.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: data
    })
    if(response.status == 200){
      dispatch({
        type: UPDATE_PLANT,
        didUpdate: true
      })
    } else{
      let errmsg = await response.text()
      alert(errmsg)
      dispatch({
        type:UPDATE_PLANT,
        didUpdate: false
      })
    }
  }
}
