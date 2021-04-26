/*
 * @Author: yuta
 * @Date: 2021-04-26 10:10:34
 * @LastEditTime: 2021-04-26 10:39:13
 * @LastEditors: yuta
 */
import React from "react";
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import SettingScreen from "../pages/SettingScreen";
import TabScreen from './TabStack'

const Stack = createStackNavigator();

const Screens = {
  tab: { component: TabScreen },
  home: { component: HomeScreen },
  setting: { component: SettingScreen },
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerBackTitle: "",
        };
      }}
    >
      {Object.keys(Screens).map((screen) => {
        return (
          <Stack.Screen
            options={({}) => {
              return {
                headerTitle: "",
                headerShown: Screens[screen].headerShown ?? true,
              };
            }}
            key={screen}
            name={screen}
            component={Screens[screen].component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default MainStack;
