import { createSelector } from 'reselect';

/**
 * Direct selector to the user state domain
 */
const selectUserDomain = (state) => state.get('user');

/**
 * Other specific selectors
 */


/**
 * Default selector used by User
 */

const makeSelectUser = () => createSelector(
  selectUserDomain,
  (substate) => substate.toJS()
);

const makeSelectUserLogged = () => createSelector(
  selectUserDomain,
  (substate) => substate.get('info_current_user')
);

const makeSelectMsgError = () => createSelector(
  selectUserDomain,
  (substate) => substate.get('msg_error')
);

export default makeSelectUser;
export {
  selectUserDomain,
  makeSelectUserLogged,
  makeSelectMsgError
};
