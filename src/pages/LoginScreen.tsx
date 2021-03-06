/*
 * @Author: yuta
 * @Date: 2021-04-17 14:54:42
 * @LastEditTime: 2021-04-29 10:17:24
 * @LastEditors: yuta
 */
import React, { useRef } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { default as ReactNativeCheckBox } from "react-native-check-box";
import { useRecoilState } from "recoil";
import { accountState } from "../recoil";
import Locales from "../misc/locales";
import dataStorage from "../misc/data-storage";

const LoginScreen: React.FC = ({ navigation }) => {
  const [account, setAccount] = useRecoilState(accountState);
  const inputPhoneRef = useRef<TextInput>(null);
  const inputPasswordRef = useRef<HTMLElement | null>(null);

  const _onLogin = async () => {
    await dataStorage.saveCredential(account, "123456");
    navigation.navigate("Main");
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1, justifyContent: "center" }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextInput
          ref={inputPhoneRef}
          style={styles.input}
          keyboardType={"phone-pad"}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={"Please enter mobile number"}
          maxLength={30}
          multiline={false}
          returnKeyType="next"
          clearButtonMode="while-editing"
          value={account?.username}
          onChangeText={(text) => setAccount({ ...account, username: text })}
          onSubmitEditing={(event) => {
            inputPasswordRef?.current?.focus();
          }}
        />

        <TextInput
          ref={inputPasswordRef}
          style={styles.input}
          keyboardType="default"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={"Please enter your password"}
          maxLength={32}
          multiline={false}
          returnKeyType="next"
          clearButtonMode="while-editing"
          value={account?.pwd}
          onChangeText={(text) => setAccount({ ...account, pwd: text })}
        />
      </View>

      <View
        style={{
          marginVertical: 16.5,
          paddingLeft: "5%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ReactNativeCheckBox
          rightTextView={
            <Text style={{ marginLeft: 5, fontSize: 12 }}>????????????</Text>
          }
          // checkedImage={}
          isChecked={account.isRememberPwd}
          onClick={() =>
            setAccount({
              ...account,
              isRememberPwd: !account.isRememberPwd,
            })
          }
        />
      </View>

      <View
        style={{ width: "60%", justifyContent: "center", alignSelf: "center" }}
      >
        <Button
          disabled={!account.username || !account.pwd}
          title={Locales.t("login")}
          onPress={() => _onLogin()}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 60,
    marginVertical: 8,
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 2.5,
    borderColor: "#E3E3E3",
    backgroundColor: "#F7F7F7",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 14,
  },
});

export default LoginScreen;
