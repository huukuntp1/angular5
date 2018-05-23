import { createSelector } from 'reselect';

/**
 * Direct selector to the settingProfile state domain
 */
const selectSettingProfileDomain = (state) => state.get('settingProfile');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SettingProfile
 */

const makeSelectSettingProfile = () => createSelector(
  selectSettingProfileDomain,
  (substate) => substate.toJS()
);

export default makeSelectSettingProfile;
export {
  selectSettingProfileDomain,
};
