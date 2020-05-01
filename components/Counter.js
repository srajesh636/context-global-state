import React, {useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {CounterContext} from '../context';
import {DECREMENT_COUNT, INCREMENT_COUNT} from '../types';

const Counter = () => {
  const {dispatch} = useContext(CounterContext);

  const incrementCount = () => dispatch({type: INCREMENT_COUNT});

  const decrementCount = () => dispatch({type: DECREMENT_COUNT});

  return (
    <View style={styles.buttonContainer}>
      <Button title="+" onPress={incrementCount} />
      <Button title="-" onPress={decrementCount} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    paddingVertical: 10,
  },
});
