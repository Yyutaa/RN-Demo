/*
 * @Author: yuta
 * @Date: 2021-04-19 15:57:44
 * @LastEditTime: 2021-05-06 18:20:10
 * @LastEditors: yuta
 */
import _ from "lodash";
import * as RNLocalize from "react-native-localize";
import { useRecoilValue } from "recoil";
import { localeState } from "../recoil";

//TODO:文案定义封装 ,思考拆分模块
const Locales = new Map();
Locales.set("logout", { en_US: "Logout", zh_CN: "退出登录" });
Locales.set("setting", { en_US: "Setting", zh_CN: "设置" });
Locales.set("home", { en_US: "Home", zh_CN: "主页" });
Locales.set("set language", { en_US: "Set language", zh_CN: "设置语言" });
Locales.set("zh_cn", { en_US: "Chinese", zh_CN: "中文" });
Locales.set("en_us", { en_US: "English", zh_CN: "英文" });
Locales.set("username", { en_US: "Username", zh_CN: "用户名" });
Locales.set("login", { en_US: "Login", zh_CN: "登录" });
Locales.set("password", { en_US: "Password", zh_CN: "密码" });
Locales.set("enable bugly", { en_US: "Enable Bugly", zh_CN: "启用Bugly" });
Locales.set("hello %1, welcome to here!", {
  en_US: "Hello %1, welcome to here!",
  zh_CN: "你好 %1，欢迎来到这里！",
});

type linnerMapperProps = {
  lineMapper: string;
  params1?: string
}

export default {
  getCurrentLanguage() {
    let language = useRecoilValue(localeState);

    if (!language) {
      const firstLocale = RNLocalize.getLocales()[0]?.languageTag; // 用户系统偏好语言
      switch (firstLocale) {
        case "zh-CN":
          language = "zh_CN";
          break;
        default:
          language = firstLocale.replace("-", "_");
          break;
      }
    }

    return language || "en_US";
  },
  //TODO:思考key代码提示
  t(lineMapper: string, params1?: string) {
    if (_.isArray(lineMapper)) {
      return lineMapper.map((line: string) => this.t(line, params1));
    } else if (_.isString(lineMapper)) {
      const language = this.getCurrentLanguage();

      const allTranslations = Locales.get(lineMapper.toLowerCase()); // 转换成全小写也行，更方便记录
      const translated = allTranslations && allTranslations[language];
      if (translated) {
        return translated.replace("%1", params1);
      } else {
        return lineMapper;
      }
    } else {
      return "Unknown Error";
    }
  },
};
