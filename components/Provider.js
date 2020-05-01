import React, {useMemo, useReducer} from 'react';
import {initialState} from '../constants';
import {CounterContext} from '../context';
import {rootReducer} from '../reducers/';

const Provider = ({children}) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const value = useMemo(() => {
    return {state, dispatch};
  }, [state, dispatch]);

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default Provider;
