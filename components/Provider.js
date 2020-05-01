import React, {useMemo, useReducer} from 'react';
import {initialState} from '../constants';
import {CounterContext} from '../context';
import {counterReducer} from '../reducers/index';

const Provider = ({children}) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const value = useMemo(() => {
    return {state, dispatch};
  }, [state, dispatch]);

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default Provider;
