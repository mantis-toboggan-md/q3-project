import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import Stock from './components/Stock'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Main}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path = '/stock' component = {Stock}/>
      </div>
    );
  }
}

export default App;
