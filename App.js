import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Counter, CounterCount, Provider} from './components';

const App = () => {
  return (
    <Provider>
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
