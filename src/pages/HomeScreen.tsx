/*
 * @Author: yuta
 * @Date: 2021-04-17 14:27:47
 * @LastEditTime: 2021-04-21 18:37:36
 * @LastEditors: yuta
 */
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import { useRecoilState, useRecoilValue } from 'recoil'
import { accountState } from '../recoil';
import SimpleBugly from '../native/SimpleBugly';

function HomeScreen() {
  const account = useRecoilValue(accountState);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>你好{account.username}, 欢迎来到这里</Text>
      <Button
        title="启用Bugly"
        onPress={() => SimpleBugly.init()}
      />
    </View>
  );
}

export default HomeScreen;
