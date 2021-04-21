/*
 * @Author: yuta
 * @Date: 2021-04-21 11:35:15
 * @LastEditTime: 2021-04-21 17:55:10
 * @LastEditors: yuta
 */
import {NativeModules} from 'react-native';

const RNSimpleBugly = NativeModules.SimpleBugly;

export default class SimpleBugly {
  static Appid = '2d3b0d102b';

  static init = async () => {
    try {
      await RNSimpleBugly?.init(this.Appid);
      console.log('【Bugly】init success! ');
    } catch (e) {
      console.log('【Bugly】init fail:', e);
    }
  };

  static testCrash = () => {
    // RNSimpleBugly?.testCrash();
    console.log('【Test Crash!】');
  };
}
