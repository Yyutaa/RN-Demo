/*
 * @Author: yuta
 * @Date: 2021-04-19 11:58:11
 * @LastEditTime: 2021-04-29 10:23:56
 * @LastEditors: yuta
 */
import { atom } from "recoil";
import dataStorage from "../src/misc/data-storage";
import _ from "lodash";

export const accountState = atom({
  key: "accountState",
  default: dataStorage.getAccount(),
});

export const localeState = atom({
  key: "localeState",
  default: dataStorage.getLanguage(),
});

export const tokenKey = atom({
  key: "tokenKey",
  default: dataStorage.hasCredential(),
});
