import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CounterContext} from '../context';

const CounterCount = () => {
  const {state} = useContext(CounterContext);
  return (
    <View>
      <Text style={styles.text}>{state.count}</Text>
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
