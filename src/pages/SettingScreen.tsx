/*
 * @Author: yuta
 * @Date: 2021-04-17 14:28:38
 * @LastEditTime: 2021-05-06 18:35:59
 * @LastEditors: yuta
 */
import * as React from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { accountState, localeState } from "../recoil";
import Locales from "../misc/locales";
import dataStorage from "../misc/data-storage";

function SettingsScreen({ navigation }) {
  const [isVisible, setVisible] = React.useState(false);
  const account = useRecoilValue(accountState);

  const onLogOut = async () => {
    if (!account?.isRememberPwd) {
      await dataStorage.clearCredential();
    }
    navigation.navigate("Login");
  };

  const [, setLocale] = useRecoilState(localeState);

  const onChangeLang = async (lang: string) => {
    await dataStorage.saveLanguage(lang);
    setLocale(lang);
  };

  const supportLanguage = ["zh_CN", "en_US"];

  return (
    <View
      style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}
    >
      <Button
        title={Locales.t("Set language")}
        onPress={() => setVisible(true)}
      />

      <Button title={Locales.t("Logout")} onPress={onLogOut} />

      <Modal
        isVisible={isVisible}
        animationIn="bounceInUp"
        animationInTiming={500}
        animationOut="bounceOutDown"
        style={{
          margin: 0,
          position: "relative",
        }}
        hasBackdrop
        onBackdropPress={() => setVisible(false)}
        onModalShow={() => setVisible(true)}
        onModalHide={() => setVisible(false)}
      >
        <View
          style={{
            width: "100%",
            height: "10%",
            position: "absolute",
            backgroundColor: "white",
            bottom: 12,
          }}
        >
          {supportLanguage?.map((lang, index) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => onChangeLang(lang)}
                  style={{
                    width: "100%",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text>{Locales.t(lang)}</Text>
                </TouchableOpacity>

                {index < supportLanguage.length - 1 &&
                  <View style={{height: 0.5, borderBottomColor: '#ededed', borderWidth: 1}} />
                }
              </>
            );
          })}
        </View>
      </Modal>
    </View>
  );
}

export default SettingsScreen;
