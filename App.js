/*
 * @Author: yuta
 * @Date: 2021-04-25 16:51:31
 * @LastEditTime: 2021-04-26 10:58:46
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
import { RecoilRoot } from "recoil";
// import SimpleBugly from "./native/SimpleBugly.js";
import AppNavigation from './src/navigation'


const App = () => {
  // const [, setLocale] = useRecoilState(localeState);

  // React.useEffect(() => {
    // SimpleBugly.testCrash();
    // Init language
    //  setLocale(async () => {
    //    await dataStorage.getLanguage();
    //  })
  // }, []);

  return (
    <RecoilRoot>
      <AppNavigation/>
    </RecoilRoot>
  );
};

export default App;
