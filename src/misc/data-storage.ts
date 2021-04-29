/*
 * @Author: yuta
 * @Date: 2021-04-25 15:03:22
 * @LastEditTime: 2021-04-29 10:12:39
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
    await AsyncStorage.multiSet([["language", language]]);

    lastLanguage = language;
  },

  async clearCredential() {
    await AsyncStorage.multiRemove(["token", "account"]);
  },

  async hasCredential() {
    return await AsyncStorage.getItem("token");
  },

  async getLanguage() {
    await AsyncStorage.getItem("language").then((language) => {
      lastLanguage = language;
    });

    return lastLanguage;
  },

  async getAccount() {
    const account = await AsyncStorage.getItem("account");
    return account ? JSON.parse(account) : {};
  },
};
