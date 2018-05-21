/**
*
* RegisterComponent
*
*/

import React from 'react';
import { Link } from 'react-router-dom';

class RegisterComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  onSubmitForm = (evt) => {
    evt.preventDefault();
    this.props
      .onSubmitAuthen(this.state);
  }

  onChangeUsername = (evt) => {
    this.setState({
      username: evt.target.value
    })
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

    return (
      <div className = "auth-page">
        <div className = "container page">
          <div className = "row">

            <div className = "col-md-6 offset-md-3 col-xs-12">
              <h1 className = "text-xs-center">
                Sign up
              </h1>
              <p className = "text-xs-center">
                <Link to="/login" className="dasdas">Have an account?</Link>
              </p>

              {/* {
                isError && (
                  <ul className = "error-messages">
                    <li>That email is already taken</li>
                  </ul>
                )
              } */}

              <form onSubmit = { this.onSubmitForm }>

                <fieldset className = "form-group">
                  <input
                    className = "form-control form-control-lg"
                    type="text"
                    placeholder="Your Name"
                    onChange = { this.onChangeUsername }
                  />
                </fieldset>

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
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegisterComponent.propTypes = {

};

export default RegisterComponent;
