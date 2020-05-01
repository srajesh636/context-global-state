import React, {useMemo, useReducer} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {Counter, CounterCount} from './components';

import {initialState} from './constants';
import {CounterContext} from './context';
import {counterReducer} from './reducers';

const App = () => {
  const {Provider} = CounterContext;

  const [state, dispatch] = useReducer(counterReducer, initialState);

  const value = useMemo(() => {
    return {state, dispatch};
  }, [state, dispatch]);

  return (
    <Provider value={value}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>useContext() + useReducer() = 😎</Text>
          <Counter />
          <CounterCount />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    fontSize: 24,
    paddingVertical: 10,
    color: 'red',
  },
});
