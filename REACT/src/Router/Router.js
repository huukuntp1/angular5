import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from '../Home/Home'
import Form from '../Form/Index'
import login from '../Login/Login'
import register from '../Register/Register'

class App extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/form' component={Form}/>
          <Route path='/login' component={login}/>
          <Route path='/register' component={register}/>
      </Switch>
      </div>
    );
  }
}

export default App;
