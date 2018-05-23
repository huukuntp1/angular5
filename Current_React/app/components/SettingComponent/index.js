/**
*
* SettingComponent
*
*/

import React from 'react';

class SettingComponent extends React.Component {
  constructor (props) {
    super(props)
    const {
      currentUser: { email, bio, image, username }
    } = props
    this.state = {
      email,
      bio,
      image,
      username,
      password: ''
    }
  }

  onChangeImage = (evt) => {
    this.setState({ image: evt.target.value})
  }

  onChangeUsername = (evt) => {
    this.setState({ username: evt.target.value})
  }

  onChangeBio = (evt) => {
    this.setState({ bio: evt.target.value})
  }

  onChangeEmail = (evt) => {
    this.setState({ email: evt.target.value})
  }

  onChangePassword = (evt) => {
    this.setState({ password: evt.target.value})
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.settingProfile(this.state)
  }

  render() {
    const {
      email,
      bio,
      image,
      username
    } = this.state
    return (
      <div className = "settings-page">
        <div className = "container page">
          <div className = "row">

            <div className = "col-md-6 offset-md-3 col-xs-12">
              <h1 className = "text-xs-center">Your Settings</h1>

              <form onSubmit = { this.handleSubmit }>
                <fieldset>
                    <fieldset className = "form-group">
                      <input
                        className = "form-control"
                        type="text"
                        placeholder="URL of profile picture"
                        value = { image }
                        onChange = { this.onChangeImage }
                      />
                    </fieldset>
                    <fieldset className = "form-group">
                      <input
                        className = "form-control form-control-lg"
                        type="text"
                        placeholder="Your Name"
                        onChange = { this.onChangeUsername }
                        value = { username }
                      />
                    </fieldset>
                    <fieldset className = "form-group">
                      <textarea
                        className = "form-control form-control-lg"
                        rows="8"
                        placeholder="Short bio about you"
                        onChange = { this.onChangeBio }
                        value = { bio }
                      ></textarea>
                    </fieldset>
                    <fieldset className = "form-group">
                      <input
                        className = "form-control form-control-lg"
                        type="text"
                        placeholder="Email"
                        onChange = { this.onChangeEmail }
                        value = { email }
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
                    <button
                      className = "btn btn-lg btn-primary pull-xs-right"
                      type = "submit"
                    >
                      Update Settings
                    </button>
                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

SettingComponent.propTypes = {

};

export default SettingComponent;
