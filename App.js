/*
 * @Author: yuta
 * @Date: 2021-04-25 16:51:31
 * @LastEditTime: 2021-04-25 18:06:16
 * @LastEditors: yuta
 */
/*
 * @Author: yuta
 * @Date: 2021-04-17 13:58:49
 * @LastEditTime: 2021-04-25 16:45:06
 * @LastEditors: yuta
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from "react";
import "react-native-gesture-handler";
import { RecoilRoot, useRecoilState } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/pages/HomeScreen";
import SettingScreen from "./src/pages/SettingScreen";
import LoginScreen from "./src/pages/LoginScreen";
// import SimpleBugly from "./native/SimpleBugly.js";
import dataStorage from "./src/misc/data-storage";
import { localeState } from "./src/recoil";
//TODO:路由拆分
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
  // const [, setLocale] = useRecoilState(localeState);

  React.useEffect(() => {
    // SimpleBugly.testCrash();
    // Init language
    //  setLocale(async () => {
    //    await dataStorage.getLanguage();
    //  })
  }, []);

  return (
    <RecoilRoot>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName={dataStorage.hasCredential() ? "Main" : "Login"}
        >
          <RootStack.Screen
            name="Login"
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
