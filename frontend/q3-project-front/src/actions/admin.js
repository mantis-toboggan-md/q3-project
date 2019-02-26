import store from '../store'

export const LOGIN = 'LOGIN'
export const login = (user)=>{
  let userData = JSON.stringify(user)
  return async (dispatch)=>{
    dispatch(fetching(true))
    const response = await fetch(`${process.env.REACT_APP_HEROKU_URL}/login`,
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
      let token = await response.text()
      localStorage.setItem('token', token)
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
  const token = localStorage.getItem('token')
  return async (dispatch)=>{
    let data = await JSON.stringify(plant)
    const response = await fetch(`${process.env.REACT_APP_HEROKU_URL}/plants/${plant.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'authorization': token
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

export const DELETE_PLANT = 'DELETE_PLANT'
export function deletePlant(plant){
  const token = localStorage.getItem('token')
  return async (dispatch)=>{
    const response = await fetch(`${process.env.REACT_APP_HEROKU_URL}/plants/${plant.id}`, {
      method: 'DELETE',
      headers: {
        'authorization': token
      }
    })
    if(response.status == 200){
      dispatch({
        type: DELETE_PLANT,
        didDelete: true
      })
    } else {
      let errmsg = await response.text()
      alert(errmsg)
      dispatch({
        type: DELETE_PLANT,
        didDelete: false
      })
    }
  }
}
