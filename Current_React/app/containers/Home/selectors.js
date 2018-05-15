import { createSelector } from 'reselect';

const selectHomeDomain = (state) => state.get('home');

const makeSelectHome = () => createSelector(
  selectHomeDomain,
  (substate) => substate.toJS()
);

const makeGetArticles = () => createSelector(
  selectHomeDomain,
  (homeState) => homeState.get('articles')
);

export {
  makeSelectHome,
  makeGetArticles
};

export {
  selectHomeDomain,
};
