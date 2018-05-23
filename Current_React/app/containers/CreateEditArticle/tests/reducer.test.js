
import { fromJS } from 'immutable';
import createEditArticleReducer from '../reducer';

describe('createEditArticleReducer', () => {
  it('returns the initial state', () => {
    expect(createEditArticleReducer(undefined, {})).toEqual(fromJS({}));
  });
});
