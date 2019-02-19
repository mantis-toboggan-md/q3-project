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
    console.log(response)
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
