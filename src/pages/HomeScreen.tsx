/*
 * @Author: yuta
 * @Date: 2021-04-17 14:27:47
 * @LastEditTime: 2021-05-06 18:20:43
 * @LastEditors: yuta
 */
import * as React from "react";
import { Button, Text, View, ViewProps } from "react-native";
import { useRecoilState, useRecoilValue } from "recoil";
import { accountState } from "../recoil";
import SimpleBugly from "../native/SimpleBugly";
import RNTCustomView from "../components/CustomView";
import Locales from "../misc/locales";
import dataStorage from "../misc/data-storage";

function HomeScreen() {
  const account = useRecoilValue(accountState);
  // console.log(JSON.parse(account ?? ""));

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* TODO:文案变量优化 */}
      <Text style={{ marginVertical: 24 }}>
        {Locales.t("Hello %1, welcome to here!", account.username)}
      </Text>
      {/* <Text style={{ marginVertical: 24 }}>
        Hello {account?.username ?? "--"}, welcome to here!
      </Text> */}

      <Button
        title={Locales.t("enable bugly")}
        onPress={() => SimpleBugly?.init()}
      />

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
