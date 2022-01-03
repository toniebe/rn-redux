import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TransaksiScreen from './src/screen/TransaksiScreen';
import {Provider} from 'react-redux';
import storeState from './src/redux/store';
import TopNavigator from './src/navigators/TopNavigator';

const App = () => {
  return (
    <Provider store={storeState}>
      <TopNavigator />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
