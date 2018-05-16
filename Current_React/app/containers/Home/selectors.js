import { createSelector } from 'reselect';

const selectHomeDomain = (state) => state.get('home');

const makeSelectHome = () => createSelector(
  selectHomeDomain,
  (substate) => substate.toJS()
);

const makeSelectGetArticles = () => createSelector(
  selectHomeDomain,
  (homeState) => homeState.get('articles')
);

const makeSelectGetArticlesCount = () => createSelector(
  selectHomeDomain,
  (homeState) => homeState.get('articlesCount')
);

const makeSelectGetTags = () => createSelector(
  selectHomeDomain,
  (homeState) => homeState.get('tags')
);

export {
  makeSelectHome,
  makeSelectGetArticles,
  makeSelectGetArticlesCount,
  makeSelectGetTags
};

export {
  selectHomeDomain,
};
