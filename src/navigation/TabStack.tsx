/*
 * @Author: yuta
 * @Date: 2021-04-26 10:25:27
 * @LastEditTime: 2021-04-26 10:36:42
 * @LastEditors: yuta
 */
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/HomeScreen";
import SettingScreen from "../pages/SettingScreen";

const Stack = createBottomTabNavigator();

export const Screens = {
  home: { component: HomeScreen },
  setting: { component: SettingScreen },
};

const TabStack = () => {
  return (
    <Stack.Navigator>
      {Object.keys(Screens).map(screen => {
        return (
          <Stack.Screen 
            key={screen}
            component={Screens[screen].component}
            name={screen}
          />
        );
      })}
    </Stack.Navigator>
  )
};

export default TabStack;
