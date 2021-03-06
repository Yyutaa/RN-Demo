/*
 * @Author: yuta
 * @Date: 2021-04-26 10:09:52
 * @LastEditTime: 2021-04-29 10:16:02
 * @LastEditors: yuta
 */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import MainStack from "./MainStack";
import LoginStack from "./LoginStack";
import { useRecoilValue } from "recoil";
import { tokenKey } from "../recoil";

const RootStack = createStackNavigator();

const AppNavigation = () => {
  const hasToken = useRecoilValue(tokenKey);

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={hasToken ? "Home" : "Login"}>
        <RootStack.Screen
          options={({ route }) => {
            return {
              headerShown: false, //若显示会阻挡安卓真机点击
              headerTransparent: true,
              title: "",
              headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            };
          }}
          name="Main"
          component={MainStack}
        />

        <RootStack.Screen
          options={({ route }) => {
            return {
              headerShown: false,
              title: route.name,
              headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            };
          }}
          name="Login"
          component={LoginStack}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
