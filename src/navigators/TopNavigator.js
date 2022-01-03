import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TransaksiScreen from '../screen/TransaksiScreen';
import {NavigationContainer} from '@react-navigation/native';
import PenarikanScreen from '../screen/PenarikanScreen';

const Tab = createMaterialTopTabNavigator();

const TopNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Transaksi" component={TransaksiScreen} />
        <Tab.Screen name="Penarikan" component={PenarikanScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopNavigator;
