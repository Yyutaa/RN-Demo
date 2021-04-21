/*
 * @Author: yuta
 * @Date: 2021-04-17 13:58:49
 * @LastEditTime: 2021-04-21 18:46:03
 * @LastEditors: yuta
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/pages/HomeScreen';
import SettingScreen from './src/pages/SettingScreen';
import LoginScreen from './src/pages/LoginScreen';
import SimpleBugly from './src/native/SimpleBugly';

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  React.useEffect(() => {
    SimpleBugly.testCrash();
  }, []);

  return (
    <RecoilRoot>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Login">
          <RootStack.Screen
            name="Login"
            // options={{headerTitle: ''}}
            options={{
              headerShown: false,
            }}
            component={LoginScreen}
          />

          <RootStack.Screen
            options={{
              headerShown: false,
            }}
            name="Main"
            component={MainScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
