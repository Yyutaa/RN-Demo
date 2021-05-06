/*
 * @Author: yuta
 * @Date: 2021-04-26 10:46:29
 * @LastEditTime: 2021-05-06 18:44:27
 * @LastEditors: yuta
 */
import React from "react";
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import LoginScreen from "../pages/LoginScreen";

const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({}) => ({
        headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTransparent: true,
        headerTitle: "",
        headerBackTitleVisible: false,
        headerBackTitle: "",
      })}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
