/*
 * @Author: yuta
 * @Date: 2021-04-19 11:58:11
 * @LastEditTime: 2021-04-19 16:27:51
 * @LastEditors: yuta
 */
import { atom, selector } from 'recoil'

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

const charCountState = selector({
  key: 'setAccount',
  get: ({get}) => {
    const text = get(accountState);

    return text;
  },
});