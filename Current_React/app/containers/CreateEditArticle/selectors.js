import { createSelector } from 'reselect';

/**
 * Direct selector to the createEditArticle state domain
 */
const selectCreateEditArticleDomain = (state) => state.get('createEditArticle');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CreateEditArticle
 */

const makeSelectCreateEditArticle = () => createSelector(
  selectCreateEditArticleDomain,
  (substate) => substate.toJS()
);

export default makeSelectCreateEditArticle;
export {
  selectCreateEditArticleDomain,
};
