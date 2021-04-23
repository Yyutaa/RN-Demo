/*
 * @Author: yuta
 * @Date: 2021-04-19 11:58:11
 * @LastEditTime: 2021-04-23 14:13:55
 * @LastEditors: yuta
 */
import { atom } from 'recoil'

export const accountState = atom({
  key: 'accountState',
  default: {
    username: '',
    pwd: '',
    isRememberPwd: false,
  },
});

export const localeState = atom({
  key: 'localeState',
  default: '',
})