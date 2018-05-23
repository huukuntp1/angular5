
import { fromJS } from 'immutable';
import settingProfileReducer from '../reducer';

describe('settingProfileReducer', () => {
  it('returns the initial state', () => {
    expect(settingProfileReducer(undefined, {})).toEqual(fromJS({}));
  });
});
