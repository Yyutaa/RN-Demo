/*
 * @Author: yuta
 * @Date: 2021-04-17 14:27:47
 * @LastEditTime: 2021-04-23 11:50:55
 * @LastEditors: yuta
 */
import * as React from "react";
import { Button, Text, View, ViewProps } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { accountState } from "../recoil";
import SimpleBugly from "../native/SimpleBugly";
import RNTCustomView from "../components/CustomView";

function HomeScreen() {
  const account = useRecoilValue(accountState);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginVertical: 24 }}>
        你好{account.username}, 欢迎来到这里
      </Text>

      <Button title="启用Bugly" onPress={() => SimpleBugly.init()} />

      <RNTCustomView
        style={{
          width: 100,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 24,
        }}
        onClick={(dataFromIOS: string) => {
          alert("RN端接收到IOS原生端发送的事件：" + dataFromIOS);
        }}
      />
    </View>
  );
}

export default HomeScreen;
