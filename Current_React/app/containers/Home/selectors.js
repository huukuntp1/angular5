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

const makeSelectGetFaild = () => createSelector(
  selectHomeDomain,
  (homeState) => homeState.get('errors')
);

const makeSelectParamsArticles = () => createSelector(
  selectHomeDomain,
  (homeState) => homeState.get('defaultParamsArticles')
);

const makeSelectCurrentPage = () => createSelector(
  selectHomeDomain,
  (homeState) => homeState.get('currentPage')
);

export {
  makeSelectHome,
  makeSelectGetArticles,
  makeSelectGetArticlesCount,
  makeSelectGetTags,
  makeSelectGetFaild,
  makeSelectParamsArticles,
  makeSelectCurrentPage
};

export {
  selectHomeDomain,
};
