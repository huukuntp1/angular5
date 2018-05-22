/**
*
* LoginComponent
*
*/

import React from 'react';
import {
  Link,
  Redirect
} from 'react-router-dom';

import {
  getUserLocalStorage
} from '../../utils/mainFunction';

class LoginComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmitForm = (evt) => {
    evt.preventDefault();
    this.props
      .onSubmitAuthen(this.state);
  }

  onChangeEmail = (evt) => {
    this.setState({
      email: evt.target.value
    })
  }

  onChangePassword = (evt) => {
    this.setState({
      password: evt.target.value
    })
  }

  render() {
    const {
      msgError
    } = this.props
    const isCurrentUser = getUserLocalStorage();

    if( isCurrentUser ) return (
      <Redirect to='/' />
    )

    return (
      <div className = "auth-page">
        <div className = "container page">
          <div className = "row">
            <div className = "col-md-6 offset-md-3 col-xs-12">
              <h1 className = "text-xs-center">Sign in</h1>
              <p className = "text-xs-center">
                <Link to="/register" className="dasdas">Need an account?</Link>
              </p>

              {
                msgError && (
                  <ul className="error-messages">
                    <li>{msgError}</li>
                  </ul>
                )
              }

              <form onSubmit = { this.onSubmitForm }>
                <fieldset className = "form-group">
                  <input
                    className = "form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    onChange = { this.onChangeEmail }
                  />
                </fieldset>
                <fieldset className = "form-group">
                  <input
                    className = "form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    onChange = { this.onChangePassword }
                  />
                </fieldset>
                <button className = "btn btn-lg btn-primary pull-xs-right">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginComponent.propTypes = {

};

export default LoginComponent;
