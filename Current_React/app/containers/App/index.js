/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import HomePage from 'containers/Home';
import User from 'containers/User';
import Header from './Header';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from 'components/UserComponents/Login';
import Register from 'components/UserComponents/Register';
import {
  getUserLocalStorage
} from '../../utils/mainFunction';

const loginHoc = User(Login)
const registerHoc = User(Register)

export default function App() {
  const currentUser = getUserLocalStorage();

  return (
    <div>
      <Header currentUser = { currentUser } />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={loginHoc} />
        <Route path="/register" component={registerHoc} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
