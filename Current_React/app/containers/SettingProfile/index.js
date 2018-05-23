/**
 *
 * SettingProfile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSettingProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import SettingComponent from 'components/SettingComponent';

import {
  getUserLocalStorage
} from '../../utils/mainFunction';

import {
  UPDATE_USER_SETTING
} from './constants'

const currentUser = getUserLocalStorage();

export class SettingProfile extends React.Component {
  settingProfile = (data) => {
    this.props.handleSettingProfile(data)
  }

  render() {
    return (
      <SettingComponent
        currentUser = { currentUser }
        settingProfile = { this.settingProfile }
      />
    );
  }
}

SettingProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  settingprofile: makeSelectSettingProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSettingProfile (user) {
      dispatch({
        type: UPDATE_USER_SETTING,
        payload: {
          user
        }
      })
    },
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'settingProfile', reducer });
const withSaga = injectSaga({ key: 'settingProfile', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SettingProfile);
