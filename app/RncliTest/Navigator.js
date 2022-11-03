import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HelloWorld from './HelloWorld';
import Scan from './Scan';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HelloWorld" component={HelloWorld} />
      <Tab.Screen name="Scan" component={Scan} />
    </Tab.Navigator>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
