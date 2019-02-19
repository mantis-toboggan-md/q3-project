import React from 'react'
import { connect } from 'react-redux'
import { InputGroup, Input, Button } from 'reactstrap'
import { login } from '../actions/login'

class Login extends React.Component{

  state = {
    username: '',
    password: ''
  }
  componentDidUpdate(){
    const { history } = this.props
    if(this.props.isLogged){
      history.push('/stock')
    }
  }
  handleChange = (e)=>{
    let id = e.target.id
    let value = e.target.value
    this.setState(prevState=>{
      let newState = {...prevState}
      newState[id] = value
      return newState
    })
  }

  submit = ()=>{
    console.log(this.state)
    this.props.login(this.state)
  }

  render(){
    return(
      <div>
        <InputGroup>
          <Input type = 'text' placeholder = 'username' id = 'username' autoComplete = 'off' onChange = {this.handleChange}></Input>
          <Input type = 'password' placeholder = 'password' id = 'password' onChange = {this.handleChange}></Input>
        </InputGroup>
        <Button onClick = {this.submit}>Log In</Button>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  isLogged: state.auth.isLogged
})

const mapDispatchToProps = dispatch=>{
  return {
    login: (user)=>{
      dispatch(login(user))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
