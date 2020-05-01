import {createContext} from 'react';
import {initialState} from '../constants';

export const CounterContext = createContext(initialState);
