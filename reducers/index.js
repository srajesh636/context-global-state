import {counterReducer} from './counter';
import {initialState} from '../constants';

export const rootReducer = (state = initialState, action) => ({
  counter: counterReducer(state.counter, action),
});
