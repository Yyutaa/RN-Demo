/*
 * @Author: yuta
 * @Date: 2021-04-25 15:03:22
 * @LastEditTime: 2021-04-25 16:19:38
 * @LastEditors: yuta
 */
import AsyncStorage from "@react-native-community/async-storage";

interface AccountProps {
  username: string;
  pwd: string;
  isRememberPwd: boolean;
}

let lastLanguage: string | null = null;

export default {
  async saveCredential(account: AccountProps, token: string) {
    await AsyncStorage.multiSet([
      ["account", JSON.stringify(account)],
      ["token", token],
    ]);
  },

  async saveLanguage(language: string) {
    await AsyncStorage.multiSet([
      ['language', language],
    ]);

    lastLanguage = language;
  },

  async clearCredential() {
    await AsyncStorage.multiRemove(["token"]);
  },

  async hasCredential() {
    await AsyncStorage.getItem("token");
  },

  async getLanguage() {
    await AsyncStorage.getItem("language").then(language => {
      lastLanguage = language
    })

    return lastLanguage;
  },
  

  async getAccount() {
    await AsyncStorage.getItem("account");
  },
};
