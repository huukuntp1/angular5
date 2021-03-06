import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from '../Home/Home'
import Form from '../container/Form'

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path = '/' component = { Home }/>
          <Route path = '/form' component = { Form }/>
        </Switch>
      </div>
    );
  }
}

export default App;
