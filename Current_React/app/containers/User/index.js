/**
 *
 * User
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
import makeSelectUser from './selectors';
import reducer from './reducer';
import saga from './saga';

import {
  ON_SUBMIT_AUTHEN
} from './constants';

// export class User extends React.Component { // eslint-disable-line react/prefer-stateless-function
//   render() {
//     return (
//       <div>
//       </div>
//     );
//   }
// }

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmitAuthen: (user) => {
      dispatch({
        type: ON_SUBMIT_AUTHEN,
        payload: {
          user
        }
      })
    },
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'user', reducer });
const withSaga = injectSaga({ key: 'user', saga });

const User = (wrapComponent) => {
  return compose(
    withReducer,
    withSaga,
    withConnect,
  )(wrapComponent);
}
export default User;
