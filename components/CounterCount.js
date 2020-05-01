import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CounterContext} from '../context';

const CounterCount = () => {
  const {state} = useContext(CounterContext);
  const {counter} = state;
  return (
    <View>
      <Text style={styles.text}>{counter.count}</Text>
    </View>
  );
};

export default CounterCount;

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    paddingHorizontal: 20,
  },
});
