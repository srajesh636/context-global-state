import {initialState} from '../constants';
import {INCREMENT_COUNT, DECREMENT_COUNT} from '../types';

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {...state, count: state.count + 1};
    case DECREMENT_COUNT:
      const {count} = state;
      return {...state, count: count > 0 ? count - 1 : count};
  }
};
