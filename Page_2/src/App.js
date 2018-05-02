import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './component/Home';
import About from './component/About';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import NoMatch from './component/Nomatch';

import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>test</p>
        <ul className='nav-link'>
          <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
          <OldSchoolMenuLink activeOnlyWhenExact={false} to="/about" label="About" />
          <OldSchoolMenuLink activeOnlyWhenExact={false} to="/login" label="Login" />
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <li className={match ? "active" : ""}>
        <Link to={to}>{label}</Link>
      </li>
    )}
  />
);

const mapStateToProps = (state) => {
  console.log(state);
  return {
    
  }
}

export default connect(mapStateToProps, null)(App);
